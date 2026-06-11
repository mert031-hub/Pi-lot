"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import Link from "next/link";

const STORAGE_KEY = "pilot_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Small delay so it doesn't flash immediately on load
      const t = setTimeout(() => setVisible(true), 2500);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = (type: "all" | "essential") => {
    localStorage.setItem(STORAGE_KEY, type);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-[90] lg:bottom-6 lg:left-6 lg:right-auto lg:max-w-md"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-label="Çerez onayı"
          aria-live="polite"
        >
          {/* Accent top line */}
          <div
            className="h-px lg:hidden"
            style={{
              background:
                "linear-gradient(to right, #6C8CA5 0%, #DF6B30 100%)",
            }}
          />

          <div
            className="p-5 lg:p-6 relative"
            style={{
              backgroundColor: "rgba(18,28,40,0.97)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(108,140,165,0.15)",
              borderBottom: "none",
            }}
          >
            {/* Close */}
            <button
              onClick={() => accept("essential")}
              className="absolute top-4 right-4 opacity-40 hover:opacity-100 transition-opacity duration-200"
              aria-label="Kapat (yalnızca zorunlu)"
              style={{ color: "#ffffff" }}
            >
              <X className="w-4 h-4" />
            </button>

            {/* Icon + title */}
            <div className="flex items-center gap-3 mb-3">
              <div
                className="flex items-center justify-center w-8 h-8 flex-shrink-0"
                style={{
                  backgroundColor: "rgba(108,140,165,0.15)",
                  color: "#6C8CA5",
                }}
              >
                <Cookie className="w-4 h-4" />
              </div>
              <span
                className="text-sm font-bold tracking-wider"
                style={{ color: "#ffffff", fontFamily: "var(--font-space-grotesk)" }}
              >
                Çerez Tercihleriniz
              </span>
            </div>

            {/* Body */}
            <p className="text-xs leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>
              Web sitemizde deneyiminizi iyileştirmek için çerezler kullanıyoruz.{" "}
              <Link
                href="/cerez-politikasi"
                className="underline transition-colors duration-200"
                style={{ color: "#6C8CA5" }}
              >
                Çerez Politikası
              </Link>{" "}
              ve{" "}
              <Link
                href="/kvkk"
                className="underline transition-colors duration-200"
                style={{ color: "#6C8CA5" }}
              >
                KVKK
              </Link>{" "}
              hakkında bilgi alabilirsiniz.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => accept("all")}
                className="flex-1 py-2.5 text-xs font-bold tracking-widest uppercase transition-all duration-300"
                style={{
                  backgroundColor: "#6C8CA5",
                  color: "#ffffff",
                  letterSpacing: "0.1em",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor =
                    "#4a6f8a")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor =
                    "#6C8CA5")
                }
              >
                Tümünü Kabul Et
              </button>
              <button
                onClick={() => accept("essential")}
                className="flex-1 py-2.5 text-xs font-semibold tracking-widest uppercase transition-all duration-300"
                style={{
                  border: "1px solid rgba(108,140,165,0.3)",
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
                  el.style.borderColor = "rgba(108,140,165,0.3)";
                  el.style.color = "rgba(255,255,255,0.6)";
                }}
              >
                Yalnızca Zorunlu
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
