import { Component, type ReactNode } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("[ErrorBoundary]", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <div className="flex min-h-[60vh] items-center justify-center px-4">
          <div className="glass-card mx-auto max-w-md rounded-3xl p-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl" style={{ background: "rgba(255, 59, 48, 0.1)" }}>
              <AlertTriangle size={28} style={{ color: "#FF3B30" }} />
            </div>
            <h2 className="mt-4 text-xl font-bold" style={{ color: "var(--text-primary)" }}>
              Something went wrong
            </h2>
            <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              We encountered an unexpected error. Please refresh the page or try again later.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary mt-6 inline-flex items-center gap-2 rounded-full"
            >
              <RefreshCw size={16} />
              Refresh Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
