"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function MobileCTABar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Top accent line */}
          <div
            className="h-px"
            style={{
              background:
                "linear-gradient(to right, #6C8CA5 0%, #DF6B30 100%)",
            }}
          />

          <div
            className="grid grid-cols-2"
            style={{
              backgroundColor: "rgba(13,24,33,0.97)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            {/* Call button */}
            <a
              href="tel:+905307456800"
              className="flex items-center justify-center gap-2.5 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-200 active:scale-95"
              style={{
                color: "#6C8CA5",
                borderRight: "1px solid rgba(108,140,165,0.12)",
                letterSpacing: "0.08em",
              }}
            >
              <Phone className="w-4 h-4" />
              Ara
            </a>

            {/* WhatsApp button */}
            <a
              href="https://wa.me/905307456800"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-200 active:scale-95"
              style={{ color: "#25D366", letterSpacing: "0.08em" }}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Safe area for iOS home bar */}
          <div
            style={{
              height: "env(safe-area-inset-bottom, 0px)",
              backgroundColor: "rgba(13,24,33,0.97)",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
