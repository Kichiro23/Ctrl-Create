import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Large animated gradient orbs */}
      <motion.div
        className="absolute -left-[20%] -top-[20%] h-[60vw] w-[60vw] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0,122,255,0.35) 0%, rgba(0,122,255,0.08) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ x: [0, 60, -40, 0], y: [0, -40, 60, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-[15%] top-[0%] h-[55vw] w-[55vw] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(175,82,222,0.3) 0%, rgba(175,82,222,0.06) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ x: [0, -70, 50, 0], y: [0, 50, -30, 0], scale: [1, 0.9, 1.2, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[10%] h-[50vw] w-[50vw] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(52,199,89,0.2) 0%, rgba(52,199,89,0.05) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ x: [0, 50, -60, 0], y: [0, -60, 40, 0], scale: [1, 1.1, 0.85, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
      <motion.div
        className="absolute top-[30%] right-[20%] h-[35vw] w-[35vw] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,149,0,0.15) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{ x: [0, -30, 40, 0], y: [0, 40, -20, 0], scale: [1, 1.2, 0.9, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Floating glass shapes */}
      {[
        { size: 100, x: "8%", y: "12%", delay: 0, duration: 16, rotate: 30 },
        { size: 70, x: "85%", y: "8%", delay: 2, duration: 20, rotate: -15 },
        { size: 50, x: "70%", y: "60%", delay: 4, duration: 14, rotate: 45 },
        { size: 80, x: "15%", y: "65%", delay: 1, duration: 18, rotate: -25 },
        { size: 40, x: "50%", y: "35%", delay: 6, duration: 12, rotate: 60 },
      ].map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-2xl border"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            borderColor: "rgba(0,122,255,0.15)",
            background: "linear-gradient(135deg, rgba(0,122,255,0.1) 0%, rgba(175,82,222,0.06) 100%)",
            backdropFilter: "blur(8px)",
          }}
          animate={{
            y: [0, -30, 15, 0],
            x: [0, 15, -10, 0],
            rotate: [shape.rotate, shape.rotate + 10, shape.rotate - 8, shape.rotate],
          }}
          transition={{ duration: shape.duration, repeat: Infinity, ease: "easeInOut", delay: shape.delay }}
        />
      ))}

      {/* Visible floating dots */}
      {[
        { size: 6, x: "12%", y: "18%", delay: 0, duration: 10 },
        { size: 8, x: "78%", y: "12%", delay: 2, duration: 13 },
        { size: 5, x: "88%", y: "55%", delay: 4, duration: 9 },
        { size: 7, x: "22%", y: "72%", delay: 1, duration: 15 },
        { size: 6, x: "55%", y: "78%", delay: 3, duration: 11 },
        { size: 5, x: "42%", y: "32%", delay: 5, duration: 14 },
        { size: 7, x: "8%", y: "50%", delay: 6, duration: 12 },
        { size: 6, x: "92%", y: "38%", delay: 7, duration: 10 },
      ].map((dot, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute rounded-full"
          style={{
            width: dot.size,
            height: dot.size,
            left: dot.x,
            top: dot.y,
            background: "#007AFF",
            boxShadow: "0 0 12px rgba(0,122,255,0.5)",
          }}
          animate={{ y: [0, -25, 15, 0], x: [0, 12, -8, 0], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: dot.duration, repeat: Infinity, ease: "easeInOut", delay: dot.delay }}
        />
      ))}

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0,122,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,122,255,0.04) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
}
