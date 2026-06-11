"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "#hero", label: "Ana Sayfa", sectionId: "hero" },
  { href: "#hakkimizda", label: "Hakkımızda", sectionId: "hakkimizda" },
  { href: "#uzmanliklar", label: "Uzmanlıklar", sectionId: "uzmanliklar" },
  { href: "#ekibimiz", label: "Ekibimiz", sectionId: "ekibimiz" },
  { href: "#surec", label: "Referans Süreç", sectionId: "surec" },
  { href: "#iletisim", label: "İletişim", sectionId: "iletisim" },
];

function PiLotLogo({ size = 1 }: { size?: number }) {
  const s = size;
  return (
    <div className="flex items-center gap-1.5">
      <svg width={28 * s} height={26 * s} viewBox="0 0 28 26" fill="none" aria-hidden="true">
        <line x1="2" y1="6" x2="26" y2="6" stroke="#6C8CA5" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 8,6 C 8,6 7,13 5,23" stroke="#6C8CA5" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M 18,6 C 18,6 17,13 15,23" stroke="#6C8CA5" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </svg>
      <span style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 18 * s, fontWeight: 700, color: "#6C8CA5", letterSpacing: "0.04em", lineHeight: 1 }}>—</span>
      <span style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 18 * s, fontWeight: 700, color: "#DF6B30", letterSpacing: "0.08em", lineHeight: 1 }}>LOT</span>
    </div>
  );
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const visibilityMap = new Map<string, number>();

    const pickMostVisible = () => {
      let best = "";
      let bestRatio = -1;
      visibilityMap.forEach((ratio, id) => {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          best = id;
        }
      });
      if (best) setActive(best);
    };

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      visibilityMap.set(id, 0);

      const obs = new IntersectionObserver(
        ([entry]) => {
          visibilityMap.set(id, entry.intersectionRatio);
          pickMostVisible();
        },
        {
          rootMargin: "-80px 0px -30% 0px",
          threshold: Array.from({ length: 21 }, (_, i) => i * 0.05),
        }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);

  return active;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const sectionIds = navLinks.map((l) => l.sectionId);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(sectionId);
    if (!el) return;
    const offset = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(18,28,40,0.94)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(108,140,165,0.12)" : "none",
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between transition-all duration-500"
          style={{ paddingTop: scrolled ? "0.875rem" : "1.25rem", paddingBottom: scrolled ? "0.875rem" : "1.25rem" }}
        >
          <Link href="/" aria-label="Pi-Lot Ana Sayfa">
            <motion.div animate={{ scale: scrolled ? 0.88 : 1 }} transition={{ duration: 0.3 }}>
              <PiLotLogo />
            </motion.div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Ana navigasyon">
            {navLinks.map((link) => {
              const isActive = activeSection === link.sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.sectionId)}
                  className="relative text-sm font-medium transition-all duration-300 group"
                  style={{ color: isActive ? "#ffffff" : "rgba(255,255,255,0.62)" }}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  {/* Active indicator line */}
                  <span
                    className="absolute -bottom-0.5 left-0 h-px transition-all duration-400"
                    style={{
                      width: isActive ? "100%" : "0%",
                      backgroundColor: "#6C8CA5",
                    }}
                  />
                  {/* Hover indicator (only when not active) */}
                  {!isActive && (
                    <span
                      className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                      style={{ backgroundColor: "rgba(108,140,165,0.45)" }}
                    />
                  )}
                  {/* Active dot */}
                  {isActive && (
                    <motion.span
                      className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ backgroundColor: "#6C8CA5" }}
                      layoutId="activeNavDot"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Phone CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+905307456800"
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-widest uppercase transition-all duration-300"
              style={{ border: "1px solid rgba(108,140,165,0.45)", color: "#6C8CA5", letterSpacing: "0.1em" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "#6C8CA5";
                el.style.color = "#ffffff";
                el.style.borderColor = "#6C8CA5";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "transparent";
                el.style.color = "#6C8CA5";
                el.style.borderColor = "rgba(108,140,165,0.45)";
              }}
              aria-label="Bizi arayın"
            >
              <Phone className="w-3.5 h-3.5" />
              0530 745 68 00
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={mobileOpen}
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col"
            style={{ background: "rgba(13,24,33,0.98)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-7 pt-20">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.sectionId;
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 24 }}
                    transition={{ delay: 0.05 + i * 0.06, duration: 0.4 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.sectionId)}
                      className="text-3xl font-light transition-colors duration-200 flex items-center gap-3"
                      style={{
                        fontFamily: "var(--font-space-grotesk)",
                        color: isActive ? "#6C8CA5" : "rgba(255,255,255,0.85)",
                      }}
                    >
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#6C8CA5" }} />
                      )}
                      {link.label}
                    </a>
                  </motion.div>
                );
              })}
              <motion.a
                href="tel:+905307456800"
                className="mt-4 flex items-center gap-3 px-8 py-3 text-sm font-semibold tracking-widest uppercase"
                style={{ border: "1px solid rgba(108,140,165,0.5)", color: "#6C8CA5" }}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ delay: 0.42, duration: 0.4 }}
                onClick={() => setMobileOpen(false)}
              >
                <Phone className="w-4 h-4" />
                0530 745 68 00
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
