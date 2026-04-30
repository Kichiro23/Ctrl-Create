import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Large soft orbs */}
      <motion.div
        className="absolute -left-[10%] -top-[10%] h-[50vw] w-[50vw] rounded-full opacity-25 blur-[100px]"
        style={{ background: "radial-gradient(circle, var(--accent-blue) 0%, transparent 70%)" }}
        animate={{ x: [0, 40, -30, 0], y: [0, -30, 40, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-[10%] top-[5%] h-[40vw] w-[40vw] rounded-full opacity-15 blur-[100px]"
        style={{ background: "radial-gradient(circle, #AF52DE 0%, transparent 70%)" }}
        animate={{ x: [0, -50, 30, 0], y: [0, 40, -20, 0], scale: [1, 0.9, 1.15, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute bottom-[0%] left-[20%] h-[45vw] w-[45vw] rounded-full opacity-15 blur-[100px]"
        style={{ background: "radial-gradient(circle, #34C759 0%, transparent 70%)" }}
        animate={{ x: [0, 60, -40, 0], y: [0, -50, 30, 0], scale: [1, 1.05, 0.9, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />

      {/* Floating geometric shapes */}
      {[
        { size: 120, x: "10%", y: "15%", delay: 0, duration: 18, rotate: 45, shape: "rounded-2xl" },
        { size: 80, x: "80%", y: "10%", delay: 3, duration: 22, rotate: -20, shape: "rounded-full" },
        { size: 60, x: "75%", y: "65%", delay: 6, duration: 16, rotate: 30, shape: "rounded-3xl" },
        { size: 100, x: "20%", y: "70%", delay: 2, duration: 20, rotate: -15, shape: "rounded-2xl" },
        { size: 50, x: "50%", y: "40%", delay: 8, duration: 14, rotate: 60, shape: "rounded-full" },
        { size: 70, x: "5%", y: "50%", delay: 5, duration: 19, rotate: -45, shape: "rounded-3xl" },
        { size: 90, x: "90%", y: "35%", delay: 10, duration: 17, rotate: 25, shape: "rounded-2xl" },
        { size: 40, x: "35%", y: "25%", delay: 12, duration: 15, rotate: -30, shape: "rounded-full" },
      ].map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute border ${shape.shape}`}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            borderColor: "var(--border-subtle)",
            background: "linear-gradient(135deg, rgba(0,122,255,0.08) 0%, rgba(175,82,222,0.05) 100%)",
            opacity: 0.4,
          }}
          animate={{
            y: [0, -40, 20, 0],
            x: [0, 20, -15, 0],
            rotate: [shape.rotate, shape.rotate + 15, shape.rotate - 10, shape.rotate],
            opacity: [0.2, 0.45, 0.2],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}

      {/* Floating dots */}
      {[
        { size: 4, x: "15%", y: "20%", delay: 0, duration: 12 },
        { size: 6, x: "75%", y: "15%", delay: 2, duration: 15 },
        { size: 3, x: "85%", y: "60%", delay: 4, duration: 10 },
        { size: 5, x: "25%", y: "75%", delay: 1, duration: 18 },
        { size: 4, x: "60%", y: "80%", delay: 3, duration: 14 },
        { size: 3, x: "45%", y: "35%", delay: 5, duration: 16 },
        { size: 5, x: "10%", y: "55%", delay: 6, duration: 13 },
        { size: 4, x: "90%", y: "40%", delay: 7, duration: 11 },
        { size: 3, x: "55%", y: "20%", delay: 9, duration: 12 },
        { size: 5, x: "30%", y: "45%", delay: 11, duration: 15 },
      ].map((dot, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute rounded-full"
          style={{
            width: dot.size,
            height: dot.size,
            left: dot.x,
            top: dot.y,
            background: "var(--accent-blue)",
            opacity: 0.2,
          }}
          animate={{ y: [0, -30, 20, 0], x: [0, 15, -10, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: dot.duration, repeat: Infinity, ease: "easeInOut", delay: dot.delay }}
        />
      ))}

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(var(--text-secondary) 1px, transparent 1px), linear-gradient(90deg, var(--text-secondary) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
