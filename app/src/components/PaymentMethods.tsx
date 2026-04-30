import PaymentTooltip from "./PaymentTooltip";

interface PaymentMethodsProps {
  layout?: "row" | "grid" | "badges";
  showDetails?: boolean;
  className?: string;
}

export default function PaymentMethods({ layout = "badges", showDetails: _showDetails = false, className = "" }: PaymentMethodsProps) {
  // showDetails is now ignored — we always use the interactive tooltip
  // which shows details on hover/tap, fixing the overlap issue
  return <PaymentTooltip layout={layout} className={className} />;
}
