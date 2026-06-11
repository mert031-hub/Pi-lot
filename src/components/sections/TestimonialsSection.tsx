"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrambleText from "@/components/ui/ScrambleText";

const testimonials = [
  {
    quote:
      "OEE oranımız 6 ayda %56'dan %81'e çıktı. Sadece metodoloji değil; ölçme kültürü de yerleşti. Artık her sabah veriye bakarak karar veriyoruz.",
    role: "Üretim Direktörü",
    sector: "Otomotiv Yan Sanayi",
    metric: "+%45 OEE",
    accent: "#6C8CA5",
  },
  {
    quote:
      "ISO 3834-2 sertifikasyonunu 4 ayda tamamladık ve büyük OEM tedarikçisi olmak için gereken kapıyı açtık. Süreç çok daha az acı verici oldu.",
    role: "Genel Müdür",
    sector: "Metal İşleme & Kaynak",
    metric: "ISO 3834-2",
    accent: "#DF6B30",
  },
  {
    quote:
      "Atıl duran makinelerimizden aylık 200.000 TL fason gelir elde etmeye başladık. Hayal bile etmiyorduk — artık sabit giderlerimizin büyük bölümünü karşılıyor.",
    role: "Operasyonlar Müdürü",
    sector: "Beyaz Eşya İmalatı",
    metric: "₺200k/ay",
    accent: "#6C8CA5",
  },
  {
    quote:
      "Üretim maliyetlerimizi 9 ayda %28 düşürdük. Artık rakiplerle sadece fiyat savaşı yapmak zorunda kalmıyoruz — marjlarımız rekabetçi olmaya başladı.",
    role: "Kurucu Ortak",
    sector: "Makine İmalatı",
    metric: "-%28 Maliyet",
    accent: "#DF6B30",
  },
];

const sectors = [
  "Otomotiv Yan Sanayi",
  "Savunma & Havacılık",
  "Beyaz Eşya İmalatı",
  "Makine İmalatı",
  "Metal İşleme",
  "Gıda Teknolojileri",
  "Enerji Ekipmanları",
  "Kimya & Plastik",
  "Otomotiv Yan Sanayi",
  "Savunma & Havacılık",
  "Beyaz Eşya İmalatı",
  "Makine İmalatı",
];

function TestimonialCard({
  t,
  index,
}: {
  t: (typeof testimonials)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="relative p-8 flex flex-col"
      style={{
        backgroundColor: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(108,140,165,0.1)",
      }}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ borderColor: `${t.accent}35`, backgroundColor: "rgba(255,255,255,0.04)" }}
    >
      {/* Metric badge */}
      <div
        className="absolute top-6 right-6 px-2.5 py-1 text-[10px] font-bold tracking-widest"
        style={{ backgroundColor: `${t.accent}18`, color: t.accent, border: `1px solid ${t.accent}30` }}
      >
        {t.metric}
      </div>

      {/* Decorative π quote mark */}
      <div
        className="text-6xl font-bold leading-none mb-4 select-none"
        style={{ fontFamily: "var(--font-space-grotesk)", color: `${t.accent}15` }}
        aria-hidden="true"
      >
        π
      </div>

      {/* Quote */}
      <blockquote
        className="text-sm leading-loose flex-1 mb-6"
        style={{ color: "rgba(255,255,255,0.65)" }}
      >
        &ldquo;{t.quote}&rdquo;
      </blockquote>

      {/* Attribution */}
      <div
        className="pt-5 flex items-center gap-3"
        style={{ borderTop: `1px solid rgba(108,140,165,0.1)` }}
      >
        {/* Avatar placeholder */}
        <div
          className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-xs font-bold"
          style={{ backgroundColor: `${t.accent}18`, color: t.accent }}
        >
          {t.role[0]}
        </div>
        <div>
          <div className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.75)" }}>
            {t.role}
          </div>
          <div className="text-[10px] tracking-wider" style={{ color: "rgba(255,255,255,0.35)" }}>
            {t.sector}
          </div>
        </div>
      </div>

      {/* Corner accent */}
      <span
        className="absolute bottom-0 left-0 w-5 h-5"
        style={{ borderBottom: `1px solid ${t.accent}25`, borderLeft: `1px solid ${t.accent}25` }}
      />
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const headRef = useRef(null);
  const inView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section
      id="referanslar"
      className="py-28 lg:py-36 relative overflow-hidden"
      style={{ backgroundColor: "#0d1821" }}
      aria-label="Referanslar ve Müşteri Görüşleri"
    >
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-80 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 100% at 50% 100%, rgba(223,107,48,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        {/* Header */}
        <motion.div
          ref={headRef}
          className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12" style={{ backgroundColor: "#DF6B30" }} />
              <span
                className="text-xs font-semibold tracking-[0.25em] uppercase"
                style={{ color: "#DF6B30" }}
              >
                Referanslar
              </span>
            </div>
            <h2
              className="section-heading text-white"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)" }}
            >
              <ScrambleText text="Müşterilerimiz" duration={700} />
              <br />
              <ScrambleText
                text="Anlatıyor"
                delay={200}
                duration={700}
                style={{ color: "#6C8CA5" }}
              />
            </h2>
          </div>
          <p
            className="text-sm leading-relaxed max-w-xs"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Gizlilik nedeniyle firma isimleri paylaşılmıyor.
            Detaylı referans için doğrudan iletişime geçin.
          </p>
        </motion.div>

        {/* Testimonial grid */}
        <div className="grid sm:grid-cols-2 gap-5 mb-20">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} index={i} />
          ))}
        </div>

        {/* Sector band */}
        <div>
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-px w-8" style={{ backgroundColor: "rgba(108,140,165,0.3)" }} />
            <span
              className="font-mono text-[9px] tracking-[0.2em] uppercase"
              style={{ color: "rgba(108,140,165,0.35)" }}
            >
              Hizmet Verilen Sektörler
            </span>
          </motion.div>

          {/* Scrolling sector ticker */}
          <div className="relative overflow-hidden" style={{ mask: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}>
            <motion.div
              className="flex gap-6 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            >
              {[...sectors, ...sectors].map((sector, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 flex-shrink-0"
                >
                  <span
                    className="text-xs font-medium tracking-widest uppercase"
                    style={{ color: "rgba(255,255,255,0.28)" }}
                  >
                    {sector}
                  </span>
                  <span
                    className="w-1 h-1 rounded-full flex-shrink-0"
                    style={{ backgroundColor: i % 2 === 0 ? "rgba(108,140,165,0.4)" : "rgba(223,107,48,0.4)" }}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
