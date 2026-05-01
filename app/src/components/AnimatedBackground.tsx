export default function AnimatedBackground() {
  return (
    <>
      {/* Base animated gradient */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(at 40% 20%, rgba(0,122,255,0.25) 0px, transparent 50%),
            radial-gradient(at 80% 0%, rgba(175,82,222,0.2) 0px, transparent 50%),
            radial-gradient(at 0% 50%, rgba(52,199,89,0.15) 0px, transparent 50%),
            radial-gradient(at 80% 50%, rgba(255,149,0,0.1) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(0,122,255,0.2) 0px, transparent 50%),
            radial-gradient(at 80% 100%, rgba(175,82,222,0.15) 0px, transparent 50%)
          `,
          backgroundSize: "200% 200%",
          animation: "gradientShift 15s ease infinite",
        }}
      />
      {/* Static decorative blobs for depth */}
      <div
        className="pointer-events-none absolute -top-[20%] -left-[10%] h-[50vw] w-[50vw] rounded-full -z-10"
        style={{
          background: "radial-gradient(circle, rgba(0,122,255,0.18) 0%, transparent 60%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="pointer-events-none absolute top-[10%] -right-[10%] h-[45vw] w-[45vw] rounded-full -z-10"
        style={{
          background: "radial-gradient(circle, rgba(175,82,222,0.15) 0%, transparent 60%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-[10%] left-[20%] h-[40vw] w-[40vw] rounded-full -z-10"
        style={{
          background: "radial-gradient(circle, rgba(52,199,89,0.12) 0%, transparent 60%)",
          filter: "blur(40px)",
        }}
      />
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </>
  );
}
