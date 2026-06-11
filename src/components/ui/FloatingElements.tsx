"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { MessageCircle, ArrowUp } from "lucide-react";

export default function FloatingElements() {
  const [showTop, setShowTop] = useState(false);
  const { scrollYProgress } = useScroll();
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
      {/* Scroll progress indicator (top) */}
      <motion.div
        className="fixed top-0 left-0 z-[60] h-[2px] origin-left"
        style={{
          scaleX: scrollYProgress,
          backgroundColor: "#6C8CA5",
          boxShadow: "0 0 8px rgba(108,140,165,0.8)",
        }}
      />

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

        {/* Progress badge */}
        <AnimatePresence>
          {showTop && (
            <motion.div
              className="flex items-center justify-center w-11 h-6 text-xs font-mono"
              style={{
                backgroundColor: "rgba(26,38,52,0.8)",
                border: "1px solid rgba(108,140,165,0.2)",
                color: "rgba(108,140,165,0.6)",
                backdropFilter: "blur(10px)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {progress}%
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
