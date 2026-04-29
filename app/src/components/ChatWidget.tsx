import { useState, useRef, useEffect } from "react";
import { trpc } from "@/providers/trpc";
import {
  MessageCircle, X, Send, User, Bot, Loader2, WifiOff,
} from "lucide-react";

const FALLBACK_RESPONSES = [
  "I'm happy to help! Could you share more details about what you need?",
  "Great question! I offer website development, academic writing, video editing, and more. What are you looking for?",
  "Thanks for reaching out! I typically respond to detailed inquiries within 24 hours. You can also use the contact form.",
  "I'd love to assist with that. For the fastest response, try the contact form at /contact with your project details.",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([
    { role: "assistant", content: "Hi! I'm the Ctrl + Create assistant. How can I help you today?" },
  ]);
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMutation = trpc.chat.send.useMutation({
    onSuccess: (data) => {
      if (data.reply) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
      }
    },
    onError: () => {
      const fallback = FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)];
      setMessages((prev) => [...prev, { role: "assistant", content: fallback }]);
    },
  });

  const handleSend = () => {
    if (!input.trim()) return;
    const text = input.trim();
    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setInput("");

    if (isOffline) {
      const fallback = FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)];
      setTimeout(() => {
        setMessages((prev) => [...prev, { role: "assistant", content: `⚠️ You're offline. ${fallback}` }]);
      }, 600);
      return;
    }

    sendMutation.mutate({ message: text, sessionId });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const suggestedPrompts = [
    "What website packages do you offer?",
    "I need thesis help — what's your rate?",
    "How fast can you build a site?",
    "Tell me about memberships",
  ];

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105"
        style={{ background: "var(--accent-blue)" }}
        aria-label="Open chat"
      >
        {open ? <X size={22} className="text-white" /> : <MessageCircle size={22} className="text-white" />}
      </button>

      {/* Chat Panel */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 flex w-[360px] max-w-[calc(100vw-48px)] flex-col overflow-hidden rounded-3xl shadow-2xl"
          style={{
            height: "520px",
            background: "var(--bg-surface-glass)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            border: "1px solid var(--border-subtle)",
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 border-b px-5 py-4" style={{ borderColor: "var(--border-subtle)" }}>
            <div className="flex h-9 w-9 items-center justify-center rounded-full" style={{ background: "rgba(0, 122, 255, 0.15)" }}>
              <Bot size={18} style={{ color: "var(--accent-blue)" }} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Ctrl + Create Assistant</p>
              <p className="text-xs flex items-center gap-1" style={{ color: "var(--text-muted)" }}>
                {isOffline ? <><WifiOff size={10} /> Offline</> : "Online — powered by AI"}
              </p>
            </div>
            <button onClick={() => setOpen(false)} className="rounded-full p-1 transition-colors hover:bg-[var(--bg-surface-solid)]">
              <X size={16} style={{ color: "var(--text-muted)" }} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "assistant" && (
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full" style={{ background: "rgba(0, 122, 255, 0.1)" }}>
                    <Bot size={14} style={{ color: "var(--accent-blue)" }} />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${msg.role === "user" ? "rounded-br-sm" : "rounded-bl-sm"}`}
                  style={{
                    background: msg.role === "user" ? "var(--accent-blue)" : "var(--bg-surface-solid)",
                    color: msg.role === "user" ? "#fff" : "var(--text-primary)",
                    border: msg.role === "assistant" ? "1px solid var(--border-subtle)" : "none",
                  }}
                >
                  {msg.content}
                </div>
                {msg.role === "user" && (
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full" style={{ background: "var(--bg-surface-solid)", border: "1px solid var(--border-subtle)" }}>
                    <User size={14} style={{ color: "var(--text-secondary)" }} />
                  </div>
                )}
              </div>
            ))}

            {sendMutation.isPending && (
              <div className="flex gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full" style={{ background: "rgba(0, 122, 255, 0.1)" }}>
                  <Bot size={14} style={{ color: "var(--accent-blue)" }} />
                </div>
                <div className="rounded-2xl rounded-bl-sm px-4 py-2.5" style={{ background: "var(--bg-surface-solid)", border: "1px solid var(--border-subtle)" }}>
                  <Loader2 size={16} className="animate-spin" style={{ color: "var(--text-muted)" }} />
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Suggested Prompts */}
          {messages.length <= 2 && !sendMutation.isPending && (
            <div className="border-t px-4 py-3" style={{ borderColor: "var(--border-subtle)" }}>
              <p className="mb-2 text-xs font-medium" style={{ color: "var(--text-muted)" }}>Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => {
                      setInput(prompt);
                      setTimeout(() => handleSend(), 50);
                    }}
                    className="rounded-full border px-3 py-1.5 text-xs transition-colors hover:bg-[var(--bg-surface-solid)]"
                    style={{ borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="border-t px-4 py-3" style={{ borderColor: "var(--border-subtle)" }}>
            <div className="flex items-center gap-2 rounded-full border px-4 py-2" style={{ borderColor: "var(--border-subtle)" }}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={isOffline ? "You're offline — message will be saved" : "Type your message..."}
                className="flex-1 bg-transparent text-sm outline-none"
                style={{ color: "var(--text-primary)" }}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || sendMutation.isPending}
                className="flex h-8 w-8 items-center justify-center rounded-full transition-colors disabled:opacity-40"
                style={{ background: "var(--accent-blue)" }}
              >
                <Send size={14} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
