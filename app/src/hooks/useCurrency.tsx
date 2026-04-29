import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Currency = "USD" | "PHP";

const EXCHANGE_RATE = 57;

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (usdAmount: number, phpAmount?: number) => string;
  isPH: boolean;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

function detectLocation(): Currency {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz === "Asia/Manila") return "PHP";
  } catch {
    // ignore
  }
  return "USD";
}

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>(() => {
    const stored = localStorage.getItem("currency") as Currency | null;
    if (stored === "USD" || stored === "PHP") return stored;
    return detectLocation();
  });

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    localStorage.setItem("currency", c);
  };

  const formatPrice = (usdAmount: number, phpAmount?: number) => {
    if (currency === "PHP" && phpAmount !== undefined) {
      return `₱${phpAmount.toLocaleString("en-PH")}`;
    }
    if (currency === "PHP") {
      const php = Math.round(usdAmount * EXCHANGE_RATE);
      return `₱${php.toLocaleString("en-PH")}`;
    }
    return `$${usdAmount}`;
  };

  useEffect(() => {
    if (!localStorage.getItem("currency")) {
      const detected = detectLocation();
      setCurrencyState(detected);
    }
  }, []);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, isPH: currency === "PHP" }}>
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
