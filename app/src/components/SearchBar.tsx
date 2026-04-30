import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export default function SearchBar({ placeholder = "Search...", value, onChange, className = "" }: SearchBarProps) {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Debounce is handled by parent; this is just the UI
  return (
    <div
      className={`flex items-center gap-2 rounded-full border px-4 py-2.5 transition-all ${className}`}
      style={{
        borderColor: focused ? "var(--accent-blue)" : "var(--border-subtle)",
        background: "var(--bg-surface)",
        boxShadow: focused ? "0 0 0 3px var(--border-glow)" : "none",
      }}
    >
      <Search size={16} style={{ color: "var(--text-muted)" }} />
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        className="flex-1 bg-transparent text-sm outline-none"
        style={{ color: "var(--text-primary)" }}
      />
      {value && (
        <button
          onClick={() => {
            onChange("");
            inputRef.current?.focus();
          }}
          className="flex h-5 w-5 items-center justify-center rounded-full transition-colors hover:bg-[var(--bg-surface-solid)]"
          style={{ color: "var(--text-muted)" }}
        >
          <X size={12} />
        </button>
      )}
    </div>
  );
}

// Debounce hook for search
export function useDebouncedSearch<T>(items: T[], searchFn: (item: T, query: string) => boolean, delay = 300) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<T[]>(items);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      if (!query.trim()) {
        setResults(items);
      } else {
        setResults(items.filter((item) => searchFn(item, query.toLowerCase())));
      }
    }, delay);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [query, items, searchFn, delay]);

  return { query, setQuery, results };
}
