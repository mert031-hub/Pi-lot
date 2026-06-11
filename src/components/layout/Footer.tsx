"use client";

import Link from "next/link";
import { Phone, MapPin, Linkedin, MessageCircle } from "lucide-react";

const corporateLinks = [
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#uzmanliklar", label: "Uzmanlıklar" },
  { href: "#ekibimiz", label: "Ekibimiz" },
  { href: "#surec", label: "Referans Süreç" },
  { href: "#iletisim", label: "İletişim" },
];

const legalLinks = [
  { href: "/kvkk", label: "KVKK" },
  { href: "/gizlilik-politikasi", label: "Gizlilik Politikası" },
  { href: "/cerez-politikasi", label: "Çerez Politikası" },
  { href: "/kullanim-sartlari", label: "Kullanım Şartları" },
  { href: "/aydinlatma-metni", label: "Aydınlatma Metni" },
];

function PiLotLogoFull() {
  return (
    <div className="flex items-center gap-2">
      <svg width="32" height="28" viewBox="0 0 32 28" fill="none" aria-hidden="true">
        <line x1="2" y1="7" x2="30" y2="7" stroke="#6C8CA5" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 10,7 C 10,7 9,15 7,26" stroke="#6C8CA5" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M 22,7 C 22,7 21,15 19,26" stroke="#6C8CA5" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </svg>
      <span style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 20, fontWeight: 700, color: "#6C8CA5", letterSpacing: "0.04em" }}>—</span>
      <span style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 20, fontWeight: 700, color: "#DF6B30", letterSpacing: "0.08em" }}>LOT</span>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{ backgroundColor: "#0d1821", borderTop: "1px solid rgba(108,140,165,0.1)" }}
      aria-label="Site altbilgisi"
    >
      {/* Top accent */}
      <div
        className="h-px"
        style={{
          background: "linear-gradient(to right, transparent, #6C8CA5 30%, #DF6B30 70%, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Main footer grid */}
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <PiLotLogoFull />
            <p
              className="mt-5 text-sm leading-relaxed max-w-xs"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Sonsuz mühendislik vizyonunu, izlenebilir üretim kalitesiyle
              buluşturuyoruz.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-8">
              <SocialIcon
                href="https://www.linkedin.com/company/pi-lot"
                label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </SocialIcon>
              <SocialIcon
                href="https://wa.me/905307456800"
                label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </SocialIcon>
              <SocialIcon href="tel:+905307456800" label="Telefon">
                <Phone className="w-4 h-4" />
              </SocialIcon>
            </div>
          </div>

          {/* Corporate links */}
          <div>
            <h3
              className="text-xs font-bold tracking-[0.25em] uppercase mb-6"
              style={{ color: "#6C8CA5" }}
            >
              Kurumsal
            </h3>
            <ul className="flex flex-col gap-3">
              {corporateLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#6C8CA5")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "rgba(255,255,255,0.45)")
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3
              className="text-xs font-bold tracking-[0.25em] uppercase mb-6"
              style={{ color: "#6C8CA5" }}
            >
              İletişim
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="tel:+905307456800"
                  className="flex items-center gap-2.5 text-sm transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#6C8CA5")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.45)")
                  }
                >
                  <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                  0530 745 68 00
                </a>
              </li>
              <li>
                <div
                  className="flex items-center gap-2.5 text-sm"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                  İstanbul, Türkiye
                </div>
              </li>
              <li>
                <a
                  href="https://wa.me/905307456800"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#25D366")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.45)")
                  }
                >
                  <MessageCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  WhatsApp İletişim
                </a>
              </li>
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h3
              className="text-xs font-bold tracking-[0.25em] uppercase mb-6"
              style={{ color: "#6C8CA5" }}
            >
              Yasal
            </h3>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#6C8CA5")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "rgba(255,255,255,0.45)")
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(108,140,165,0.08)" }}
        >
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            © {year} Pi-Lot Mühendislik & Danışmanlık. Tüm hakları saklıdır.
          </p>
          <p
            className="text-xs font-mono"
            style={{ color: "rgba(108,140,165,0.25)" }}
          >
            π — izlenebilirlik × sonsuzluk
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="flex items-center justify-center w-9 h-9 transition-all duration-300"
      style={{
        border: "1px solid rgba(108,140,165,0.25)",
        color: "rgba(255,255,255,0.45)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "#6C8CA5";
        el.style.color = "#6C8CA5";
        el.style.backgroundColor = "rgba(108,140,165,0.08)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(108,140,165,0.25)";
        el.style.color = "rgba(255,255,255,0.45)";
        el.style.backgroundColor = "transparent";
      }}
    >
      {children}
    </a>
  );
}
