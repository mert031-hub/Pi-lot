"use client";

import { useState, useMemo, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import ScrambleText from "@/components/ui/ScrambleText";
import MagneticButton from "@/components/ui/MagneticButton";

function formatTL(n: number): string {
  if (n >= 1_000_000) return `₺${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `₺${Math.round(n / 1000)}k`;
  return `₺${n}`;
}

function SliderRow({
  label,
  unit,
  value,
  min,
  max,
  step,
  onChange,
  displayVal,
}: {
  label: string;
  unit: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  displayVal?: string;
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-medium tracking-wider uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>
          {label}
        </span>
        <span
          className="font-mono font-bold tabular-nums"
          style={{ fontFamily: "var(--font-space-grotesk)", color: "#6C8CA5", fontSize: "1.1rem" }}
        >
          {displayVal ?? value}
          <span className="text-xs font-normal ml-1" style={{ color: "rgba(108,140,165,0.55)" }}>
            {unit}
          </span>
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="roi-slider"
        style={{
          "--slider-fill": `${((value - min) / (max - min)) * 100}%`,
        } as React.CSSProperties}
        aria-label={label}
      />
      <div className="flex justify-between mt-1">
        <span className="font-mono text-[9px]" style={{ color: "rgba(108,140,165,0.25)" }}>
          {min}{unit}
        </span>
        <span className="font-mono text-[9px]" style={{ color: "rgba(108,140,165,0.25)" }}>
          {max}{unit}
        </span>
      </div>
    </div>
  );
}

function ResultBox({
  label,
  value,
  sub,
  accent,
  index,
  inView,
}: {
  label: string;
  value: string;
  sub?: string;
  accent: string;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      className="p-5 relative"
      style={{
        borderLeft: `2px solid ${accent}`,
        backgroundColor: "rgba(255,255,255,0.03)",
      }}
      initial={{ opacity: 0, x: 16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
    >
      <div
        className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-2"
        style={{ color: "rgba(255,255,255,0.35)" }}
      >
        {label}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={value}
          className="font-bold tabular-nums"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
            color: accent,
            lineHeight: 1.1,
          }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          {value}
        </motion.div>
      </AnimatePresence>
      {sub && (
        <div className="text-[10px] mt-1" style={{ color: "rgba(255,255,255,0.28)" }}>
          {sub}
        </div>
      )}
    </motion.div>
  );
}

export default function ROICalculatorSection() {
  const [employees, setEmployees] = useState(80);
  const [shifts, setShifts] = useState(2);
  const [oee, setOee] = useState(62);
  const [scrapRate, setScrapRate] = useState(3);

  const headRef = useRef(null);
  const inView = useInView(headRef, { once: true, margin: "-80px" });

  const results = useMemo(() => {
    const benchmark = 83;
    const oeePotential = Math.max(0, Math.min(28, benchmark - oee));
    const efficiencyValue = employees * shifts * 9500 * (oeePotential / 100);
    const scrapValue = (scrapRate / 100) * employees * 5000 * 12 * 0.52;
    const combined = efficiencyValue + scrapValue;
    const low = Math.round((combined * 0.55) / 10000) * 10000;
    const high = Math.round((combined * 0.90) / 10000) * 10000;
    const effGain = Math.min(32, Math.max(0, Math.round(oeePotential * 0.78)));
    const consultingFee = 55000 + employees * 380;
    const payback = combined > 0
      ? Math.max(2, Math.min(18, Math.round((consultingFee / combined) * 12)))
      : 0;

    return { low, high, effGain, payback, combined };
  }, [employees, shifts, oee, scrapRate]);

  const savingsRange =
    results.low === 0
      ? "Hesaplanıyor..."
      : `${formatTL(results.low)} – ${formatTL(results.high)}`;

  return (
    <section
      id="roi-hesaplama"
      className="py-28 lg:py-36 relative overflow-hidden"
      style={{ backgroundColor: "#1a2634" }}
      aria-label="ROI Hesaplama Aracı"
    >
      <div className="absolute inset-0 grid-pattern-dark opacity-60" />

      {/* Right glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 90% 50%, rgba(223,107,48,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        {/* Header */}
        <motion.div
          ref={headRef}
          className="mb-14"
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
              Potansiyel Analizi
            </span>
          </div>
          <h2
            className="section-heading text-white"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)" }}
          >
            <ScrambleText text="Fabrikanızın" duration={700} />{" "}
            <ScrambleText
              text="Potansiyelini"
              delay={200}
              duration={700}
              style={{ color: "#6C8CA5" }}
            />
            <br />
            <ScrambleText text="Hesaplayın" delay={400} duration={700} />
          </h2>
          <p
            className="mt-4 text-sm leading-relaxed max-w-lg"
            style={{ color: "rgba(255,255,255,0.38)" }}
          >
            Üretim verilerinizi girin, Pi-Lot metodolojisinin tahmini etkisini görün.
            Sonuçlar yönlendirici — gerçek değer saha analizinde belirlenir.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Inputs */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className="p-7 flex flex-col gap-7"
              style={{
                backgroundColor: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(108,140,165,0.12)",
              }}
            >
              <SliderRow
                label="Çalışan Sayısı"
                unit=" kişi"
                value={employees}
                min={10}
                max={500}
                step={5}
                onChange={setEmployees}
              />

              {/* Vardiya toggle */}
              <div>
                <div className="text-xs font-medium tracking-wider uppercase mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Vardiya Sayısı
                </div>
                <div className="flex gap-3">
                  {[1, 2, 3].map((s) => (
                    <button
                      key={s}
                      onClick={() => setShifts(s)}
                      className="flex-1 py-2.5 text-sm font-bold tracking-wider transition-all duration-200"
                      style={{
                        border: `1px solid ${shifts === s ? "#6C8CA5" : "rgba(108,140,165,0.2)"}`,
                        backgroundColor: shifts === s ? "rgba(108,140,165,0.15)" : "transparent",
                        color: shifts === s ? "#6C8CA5" : "rgba(255,255,255,0.35)",
                        fontFamily: "var(--font-space-grotesk)",
                      }}
                      aria-pressed={shifts === s}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <SliderRow
                label="Mevcut OEE"
                unit="%"
                value={oee}
                min={30}
                max={82}
                step={1}
                onChange={setOee}
              />

              <SliderRow
                label="Aylık Fire Oranı"
                unit="%"
                value={scrapRate}
                min={0.5}
                max={10}
                step={0.5}
                onChange={setScrapRate}
                displayVal={scrapRate.toFixed(1)}
              />
            </div>

            {/* Disclaimer */}
            <p
              className="text-[10px] leading-relaxed font-mono"
              style={{ color: "rgba(108,140,165,0.28)" }}
            >
              * Hesaplama Pi-Lot metodoloji ortalamaları baz alınarak yapılmaktadır.
              Gerçek değer saha incelemesi ve mevcut duruma göre belirlenir.
              π — sonsuz iyileştirme potansiyeli.
            </p>
          </motion.div>

          {/* Right: Results */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Results header */}
            <div
              className="flex items-center justify-between pb-4"
              style={{ borderBottom: "1px solid rgba(108,140,165,0.1)" }}
            >
              <span
                className="font-mono text-[10px] tracking-[0.2em] uppercase"
                style={{ color: "rgba(108,140,165,0.45)" }}
              >
                Tahmini Potansiyel
              </span>
              <div className="flex items-center gap-2">
                <motion.span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "#6C8CA5" }}
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                />
                <span className="font-mono text-[9px]" style={{ color: "rgba(108,140,165,0.4)" }}>
                  LIVE.CALC
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <ResultBox
                label="Verimlilik Artış Potansiyeli"
                value={results.effGain > 0 ? `+%${results.effGain}` : "Maks. OEE'ye ulaşıldı"}
                sub="OEE iyileştirme tahmini"
                accent="#6C8CA5"
                index={0}
                inView={inView}
              />
              <ResultBox
                label="Yıllık Tasarruf Potansiyeli"
                value={savingsRange}
                sub="Konservatif – optimistik aralık"
                accent="#DF6B30"
                index={1}
                inView={inView}
              />
              <ResultBox
                label="Tahmini Geri Dönüş Süresi"
                value={results.payback > 0 ? `${results.payback} ay` : "—"}
                sub="Danışmanlık yatırımı / yıllık tasarruf"
                accent="#6C8CA5"
                index={2}
                inView={inView}
              />
            </div>

            {/* OEE benchmark visual */}
            <div
              className="p-5"
              style={{
                backgroundColor: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(108,140,165,0.1)",
              }}
            >
              <div
                className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-4"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                OEE Karşılaştırma
              </div>
              <div className="flex flex-col gap-2.5">
                {[
                  { label: "Mevcut OEE", val: oee, color: "#DF6B30" },
                  { label: "Sektör Ort.", val: 72, color: "rgba(108,140,165,0.45)" },
                  { label: "Hedef OEE", val: Math.min(83, oee + (83 - oee) * 0.8), color: "#6C8CA5" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center gap-3">
                    <span
                      className="text-[9px] w-20 flex-shrink-0 font-mono"
                      style={{ color: "rgba(255,255,255,0.35)" }}
                    >
                      {row.label}
                    </span>
                    <div className="flex-1 h-1.5 relative" style={{ backgroundColor: "rgba(108,140,165,0.1)" }}>
                      <motion.div
                        className="absolute left-0 top-0 h-full"
                        style={{ backgroundColor: row.color }}
                        animate={{ width: `${(row.val / 100) * 100}%` }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      />
                    </div>
                    <span
                      className="text-[10px] font-mono tabular-nums w-10 text-right flex-shrink-0"
                      style={{ color: row.color }}
                    >
                      %{Math.round(row.val)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <MagneticButton strength={0.2} className="w-full">
              <a
                href="#iletisim"
                className="w-full flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300 group"
                style={{
                  backgroundColor: "#DF6B30",
                  color: "#ffffff",
                  letterSpacing: "0.08em",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor = "#c05828")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor = "#DF6B30")
                }
              >
                Bu Potansiyele Ulaşalım
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
