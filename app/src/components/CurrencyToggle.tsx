import { DollarSign, PhilippinePeso } from "lucide-react";
import { useCurrency } from "@/hooks/useCurrency";

export default function CurrencyToggle({ className = "" }: { className?: string }) {
  const { currency, setCurrency } = useCurrency();

  return (
    <button
      onClick={() => setCurrency(currency === "USD" ? "PHP" : "USD")}
      className={`flex h-8 items-center gap-1.5 rounded-full border px-3 text-xs font-semibold transition-colors hover:bg-[var(--bg-surface-solid)] ${className}`}
      style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }}
      title={`Switch to ${currency === "USD" ? "PHP" : "USD"}`}
    >
      {currency === "USD" ? <DollarSign size={12} /> : <PhilippinePeso size={12} />}
      {currency}
    </button>
  );
}
