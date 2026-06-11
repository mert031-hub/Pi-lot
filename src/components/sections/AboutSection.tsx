"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrambleText from "@/components/ui/ScrambleText";

const timelineSteps = [
  {
    symbol: "π",
    title: "Sonsuzluk",
    desc: "Pi sayısı, matematiksel olarak sonsuza uzanan, hiç tekrar etmeyen, mükemmel bir döngüyü temsil eder. Bu sonsuzluk; arayışı, mükemmeliyeti ve sınırsız potansiyeli simgeler.",
    color: "#6C8CA5",
  },
  {
    symbol: "∑",
    title: "Bilim & Analiz",
    desc: "Veriye dayalı düşünce, sistematik yaklaşım ve bilimsel metot. Her problem bir denklem, her çözüm bir ispattır.",
    color: "#7a9db6",
  },
  {
    symbol: "⚙",
    title: "Mühendislik",
    desc: "Teoriden pratiğe. Bilimi üretime dönüştüren disiplin. CAD çizgilerinden üretim hatlarına uzanan köprü.",
    color: "#8aadc5",
  },
  {
    symbol: "🏭",
    title: "Üretim",
    desc: "Tasarımın metale, planın gerçekliğe dönüştüğü yer. Her kaynak noktası, her montaj adımı, her kalite kontrolü bir mühendislik kararıdır.",
    color: "#6C8CA5",
  },
  {
    symbol: "✓",
    title: "Kalite",
    desc: "ISO standartları çerçevesinde, sıfır hata hedefiyle. Kalite bir süreç değil, bir kültürdür.",
    color: "#DF6B30",
  },
  {
    symbol: "#",
    title: "İzlenebilirlik (Lot)",
    desc: "Her bileşenin, her sürecin, her kararın takip edilebildiği şeffaf bir yapı. Lot numarasından ürün ömrü sonuna kadar tam iz.",
    color: "#c05828",
  },
  {
    symbol: "π-Lot",
    title: "Pi-Lot",
    desc: "Sonsuz mühendislik vizyonunu, izlenebilir üretim kalitesiyle buluşturan köprü. Buraya kadar gelen her adım, Pi-Lot'un DNA'sını oluşturur.",
    color: "#DF6B30",
    final: true,
  },
];

function TimelineItem({
  step,
  index,
}: {
  step: (typeof timelineSteps)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="flex gap-8 lg:gap-12 group"
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Symbol node */}
      <div className="flex flex-col items-center flex-shrink-0">
        <motion.div
          className="flex items-center justify-center w-14 h-14 rounded-none relative"
          style={{
            border: `1px solid ${step.color}`,
            backgroundColor: step.final
              ? step.color
              : "rgba(108,140,165,0.06)",
          }}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.2 }}
        >
          <span
            className="text-lg font-bold"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              color: step.final ? "#ffffff" : step.color,
              fontSize: step.symbol.length > 2 ? "0.75rem" : "1.25rem",
            }}
          >
            {step.symbol}
          </span>
          {!step.final && (
            <motion.div
              className="absolute inset-0 rounded-none"
              style={{ border: `1px solid ${step.color}` }}
              animate={{ scale: [1, 1.4], opacity: [0.4, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
            />
          )}
        </motion.div>
        {/* Vertical connector */}
        {index < timelineSteps.length - 1 && (
          <motion.div
            className="w-px flex-1 mt-2 min-h-[60px]"
            style={{ backgroundColor: "rgba(108,140,165,0.2)" }}
            initial={{ scaleY: 0, originY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-10 pt-2 flex-1">
        <h3
          className="text-xl font-bold mb-3"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            color: step.final ? "#DF6B30" : "#2C3E50",
          }}
        >
          {step.title}
        </h3>
        <p
          className="text-base leading-relaxed max-w-md"
          style={{ color: "rgba(44,62,80,0.65)" }}
        >
          {step.desc}
        </p>
        {step.final && (
          <motion.a
            href="#iletisim"
            className="inline-flex items-center gap-2 mt-5 text-sm font-semibold tracking-widest uppercase transition-colors duration-200"
            style={{ color: "#DF6B30", letterSpacing: "0.1em" }}
            whileHover={{ x: 4 }}
          >
            Birlikte Çalışalım →
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-100px" });

  return (
    <section
      id="hakkimizda"
      className="py-28 lg:py-36 relative overflow-hidden"
      aria-label="Hakkımızda"
    >
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div
        className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none"
        style={{
          background:
            "linear-gradient(to left, rgba(108,140,165,0.04) 0%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        {/* Section header */}
        <motion.div
          ref={headRef}
          className="mb-20 max-w-2xl"
          initial={{ opacity: 0, y: 32 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="h-px w-12"
              style={{ backgroundColor: "#DF6B30" }}
            />
            <span
              className="text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ color: "#DF6B30" }}
            >
              Hakkımızda
            </span>
          </div>
          <h2
            className="section-heading mb-6"
            style={{
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              color: "#2C3E50",
            }}
          >
            <ScrambleText text="Neden" duration={600} />{" "}
            <ScrambleText
              text="Pi-Lot?"
              delay={200}
              duration={700}
              style={{
                background: "linear-gradient(135deg, #6C8CA5, #DF6B30)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            />
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "rgba(44,62,80,0.65)" }}
          >
            Pi sayısının sonsuzluğu ile Lot numarasının izlenebilirliğini aynı
            marka çatısı altında birleştiren Pi-Lot; her projede hem vizyonu
            hem de hassasiyeti taşır.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Timeline */}
          <div>
            {timelineSteps.map((step, i) => (
              <TimelineItem key={step.title} step={step} index={i} />
            ))}
          </div>

          {/* Right: floating info panels */}
          <div className="hidden lg:flex flex-col gap-6 sticky top-32">
            <InfoPanel
              title="Marka Felsefesi"
              body="Pi-Lot adı tesadüf değil; matematiksel hassasiyet ile endüstriyel izlenebilirliğin buluşma noktasıdır. Sonsuz π ile takip edilebilir Lot — iki güçlü kavramın sentezi."
              accent="#6C8CA5"
            />
            <InfoPanel
              title="Yaklaşımımız"
              body="Saha incelemesi, veri analizi ve mühendislik optimizasyonu üçgeni üzerine kurulu metodolojimizle her üretim tesisine özel, ölçülebilir iyileştirmeler sunuyoruz."
              accent="#DF6B30"
            />
            <InfoPanel
              title="Uzmanlık Alanları"
              body="Kaynak teknolojileri, üretim hattı optimizasyonu, atıl kapasite yönetimi, maliyet analizi ve operasyonel mükemmellik."
              accent="#6C8CA5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoPanel({
  title,
  body,
  accent,
}: {
  title: string;
  body: string;
  accent: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className="p-7 corner-accent"
      style={{
        borderLeft: `2px solid ${accent}`,
        backgroundColor: "rgba(108,140,165,0.04)",
      }}
      initial={{ opacity: 0, x: 32 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7 }}
    >
      <h4
        className="text-sm font-semibold tracking-widest uppercase mb-3"
        style={{ color: accent, letterSpacing: "0.15em" }}
      >
        {title}
      </h4>
      <p className="text-sm leading-relaxed" style={{ color: "rgba(44,62,80,0.65)" }}>
        {body}
      </p>
    </motion.div>
  );
}
