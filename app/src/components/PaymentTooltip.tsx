import { useState, useCallback } from "react";
import { QrCode, Wallet, CreditCard, Globe, Copy, Check, Smartphone } from "lucide-react";

interface PaymentMethod {
  name: string;
  icon: React.ElementType;
  detail: string;
  color: string;
  bg: string;
  note?: string;
}

const methods: PaymentMethod[] = [
  {
    name: "GCash",
    icon: QrCode,
    detail: "0962 790 5910",
    color: "#0070E0",
    bg: "rgba(0, 112, 224, 0.1)",
    note: "Send Money → Enter number",
  },
  {
    name: "Maya",
    icon: Wallet,
    detail: "0962 790 5910",
    color: "#00A4E0",
    bg: "rgba(0, 164, 224, 0.1)",
    note: "Send → Enter number",
  },
  {
    name: "PayPal",
    icon: CreditCard,
    detail: "rommeld216@gmail.com",
    color: "#003087",
    bg: "rgba(0, 48, 135, 0.1)",
    note: "Send to email",
  },
  {
    name: "Google Pay",
    icon: Globe,
    detail: "rommeld216@gmail.com",
    color: "#34A853",
    bg: "rgba(52, 168, 83, 0.1)",
    note: "Send to email",
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      className="flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-lg transition-colors hover:bg-[var(--bg-surface-solid)]"
      style={{ border: "1px solid var(--border-subtle)" }}
      title="Copy to clipboard"
    >
      {copied ? <Check size={12} style={{ color: "#34C759" }} /> : <Copy size={12} style={{ color: "var(--text-muted)" }} />}
    </button>
  );
}

interface PaymentTooltipProps {
  layout?: "grid" | "badges" | "row";
  className?: string;
}

export default function PaymentTooltip({ layout = "grid", className = "" }: PaymentTooltipProps) {
  if (layout === "badges") {
    return (
      <div className={`flex flex-wrap items-center gap-2 ${className}`}>
        {methods.map((method) => (
          <div
            key={method.name}
            className="flex items-center gap-1.5 rounded-full border px-2.5 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs font-medium"
            style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }}
            title={`${method.name}: ${method.detail}`}
          >
            <method.icon size={13} className="sm:size-3.5" style={{ color: method.color }} />
            {method.name}
          </div>
        ))}
      </div>
    );
  }

  if (layout === "row") {
    return (
      <div className={`flex flex-wrap items-center gap-3 ${className}`}>
        {methods.map((method) => (
          <div
            key={method.name}
            className="flex items-center gap-2 text-sm"
            style={{ color: "var(--text-secondary)" }}
            title={`${method.name}: ${method.detail}`}
          >
            <method.icon size={16} style={{ color: method.color }} />
            <span className="font-medium">{method.name}</span>
          </div>
        ))}
      </div>
    );
  }

  // grid layout — clean inline display, NO hover tooltip, NO overlap
  return (
    <div className={`grid grid-cols-2 gap-2 sm:gap-3 ${className}`}>
      {methods.map((method) => (
        <div
          key={method.name}
          className="flex items-center gap-2 sm:gap-3 rounded-2xl border p-3 sm:p-4"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl" style={{ background: method.bg }}>
            <method.icon size={18} className="sm:size-5" style={{ color: method.color }} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-1 sm:gap-2">
              <p className="text-xs sm:text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{method.name}</p>
              <CopyButton text={method.detail} />
            </div>
            <p className="mt-0.5 text-[11px] sm:text-xs font-mono truncate" style={{ color: "var(--text-secondary)" }}>{method.detail}</p>
            {method.note && (
              <p className="mt-1 text-[9px] sm:text-[10px] flex items-center gap-1" style={{ color: "var(--text-muted)" }}>
                <Smartphone size={9} /> {method.note}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
