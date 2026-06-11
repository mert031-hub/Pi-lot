"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const values = [
  {
    index: "01",
    title: "Daha Düşük\nMaliyet",
    headline: "Harcamak değil,\nyatırım yapmak.",
    desc: "Her kuruşun nereye gittiğini biliyor musunuz? ABC maliyet analizi ile gizli kayıpları tespit eder, en yüksek maliyet etkisine sahip süreçleri önceliklendirir ve ortalama %22-30 maliyet düşüşü sağlarız.",
    stat: "%28",
    statLabel: "Ortalama Maliyet Azalması",
    color: "#6C8CA5",
    bg: "#ffffff",
  },
  {
    index: "02",
    title: "Daha Az\nHata",
    headline: "Tamir kaynağına\nharcanan paranızı\ngeri alın.",
    desc: "Hata başına maliyet hesaplamaları gösteriyor ki; kalite problemleri cironun %5-15'ini yutuyor. Poka-yoke sistemleri, SPC kontrolleri ve kök-neden analizleriyle bu maliyeti sıfıra yaklaştırıyoruz.",
    stat: "%60-",
    statLabel: "Hata Oranı Düşüşü",
    color: "#DF6B30",
    bg: "#f8f9fa",
  },
  {
    index: "03",
    title: "Daha Fazla\nVerim",
    headline: "Aynı kaynak,\ndaha fazla çıktı.",
    desc: "Makineleriniz, personeliniz ve alanınız çok daha fazlasını yapabilir. OEE analizi, darboğaz eliminasyonu ve single piece flow uygulamalarıyla mevcut kapasiteden %25-45 daha fazla çıktı alırsınız.",
    stat: "%35+",
    statLabel: "Üretim Kapasitesi Artışı",
    color: "#6C8CA5",
    bg: "#ffffff",
  },
  {
    index: "04",
    title: "Daha Yüksek\nKarlılık",
    headline: "Satışlar değil,\nmarjlar büyür.",
    desc: "Ciro artışı olmadan karlılığı artırmak mümkün. Ürün karlılık haritalaması, mix optimization ve make-or-buy kararlarıyla her siparişin işletmeye katkısını maksimize ederiz.",
    stat: "%22+",
    statLabel: "Gross Margin Artışı",
    color: "#DF6B30",
    bg: "#f8f9fa",
  },
  {
    index: "05",
    title: "Sürdürülebilir\nÜretim",
    headline: "Bugün değil,\ndaima.",
    desc: "Tek seferlik iyileştirme değil; sürekli öğrenen, gelişen, veri ile yönetilen bir üretim kültürü. Yönetim sistemleri, KPI dashboardları ve dönemsel değerlendirmelerle kazanımlar korunur ve çoğalır.",
    stat: "∞",
    statLabel: "Sürekli İyileştirme",
    color: "#6C8CA5",
    bg: "#ffffff",
  },
];

