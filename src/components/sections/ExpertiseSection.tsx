"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const expertiseAreas = [
  {
    num: "01",
    title: "Üretim Hattı\nOptimizasyonu",
    subtitle: "Production Line Optimization",
    desc: "Mevcut üretim hattınızı kök-neden analizi ve veri odaklı yöntemlerle inceleyerek darboğazları tespit eder, kapasite ve verimlilik artışı sağlarız. Değer akış haritalama (VSM) ile tüm süreci görselleştiriyor, kayıpları sistematik olarak ortadan kaldırıyoruz.",
    metrics: [
      { val: "%25+", lbl: "Kapasite Artışı" },
      { val: "%40-", lbl: "Duruş Süresi" },
      { val: "%18+", lbl: "OEE İyileştirme" },
    ],
    tags: ["VSM", "Lean", "OEE", "TPM", "Kaizen"],
    accentColor: "#6C8CA5",
  },
  {
    num: "02",
    title: "Kaynak\nTeknolojileri",
    subtitle: "Welding Technologies",
    desc: "MIG, TIG, lazer ve hibrit kaynak proseslerinde süreç parametrelerini optimize eder, kaynak kalitesini uluslararası standartlara (ISO 3834, EN 15085) taşırız. Robotik kaynak hücrelerinin devreye alınmasından WPS/PQR dokümanlarına kadar tam kapsamlı destek sunuyoruz.",
    metrics: [
      { val: "ISO 3834", lbl: "Uyum" },
      { val: "%60-", lbl: "Tamir Kaynağı" },
      { val: "100%", lbl: "NDT İzlenebilirlik" },
    ],
    tags: ["MIG/MAG", "TIG", "Lazer", "Robotik", "ISO 3834"],
    accentColor: "#DF6B30",
  },
  {
    num: "03",
    title: "Mühendislik\n& Ar-Ge",
    subtitle: "Engineering & R&D",
    desc: "Tasarım aşamasından prototipe, prototipten seri üretime. DFMA prensipleri, FEA analizleri ve hızlı prototipleme yöntemleriyle ürün geliştirme döngüsünü kısaltır, ilk seferinde doğru ürünü üretmenizi sağlarız.",
    metrics: [
      { val: "%30-", lbl: "NPI Süresi" },
      { val: "DFMA", lbl: "Metodoloji" },
      { val: "3D", lbl: "Simülasyon" },
    ],
    tags: ["FEA", "DFMA", "NPI", "CAD", "Prototip"],
    accentColor: "#6C8CA5",
  },
  {
    num: "04",
    title: "Operasyonel\nYönetim",
    subtitle: "Operational Management",
    desc: "Üretim planlama, stok yönetimi, tedarik zinciri optimizasyonu ve S&OP süreçleri dahil olmak üzere tüm operasyonel yapıyı end-to-end gözden geçirir, veri tabanlı kararlar alınmasını sağlayan yönetim sistemleri kurarız.",
    metrics: [
      { val: "%20+", lbl: "Teslimat Performansı" },
      { val: "%35-", lbl: "Stok Maliyeti" },
      { val: "S&OP", lbl: "Entegrasyon" },
    ],
    tags: ["ERP", "S&OP", "MPS", "Tedarik", "KPI"],
    accentColor: "#DF6B30",
  },
  {
    num: "05",
    title: "Maliyet & Karlılık\nAnalizi",
    subtitle: "Cost & Profitability Analysis",
    desc: "Ürün bazında maliyet analizi, ABC maliyet muhasebesi ve karlılık haritalama ile gerçek kazananları ve kayıp yaratan ürünleri net olarak ortaya koyarız. Fiyatlama stratejisi ve make-or-buy analizleri ile sürdürülebilir karlılığa ulaşırız.",
    metrics: [
      { val: "%22+", lbl: "Gross Margin" },
      { val: "ABC", lbl: "Maliyet Metodu" },
      { val: "%15-", lbl: "COGS" },
    ],
    tags: ["ABC", "Make-or-Buy", "TCO", "Fiyatlama", "COGS"],
    accentColor: "#6C8CA5",
  },
  {
    num: "06",
    title: "Atıl Kapasite\nYönetimi",
    subtitle: "Idle Capacity Management",
    desc: "Kullanılmayan makine kapasitelerini, beceri setlerini ve altyapıyı tespit eder, bunları gelire dönüştürecek stratejiler geliştiririz. Kiralama, fason üretim ve yeni ürün grupları gibi seçenekleri ekonomik fizibilite ile değerlendiririz.",
    metrics: [
      { val: "%45+", lbl: "Kapasite Kullanımı" },
      { val: "ROI+", lbl: "Yatırım Geri Dönüşü" },
      { val: "3-6 Ay", lbl: "Geri Dönüş Süresi" },
    ],
    tags: ["Kapasite", "Fason", "Kiralama", "Fizibilite", "ROI"],
    accentColor: "#DF6B30",
  },
];

