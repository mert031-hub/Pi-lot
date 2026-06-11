import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description: "Pi-Lot Mühendislik & Danışmanlık Çerez Politikası",
};

export default function CerezPolitikasiPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="py-16 lg:py-20" style={{ backgroundColor: "#2C3E50" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <Link
            href="/"
            className="text-xs font-semibold tracking-widest uppercase mb-8 inline-flex items-center gap-2"
            style={{ color: "#6C8CA5", letterSpacing: "0.15em" }}
          >
            ← Pi-Lot Ana Sayfa
          </Link>
          <h1
            className="text-4xl lg:text-5xl font-bold text-white mt-6"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Çerez Politikası
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
              title: "Çerezler Nedir?",
              body: "Çerezler, web sitelerinin daha iyi bir kullanıcı deneyimi sunmak amacıyla tarayıcınıza yerleştirdiği küçük metin dosyalarıdır. Web sitemizi ziyaret ettiğinizde çeşitli türde çerezler kullanılabilir.",
            },
            {
              title: "Kullandığımız Çerez Türleri",
              body: `Zorunlu Çerezler: Web sitesinin temel işlevleri için gereklidir. Bu çerezler olmadan site düzgün çalışmaz.

Analitik Çerezler: Ziyaretçilerin siteyi nasıl kullandığını anlamamıza yardımcı olur. Bu veriler anonimleştirilmiş biçimde toplanır.

Tercih Çerezleri: Dil tercihi gibi ayarlarınızı hatırlamak için kullanılır.`,
            },
            {
              title: "Çerezleri Kontrol Etme",
              body: `Tarayıcı ayarlarınız üzerinden çerezleri yönetebilirsiniz:

• Chrome: Ayarlar → Gizlilik ve Güvenlik → Çerezler
• Firefox: Seçenekler → Gizlilik ve Güvenlik
• Safari: Tercihler → Gizlilik
• Edge: Ayarlar → Gizlilik, Arama ve Hizmetler

Çerezleri devre dışı bırakmanız, bazı site işlevlerinin çalışmamasına neden olabilir.`,
            },
            {
              title: "Üçüncü Taraf Çerezler",
              body: "Web sitemiz, analitik hizmetleri için anonim kullanım verileri toplayabilir. Bu hizmetler kendi gizlilik politikalarına tabidir.",
            },
            {
              title: "İletişim",
              body: "Çerez politikamız hakkında sorularınız için: info@pi-lot.com.tr",
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
