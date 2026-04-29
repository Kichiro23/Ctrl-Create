import { QrCode, Wallet, CreditCard, Globe } from "lucide-react";

interface PaymentMethodsProps {
  layout?: "row" | "grid" | "badges";
  showDetails?: boolean;
  className?: string;
}

const methods = [
  {
    name: "GCash",
    icon: QrCode,
    detail: "0962 790 5910",
    color: "#0070E0",
    bg: "rgba(0, 112, 224, 0.1)",
  },
  {
    name: "Maya",
    icon: Wallet,
    detail: "0962 790 5910",
    color: "#00A4E0",
    bg: "rgba(0, 164, 224, 0.1)",
  },
  {
    name: "PayPal",
    icon: CreditCard,
    detail: "rommeld216@gmail.com",
    color: "#003087",
    bg: "rgba(0, 48, 135, 0.1)",
  },
  {
    name: "Google Pay",
    icon: Globe,
    detail: "rommeld216@gmail.com",
    color: "#34A853",
    bg: "rgba(52, 168, 83, 0.1)",
  },
];

export default function PaymentMethods({ layout = "badges", showDetails = false, className = "" }: PaymentMethodsProps) {
  if (layout === "badges") {
    return (
      <div className={`flex flex-wrap items-center gap-2 ${className}`}>
        {methods.map((method) => (
          <div
            key={method.name}
            className="flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium"
            style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }}
            title={`${method.name}: ${method.detail}`}
          >
            <method.icon size={14} style={{ color: method.color }} />
            {method.name}
          </div>
        ))}
      </div>
    );
  }

  if (layout === "grid") {
    return (
      <div className={`grid gap-3 sm:grid-cols-2 ${className}`}>
        {methods.map((method) => (
          <div
            key={method.name}
            className="flex items-center gap-3 rounded-2xl border p-4"
            style={{ borderColor: "var(--border-subtle)" }}
          >
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl"
              style={{ background: method.bg }}
            >
              <method.icon size={20} style={{ color: method.color }} />
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                {method.name}
              </p>
              {showDetails && (
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  {method.detail}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {methods.map((method) => (
        <div key={method.name} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
          <method.icon size={16} style={{ color: method.color }} />
          <span className="font-medium">{method.name}</span>
          {showDetails && <span className="text-xs" style={{ color: "var(--text-muted)" }}>({method.detail})</span>}
        </div>
      ))}
    </div>
  );
}
