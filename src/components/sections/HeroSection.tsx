"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronRight, Phone, ArrowDown } from "lucide-react";

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

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

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
      aria-label="Hero"
    >
      {/* Video / background layer */}
      <motion.div className="absolute inset-0" style={{ y }}>
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

        {/* Fallback dark gradient when no video */}
        <div
          className="absolute inset-0"
          style={{
            background: videoReady
              ? undefined
              : "linear-gradient(135deg, #0d1821 0%, #1a2634 40%, #2C3E50 100%)",
          }}
        />

        {/* Main overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(105deg, rgba(13,24,33,0.93) 0%, rgba(26,38,52,0.72) 45%, rgba(13,24,33,0.35) 100%),
              linear-gradient(to bottom, rgba(13,24,33,0.1) 50%, rgba(13,24,33,0.85) 100%)
            `,
          }}
        />

        {/* Technical grid */}
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

        {/* Diagonal accent line */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="absolute"
            style={{
              top: "10%",
              left: "-5%",
              width: "55%",
              height: "1px",
              backgroundColor: "rgba(108,140,165,0.12)",
              transform: "rotate(-15deg) scaleX(1.5)",
            }}
          />
          <div
            className="absolute"
            style={{
              top: "30%",
              left: "-5%",
              width: "40%",
              height: "1px",
              backgroundColor: "rgba(223,107,48,0.08)",
              transform: "rotate(-15deg) scaleX(1.5)",
            }}
          />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10"
        style={{ opacity }}
      >
        {/* Expertise ticker */}
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <span
            className="text-xs font-semibold tracking-[0.25em] uppercase"
            style={{ color: "#DF6B30" }}
          >
            Uzmanlık
          </span>
          <div
            className="w-px h-4"
            style={{ backgroundColor: "rgba(108,140,165,0.35)" }}
          />
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

        {/* Main heading */}
        <motion.h1
          className="mb-8 leading-[0.92]"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "clamp(3.2rem, 8vw, 7rem)",
            fontWeight: 700,
            color: "#ffffff",
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block">Üretimin</span>
          <span className="block" style={{ color: "#6C8CA5" }}>
            Kalbinden,
          </span>
          <span className="block mt-1">Mühendisliğin</span>
          <span className="block" style={{ color: "#DF6B30" }}>
            Geleceğine
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="max-w-xl leading-relaxed mb-10"
          style={{
            fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
            color: "rgba(255,255,255,0.6)",
          }}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          Sonsuz mühendislik vizyonunu,<br />
          izlenebilir üretim kalitesiyle buluşturuyoruz.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <a
            href="#iletisim"
            className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300"
            style={{
              backgroundColor: "#6C8CA5",
              color: "#ffffff",
              letterSpacing: "0.1em",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor = "#4a6f8a")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor = "#6C8CA5")
            }
          >
            Projeni Anlat
            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="tel:+905307456800"
            className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300"
            style={{
              border: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.82)",
              letterSpacing: "0.1em",
            }}
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
        </motion.div>
      </motion.div>

      {/* Stats panel */}
      <motion.div
        className="absolute right-6 lg:right-10 bottom-28 lg:bottom-20 grid grid-cols-2 gap-3 w-56"
        initial={{ opacity: 0, x: 32 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        style={{ opacity }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="p-3 corner-accent"
            style={{
              background: "rgba(13,24,33,0.65)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              borderLeft: "2px solid rgba(108,140,165,0.35)",
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
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
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <span
          className="text-xs tracking-[0.2em] uppercase"
          style={{ color: "rgba(255,255,255,0.32)" }}
        >
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