export default function ValuePropositionSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0vw", `-${(values.length - 1) * 100}vw`]);

  return (
    <section
      id="deger-onerisi"
      aria-label="Müşteriye Sunduğumuz Değer"
    >
      {/* Header */}
      <div
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="absolute inset-0 dot-pattern" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
                Değer Önerimiz
              </span>
            </div>
            <h2
              className="section-heading"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                color: "#2C3E50",
              }}
            >
              Size Ne{" "}
              <span style={{ color: "#6C8CA5" }}>Kazandırıyoruz?</span>
            </h2>
            <p
              className="mt-5 text-lg max-w-2xl leading-relaxed"
              style={{ color: "rgba(44,62,80,0.6)" }}
            >
              Her iyileştirme adımı, bir sonrakini mümkün kılar. Sistematik bir
              dönüşüm yolculuğu.
            </p>
          </motion.div>

          {/* Step flow indicator */}
          <div className="flex items-center gap-2 mt-10 flex-wrap">
            {values.map((v, i) => (
              <div key={v.index} className="flex items-center gap-2">
                <span
                  className="text-xs font-bold font-mono px-2 py-1"
                  style={{
                    color: v.color,
                    border: `1px solid ${v.color}`,
                    opacity: 0.7,
                  }}
                >
                  {v.index}
                </span>
                {i < values.length - 1 && (
                  <span style={{ color: "rgba(44,62,80,0.25)", fontSize: "0.875rem" }}>
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div
        ref={containerRef}
        style={{ height: `${values.length * 100}vh` }}
        className="relative"
      >
        <div className="sticky top-0 h-screen overflow-hidden flex items-center">
          <motion.div
            className="flex will-change-transform"
            style={{ x }}
          >
            {values.map((val, i) => (
              <ValueCard key={val.index} value={val} index={i} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA row */}
      <div
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: "#f4f6f8" }}
      >
        <div className="absolute inset-0 dot-pattern" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <h3
                className="section-heading mb-2"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "#2C3E50" }}
              >
                Projenizi Birlikte Değerlendirelim
              </h3>
              <p style={{ color: "rgba(44,62,80,0.6)" }}>
                İlk görüşme ücretsizdir. Sizi tanıyalım.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <a
                href="#iletisim"
                className="px-8 py-4 text-sm font-semibold tracking-widest uppercase text-center transition-all duration-300"
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
                İletişime Geç →
              </a>
              <a
                href="https://wa.me/905307456800"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 text-sm font-semibold tracking-widest uppercase text-center transition-all duration-300"
                style={{
                  border: "1px solid rgba(44,62,80,0.2)",
                  color: "#2C3E50",
                  letterSpacing: "0.1em",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#DF6B30";
                  el.style.color = "#DF6B30";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(44,62,80,0.2)";
                  el.style.color = "#2C3E50";
                }}
              >
                WhatsApp ile Yaz
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ValueCard({
  value,
  index,
}: {
  value: (typeof values)[0];
  index: number;
}) {
  return (
    <div
      className="flex-shrink-0 w-screen h-screen flex items-center justify-center px-6 lg:px-16"
      style={{ backgroundColor: value.bg }}
    >
      <div className="max-w-4xl w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Title & stat */}
        <div>
          {/* Step number */}
          <div
            className="text-[9rem] font-black leading-none mb-4 pointer-events-none select-none"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              color:
                value.color === "#6C8CA5"
                  ? "rgba(108,140,165,0.07)"
                  : "rgba(223,107,48,0.07)",
              lineHeight: 0.85,
            }}
            aria-hidden="true"
          >
            {value.index}
          </div>

          <h2
            className="section-heading mb-4 whitespace-pre-line"
            style={{
              fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
              color: "#2C3E50",
            }}
          >
            {value.title}
          </h2>

          {/* Stat badge */}
          <div
            className="inline-flex items-center gap-3 px-5 py-3 mb-6"
            style={{
              backgroundColor:
                value.color === "#6C8CA5"
                  ? "rgba(108,140,165,0.08)"
                  : "rgba(223,107,48,0.08)",
              border: `1px solid ${value.color}20`,
            }}
          >
            <span
              className="text-4xl font-black tabular-nums"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                color: value.color,
              }}
            >
              {value.stat}
            </span>
            <span
              className="text-xs font-medium leading-tight max-w-[100px]"
              style={{ color: "rgba(44,62,80,0.6)" }}
            >
              {value.statLabel}
            </span>
          </div>
        </div>

        {/* Right: Headline & desc */}
        <div>
          <div
            className="h-px mb-8 w-16"
            style={{ backgroundColor: value.color }}
          />
          <h3
            className="text-2xl lg:text-3xl font-light mb-6 whitespace-pre-line leading-snug"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              color: "#2C3E50",
              fontStyle: "italic",
            }}
          >
            {value.headline}
          </h3>
          <p
            className="text-base leading-loose"
            style={{ color: "rgba(44,62,80,0.6)" }}
          >
            {value.desc}
          </p>

          {/* Nav dots */}
          <div className="flex items-center gap-2 mt-12">
            {values.map((_, i) => (
              <div
                key={i}
                className="transition-all duration-300"
                style={{
                  width: i === index ? 24 : 6,
                  height: 4,
                  backgroundColor:
                    i === index
                      ? value.color
                      : i < index
                      ? `${value.color}55`
                      : "rgba(44,62,80,0.12)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
