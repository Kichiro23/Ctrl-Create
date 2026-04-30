import { Component, type ReactNode } from "react";
import { AlertTriangle, RefreshCw, Home, Mail } from "lucide-react";
import { Link } from "react-router";

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
    console.error("[ErrorBoundary] Caught error:", error);
    console.error("[ErrorBoundary] Component stack:", errorInfo.componentStack);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <div className="flex min-h-[60vh] items-center justify-center px-4">
          <div className="glass-card mx-auto max-w-md rounded-3xl p-8 text-center">
            <div
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl"
              style={{ background: "rgba(255, 59, 48, 0.1)" }}
            >
              <AlertTriangle size={28} style={{ color: "#FF3B30" }} />
            </div>
            <h2
              className="mt-4 text-xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              Something went wrong
            </h2>
            <p
              className="mt-2 text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              We encountered an unexpected error. Don&apos;t worry — your data is safe.
              Try refreshing the page or going back home.
            </p>
            {this.state.error && (
              <div
                className="mt-4 rounded-xl border p-3 text-left"
                style={{
                  borderColor: "var(--border-subtle)",
                  background: "var(--bg-surface-solid)",
                }}
              >
                <p
                  className="text-[10px] font-mono uppercase tracking-wider"
                  style={{ color: "var(--text-muted)" }}
                >
                  Error details
                </p>
                <p
                  className="mt-1 text-xs font-mono break-all"
                  style={{ color: "#FF3B30" }}
                >
                  {this.state.error.message}
                </p>
              </div>
            )}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={this.handleReload}
                className="btn-primary inline-flex items-center gap-2 rounded-full"
              >
                <RefreshCw size={16} />
                Reload Page
              </button>
              <Link
                to="/"
                onClick={this.handleReset}
                className="btn-secondary inline-flex items-center gap-2 rounded-full"
              >
                <Home size={16} />
                Go Home
              </Link>
            </div>
            <div className="mt-4">
              <a
                href="mailto:rommeld216@gmail.com"
                className="inline-flex items-center gap-1.5 text-xs transition-colors hover:text-[var(--accent-blue)]"
                style={{ color: "var(--text-muted)" }}
              >
                <Mail size={12} />
                Report this issue
              </a>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
