import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kullanım Şartları",
  description: "Pi-Lot Mühendislik & Danışmanlık Kullanım Şartları",
};

export default function KullanimSartlariPage() {
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
            Kullanım Şartları
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
              title: "1. Kabul",
              body: "Bu web sitesini kullanarak aşağıdaki şartları kabul etmiş sayılırsınız. Bu şartları kabul etmiyorsanız lütfen siteyi kullanmayınız.",
            },
            {
              title: "2. Hizmet Kapsamı",
              body: "Pi-Lot web sitesi bilgilendirme amacıyla sunulmaktadır. Sitede yer alan içerikler, danışmanlık hizmetlerimiz hakkında genel bilgi vermek amacıyla hazırlanmıştır ve hukuki bağlayıcılığı bulunmamaktadır.",
            },
            {
              title: "3. Fikri Mülkiyet",
              body: "Web sitesindeki tüm içerik, logo, grafik ve materyaller Pi-Lot'a aittir ve telif hukuku kapsamında korunmaktadır. Yazılı izin olmaksızın çoğaltılamaz veya ticari amaçla kullanılamaz.",
            },
            {
              title: "4. Sorumluluk Sınırları",
              body: "Pi-Lot, web sitesindeki bilgilerin doğruluğu için makul özen göstermekle birlikte, bilgilerin tamlığı veya güncelliği konusunda garanti vermez. Sitedeki bilgiler önceden haber verilmeksizin değiştirilebilir.",
            },
            {
              title: "5. Dış Bağlantılar",
              body: "Web sitemiz üçüncü taraf sitelere bağlantı içerebilir. Bu siteler üzerinde kontrolümüz bulunmamakta olup içeriklerinden sorumlu değiliz.",
            },
            {
              title: "6. Uygulanacak Hukuk",
              body: "Bu şartlar Türkiye Cumhuriyeti hukukuna tabi olup anlaşmazlıklarda İstanbul Mahkemeleri yetkilidir.",
            },
            {
              title: "7. Değişiklikler",
              body: "Kullanım şartları önceden bildirim yapılmaksızın güncellenebilir. Güncel versiyona web sitemizden ulaşabilirsiniz.",
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
