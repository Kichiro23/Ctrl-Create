import { useState, useRef, useEffect, useCallback } from "react";
import { trpc } from "@/providers/trpc";
import {
  MessageCircle, X, Send, User, Bot, Loader2, WifiOff,
  ThumbsUp, ThumbsDown,
} from "lucide-react";

const FALLBACK_RESPONSES = [
  "I'm happy to help! Could you share more details about what you need?",
  "Great question! I offer website development starting at ₱12,000, academic writing from ₱4,500 per chapter, and video editing. What are you looking for?",
  "Thanks for reaching out! I typically respond to detailed inquiries within 24 hours. You can also use the contact form for a faster quote.",
  "I'd love to assist with that. For the fastest response, try the contact form at /contact with your project details.",
  "For pricing, website packages start at ₱12,000 (Starter), ₱25,000 (Business), and ₱48,000 (Pro). Academic chapters are ₱4,500 each. Want a custom quote?",
  "I can build your capstone system with full documentation! Packages start at ₱15,000 including the web app, ERD, user manual, and defense slides.",
  "Need thesis help? I cover all chapters (1–5), SPSS analysis, defense PPT, and Turnitin reports. Full thesis package is ₱18,000.",
  "Memberships are great for ongoing work! Website memberships start at ₱6,500/month. Academic memberships start at ₱2,500/month with discounts on every service.",
  "I accept GCash, Maya, PayPal, and Google Pay. All payments are secured and I provide official receipts for every transaction.",
  "Students, PWDs, and senior citizens can apply for special discounts. Just mention it when you inquire through the contact form!",
  "Rush delivery is available for most services! Just let me know your deadline and I'll check my schedule.",
  "For a free consultation, email me at rommeld216@gmail.com or use the contact form. I reply within 1–2 hours during business hours.",
  "Every website I build is mobile-responsive, SEO-ready, and includes a dark mode toggle. Want to see some templates?",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string; liked?: boolean | null }[]>([
    { role: "assistant", content: "Hi! I'm the Cylux Code assistant. How can I help you today?" },
  ]);
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [retryCount, setRetryCount] = useState(0);
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
        setMessages((prev) => [...prev, { role: "assistant", content: data.reply, liked: null }]);
      }
      setRetryCount(0);
    },
    onError: () => {
      if (retryCount < 1) {
        setRetryCount((c) => c + 1);
        // Auto-retry once after 2 seconds
        setTimeout(() => {
          const lastUserMsg = messages.filter((m) => m.role === "user").pop();
          if (lastUserMsg) {
            sendMutation.mutate({ message: lastUserMsg.content, sessionId });
          }
        }, 2000);
        return;
      }
      const fallback = FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)];
      setMessages((prev) => [...prev, { role: "assistant", content: fallback, liked: null }]);
      setRetryCount(0);
    },
  });

  const handleSend = useCallback(() => {
    if (!input.trim()) return;
    const text = input.trim();
    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setInput("");

    if (isOffline) {
      const fallback = FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)];
      setTimeout(() => {
        setMessages((prev) => [...prev, { role: "assistant", content: `⚠️ You're offline. ${fallback}`, liked: null }]);
      }, 600);
      return;
    }

    sendMutation.mutate({ message: text, sessionId });
  }, [input, isOffline, sessionId, sendMutation]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleLike = (index: number, liked: boolean) => {
    setMessages((prev) =>
      prev.map((m, i) => (i === index ? { ...m, liked } : m))
    );
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
              <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Cylux Code Assistant</p>
              <p className="text-xs flex items-center gap-1" style={{ color: "var(--text-muted)" }}>
                {isOffline ? <><WifiOff size={10} /> Offline</> : sendMutation.isPending ? <><Loader2 size={10} className="animate-spin" /> Thinking...</> : "Online — powered by AI"}
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
                <div className="flex flex-col gap-1 max-w-[80%]">
                  <div
                    className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${msg.role === "user" ? "rounded-br-sm" : "rounded-bl-sm"}`}
                    style={{
                      background: msg.role === "user" ? "var(--accent-blue)" : "var(--bg-surface-solid)",
                      color: msg.role === "user" ? "#fff" : "var(--text-primary)",
                      border: msg.role === "assistant" ? "1px solid var(--border-subtle)" : "none",
                    }}
                  >
                    {msg.content}
                  </div>
                  {msg.role === "assistant" && i > 0 && (
                    <div className="flex items-center gap-1 self-start">
                      <button
                        onClick={() => handleLike(i, true)}
                        className={`flex h-6 w-6 items-center justify-center rounded-full transition-colors ${msg.liked === true ? "bg-green-500/10" : "hover:bg-[var(--bg-surface-solid)]"}`}
                        title="Helpful"
                      >
                        <ThumbsUp size={11} style={{ color: msg.liked === true ? "#34C759" : "var(--text-muted)" }} />
                      </button>
                      <button
                        onClick={() => handleLike(i, false)}
                        className={`flex h-6 w-6 items-center justify-center rounded-full transition-colors ${msg.liked === false ? "bg-red-500/10" : "hover:bg-[var(--bg-surface-solid)]"}`}
                        title="Not helpful"
                      >
                        <ThumbsDown size={11} style={{ color: msg.liked === false ? "#FF3B30" : "var(--text-muted)" }} />
                      </button>
                    </div>
                  )}
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
                  <div className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full animate-bounce" style={{ background: "var(--text-muted)", animationDelay: "0ms" }} />
                    <span className="h-1.5 w-1.5 rounded-full animate-bounce" style={{ background: "var(--text-muted)", animationDelay: "150ms" }} />
                    <span className="h-1.5 w-1.5 rounded-full animate-bounce" style={{ background: "var(--text-muted)", animationDelay: "300ms" }} />
                  </div>
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
