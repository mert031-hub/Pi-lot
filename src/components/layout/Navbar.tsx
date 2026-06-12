"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, MessageCircle } from "lucide-react";
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
  const [eggClicks, setEggClicks] = useState(0);
  const [showEgg, setShowEgg] = useState(false);
  const eggTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const eggDismissRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleLogoEgg = () => {
    const next = eggClicks + 1;
    if (next >= 5) {
      setShowEgg(true);
      setEggClicks(0);
      if (eggTimerRef.current) clearTimeout(eggTimerRef.current);
      if (eggDismissRef.current) clearTimeout(eggDismissRef.current);
      eggDismissRef.current = setTimeout(() => setShowEgg(false), 5000);
    } else {
      setEggClicks(next);
      if (eggTimerRef.current) clearTimeout(eggTimerRef.current);
      eggTimerRef.current = setTimeout(() => setEggClicks(0), 2000);
    }
  };

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
          <Link href="/" aria-label="Pi-Lot Ana Sayfa" onClick={handleLogoEgg}>
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

          {/* Mobile toggle — engineering-style button */}
          <motion.button
            className="lg:hidden flex items-center justify-center w-10 h-10 transition-colors duration-300"
            style={{
              border: `1px solid ${mobileOpen ? "rgba(108,140,165,0.7)" : "rgba(108,140,165,0.28)"}`,
              backgroundColor: mobileOpen ? "rgba(108,140,165,0.12)" : "transparent",
            }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={mobileOpen}
            whileTap={{ scale: 0.93 }}
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div
                  key="x"
                  initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.18 }}
                >
                  <X className="w-5 h-5" style={{ color: "#6C8CA5" }} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu className="w-5 h-5 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.header>

      {/* Logo easter egg */}
      <AnimatePresence>
        {showEgg && (
          <motion.div
            className="fixed inset-0 z-[150] flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="px-10 py-8 text-center max-w-xs relative"
              style={{
                backgroundColor: "rgba(13,24,33,0.97)",
                border: "1px solid rgba(108,140,165,0.3)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
              initial={{ y: 24, scale: 0.92, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: -24, scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Corner accents */}
              <span className="absolute top-0 left-0 w-4 h-4" style={{ borderTop: "1px solid rgba(223,107,48,0.5)", borderLeft: "1px solid rgba(223,107,48,0.5)" }} />
              <span className="absolute bottom-0 right-0 w-4 h-4" style={{ borderBottom: "1px solid rgba(223,107,48,0.5)", borderRight: "1px solid rgba(223,107,48,0.5)" }} />
              <motion.div
                className="text-5xl font-bold mb-5"
                style={{ fontFamily: "var(--font-space-grotesk)", color: "#6C8CA5" }}
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                π
              </motion.div>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ fontFamily: "var(--font-space-grotesk)", color: "rgba(255,255,255,0.78)" }}
              >
                &ldquo;π never ends.<br />Neither does improvement.&rdquo;
              </p>
              <p
                className="font-mono text-[9px] tracking-[0.2em]"
                style={{ color: "rgba(108,140,165,0.38)" }}
              >
                3.14159265358979323846...
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col overflow-hidden"
            style={{
              background: "rgba(10,18,28,0.97)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
            }}
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 100% 0 0)" }}
            transition={{ duration: 0.48, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Background grid decoration */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(108,140,165,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(108,140,165,0.05) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
              aria-hidden="true"
            />

            {/* Ambient glow — bottom right */}
            <div
              className="absolute bottom-0 right-0 w-80 h-80 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 100% 100%, rgba(223,107,48,0.06) 0%, transparent 65%)",
              }}
              aria-hidden="true"
            />

            {/* ── HEADER SPACER (matches navbar height) ── */}
            <div className="flex-shrink-0" style={{ height: 68 }} />

            {/* Top accent line */}
            <motion.div
              className="mx-6 flex-shrink-0"
              style={{
                height: 1,
                background: "linear-gradient(to right, #6C8CA5 0%, rgba(108,140,165,0.15) 100%)",
              }}
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* ── NAV LINKS ── */}
            <nav
              className="flex-1 flex flex-col justify-center px-6 py-6 overflow-y-auto"
              aria-label="Mobil navigasyon"
            >
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.sectionId;
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{
                      delay: 0.1 + i * 0.055,
                      duration: 0.42,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.sectionId)}
                      className="flex items-center justify-between py-4 group"
                      style={{
                        borderLeft: `2px solid ${isActive ? "#6C8CA5" : "rgba(108,140,165,0.1)"}`,
                        paddingLeft: 16,
                        backgroundColor: isActive
                          ? "rgba(108,140,165,0.06)"
                          : "transparent",
                        transition: "border-color 0.25s, background-color 0.25s",
                      }}
                    >
                      <div className="flex items-center gap-5">
                        {/* Index number */}
                        <span
                          className="font-mono text-xs tabular-nums flex-shrink-0 transition-colors duration-200"
                          style={{
                            color: isActive
                              ? "#6C8CA5"
                              : "rgba(108,140,165,0.28)",
                          }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {/* Label */}
                        <span
                          className="text-xl font-medium transition-colors duration-200"
                          style={{
                            fontFamily: "var(--font-space-grotesk)",
                            color: isActive
                              ? "#ffffff"
                              : "rgba(255,255,255,0.7)",
                          }}
                        >
                          {link.label}
                        </span>
                      </div>

                      {/* Active arrow — spring animated */}
                      {isActive && (
                        <motion.span
                          layoutId="mobileActiveArrow"
                          className="text-sm flex-shrink-0 mr-2"
                          style={{ color: "#6C8CA5" }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 28,
                          }}
                        >
                          →
                        </motion.span>
                      )}
                    </a>
                  </motion.div>
                );
              })}
            </nav>

            {/* ── BOTTOM CTA AREA ── */}
            <motion.div
              className="flex-shrink-0 px-6"
              style={{
                paddingBottom: "max(1.5rem, env(safe-area-inset-bottom, 1.5rem))",
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ delay: 0.38, duration: 0.4 }}
            >
              {/* Separator */}
              <div
                className="mb-5"
                style={{ height: 1, backgroundColor: "rgba(108,140,165,0.1)" }}
              />

              {/* CTA buttons */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <a
                  href="tel:+905307456800"
                  className="flex items-center justify-center gap-2.5 py-3.5 text-xs font-semibold tracking-widest uppercase transition-all duration-200 active:scale-95"
                  style={{
                    border: "1px solid rgba(108,140,165,0.4)",
                    color: "#6C8CA5",
                    letterSpacing: "0.08em",
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Ara</span>
                </a>
                <a
                  href="https://wa.me/905307456800"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 py-3.5 text-xs font-semibold tracking-widest uppercase transition-all duration-200 active:scale-95"
                  style={{
                    backgroundColor: "rgba(37,211,102,0.12)",
                    border: "1px solid rgba(37,211,102,0.3)",
                    color: "#25D366",
                    letterSpacing: "0.08em",
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  <MessageCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Pi footer detail */}
              <div className="flex items-center justify-between">
                <span
                  className="font-mono text-[9px] tracking-[0.15em]"
                  style={{ color: "rgba(108,140,165,0.22)" }}
                >
                  π ≈ 3.14159265358979
                </span>
                <span
                  className="font-mono text-[9px] tracking-[0.15em]"
                  style={{ color: "rgba(223,107,48,0.22)" }}
                >
                  PLT-2025
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
