"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrambleText from "@/components/ui/ScrambleText";

const cases = [
  {
    id: "01",
    tag: "OTOMOTİV YAN SANAYİ",
    duration: "14 Hafta",
    title: "Robotik Kaynak Hattında\n%77 Tamir Azalması",
    challenge:
      "Robotik kaynak hücresinde yüksek tamir kaynağı oranı (%18.2) ve buna bağlı maliyet artışı. Vardiya bazında tutarsız kalite çıktısı, izlenebilirlik eksikliği.",
    solution:
      "WPS optimizasyonu, operatör yeterlilik programı ve gerçek zamanlı kaynak parametresi izleme sistemi. ISO 3834-2 uyum çalışması.",
    before: [
      { label: "Tamir Oranı", val: "%18.2" },
      { label: "Çevrim Süresi", val: "4.8 dk" },
      { label: "Aylık Hurda", val: "₺127k" },
    ],
    after: [
      { label: "Tamir Oranı", val: "%4.1", delta: "↓%77" },
      { label: "Çevrim Süresi", val: "2.9 dk", delta: "↓%40" },
      { label: "Aylık Hurda", val: "₺31k", delta: "↓%76" },
    ],
    accent: "#6C8CA5",
  },
  {
    id: "02",
    tag: "BEYAZ EŞYA",
    duration: "8 Hafta",
    title: "Atıl Kapasiteden\nYeni Gelir Kanalı",
    challenge:
      "Metal işleme tesisinde makine kapasitesi kullanımı %48'de seyrediyordu. Yüksek sabit giderler, mevcut sipariş tabanı yetersiz.",
    solution:
      "Kapasite fizibilite analizi, fason üretim pazar araştırması, dijital teklif ve müşteri segmentasyon sistemi kurulumu.",
    before: [
      { label: "Kapasite Kullanımı", val: "%48" },
      { label: "Fason Geliri", val: "₺0" },
      { label: "EBITDA Durumu", val: "Negatif" },
    ],
    after: [
      { label: "Kapasite Kullanımı", val: "%79", delta: "↑%65" },
      { label: "Fason Geliri", val: "₺214k/ay", delta: "Yeni kanal" },
      { label: "EBITDA Durumu", val: "Pozitif", delta: "Dönüşüm" },
    ],
    accent: "#DF6B30",
  },
  {
    id: "03",
    tag: "SAVUNMA & HAVACLIK",
    duration: "16 Hafta",
    title: "ISO 3834-2 Sertifikasyonu\nİlk Seferde Geçildi",
    challenge:
      "Tedarikçi yeterliliği için ISO 3834-2 zorunlu hale geldi. WPS/PQR dokümanları eksik, kaynak operatörü sertifikasyon oranı %8.",
    solution:
      "Tüm kaynak proseslerinin belgelenmesi, kaynak gözetmenlik sistemi kurulumu, 24 operatörün sertifikasyon eğitimi ve GAP analizi.",
    before: [
      { label: "WPS Kapsamı", val: "%12" },
      { label: "Sertifikalı Operatör", val: "2/24" },
      { label: "İzlenebilirlik", val: "%8" },
    ],
    after: [
      { label: "WPS Kapsamı", val: "%100", delta: "Tam uyum" },
      { label: "Sertifikalı Operatör", val: "24/24", delta: "↑%1100" },
      { label: "İzlenebilirlik", val: "%97", delta: "↑1113%" },
    ],
    accent: "#6C8CA5",
  },
];

