"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ParticleNetwork from "@/components/ui/ParticleNetwork";
import ScrambleText from "@/components/ui/ScrambleText";

const kpis = [
  {
    prefix: "%",
    value: 35,
    suffix: "+",
    label: "Verimlilik Artışı",
    desc: "Ortalama üretim verimliliğinde ölçülen iyileştirme",
    color: "#6C8CA5",
  },
  {
    prefix: "%",
    value: 28,
    suffix: "+",
    label: "Maliyet Düşüşü",
    desc: "Optimize edilen üretim maliyetlerindeki ortalama düşüş",
    color: "#DF6B30",
  },
  {
    prefix: "",
    value: 200,
    suffix: "+",
    label: "Tamamlanan Proje",
    desc: "Farklı sektörlerde başarıyla kapanan danışmanlık projesi",
    color: "#6C8CA5",
  },
  {
    prefix: "",
    value: 15,
    suffix: "+",
    label: "Yıl Deneyim",
    desc: "Üretim mühendisliği ve danışmanlık alanında birikmiş deneyim",
    color: "#DF6B30",
  },
  {
    prefix: "%",
    value: 95,
    suffix: "",
    label: "Müşteri Memnuniyeti",
    desc: "Projelerimizi tamamlayan müşterilerin geri bildirim skoru",
    color: "#6C8CA5",
  },
  {
    prefix: "",
    value: 50,
    suffix: "+",
    label: "Aktif Müşteri",
    desc: "Uzun soluklu iş birliği kurduğumuz firma sayısı",
    color: "#DF6B30",
  },
];

const advantages = [
  {
    icon: "⚡",
    title: "Hız",
    desc: "Pilot projede 4-6 hafta içinde ilk ölçülebilir sonuçları alırsınız.",
  },
  {
    icon: "📐",
    title: "Hassasiyet",
    desc: "Her karar veri ile desteklenir. Sezgiyle değil, sayılarla yönetiriz.",
  },
  {
    icon: "🔄",
    title: "Sürdürülebilirlik",
    desc: "Tek seferlik değil; iyileştirme kültürü ve takip sistemi kurarız.",
  },
  {
    icon: "🎯",
    title: "Odak",
    desc: "Genel öneriler değil, sizin fabrikınıza özel, uygulanabilir çözümler.",
  },
];

export default function WhyPiLotSection() {
  const headRef = useRef(null);
  const inView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section
      id="neden-pilot"
      className="relative overflow-hidden"
      aria-label="Neden Pi-Lot"
      style={{ backgroundColor: "#1a2634" }}
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern-dark" />
      <ParticleNetwork count={50} connectDist={120} color="108,140,165" style={{ opacity: 0.5 }} />
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 80% 50%, rgba(108,140,165,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="py-28 lg:py-36 relative">
        {/* KPI Grid */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            ref={headRef}
            className="mb-20"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
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
                Neden Pi-Lot
              </span>
            </div>
            <h2
              className="section-heading text-white"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
            >
              <ScrambleText text="Sayılar" duration={700} />{" "}
              <ScrambleText text="Konuşuyor" delay={200} duration={700} style={{ color: "#6C8CA5" }} />
            </h2>
          </motion.div>

          {/* KPI counters */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-px mb-20"
            style={{ backgroundColor: "rgba(108,140,165,0.1)" }}>
            {kpis.map((kpi, i) => (
              <motion.div
                key={kpi.label}
                className="p-10 relative group"
                style={{ backgroundColor: "#1a2634" }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                {/* Accent line */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-px origin-left"
                  style={{ backgroundColor: kpi.color }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
                />

                <div
                  className="text-5xl lg:text-6xl font-black mb-3"
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    color: kpi.color,
                  }}
                >
                  <AnimatedCounter
                    target={kpi.value}
                    prefix={kpi.prefix}
                    suffix={kpi.suffix}
                    duration={2000}
                  />
                </div>
                <div
                  className="text-base font-semibold mb-2"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  {kpi.label}
                </div>
                <div
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {kpi.desc}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Advantages */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, i) => (
              <motion.div
                key={adv.title}
                className="p-6"
                style={{
                  border: "1px solid rgba(108,140,165,0.12)",
                  backgroundColor: "rgba(255,255,255,0.02)",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{
                  borderColor: "rgba(108,140,165,0.4)",
                  backgroundColor: "rgba(108,140,165,0.05)",
                  y: -2,
                }}
              >
                <div className="text-3xl mb-4" aria-hidden="true">{adv.icon}</div>
                <h4
                  className="font-bold mb-2"
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    color: "#ffffff",
                  }}
                >
                  {adv.title}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {adv.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
