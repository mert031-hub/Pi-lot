"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { MessageCircle, ArrowUp } from "lucide-react";

export default function FloatingElements() {
  const [showTop, setShowTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  const barWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => setProgress(Math.round(v * 100)));
  }, [scrollYProgress]);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 z-[60] h-[2px]"
        style={{
          width: barWidth,
          backgroundColor: "#6C8CA5",
          boxShadow: "0 0 8px rgba(108,140,165,0.8)",
        }}
      >
        {/* π dot at the leading edge */}
        <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center"
          style={{ width: 16, height: 16, marginRight: -8 }}
          animate={{ opacity: progress > 1 ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: "#DF6B30", boxShadow: "0 0 6px rgba(223,107,48,0.9)" }}
          />
        </motion.div>
      </motion.div>

      {/* WhatsApp CTA */}
      <motion.div
        className="fixed bottom-8 right-6 lg:right-8 z-50 flex flex-col items-end gap-3"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Back to top */}
        <AnimatePresence>
          {showTop && (
            <motion.button
              onClick={scrollToTop}
              className="flex items-center justify-center w-11 h-11 transition-all duration-300 group"
              style={{
                backgroundColor: "rgba(26,38,52,0.9)",
                border: "1px solid rgba(108,140,165,0.3)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              whileHover={{
                borderColor: "#6C8CA5",
                backgroundColor: "rgba(108,140,165,0.15)",
                y: -2,
              }}
              aria-label="Yukarı çık"
            >
              <ArrowUp className="w-4 h-4" style={{ color: "#6C8CA5" }} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Circular progress badge — Pi circle reference */}
        <AnimatePresence>
          {showTop && (
            <motion.div
              className="relative flex items-center justify-center w-11 h-11"
              style={{
                backgroundColor: "rgba(26,38,52,0.85)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                className="absolute inset-0"
                style={{ transform: "rotate(-90deg)" }}
                aria-hidden="true"
              >
                {/* Track */}
                <circle
                  cx="22" cy="22" r="17"
                  fill="none"
                  stroke="rgba(108,140,165,0.12)"
                  strokeWidth="1.5"
                />
                {/* Arc — 2πr relationship */}
                <circle
                  cx="22" cy="22" r="17"
                  fill="none"
                  stroke="#6C8CA5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 17}
                  strokeDashoffset={2 * Math.PI * 17 * (1 - progress / 100)}
                  style={{ transition: "stroke-dashoffset 0.15s linear" }}
                />
              </svg>
              <span
                className="relative z-10 font-mono tabular-nums"
                style={{ fontSize: "9px", color: "rgba(108,140,165,0.72)" }}
              >
                {progress}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp button */}
        <motion.a
          href="https://wa.me/905307456800"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center gap-2 px-4 py-3 text-xs font-semibold text-white tracking-wider overflow-hidden group"
          style={{ backgroundColor: "#25D366" }}
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          aria-label="WhatsApp ile iletişime geç"
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 -skew-x-12"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
              x: "-100%",
            }}
            animate={{ x: ["−100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          />
          <MessageCircle className="w-4 h-4 relative z-10" />
          <span className="relative z-10 hidden sm:inline">WhatsApp</span>
        </motion.a>
      </motion.div>
    </>
  );
}
