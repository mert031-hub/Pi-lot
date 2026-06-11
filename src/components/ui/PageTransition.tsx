"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      {/* Blueprint grid overlay — fades out as page loads */}
      <motion.div
        key={pathname + "_overlay"}
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 88,
          backgroundImage: `
            linear-gradient(rgba(108,140,165,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(108,140,165,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          backgroundColor: "rgba(13,24,33,0.88)",
        }}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      >
        {/* Corner brackets */}
        {[
          { top: "1.5rem", left: "1.5rem", borderTop: "1px solid rgba(108,140,165,0.4)", borderLeft: "1px solid rgba(108,140,165,0.4)" },
          { top: "1.5rem", right: "1.5rem", borderTop: "1px solid rgba(108,140,165,0.4)", borderRight: "1px solid rgba(108,140,165,0.4)" },
          { bottom: "1.5rem", left: "1.5rem", borderBottom: "1px solid rgba(108,140,165,0.4)", borderLeft: "1px solid rgba(108,140,165,0.4)" },
          { bottom: "1.5rem", right: "1.5rem", borderBottom: "1px solid rgba(108,140,165,0.4)", borderRight: "1px solid rgba(108,140,165,0.4)" },
        ].map((style, i) => (
          <div
            key={i}
            className="absolute w-10 h-10"
            style={style}
          />
        ))}

        {/* Scan line */}
        <motion.div
          className="absolute left-0 right-0 h-px"
          style={{ backgroundColor: "#6C8CA5", boxShadow: "0 0 16px rgba(108,140,165,0.9)" }}
          initial={{ top: "0%" }}
          animate={{ top: "105%" }}
          transition={{ duration: 0.52, ease: "easeIn" }}
        />

        {/* Center coordinates */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-center pointer-events-none"
          style={{ color: "rgba(108,140,165,0.3)", fontSize: "9px", letterSpacing: "0.2em" }}
        >
          <div>PLT-2025 / SYS.LOAD</div>
          <div className="mt-1" style={{ color: "rgba(223,107,48,0.25)" }}>{pathname}</div>
        </div>
      </motion.div>

      {/* Page content — fades in slightly delayed */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35, delay: 0.12, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
}