function ExpertiseItem({
  area,
  index,
}: {
  area: (typeof expertiseAreas)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{
        backgroundColor: isEven ? "#ffffff" : "#f8f9fa",
        borderTop: "1px solid rgba(108,140,165,0.1)",
      }}
    >
      {/* Section accent line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ backgroundColor: area.accentColor }}
      />

      {/* Background number watermark */}
      <div
        className="absolute top-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{
          right: isEven ? "auto" : "-2rem",
          left: isEven ? "-2rem" : "auto",
          fontSize: "clamp(8rem, 20vw, 18rem)",
          fontWeight: 900,
          fontFamily: "var(--font-space-grotesk)",
          color:
            area.accentColor === "#6C8CA5"
              ? "rgba(108,140,165,0.04)"
              : "rgba(223,107,48,0.04)",
          lineHeight: 1,
          letterSpacing: "-0.05em",
        }}
        aria-hidden="true"
      >
        {area.num}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? "lg:grid-flow-dense" : ""}`}
        >
          {/* Text side */}
          <motion.div
            className={!isEven ? "lg:col-start-2" : ""}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Number + subtitle */}
            <div className="flex items-center gap-4 mb-6">
              <span
                className="text-xs font-bold tracking-[0.25em] tabular-nums"
                style={{ color: area.accentColor, fontFamily: "monospace" }}
              >
                {area.num}
              </span>
              <div
                className="h-px flex-1 max-w-[60px]"
                style={{ backgroundColor: area.accentColor, opacity: 0.4 }}
              />
              <span
                className="text-xs tracking-wider uppercase"
                style={{ color: "rgba(44,62,80,0.45)" }}
              >
                {area.subtitle}
              </span>
            </div>

            {/* Title */}
            <h2
              className="section-heading mb-6 whitespace-pre-line"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
                color: "#2C3E50",
                lineHeight: 1.05,
              }}
            >
              {area.title}
            </h2>

            {/* Description */}
            <p
              className="text-base leading-loose mb-8 max-w-lg"
              style={{ color: "rgba(44,62,80,0.65)" }}
            >
              {area.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {area.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-semibold tracking-wider"
                  style={{
                    border: `1px solid ${area.accentColor}`,
                    color: area.accentColor,
                    opacity: 0.8,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="#iletisim"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase transition-all duration-300 group"
              style={{ color: area.accentColor, letterSpacing: "0.1em" }}
            >
              Bilgi Al{" "}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>

          {/* Metrics side */}
          <motion.div
            className={`flex flex-col gap-5 ${!isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}
            initial={{ opacity: 0, x: isEven ? 32 : -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {area.metrics.map((m, i) => (
              <motion.div
                key={m.lbl}
                className="flex items-center gap-6 p-6 corner-accent"
                style={{
                  backgroundColor: isEven
                    ? "rgba(108,140,165,0.04)"
                    : "#ffffff",
                  borderLeft: `3px solid ${area.accentColor}`,
                }}
                initial={{ opacity: 0, x: isEven ? 24 : -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                whileHover={{
                  x: isEven ? 4 : -4,
                  transition: { duration: 0.2 },
                }}
              >
                <div
                  className="text-3xl font-bold tabular-nums flex-shrink-0"
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    color: area.accentColor,
                  }}
                >
                  {m.val}
                </div>
                <div>
                  <div
                    className="text-xs tracking-widest uppercase mb-1"
                    style={{ color: "rgba(44,62,80,0.45)", letterSpacing: "0.15em" }}
                  >
                    Hedef
                  </div>
                  <div
                    className="text-sm font-medium"
                    style={{ color: "#2C3E50" }}
                  >
                    {m.lbl}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Technical diagram decoration */}
            <motion.div
              className="relative h-40 overflow-hidden"
              style={{
                borderTop: `1px solid rgba(108,140,165,0.15)`,
                borderRight: `1px solid rgba(108,140,165,0.15)`,
              }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <svg
                viewBox="0 0 400 160"
                className="absolute inset-0 w-full h-full"
                aria-hidden="true"
              >
                {/* Grid lines */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <line
                    key={`h${i}`}
                    x1="0"
                    y1={i * 40}
                    x2="400"
                    y2={i * 40}
                    stroke="rgba(108,140,165,0.08)"
                    strokeWidth="1"
                  />
                ))}
                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                  <line
                    key={`v${i}`}
                    x1={i * 64}
                    y1="0"
                    x2={i * 64}
                    y2="160"
                    stroke="rgba(108,140,165,0.08)"
                    strokeWidth="1"
                  />
                ))}
                {/* Process flow line */}
                <motion.polyline
                  points="20,140 80,100 160,80 240,50 320,35 380,20"
                  fill="none"
                  stroke={area.accentColor}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
                />
                {/* Nodes */}
                {[
                  [20, 140],
                  [80, 100],
                  [160, 80],
                  [240, 50],
                  [320, 35],
                  [380, 20],
                ].map(([x, y], i) => (
                  <motion.circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="4"
                    fill={area.accentColor}
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 + i * 0.15 }}
                  />
                ))}
                {/* Area fill */}
                <motion.path
                  d="M 20,140 80,100 160,80 240,50 320,35 380,20 L 380,160 L 20,160 Z"
                  fill={area.accentColor}
                  fillOpacity="0.05"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                />
              </svg>
              <div
                className="absolute bottom-3 right-3 text-xs font-mono"
                style={{ color: "rgba(108,140,165,0.4)" }}
              >
                Verimlilik Trendi →
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function ExpertiseSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="uzmanliklar" aria-label="Uzmanlık Alanları">
      {/* Header */}
      <div
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: "#2C3E50" }}
      >
        <div className="absolute inset-0 grid-pattern-dark" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12" style={{ backgroundColor: "#DF6B30" }} />
              <span
                className="text-xs font-semibold tracking-[0.25em] uppercase"
                style={{ color: "#DF6B30" }}
              >
                Uzmanlıklarımız
              </span>
            </div>
            <h2
              className="section-heading text-white"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
            >
              6 Alanda{" "}
              <span style={{ color: "#6C8CA5" }}>Derin Uzmanlık</span>
            </h2>
            <p
              className="mt-6 text-lg max-w-2xl leading-relaxed"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Her bir uzmanlık alanında 15+ yıllık saha deneyimi ve ölçülebilir
              sonuçlarla hizmet veriyoruz.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Expertise items */}
      {expertiseAreas.map((area, i) => (
        <ExpertiseItem key={area.num} area={area} index={i} />
      ))}
    </section>
  );
}
