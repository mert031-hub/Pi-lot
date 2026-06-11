"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, Mail, Phone } from "lucide-react";
import ParticleNetwork from "@/components/ui/ParticleNetwork";
import ScrambleText from "@/components/ui/ScrambleText";

const teamMember = {
  name: "Emre Kasım",
  title: "Danışman Mühendis",
  degree: "Yüksek Lisans — Makine Mühendisliği",
  initials: "EK",
  tagline: "\"Üretimi veri ile yönet, kararlarını sayılarla al.\"",
  bio: "15+ yıl boyunca otomotiv, savunma ve beyaz eşya sektörlerinde üretim mühendisliği ve operasyonel mükemmellik üzerine çalıştı. Lean Manufacturing, Six Sigma Black Belt ve kaynak teknolojileri alanlarındaki derin uzmanlığıyla 200+ projede ölçülebilir iyileştirmeler gerçekleştirdi.",
  specializations: [
    "Lean Manufacturing",
    "Six Sigma — Black Belt",
    "Kaynak Teknolojileri",
    "Üretim Planlama & S&OP",
    "Atıl Kapasite Yönetimi",
    "Maliyet Optimizasyonu",
    "Robotik Otomasyon",
    "ISO 3834 / 9001",
  ],
  achievements: [
    { val: "200+", label: "Proje" },
    { val: "15+", label: "Yıl Deneyim" },
    { val: "%35+", label: "Ort. Verimlilik Artışı" },
    { val: "8", label: "Sektör" },
  ],
  linkedin: "https://www.linkedin.com/in/emre-kasim",
};

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="ekibimiz"
      ref={sectionRef}
      className="py-28 lg:py-36 relative overflow-hidden"
      style={{ backgroundColor: "#2C3E50" }}
      aria-label="Ekibimiz"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern-dark opacity-60" />
      <ParticleNetwork count={40} connectDist={110} color="108,140,165" style={{ opacity: 0.35 }} />

      {/* Accent */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background:
            "linear-gradient(to right, #6C8CA5 0%, #DF6B30 50%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12" style={{ backgroundColor: "#DF6B30" }} />
            <span
              className="text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ color: "#DF6B30" }}
            >
              Ekibimiz
            </span>
          </div>
          <h2
            className="section-heading text-white"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
          >
            <ScrambleText text="Uzmanlık" duration={700} />{" "}
            <ScrambleText text="Arkasındaki" delay={150} duration={700} style={{ color: "#6C8CA5" }} />{" "}
            <ScrambleText text="İnsan" delay={300} duration={700} />
          </h2>
        </motion.div>

        {/* Team member — Apple showcase style */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Photo & identity */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Avatar */}
            <div className="relative mb-10 inline-block">
              {/* Outer ring */}
              <motion.div
                className="absolute -inset-3 rounded-none"
                style={{ border: "1px solid rgba(108,140,165,0.3)" }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              {/* Inner ring */}
              <div
                className="absolute -inset-6 rounded-none"
                style={{ border: "1px solid rgba(223,107,48,0.1)" }}
              />
              {/* Avatar circle */}
              <div
                className="w-36 h-36 flex items-center justify-center relative"
                style={{
                  backgroundColor: "rgba(108,140,165,0.15)",
                  border: "2px solid rgba(108,140,165,0.4)",
                }}
              >
                <span
                  className="text-5xl font-black"
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    color: "#6C8CA5",
                    letterSpacing: "0.05em",
                  }}
                >
                  {teamMember.initials}
                </span>
                {/* Corner accents */}
                <div
                  className="absolute top-0 left-0 w-5 h-5"
                  style={{
                    borderTop: "2px solid #DF6B30",
                    borderLeft: "2px solid #DF6B30",
                  }}
                />
                <div
                  className="absolute bottom-0 right-0 w-5 h-5"
                  style={{
                    borderBottom: "2px solid #DF6B30",
                    borderRight: "2px solid #DF6B30",
                  }}
                />
              </div>
            </div>

            {/* Identity */}
            <div className="mt-16">
              <h3
                className="section-heading text-white mb-2"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                {teamMember.name}
              </h3>
              <p
                className="text-lg font-light mb-1"
                style={{ color: "#6C8CA5" }}
              >
                {teamMember.title}
              </p>
              <p
                className="text-sm mb-8"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {teamMember.degree}
              </p>

              {/* Tagline */}
              <blockquote
                className="text-base italic border-l-2 pl-4 py-1 mb-10"
                style={{
                  borderColor: "rgba(223,107,48,0.5)",
                  color: "rgba(255,255,255,0.55)",
                  fontFamily: "var(--font-space-grotesk)",
                }}
              >
                {teamMember.tagline}
              </blockquote>

              {/* Social links */}
              <div className="flex gap-3">
                <SocialBtn
                  href={teamMember.linkedin}
                  icon={<Linkedin className="w-4 h-4" />}
                  label="LinkedIn"
                />
                <SocialBtn
                  href="mailto:info@pi-lot.com.tr"
                  icon={<Mail className="w-4 h-4" />}
                  label="E-posta"
                />
                <SocialBtn
                  href="tel:+905307456800"
                  icon={<Phone className="w-4 h-4" />}
                  label="Telefon"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Bio + Expertise + Stats */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Bio */}
            <div
              className="p-8"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(108,140,165,0.12)",
              }}
            >
              <h4
                className="text-xs font-bold tracking-[0.25em] uppercase mb-4"
                style={{ color: "#6C8CA5" }}
              >
                Biyografi
              </h4>
              <p
                className="text-base leading-loose"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {teamMember.bio}
              </p>
            </div>

            {/* Specializations */}
            <div
              className="p-8"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(108,140,165,0.12)",
              }}
            >
              <h4
                className="text-xs font-bold tracking-[0.25em] uppercase mb-5"
                style={{ color: "#6C8CA5" }}
              >
                Uzmanlık Alanları
              </h4>
              <div className="flex flex-wrap gap-2">
                {teamMember.specializations.map((spec, i) => (
                  <motion.span
                    key={spec}
                    className="px-3 py-1.5 text-xs font-medium tracking-wider"
                    style={{
                      border: "1px solid rgba(108,140,165,0.25)",
                      color: "rgba(255,255,255,0.6)",
                    }}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.05, duration: 0.3 }}
                    whileHover={{
                      borderColor: "#6C8CA5",
                      color: "#6C8CA5",
                      transition: { duration: 0.15 },
                    }}
                  >
                    {spec}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Achievement stats */}
            <div className="grid grid-cols-2 gap-4">
              {teamMember.achievements.map((ach, i) => (
                <motion.div
                  key={ach.label}
                  className="p-6"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    borderLeft: "2px solid rgba(108,140,165,0.3)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                >
                  <div
                    className="text-3xl font-bold tabular-nums mb-1"
                    style={{
                      fontFamily: "var(--font-space-grotesk)",
                      color: "#6C8CA5",
                    }}
                  >
                    {ach.val}
                  </div>
                  <div
                    className="text-xs tracking-wider uppercase"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {ach.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SocialBtn({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all duration-300"
      style={{
        border: "1px solid rgba(108,140,165,0.3)",
        color: "rgba(255,255,255,0.55)",
      }}
      aria-label={label}
      whileHover={{
        borderColor: "rgba(108,140,165,0.8)",
        color: "#6C8CA5",
        y: -1,
      }}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </motion.a>
  );
}
