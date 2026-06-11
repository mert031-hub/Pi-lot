"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MapPin, MessageCircle, Mail, Send, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="iletisim"
      ref={sectionRef}
      className="py-28 lg:py-36 relative overflow-hidden"
      aria-label="İletişim"
      style={{ backgroundColor: "#ffffff" }}
    >
      {/* Background */}
      <div className="absolute inset-0 dot-pattern" />
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background:
            "linear-gradient(to right, transparent, #6C8CA5 30%, #DF6B30 70%, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        {/* Header */}
        <motion.div
          className="mb-20 max-w-3xl"
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
              İletişim
            </span>
          </div>
          <h2
            className="section-heading mb-5"
            style={{
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              color: "#2C3E50",
            }}
          >
            Projenizi{" "}
            <span style={{ color: "#6C8CA5" }}>Birlikte</span>{" "}
            Değerlendirelim
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "rgba(44,62,80,0.6)" }}
          >
            İlk görüşme tamamen ücretsizdir. Fabrikanızı, hedefinizi ve
            kısıtlarınızı anlayarak size en uygun yol haritasını birlikte
            çizeriz.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Contact info */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-6"
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {/* Contact cards */}
            <ContactCard
              icon={<Phone className="w-5 h-5" />}
              label="Telefon"
              value="0530 745 68 00"
              href="tel:+905307456800"
              color="#6C8CA5"
            />
            <ContactCard
              icon={<MessageCircle className="w-5 h-5" />}
              label="WhatsApp"
              value="Hemen Yaz"
              href="https://wa.me/905307456800"
              color="#25D366"
              external
            />
            <ContactCard
              icon={<Mail className="w-5 h-5" />}
              label="E-posta"
              value="info@pi-lot.com.tr"
              href="mailto:info@pi-lot.com.tr"
              color="#DF6B30"
            />
            <ContactCard
              icon={<MapPin className="w-5 h-5" />}
              label="Konum"
              value="İstanbul, Türkiye"
              color="#6C8CA5"
            />

            {/* Map placeholder */}
            <motion.div
              className="relative overflow-hidden"
              style={{
                height: 200,
                backgroundColor: "rgba(108,140,165,0.06)",
                border: "1px solid rgba(108,140,165,0.15)",
              }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              {/* Simplified map visual */}
              <div className="absolute inset-0 grid-pattern" />
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
                <div
                  className="w-10 h-10 flex items-center justify-center"
                  style={{
                    backgroundColor: "#6C8CA5",
                    borderRadius: "50% 50% 50% 0",
                    transform: "rotate(-45deg)",
                  }}
                >
                  <MapPin
                    className="w-5 h-5 text-white"
                    style={{ transform: "rotate(45deg)" }}
                  />
                </div>
                <span
                  className="text-xs font-semibold tracking-wider uppercase"
                  style={{ color: "rgba(44,62,80,0.6)" }}
                >
                  İstanbul, Türkiye
                </span>
                <a
                  href="https://maps.google.com/?q=Istanbul,Turkey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs underline transition-colors duration-200"
                  style={{ color: "#6C8CA5" }}
                >
                  Haritada Gör →
                </a>
              </div>
            </motion.div>

            {/* Working hours */}
            <div
              className="p-5"
              style={{
                backgroundColor: "rgba(44,62,80,0.03)",
                border: "1px solid rgba(108,140,165,0.12)",
              }}
            >
              <h4
                className="text-xs font-bold tracking-widest uppercase mb-3"
                style={{ color: "#6C8CA5" }}
              >
                Çalışma Saatleri
              </h4>
              {[
                { day: "Pazartesi — Cuma", hours: "08:00 – 18:00" },
                { day: "Cumartesi", hours: "09:00 – 14:00" },
                { day: "Pazar", hours: "Kapalı" },
              ].map((row) => (
                <div
                  key={row.day}
                  className="flex justify-between text-sm py-1.5"
                  style={{
                    borderBottom: "1px solid rgba(108,140,165,0.08)",
                    color: "rgba(44,62,80,0.7)",
                  }}
                >
                  <span>{row.day}</span>
                  <span style={{ fontFamily: "monospace" }}>{row.hours}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {sent ? (
              <motion.div
                className="flex flex-col items-center justify-center h-full min-h-[500px] gap-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.6 }}
                >
                  <CheckCircle
                    className="w-20 h-20"
                    style={{ color: "#6C8CA5" }}
                  />
                </motion.div>
                <h3
                  className="text-2xl font-bold text-center"
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    color: "#2C3E50",
                  }}
                >
                  Mesajınız İletildi
                </h3>
                <p
                  className="text-center max-w-sm"
                  style={{ color: "rgba(44,62,80,0.6)" }}
                >
                  En kısa sürede size dönüş yapacağız. Acil konular için
                  WhatsApp&apos;tan ulaşabilirsiniz.
                </p>
                <a
                  href="https://wa.me/905307456800"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp ile Devam Et
                </a>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField
                    label="Ad Soyad *"
                    name="name"
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                  <FormField
                    label="Şirket"
                    name="company"
                    type="text"
                    value={formState.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField
                    label="Telefon *"
                    name="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={handleChange}
                    required
                    placeholder="0___ ___ __ __"
                  />
                  <FormField
                    label="E-posta"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="ornek@firma.com"
                  />
                </div>

                {/* Subject select */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="subject"
                    className="text-xs font-semibold tracking-wider uppercase"
                    style={{ color: "rgba(44,62,80,0.55)" }}
                  >
                    Konu
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 text-sm outline-none transition-all duration-200"
                    style={{
                      border: "1px solid rgba(108,140,165,0.25)",
                      backgroundColor: "transparent",
                      color: formState.subject ? "#2C3E50" : "rgba(44,62,80,0.4)",
                      appearance: "none",
                    }}
                    onFocus={(e) =>
                      ((e.target as HTMLElement).style.borderColor = "#6C8CA5")
                    }
                    onBlur={(e) =>
                      ((e.target as HTMLElement).style.borderColor =
                        "rgba(108,140,165,0.25)")
                    }
                  >
                    <option value="">Uzmanlık alanı seçin…</option>
                    <option>Üretim Hattı Optimizasyonu</option>
                    <option>Kaynak Teknolojileri</option>
                    <option>Mühendislik & Ar-Ge</option>
                    <option>Operasyonel Yönetim</option>
                    <option>Maliyet & Karlılık Analizi</option>
                    <option>Atıl Kapasite Yönetimi</option>
                    <option>Diğer</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold tracking-wider uppercase"
                    style={{ color: "rgba(44,62,80,0.55)" }}
                  >
                    Mesajınız *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Fabrikanızı, hedeflerinizi ve kısıtlarınızı kısaca anlatın…"
                    className="w-full px-4 py-3.5 text-sm outline-none transition-all duration-200 resize-none"
                    style={{
                      border: "1px solid rgba(108,140,165,0.25)",
                      backgroundColor: "transparent",
                      color: "#2C3E50",
                    }}
                    onFocus={(e) =>
                      ((e.target as HTMLElement).style.borderColor = "#6C8CA5")
                    }
                    onBlur={(e) =>
                      ((e.target as HTMLElement).style.borderColor =
                        "rgba(108,140,165,0.25)")
                    }
                  />
                </div>

                {/* KVKK notice */}
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "rgba(44,62,80,0.45)" }}
                >
                  Bu formu doldurmak suretiyle{" "}
                  <a
                    href="/kvkk"
                    className="underline"
                    style={{ color: "#6C8CA5" }}
                  >
                    Kişisel Verilerin Korunması Politikamızı
                  </a>{" "}
                  kabul etmiş sayılırsınız.
                </p>

                <motion.button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-widest uppercase text-white w-full sm:w-auto transition-all duration-300"
                  style={{
                    backgroundColor: "#6C8CA5",
                    letterSpacing: "0.1em",
                  }}
                  whileHover={{ backgroundColor: "#4a6f8a" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-4 h-4" />
                  Mesaj Gönder
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
  color,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  color: string;
  external?: boolean;
}) {
  const content = (
    <motion.div
      className="flex items-center gap-4 p-5 transition-all duration-300"
      style={{
        border: "1px solid rgba(108,140,165,0.15)",
        backgroundColor: "rgba(108,140,165,0.02)",
      }}
      whileHover={{
        borderColor: color,
        backgroundColor: `${color}0a`,
        x: 4,
        transition: { duration: 0.2 },
      }}
    >
      <div
        className="flex items-center justify-center w-10 h-10 flex-shrink-0"
        style={{ backgroundColor: `${color}18`, color }}
      >
        {icon}
      </div>
      <div>
        <div
          className="text-xs font-bold tracking-widest uppercase mb-0.5"
          style={{ color: "rgba(44,62,80,0.45)" }}
        >
          {label}
        </div>
        <div
          className="text-sm font-semibold"
          style={{ color: "#2C3E50" }}
        >
          {value}
        </div>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }
  return content;
}

function FormField({
  label,
  name,
  type,
  value,
  onChange,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="text-xs font-semibold tracking-wider uppercase"
        style={{ color: "rgba(44,62,80,0.55)" }}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3.5 text-sm outline-none transition-all duration-200"
        style={{
          border: "1px solid rgba(108,140,165,0.25)",
          backgroundColor: "transparent",
          color: "#2C3E50",
        }}
        onFocus={(e) =>
          ((e.target as HTMLElement).style.borderColor = "#6C8CA5")
        }
        onBlur={(e) =>
          ((e.target as HTMLElement).style.borderColor =
            "rgba(108,140,165,0.25)")
        }
      />
    </div>
  );
}
