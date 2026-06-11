"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Analiz",
    subtitle: "Durum Tespiti",
    desc: "Mevcut durumun kapsamlı değerlendirilmesi. Süreç haritaları, KPI karşılaştırmaları ve benchmarking ile net bir başlangıç noktası belirlenir.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
        <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="4" fill="currentColor" />
        <line x1="30" y1="30" x2="37" y2="37" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="4" x2="20" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="36" y1="20" x2="30" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    duration: "1-2 Hafta",
  },
  {
    num: "02",
    title: "Saha İncelemesi",
    subtitle: "Gerçek Gözlem",
    desc: "Genchi Genbutsu — gerçek yere git, gerçeği gör. Üretim alanında birincil gözlem, video analizi ve çalışan görüşmeleri.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
        <rect x="6" y="8" width="28" height="20" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="18" r="5" stroke="currentColor" strokeWidth="1.5" />
        <line x1="14" y1="32" x2="26" y2="32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="28" x2="20" y2="32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    duration: "1-3 Hafta",
  },
  {
    num: "03",
    title: "Veri Toplama",
    subtitle: "Ölçüm & Doğrulama",
    desc: "Üretim verileri, zaman etüdü, makine duruş analizleri ve kalite kayıtları sistematik olarak toplanır ve doğrulanır.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
        <rect x="8" y="4" width="24" height="32" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <line x1="13" y1="13" x2="27" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="13" y1="19" x2="27" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="13" y1="25" x2="21" y2="25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="28" cy="30" r="5" stroke="currentColor" strokeWidth="1.5" />
        <line x1="31" y1="33" x2="35" y2="37" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    duration: "2-4 Hafta",
  },
  {
    num: "04",
    title: "Optimizasyon",
    subtitle: "Çözüm Tasarımı",
    desc: "Toplanan verilerin analiziyle kök nedenler belirlenir, iyileştirme senaryoları modellenir ve en yüksek ROI'li çözüm planı hazırlanır.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
        <path d="M 8,28 L 16,18 L 24,22 L 32,10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="8" cy="28" r="2.5" fill="currentColor" />
        <circle cx="16" cy="18" r="2.5" fill="currentColor" />
        <circle cx="24" cy="22" r="2.5" fill="currentColor" />
        <circle cx="32" cy="10" r="2.5" fill="currentColor" />
        <line x1="32" y1="4" x2="36" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="36" y1="4" x2="36" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    duration: "2-3 Hafta",
  },
  {
    num: "05",
    title: "Uygulama",
    subtitle: "Sahaya Geçiş",
    desc: "Pilot bölgeden tam üretime kademeli geçiş. Ekip eğitimleri, SOP'lar ve görsel yönetim araçlarıyla kalıcı değişim sağlanır.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
        <path d="M 10,20 L 17,27 L 30,13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    duration: "4-12 Hafta",
  },
  {
    num: "06",
    title: "Sürdürülebilir Takip",
    subtitle: "Kalıcı İyileştirme",
    desc: "Aylık KPI raporları, yerinde denetimler ve yönetim gözden geçirmeleriyle kazanımların korunması ve sürekli iyileştirme kültürünün yerleşmesi.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
        <path d="M 20,6 A 14,14 0 0,1 34,20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 34,20 A 14,14 0 0,1 20,34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 20,34 A 14,14 0 0,1 6,20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 6,20 A 14,14 0 0,1 20,6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <polygon points="32,14 38,20 32,26" fill="currentColor" />
      </svg>
    ),
    duration: "Sürekli",
  },
];

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83.33%"]);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      const step = Math.min(Math.floor(v * 6), 5);
      setActiveStep(step);
    });
    return unsub;
  }, [scrollYProgress]);

  return (
    <section
      id="surec"
      className="relative"
      aria-label="Çalışma Süreci"
    >
      {/* Header */}
      <div
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: "#f4f6f8" }}
      >
        <div className="absolute inset-0 dot-pattern" />
        <div
          className="max-w-7xl mx-auto px-6 lg:px-10 relative"
          ref={headRef}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12" style={{ backgroundColor: "#6C8CA5" }} />
              <span
                className="text-xs font-semibold tracking-[0.25em] uppercase"
                style={{ color: "#6C8CA5" }}
              >
                Nasıl Çalışıyoruz
              </span>
            </div>
            <h2
              className="section-heading"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                color: "#2C3E50",
              }}
            >
              6 Adımda{" "}
              <span style={{ color: "#DF6B30" }}>Dönüşüm</span>
            </h2>
            <p
              className="mt-5 text-lg max-w-2xl leading-relaxed"
              style={{ color: "rgba(44,62,80,0.6)" }}
            >
              Analizden sürdürülebilir takibe uzanan metodolojimiz, her projede
              tutarlı ve ölçülebilir sonuçlar üretir.
            </p>
          </motion.div>

          {/* Step indicators */}
          <div className="flex items-center gap-2 mt-12 flex-wrap">
            {steps.map((s, i) => (
              <div
                key={s.num}
                className="flex items-center gap-2"
              >
                <div
                  className="flex items-center justify-center w-8 h-8 text-xs font-bold transition-all duration-500"
                  style={{
                    fontFamily: "monospace",
                    backgroundColor:
                      i === activeStep ? "#6C8CA5" : "transparent",
                    border: `1px solid ${i <= activeStep ? "#6C8CA5" : "rgba(108,140,165,0.3)"}`,
                    color: i === activeStep ? "#fff" : i < activeStep ? "#6C8CA5" : "rgba(108,140,165,0.5)",
                  }}
                >
                  {s.num}
                </div>
                {i < steps.length - 1 && (
                  <div
                    className="h-px w-6 transition-all duration-700"
                    style={{
                      backgroundColor:
                        i < activeStep
                          ? "#6C8CA5"
                          : "rgba(108,140,165,0.2)",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Horizontal scroll section */}
      <div
        ref={containerRef}
        style={{ height: `${steps.length * 100}vh` }}
        className="relative"
      >
        <div className="sticky top-0 h-screen overflow-hidden flex items-center">
          <motion.div
            ref={trackRef}
            className="flex will-change-transform"
            style={{ x }}
          >
            {steps.map((step, i) => (
              <StepCard key={step.num} step={step} index={i} active={i === activeStep} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div
        className="py-20"
        style={{ backgroundColor: "#2C3E50" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="text-lg mb-8"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Projeniz için hangi adımdan başlamalıyız?
            </p>
            <a
              href="#iletisim"
              className="inline-flex items-center gap-2 px-10 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300"
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
              Ücretsiz Danışmanlık Al →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  index,
  active,
}: {
  step: (typeof steps)[0];
  index: number;
  active: boolean;
}) {
  return (
    <div
      className="flex-shrink-0 w-screen h-screen flex items-center justify-center px-6 lg:px-10"
      style={{
        backgroundColor:
          index % 2 === 0 ? "#ffffff" : "rgba(244,246,248,0.98)",
      }}
    >
      <motion.div
        className="max-w-3xl w-full"
        animate={{
          opacity: active ? 1 : 0.4,
          scale: active ? 1 : 0.96,
        }}
        transition={{ duration: 0.5 }}
      >
        {/* Number */}
        <div
          className="text-[10rem] font-black leading-none mb-6 pointer-events-none select-none"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            color: "rgba(108,140,165,0.06)",
            lineHeight: 0.85,
          }}
          aria-hidden="true"
        >
          {step.num}
        </div>

        <div
          className="flex items-center gap-4 mb-4 text-primary"
          style={{ color: "#6C8CA5" }}
        >
          {step.icon}
          <span
            className="text-xs font-bold tracking-[0.25em] uppercase"
            style={{ color: "rgba(44,62,80,0.45)", fontFamily: "monospace" }}
          >
            {step.subtitle}
          </span>
        </div>

        <h3
          className="section-heading mb-6"
          style={{
            fontSize: "clamp(2.4rem, 5vw, 4rem)",
            color: "#2C3E50",
          }}
        >
          {step.title}
        </h3>

        <p
          className="text-lg leading-loose max-w-xl"
          style={{ color: "rgba(44,62,80,0.62)" }}
        >
          {step.desc}
        </p>

        <div className="flex items-center gap-3 mt-10">
          <div
            className="h-px w-8"
            style={{ backgroundColor: "#DF6B30" }}
          />
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "#DF6B30" }}
          >
            Süre: {step.duration}
          </span>
        </div>

        {/* Progress dots */}
        <div className="flex items-center gap-2 mt-12">
          {steps.map((_, i) => (
            <div
              key={i}
              className="transition-all duration-500"
              style={{
                width: i === index ? 24 : 6,
                height: 6,
                backgroundColor:
                  i === index
                    ? "#6C8CA5"
                    : i < index
                    ? "rgba(108,140,165,0.4)"
                    : "rgba(108,140,165,0.15)",
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
