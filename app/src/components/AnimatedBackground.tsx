import { useTheme } from "@/hooks/useTheme";

export default function AnimatedBackground() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
      {/* Base layer */}
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? "linear-gradient(135deg, #06060a 0%, #0a0a12 50%, #0d0d18 100%)"
            : "linear-gradient(135deg, #e8ecf8 0%, #f0eefc 50%, #f5f0f8 100%)",
        }}
      />

      {/* Ambient noise/grain overlay for texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* ORB 1 — Top-left indigo/blue glow */}
      <div
        className="absolute animate-orb-1"
        style={{
          top: "-10%",
          left: "-10%",
          width: "60vw",
          height: "60vw",
          borderRadius: "50%",
          background: isDark
            ? "radial-gradient(circle, rgba(99,102,241,0.45) 0%, rgba(79,70,229,0.2) 40%, transparent 70%)"
            : "radial-gradient(circle, rgba(99,102,241,0.35) 0%, rgba(79,70,229,0.12) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* ORB 2 — Top-right purple/violet glow */}
      <div
        className="absolute animate-orb-2"
        style={{
          top: "-5%",
          right: "-15%",
          width: "55vw",
          height: "55vw",
          borderRadius: "50%",
          background: isDark
            ? "radial-gradient(circle, rgba(168,85,247,0.4) 0%, rgba(147,51,234,0.15) 45%, transparent 70%)"
            : "radial-gradient(circle, rgba(168,85,247,0.3) 0%, rgba(147,51,234,0.1) 45%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* ORB 3 — Bottom-center blue glow */}
      <div
        className="absolute animate-orb-3"
        style={{
          bottom: "-20%",
          left: "20%",
          width: "70vw",
          height: "70vw",
          borderRadius: "50%",
          background: isDark
            ? "radial-gradient(circle, rgba(59,130,246,0.35) 0%, rgba(37,99,235,0.12) 40%, transparent 65%)"
            : "radial-gradient(circle, rgba(59,130,246,0.28) 0%, rgba(37,99,235,0.08) 40%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      {/* ORB 4 — Mid-right cyan accent (subtle) */}
      <div
        className="absolute animate-orb-4"
        style={{
          top: "40%",
          right: "5%",
          width: "35vw",
          height: "35vw",
          borderRadius: "50%",
          background: isDark
            ? "radial-gradient(circle, rgba(6,182,212,0.2) 0%, rgba(8,145,178,0.08) 40%, transparent 65%)"
            : "radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(8,145,178,0.05) 40%, transparent 65%)",
          filter: "blur(50px)",
        }}
      />

      {/* ORB 5 — Bottom-right pink/magenta warmth */}
      <div
        className="absolute animate-orb-5"
        style={{
          bottom: "-10%",
          right: "-5%",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background: isDark
            ? "radial-gradient(circle, rgba(236,72,153,0.15) 0%, rgba(219,39,119,0.06) 45%, transparent 70%)"
            : "radial-gradient(circle, rgba(236,72,153,0.12) 0%, rgba(219,39,119,0.04) 45%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Vignette overlay — darkens edges for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? "radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.4) 100%)"
            : "radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.06) 100%)",
        }}
      />
    </div>
  );
}
