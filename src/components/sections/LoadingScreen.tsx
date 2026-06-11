"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 900);
    const t3 = setTimeout(() => setPhase(3), 2400);
    const t4 = setTimeout(() => setPhase(4), 3200);
    const t5 = setTimeout(() => setPhase(5), 4000);
    const t6 = setTimeout(() => onComplete(), 5200);

    let p = 0;
    const interval = setInterval(() => {
      p += p < 70 ? 2 : p < 90 ? 0.8 : 0.3;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
      }
      setProgress(Math.min(Math.round(p), 100));
    }, 50);

    return () => {
      [t1, t2, t3, t4, t5, t6].forEach(clearTimeout);
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0d1821" }}
      exit={{
        opacity: 0,
        scale: 1.04,
        transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
      }}
    >
      {/* Animated grid background */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase >= 1 ? 1 : 0 }}
        transition={{ duration: 1.2 }}
        style={{
          backgroundImage: `
            linear-gradient(rgba(108,140,165,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(108,140,165,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Radial glow */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase >= 2 ? 0.6 : 0 }}
        transition={{ duration: 1.5 }}
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(108,140,165,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Math constants stream — left side */}
      <motion.div
        className="absolute left-24 top-1/4 hidden lg:flex flex-col gap-1.5 pointer-events-none select-none"
        aria-hidden="true"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: phase >= 2 ? 1 : 0, x: phase >= 2 ? 0 : -10 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {[
          "π = 3.14159265358979",
          "      323846264338327",
          "      950288419716939",
          "───────────────────",
          "e = 2.71828182845904",
          "      523536028747135",
          "───────────────────",
          "φ = 1.61803398874989",
          "      484820458683436",
          "───────────────────",
          "τ = 6.28318530717958",
        ].map((line, i) => (
          <motion.span
            key={i}
            className="font-mono block"
            style={{
              fontSize: "8px",
              letterSpacing: "0.12em",
              color: line.includes("─")
                ? "rgba(108,140,165,0.12)"
                : "rgba(108,140,165,0.28)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 2 ? 1 : 0 }}
            transition={{ delay: 0.5 + i * 0.06, duration: 0.4 }}
          >
            {line}
          </motion.span>
        ))}
      </motion.div>

      {/* Engineering data stream — right side */}
      <motion.div
        className="absolute right-24 top-1/4 hidden lg:flex flex-col gap-1.5 text-right pointer-events-none select-none"
        aria-hidden="true"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: phase >= 3 ? 1 : 0, x: phase >= 3 ? 0 : 10 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {[
          "ISO 3834-2 ▸ ACTIVE",
          "LEAN.MFG ▸ ENABLED",
          "SIX.SIGMA ▸ BB",
          "─────────────────",
          "OEE: 87.4%",
          "SCRAP: 0.31%",
          "CYCLE.T: 4.2s",
          "─────────────────",
          "PLT-2025 ▸ READY",
          "CAP.UTIL: 92.1%",
          "SYS.STATUS ▸ OK",
        ].map((line, i) => (
          <motion.span
            key={i}
            className="font-mono block"
            style={{
              fontSize: "8px",
              letterSpacing: "0.12em",
              color: line.includes("─")
                ? "rgba(223,107,48,0.12)"
                : "rgba(223,107,48,0.22)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 3 ? 1 : 0 }}
            transition={{ delay: 0.6 + i * 0.06, duration: 0.4 }}
          >
            {line}
          </motion.span>
        ))}
      </motion.div>

      {/* Corner brackets */}
      {[
        { top: "2rem", left: "2rem", bt: "borderTop", bl: "borderLeft" },
        { top: "2rem", right: "2rem", bt: "borderTop", br: "borderRight" },
        {
          bottom: "2rem",
          left: "2rem",
          bb: "borderBottom",
          bl: "borderLeft",
        },
        {
          bottom: "2rem",
          right: "2rem",
          bb: "borderBottom",
          br: "borderRight",
        },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-14 h-14"
          style={{
            ...pos,
            borderTop: pos.bt ? "1px solid rgba(108,140,165,0.35)" : undefined,
            borderLeft:
              pos.bl ? "1px solid rgba(108,140,165,0.35)" : undefined,
            borderBottom:
              pos.bb ? "1px solid rgba(108,140,165,0.35)" : undefined,
            borderRight:
              pos.br ? "1px solid rgba(108,140,165,0.35)" : undefined,
          }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: phase >= 1 ? 1 : 0, scale: phase >= 1 ? 1 : 0.6 }}
          transition={{ duration: 0.5, delay: i * 0.07 }}
        />
      ))}

      {/* Central content */}
      <div className="relative flex flex-col items-center gap-10">
        {/* SVG Logo animation */}
        <div className="relative w-64 h-48 flex items-center justify-center">
          {/* Glow behind */}
          <motion.div
            className="absolute inset-0 blur-3xl rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 2 ? 0.12 : 0 }}
            transition={{ duration: 1 }}
            style={{ backgroundColor: "#6C8CA5" }}
          />

          <svg
            viewBox="0 0 240 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {/* Pi symbol — horizontal bar */}
            <motion.line
              x1="24"
              y1="40"
              x2="128"
              y2="40"
              stroke="#6C8CA5"
              strokeWidth="3.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: phase >= 2 ? 1 : 0,
                opacity: phase >= 2 ? 1 : 0,
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
            {/* Pi symbol — left leg */}
            <motion.path
              d="M 58,40 C 58,40 55,80 50,126"
              stroke="#6C8CA5"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: phase >= 2 ? 1 : 0,
                opacity: phase >= 2 ? 1 : 0,
              }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.35 }}
            />
            {/* Pi symbol — right leg */}
            <motion.path
              d="M 95,40 C 95,40 92,80 87,126"
              stroke="#6C8CA5"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: phase >= 2 ? 1 : 0,
                opacity: phase >= 2 ? 1 : 0,
              }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.55 }}
            />

            {/* Separator dash */}
            <motion.line
              x1="142"
              y1="83"
              x2="158"
              y2="83"
              stroke="#DF6B30"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: phase >= 3 ? 1 : 0,
                opacity: phase >= 3 ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            />

            {/* LOT tracking nodes */}
            {[
              { cx: 178, cy: 56, delay: 0.1 },
              { cx: 196, cy: 83, delay: 0.2 },
              { cx: 178, cy: 110, delay: 0.3 },
            ].map((dot, i) => (
              <motion.circle
                key={i}
                cx={dot.cx}
                cy={dot.cy}
                r="4.5"
                fill="#DF6B30"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: phase >= 3 ? 1 : 0,
                  opacity: phase >= 3 ? 1 : 0,
                }}
                transition={{ duration: 0.35, delay: dot.delay }}
              />
            ))}

            {/* LOT connector path */}
            <motion.path
              d="M 178,56 L 196,83 L 178,110"
              stroke="#DF6B30"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: phase >= 3 ? 1 : 0,
                opacity: phase >= 3 ? 0.55 : 0,
              }}
              transition={{ duration: 0.6, delay: 0.35 }}
            />

            {/* Pulse rings on dots */}
            {phase >= 4 &&
              [
                { cx: 178, cy: 56 },
                { cx: 196, cy: 83 },
                { cx: 178, cy: 110 },
              ].map((dot, i) => (
                <motion.circle
                  key={`ring-${i}`}
                  cx={dot.cx}
                  cy={dot.cy}
                  r="4.5"
                  fill="none"
                  stroke="#DF6B30"
                  strokeWidth="1"
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{ scale: 3, opacity: 0 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeOut",
                  }}
                />
              ))}
          </svg>
        </div>

        {/* Brand name */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: phase >= 2 ? 1 : 0, y: phase >= 2 ? 0 : 16 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <span
            className="text-5xl font-bold tracking-[0.18em]"
            style={{ fontFamily: "var(--font-space-grotesk)", color: "#6C8CA5" }}
          >
            PI
          </span>
          <span style={{ color: "rgba(108,140,165,0.35)", fontSize: "2rem" }}>
            —
          </span>
          <span
            className="text-5xl font-bold tracking-[0.18em]"
            style={{ fontFamily: "var(--font-space-grotesk)", color: "#DF6B30" }}
          >
            LOT
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-xs tracking-[0.35em] uppercase"
          style={{ color: "rgba(169,169,169,0.55)" }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: phase >= 4 ? 1 : 0, y: phase >= 4 ? 0 : 8 }}
          transition={{ duration: 0.8 }}
        >
          Engineering The Future
        </motion.p>

        {/* Progress bar */}
        <div className="w-72 flex flex-col gap-2">
          <div
            className="h-px w-full overflow-hidden"
            style={{ backgroundColor: "rgba(108,140,165,0.15)" }}
          >
            <motion.div
              className="h-full"
              style={{
                backgroundColor: "#6C8CA5",
                width: `${progress}%`,
                transition: "width 0.08s linear",
                boxShadow: "0 0 8px rgba(108,140,165,0.6)",
              }}
            />
          </div>
          <motion.div
            className="flex justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 1 ? 1 : 0 }}
          >
            <span
              className="text-xs tracking-widest"
              style={{ color: "rgba(169,169,169,0.3)", fontFamily: "monospace" }}
            >
              SYS.INIT
            </span>
            <span
              className="text-xs tracking-widest font-mono tabular-nums"
              style={{ color: "rgba(108,140,165,0.6)" }}
            >
              {String(progress).padStart(3, "0")}%
            </span>
          </motion.div>
        </div>

        {/* Scan line decoration */}
        <motion.div
          className="absolute -inset-x-32 h-px"
          style={{ backgroundColor: "rgba(108,140,165,0.15)" }}
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}
