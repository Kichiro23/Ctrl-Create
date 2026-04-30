import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Currency = "PHP" | "USD";

const EXCHANGE_RATE = 58;

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (phpAmount: number, usdAmount?: number) => string;
  formatPriceFull: (phpAmount: number, usdAmount?: number) => { primary: string; secondary: string };
  isPH: boolean;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>(() => {
    const stored = localStorage.getItem("currency") as Currency | null;
    if (stored === "USD" || stored === "PHP") return stored;
    return "PHP"; // Default to PHP for PH economy focus
  });

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    localStorage.setItem("currency", c);
  };

  const formatPrice = (phpAmount: number, usdAmount?: number) => {
    if (currency === "PHP") {
      return `₱${phpAmount.toLocaleString("en-PH")}`;
    }
    const usd = usdAmount ?? Math.round(phpAmount / EXCHANGE_RATE);
    return `$${usd.toLocaleString("en-US")}`;
  };

  const formatPriceFull = (phpAmount: number, usdAmount?: number) => {
    const usd = usdAmount ?? Math.round(phpAmount / EXCHANGE_RATE);
    if (currency === "PHP") {
      return {
        primary: `₱${phpAmount.toLocaleString("en-PH")}`,
        secondary: `$${usd.toLocaleString("en-US")} USD`,
      };
    }
    return {
      primary: `$${usd.toLocaleString("en-US")}`,
      secondary: `₱${phpAmount.toLocaleString("en-PH")} PHP`,
    };
  };

  useEffect(() => {
    if (!localStorage.getItem("currency")) {
      setCurrencyState("PHP");
    }
  }, []);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, formatPriceFull, isPH: currency === "PHP" }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used within CurrencyProvider");
  return ctx;
}

export { EXCHANGE_RATE };