function CaseCard({ c, index }: { c: (typeof cases)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="relative overflow-hidden"
      style={{
        border: `1px solid rgba(108,140,165,0.12)`,
        backgroundColor: "rgba(255,255,255,0.02)",
      }}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ borderColor: `${c.accent}40` }}
    >
      {/* Top accent bar */}
      <div className="h-[3px]" style={{ backgroundColor: c.accent }} />

      <div className="p-8 lg:p-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <span
              className="font-mono text-[10px] tracking-widest"
              style={{ color: `${c.accent}99` }}
            >
              CASE.{c.id}
            </span>
            <span
              className="text-[9px] font-semibold tracking-[0.2em] px-2 py-1"
              style={{
                border: `1px solid ${c.accent}40`,
                color: c.accent,
              }}
            >
              {c.tag}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#6C8CA5" }} />
            <span
              className="font-mono text-[10px] tracking-wider"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              {c.duration}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3
          className="section-heading text-white mb-5 whitespace-pre-line"
          style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", lineHeight: 1.15 }}
        >
          {c.title}
        </h3>

        {/* Challenge */}
        <div className="mb-6">
          <span
            className="text-[10px] font-semibold tracking-[0.2em] uppercase block mb-2"
            style={{ color: "rgba(223,107,48,0.7)" }}
          >
            Zorluk
          </span>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.42)" }}>
            {c.challenge}
          </p>
        </div>

        {/* Solution */}
        <div className="mb-8">
          <span
            className="text-[10px] font-semibold tracking-[0.2em] uppercase block mb-2"
            style={{ color: "rgba(108,140,165,0.7)" }}
          >
            Çözüm
          </span>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.42)" }}>
            {c.solution}
          </p>
        </div>

        {/* Before / After */}
        <div
          className="grid grid-cols-2 gap-px overflow-hidden"
          style={{ backgroundColor: "rgba(108,140,165,0.1)" }}
        >
          {/* Before column */}
          <div style={{ backgroundColor: "#1a2634" }}>
            <div
              className="px-4 py-2 text-[9px] font-semibold tracking-[0.2em] uppercase"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                color: "rgba(255,255,255,0.3)",
                borderBottom: "1px solid rgba(108,140,165,0.1)",
              }}
            >
              Önce
            </div>
            {c.before.map((m) => (
              <div
                key={m.label}
                className="px-4 py-3 border-b"
                style={{ borderColor: "rgba(108,140,165,0.08)" }}
              >
                <div
                  className="text-[10px] tracking-wider mb-0.5"
                  style={{ color: "rgba(255,255,255,0.28)" }}
                >
                  {m.label}
                </div>
                <div
                  className="font-bold tabular-nums"
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "1rem",
                    color: "rgba(255,255,255,0.45)",
                  }}
                >
                  {m.val}
                </div>
              </div>
            ))}
          </div>

          {/* After column */}
          <div style={{ backgroundColor: "#1a2634" }}>
            <div
              className="px-4 py-2 text-[9px] font-semibold tracking-[0.2em] uppercase"
              style={{
                backgroundColor: "rgba(108,140,165,0.06)",
                color: c.accent,
                borderBottom: "1px solid rgba(108,140,165,0.1)",
              }}
            >
              Sonra
            </div>
            {c.after.map((m) => (
              <div
                key={m.label}
                className="px-4 py-3 border-b"
                style={{ borderColor: "rgba(108,140,165,0.08)" }}
              >
                <div
                  className="text-[10px] tracking-wider mb-0.5"
                  style={{ color: "rgba(255,255,255,0.28)" }}
                >
                  {m.label}
                </div>
                <div className="flex items-baseline gap-2">
                  <span
                    className="font-bold tabular-nums"
                    style={{
                      fontFamily: "var(--font-space-grotesk)",
                      fontSize: "1rem",
                      color: c.accent,
                    }}
                  >
                    {m.val}
                  </span>
                  <span
                    className="text-[10px] font-semibold"
                    style={{ color: `${c.accent}80` }}
                  >
                    {m.delta}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Corner detail */}
      <div
        className="absolute bottom-0 right-0 w-6 h-6"
        style={{
          borderTop: `1px solid ${c.accent}30`,
          borderLeft: `1px solid ${c.accent}30`,
        }}
      />
    </motion.div>
  );
}

export default function CaseStudiesSection() {
  const headRef = useRef(null);
  const inView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section
      id="vaka-calismalari"
      className="py-28 lg:py-36 relative overflow-hidden"
      style={{ backgroundColor: "#0d1821" }}
      aria-label="Vaka Çalışmaları"
    >
      <div className="absolute inset-0 grid-pattern-dark opacity-40" />

      {/* Radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(108,140,165,0.06) 0%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        {/* Header */}
        <motion.div
          ref={headRef}
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12" style={{ backgroundColor: "#DF6B30" }} />
            <span
              className="text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ color: "#DF6B30" }}
            >
              Vaka Çalışmaları
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="section-heading text-white"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)" }}
            >
              <ScrambleText text="Gerçek" duration={600} />{" "}
              <ScrambleText
                text="Projeler,"
                delay={150}
                duration={600}
                style={{ color: "#6C8CA5" }}
              />
              <br />
              <ScrambleText text="Ölçülebilir" delay={300} duration={700} />{" "}
              <ScrambleText
                text="Sonuçlar"
                delay={500}
                duration={700}
                style={{ color: "#DF6B30" }}
              />
            </h2>

            <p
              className="text-sm leading-relaxed max-w-sm lg:text-right"
              style={{ color: "rgba(255,255,255,0.38)" }}
            >
              Gizlilik nedeniyle firma isimleri paylaşılmıyor.
              Tüm metrikler gerçek proje verilerinden alınmıştır.
            </p>
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <CaseCard key={c.id} c={c} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-sm mb-6"
            style={{ color: "rgba(255,255,255,0.38)" }}
          >
            Fabrikanıza özel analiz için bir ön görüşme ayarlayalım.
          </p>
          <a
            href="#iletisim"
            className="inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300 group"
            style={{
              border: "1px solid rgba(108,140,165,0.4)",
              color: "#6C8CA5",
              letterSpacing: "0.1em",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = "#6C8CA5";
              el.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = "transparent";
              el.style.color = "#6C8CA5";
            }}
          >
            Ücretsiz Ön Analiz Talep Et
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
