import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "Pi-Lot Mühendislik & Danışmanlık Gizlilik Politikası",
};

export default function GizlilikPolitikasiPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="py-16 lg:py-20" style={{ backgroundColor: "#2C3E50" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <Link
            href="/"
            className="text-xs font-semibold tracking-widest uppercase mb-8 inline-flex items-center gap-2 transition-colors duration-200"
            style={{ color: "#6C8CA5", letterSpacing: "0.15em" }}
          >
            ← Pi-Lot Ana Sayfa
          </Link>
          <h1
            className="text-4xl lg:text-5xl font-bold text-white mt-6"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Gizlilik Politikası
          </h1>
          <p className="mt-3 text-lg" style={{ color: "rgba(255,255,255,0.5)" }}>
            Son güncelleme: Ocak 2025
          </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-16">
        <div className="flex flex-col gap-10">
          {[
            {
              title: "Genel Bilgi",
              body: "Pi-Lot Mühendislik & Danışmanlık olarak, web sitemizi ziyaret ettiğinizde ve hizmetlerimizden yararlandığınızda gizliliğinize saygı duyuyor ve kişisel verilerinizin korunmasını birincil önceliğimiz olarak görüyoruz.",
            },
            {
              title: "Toplanan Veriler",
              body: `Web sitemizde şu veriler toplanabilir:

• İletişim formu aracılığıyla ad, e-posta, telefon
• Otomatik olarak: IP adresi, tarayıcı türü, ziyaret edilen sayfalar
• Çerezler aracılığıyla: oturum verileri, tercihler`,
            },
            {
              title: "Verilerin Kullanımı",
              body: `Toplanan veriler yalnızca şu amaçlarla kullanılır:

• Danışmanlık taleplerinizi yanıtlamak
• Hizmet kalitesini iyileştirmek
• Yasal yükümlülükleri yerine getirmek
• Güvenlik ve dolandırıcılık önleme`,
            },
            {
              title: "Üçüncü Taraflarla Paylaşım",
              body: "Kişisel verileriniz, yasal zorunluluklar ve hizmet sağlayıcı altyapı gereklilikleri dışında üçüncü taraflarla paylaşılmaz, satılmaz veya kiralanmaz.",
            },
            {
              title: "Veri Güvenliği",
              body: "Tüm veri iletişimleri SSL/TLS şifreleme ile korunmaktadır. Sunucularımız güvenlik duvarı ve erişim kontrolleriyle güvence altına alınmıştır.",
            },
            {
              title: "İletişim",
              body: "Gizlilik politikamız hakkında sorularınız için: info@pi-lot.com.tr | 0530 745 68 00",
            },
          ].map((sec) => (
            <div key={sec.title}>
              <h2
                className="text-xl font-bold mb-4"
                style={{ fontFamily: "var(--font-space-grotesk)", color: "#2C3E50" }}
              >
                {sec.title}
              </h2>
              <p
                className="text-base leading-loose whitespace-pre-line"
                style={{ color: "rgba(44,62,80,0.7)" }}
              >
                {sec.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
