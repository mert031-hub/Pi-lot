"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0d1821" }}
    >
      {/* Animated grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(108,140,165,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(108,140,165,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(108,140,165,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Corner brackets */}
      {[
        { style: { top: "2rem", left: "2rem", borderTop: "1px solid rgba(108,140,165,0.3)", borderLeft: "1px solid rgba(108,140,165,0.3)" } },
        { style: { top: "2rem", right: "2rem", borderTop: "1px solid rgba(108,140,165,0.3)", borderRight: "1px solid rgba(108,140,165,0.3)" } },
        { style: { bottom: "2rem", left: "2rem", borderBottom: "1px solid rgba(108,140,165,0.3)", borderLeft: "1px solid rgba(108,140,165,0.3)" } },
        { style: { bottom: "2rem", right: "2rem", borderBottom: "1px solid rgba(108,140,165,0.3)", borderRight: "1px solid rgba(108,140,165,0.3)" } },
      ].map((corner, i) => (
        <motion.div
          key={i}
          className="absolute w-12 h-12"
          style={corner.style}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: i * 0.07 }}
        />
      ))}

      {/* Main content */}
      <div className="relative text-center px-6 max-w-lg">
        {/* 404 watermark */}
        <motion.div
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none select-none"
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            style={{
              fontSize: "clamp(10rem, 30vw, 18rem)",
              fontWeight: 900,
              fontFamily: "var(--font-space-grotesk)",
              color: "rgba(108,140,165,0.05)",
              lineHeight: 1,
              letterSpacing: "-0.05em",
            }}
          >
            404
          </span>
        </motion.div>

        {/* Pi logo animated */}
        <motion.div
          className="flex items-center justify-center mb-8 relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <svg viewBox="0 0 120 80" fill="none" className="w-24 h-16" aria-label="Pi-Lot Logo">
            {/* Pi top bar */}
            <motion.line
              x1="10" y1="20" x2="70" y2="20"
              stroke="#6C8CA5" strokeWidth="3" strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            />
            {/* Pi left leg */}
            <motion.path
              d="M 28,20 C 28,20 26,45 23,68"
              stroke="#6C8CA5" strokeWidth="3" strokeLinecap="round" fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.7, delay: 0.65, ease: "easeOut" }}
            />
            {/* Pi right leg */}
            <motion.path
              d="M 52,20 C 52,20 50,45 47,68"
              stroke="#6C8CA5" strokeWidth="3" strokeLinecap="round" fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.7, delay: 0.85, ease: "easeOut" }}
            />
            {/* Dash */}
            <motion.line
              x1="80" y1="44" x2="90" y2="44"
              stroke="#DF6B30" strokeWidth="2.5" strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, delay: 1.1 }}
            />
            {/* LOT dots */}
            {[{ cx: 104, cy: 30 }, { cx: 112, cy: 44 }, { cx: 104, cy: 58 }].map((dot, i) => (
              <motion.circle
                key={i} cx={dot.cx} cy={dot.cy} r="3.5" fill="#DF6B30"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1.2 + i * 0.12 }}
              />
            ))}
            {/* LOT connector */}
            <motion.path
              d="M 104,30 L 112,44 L 104,58"
              stroke="#DF6B30" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            />
          </svg>
        </motion.div>

        {/* Text content */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <p
            className="text-xs font-bold tracking-[0.3em] uppercase mb-4"
            style={{ color: "#DF6B30" }}
          >
            Hata 404
          </p>
          <h1
            className="text-3xl lg:text-4xl font-bold mb-4 text-white"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Sayfa Bulunamadı
          </h1>
          <p
            className="text-base leading-relaxed mb-10"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Aradığınız sayfa mevcut değil ya da taşınmış olabilir.
            <br />
            Ana sayfamızdan devam edebilirsiniz.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold tracking-widest uppercase text-white transition-all duration-300"
              style={{ backgroundColor: "#6C8CA5", letterSpacing: "0.1em" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor = "#4a6f8a")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor = "#6C8CA5")
              }
            >
              <Home className="w-4 h-4" />
              Ana Sayfaya Dön
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold tracking-widest uppercase transition-all duration-300"
              style={{
                border: "1px solid rgba(108,140,165,0.35)",
                color: "rgba(255,255,255,0.6)",
                letterSpacing: "0.1em",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(108,140,165,0.7)";
                el.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(108,140,165,0.35)";
                el.style.color = "rgba(255,255,255,0.6)";
              }}
            >
              <ArrowLeft className="w-4 h-4" />
              Geri Dön
            </button>
          </div>
        </motion.div>

        {/* Scanning line animation */}
        <motion.div
          className="absolute left-0 right-0 h-px pointer-events-none"
          style={{ backgroundColor: "rgba(108,140,165,0.12)" }}
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
