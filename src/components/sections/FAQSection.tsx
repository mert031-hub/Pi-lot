"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import ScrambleText from "@/components/ui/ScrambleText";

const faqs = [
  {
    q: "Pi-Lot ile çalışmaya nasıl başlayabiliriz?",
    a: "Ücretsiz ön görüşme ile başlıyoruz. 30-45 dakikalık bir değerlendirme görüşmesinde mevcut durumu, hedefleri ve beklentileri konuşuruz. Ardından özelleştirilmiş bir proje önerisi hazırlayarak sunarız. İlk adımı atmak için herhangi bir ön hazırlık gerekmez.",
  },
  {
    q: "Danışmanlık süreci ne kadar sürer?",
    a: "Proje tipine göre değişir. Pilot projeler 4-6 hafta, kapsamlı süreç optimizasyonları 3-6 ay, uzun soluklu operasyonel dönüşümler 6-18 ay sürebilir. İlk görüşmede ihtiyaca özel bir süre ve yol haritası sunuyoruz.",
  },
  {
    q: "Hangi sektörlerde hizmet veriyorsunuz?",
    a: "Öncelikli sektörlerimiz: otomotiv yan sanayi, savunma ve havacılık, beyaz eşya, makine imalatı ve metal işleme. Seri üretim yapan ve süreç iyileştirmesi arayan her üretim tesisine hizmet verebiliyoruz.",
  },
  {
    q: "Sonuçlar garanti ediliyor mu?",
    a: "Kesin rakam garantisi vermek etik açısından doğru olmaz. Ancak her projede ölçülebilir hedefler belirliyoruz ve bu hedeflere ulaşmak için gerekli tüm süreci birlikte yönetiyoruz. Referans projelerimizde ortalama %35+ verimlilik artışı elde edildi.",
  },
  {
    q: "Uzaktan mı, yerinde mi çalışıyorsunuz?",
    a: "Her iki modeli de uyguluyoruz. Saha incelemesi ve kritik uygulama aşamalarında yerinde çalışmak vazgeçilmez. Bunun dışında dijital raporlama, uzaktan toplantılar ve anlık veri takibi ile hibrit bir yapı kuruyoruz.",
  },
  {
    q: "Küçük ölçekli işletmeler için uygun mu?",
    a: "Evet. Büyük fabrikalar kadar, 20-50 kişilik orta ölçekli tesislerle de çalışıyoruz. Danışmanlık kapsamını ve maliyetini firmanın büyüklüğüne ve ihtiyacına göre ölçeklendiriyoruz.",
  },
  {
    q: "ISO sertifikasyon sürecinde destek veriyor musunuz?",
    a: "ISO 9001, ISO 3834 ve EN 15085 süreçlerinde doküman hazırlığından iç denetim eğitimine kadar tam destek sağlıyoruz. Sertifikasyon sürecini hızlandırmak ve ilk seferde geçmek için sistematik bir yol haritası çiziyoruz.",
  },
  {
    q: "Fiyatlandırma nasıl belirleniyor?",
    a: "Proje bazlı fiyatlandırma yapıyoruz. Sabit danışmanlık ücreti veya başarı bazlı modeller sunabiliyoruz. Kesin fiyat, projenin kapsamı ve süresi netleştikten sonra belirlenir. Şeffaf ve anlaşılır bir sözleşme yapısı kullanıyoruz.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className="border-b"
      style={{ borderColor: "rgba(108,140,165,0.1)" }}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.04 }}
    >
      <button
        className="w-full flex items-start justify-between gap-6 py-6 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className="flex items-start gap-4 flex-1">
          <span
            className="font-mono text-[10px] tabular-nums flex-shrink-0 mt-1"
            style={{ color: "rgba(108,140,165,0.38)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className="text-base font-medium leading-snug transition-colors duration-200"
            style={{ color: open ? "#6C8CA5" : "rgba(255,255,255,0.8)" }}
          >
            {faq.q}
          </span>
        </div>
        <motion.div
          className="flex-shrink-0 mt-0.5"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          <Plus
            className="w-4 h-4"
            style={{ color: open ? "#6C8CA5" : "rgba(108,140,165,0.45)" }}
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p
              className="pl-9 pb-6 pr-4 text-sm leading-loose"
              style={{ color: "rgba(255,255,255,0.48)" }}
            >
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const headRef = useRef(null);
  const inView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section
      id="sss"
      className="py-28 lg:py-36 relative overflow-hidden"
      style={{ backgroundColor: "#1a2634" }}
      aria-label="Sıkça Sorulan Sorular"
    >
      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />

      <div className="absolute inset-0 grid-pattern-dark opacity-50" />

      {/* Left accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px]"
        style={{
          background: "linear-gradient(to bottom, #6C8CA5 0%, #DF6B30 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-[340px_1fr] gap-16 lg:gap-24">
          {/* Left: sticky header */}
          <motion.div
            ref={headRef}
            className="lg:sticky lg:top-32 self-start"
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12" style={{ backgroundColor: "#DF6B30" }} />
              <span
                className="text-xs font-semibold tracking-[0.25em] uppercase"
                style={{ color: "#DF6B30" }}
              >
                SSS
              </span>
            </div>

            <h2
              className="section-heading text-white mb-6"
              style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
            >
              <ScrambleText text="Sıkça" duration={600} />
              <br />
              <ScrambleText
                text="Sorulan"
                delay={150}
                duration={600}
                style={{ color: "#6C8CA5" }}
              />
              <br />
              <ScrambleText text="Sorular" delay={300} duration={600} />
            </h2>

            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.38)" }}
            >
              Danışmanlık sürecimiz hakkında en sık sorulan soruların yanıtları.
              Bulamadığınız bir şey varsa doğrudan yazın.
            </p>

            <a
              href="#iletisim"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase transition-all duration-200 group"
              style={{ color: "#DF6B30" }}
            >
              Sorunuzu Sorun
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>

            {/* Technical decoration */}
            <div
              className="mt-12 p-4 hidden lg:block"
              style={{ border: "1px solid rgba(108,140,165,0.12)" }}
            >
              <div
                className="font-mono text-[9px] tracking-wider mb-2"
                style={{ color: "rgba(108,140,165,0.35)" }}
              >
                TOPLAM SORU
              </div>
              <div
                className="text-3xl font-bold"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  color: "#6C8CA5",
                }}
              >
                {String(faqs.length).padStart(2, "0")}
              </div>
              <div
                className="mt-3 h-px"
                style={{ backgroundColor: "rgba(108,140,165,0.15)" }}
              />
              <div
                className="mt-3 font-mono text-[9px] tracking-wider"
                style={{ color: "rgba(108,140,165,0.25)" }}
              >
                π — her sorunun bir cevabı vardır
              </div>
            </div>
          </motion.div>

          {/* Right: FAQ list */}
          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
