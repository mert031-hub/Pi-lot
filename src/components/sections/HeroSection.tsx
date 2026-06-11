"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { ChevronRight, Phone, ArrowDown } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

const stats = [
  { value: "200+", label: "Tamamlanan\nProje" },
  { value: "%35+", label: "Verimlilik\nArtışı" },
  { value: "50+", label: "Memnun\nMüşteri" },
  { value: "15+", label: "Yıl\nDeneyim" },
];

const expertiseTicker = [
  "Üretim Süreci Yönetimi",
  "ISO Standartları",
  "Robotik Sistemler",
  "Maliyet Optimizasyonu",
  "Atıl Kapasite Yönetimi",
];

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [tickerIdx, setTickerIdx] = useState(0);

  // Scroll parallax
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scrollY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Mouse parallax
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springCfg = { stiffness: 80, damping: 20, mass: 1 };
  const mouseX = useSpring(rawX, springCfg);
  const mouseY = useSpring(rawY, springCfg);

  // Different layers at different depths
  const bgX = useTransform(mouseX, [-1, 1], [-18, 18]);
  const bgY = useTransform(mouseY, [-1, 1], [-10, 10]);
  const gridX = useTransform(mouseX, [-1, 1], [-8, 8]);
  const gridY = useTransform(mouseY, [-1, 1], [-4, 4]);
  const contentX = useTransform(mouseX, [-1, 1], [10, -10]);
  const contentY = useTransform(mouseY, [-1, 1], [6, -6]);
  const statsX = useTransform(mouseX, [-1, 1], [16, -16]);
  const statsY = useTransform(mouseY, [-1, 1], [10, -10]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      rawX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
      rawY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
    },
    [rawX, rawY]
  );

  const handleMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  useEffect(() => {
    const fallback = setTimeout(() => setVideoReady(true), 600);
    return () => clearTimeout(fallback);
  }, []);

  useEffect(() => {
    const id = setInterval(
      () => setTickerIdx((prev) => (prev + 1) % expertiseTicker.length),
      2800
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen min-h-[640px] flex items-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label="Hero"
      style={{ perspective: "1200px" }}
    >
      {/* Background layer — deepest, moves most */}
      <motion.div className="absolute inset-0" style={{ y: scrollY }}>
        <motion.div className="absolute inset-0" style={{ x: bgX, y: bgY }}>
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onCanPlay={() => setVideoReady(true)}
            aria-hidden="true"
          >
            <source src="/video/hero.mp4" type="video/mp4" />
          </video>

          {/* Fallback gradient when no video */}
          {!videoReady && (
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, #0d1821 0%, #1a2634 40%, #2C3E50 100%)" }}
            />
          )}

          {/* Color overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(105deg, rgba(13,24,33,0.93) 0%, rgba(26,38,52,0.72) 45%, rgba(13,24,33,0.35) 100%),
                linear-gradient(to bottom, rgba(13,24,33,0.1) 50%, rgba(13,24,33,0.85) 100%)
              `,
            }}
          />
        </motion.div>

        {/* Grid layer — mid depth */}
        <motion.div
          className="absolute inset-0"
          style={{ x: gridX, y: gridY }}
        >
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(108,140,165,1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(108,140,165,1) 1px, transparent 1px)
              `,
              backgroundSize: "88px 88px",
            }}
          />
          {/* Pi digits — subliminal brand DNA at ~3% opacity */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
            {[
              { top: "11%", text: "3 · 1 4 1 5 9 2 6 5 3 5  8 9 7 9 3 2 3 8 4 6  2 6 4 3 3 8 3 2 7 9  5 0 2 8 8 4 1 9 7 1  6 9 3 9 9 3 7 5 1 0" },
              { top: "34%", text: "5 8 2 0 9 7 4 9 4 4 5  9 2 3 0 7 8 1 6 4 0  6 2 8 6 2 0 8 9 9 8  6 2 8 0 3 4 8 2 5 3  4 2 1 1 7 0 6 7 9 8" },
              { top: "57%", text: "8 2 1 4 8 0 8 6 5 1 3  2 8 2 3 0 6 6 4 7 0  9 3 8 4 4 6 0 9 5 5  0 5 8 2 2 3 1 7 2 5  3 5 9 4 0 8 1 2 8 4" },
              { top: "79%", text: "8 1 1 1 7 4 5 0 2 8 4  1 0 2 7 0 1 9 3 8 5  2 1 1 0 5 5 5 9 6 4  4 6 2 2 9 4 8 9 5 4  9 3 0 3 8 1 9 6 4 4" },
            ].map((row, i) => (
              <div
                key={i}
                className="absolute left-0 right-0 text-center font-mono"
                style={{
                  top: row.top,
                  color: "rgba(108,140,165,1)",
                  opacity: 0.028,
                  fontSize: "10px",
                  letterSpacing: "0.3em",
                  lineHeight: 1,
                }}
              >
                {row.text}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Technical HUD overlays — fixed position decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* TL coordinate */}
        <motion.div
          className="absolute top-24 left-6 lg:left-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: videoReady ? 1 : 0, x: videoReady ? 0 : -20 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <span className="font-mono text-[10px] tracking-widest" style={{ color: "rgba(108,140,165,0.35)" }}>
            41.0082° N / 28.9784° E
          </span>
        </motion.div>
        {/* TR status */}
        <motion.div
          className="absolute top-24 right-6 lg:right-10 text-right"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: videoReady ? 1 : 0, x: videoReady ? 0 : 20 }}
          transition={{ delay: 1.7, duration: 0.6 }}
        >
          <div className="flex items-center justify-end gap-2">
            <motion.span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "#6C8CA5" }}
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
            <span className="font-mono text-[10px] tracking-widest" style={{ color: "rgba(108,140,165,0.35)" }}>
              SYS.ONLINE
            </span>
          </div>
          <div className="mt-1 font-mono text-[10px] tracking-widest" style={{ color: "rgba(108,140,165,0.2)" }}>
            PLT-2025 / AKTIF
          </div>
        </motion.div>
      </div>

      {/* Content — foreground layer, moves opposite to bg */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10"
        style={{ opacity: scrollOpacity, x: contentX, y: contentY }}
      >
        {/* Expertise ticker */}
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: "#DF6B30" }}>
            Uzmanlık
          </span>
          <div className="w-px h-4" style={{ backgroundColor: "rgba(108,140,165,0.35)" }} />
          <AnimatePresence mode="wait">
            <motion.span
              key={tickerIdx}
              className="text-xs tracking-[0.15em] uppercase"
              style={{ color: "rgba(255,255,255,0.55)" }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {expertiseTicker[tickerIdx]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Main heading — word-by-word stagger reveal */}
        <div className="mb-8 overflow-hidden">
          {[
            { text: "Üretimin", color: "white" },
            { text: "Kalbinden,", color: "#6C8CA5" },
            { text: "Mühendisliğin", color: "white", mt: true },
            { text: "Geleceğine", color: "#DF6B30" },
          ].map((line, i) => (
            <div key={i} className={`overflow-hidden ${line.mt ? "mt-1" : ""}`}>
              <motion.h1
                className="leading-[0.92] block"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "clamp(3.2rem, 8vw, 7rem)",
                  fontWeight: 700,
                  color: line.color,
                  lineHeight: 1.05,
                }}
                initial={{ y: "105%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 0.35 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {line.text}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          className="max-w-xl leading-relaxed mb-10"
          style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)", color: "rgba(255,255,255,0.6)" }}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
        >
          Sonsuz mühendislik vizyonunu,<br />
          izlenebilir üretim kalitesiyle buluşturuyoruz.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <MagneticButton strength={0.25}>
            <a
              href="#iletisim"
              className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300"
              style={{ backgroundColor: "#6C8CA5", color: "#ffffff", letterSpacing: "0.1em" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#4a6f8a")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#6C8CA5")}
            >
              Projeni Anlat
              <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </MagneticButton>
          <MagneticButton strength={0.22}>
            <a
              href="tel:+905307456800"
              className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300"
              style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.82)", letterSpacing: "0.1em" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "#DF6B30";
                el.style.color = "#DF6B30";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.2)";
                el.style.color = "rgba(255,255,255,0.82)";
              }}
            >
              <Phone className="w-4 h-4" />
              Ücretsiz Ön Görüşme
            </a>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Stats — most foreground, moves most with mouse */}
      <motion.div
        className="absolute right-6 lg:right-10 bottom-28 lg:bottom-20 grid grid-cols-2 gap-3 w-56 z-10"
        initial={{ opacity: 0, x: 32 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        style={{ opacity: scrollOpacity, x: statsX, y: statsY }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="p-3"
            style={{
              background: "rgba(13,24,33,0.65)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              borderLeft: "2px solid rgba(108,140,165,0.35)",
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 + i * 0.1 }}
          >
            <div
              className="text-2xl font-bold tabular-nums mb-0.5"
              style={{ fontFamily: "var(--font-space-grotesk)", color: "#6C8CA5" }}
            >
              {stat.value}
            </div>
            <div
              className="text-xs leading-tight whitespace-pre-line"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(255,255,255,0.32)" }}>
          Keşfet
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" style={{ color: "rgba(108,140,165,0.55)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
