import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "KVKK — Kişisel Verilerin Korunması",
  description: "Pi-Lot Mühendislik & Danışmanlık KVKK Politikası",
};

export default function KVKKPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#f8f9fa" }}>
      <div
        className="py-16 lg:py-20"
        style={{ backgroundColor: "#2C3E50" }}
      >
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
            KVKK
          </h1>
          <p className="mt-3 text-lg" style={{ color: "rgba(255,255,255,0.5)" }}>
            Kişisel Verilerin Korunması Kanunu Politikası
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-16">
        <LegalContent
          sections={[
            {
              title: "1. Veri Sorumlusunun Kimliği",
              body: `Pi-Lot Mühendislik & Danışmanlık ("Pi-Lot"), 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında veri sorumlusu sıfatıyla hareket etmektedir.

İletişim: info@pi-lot.com.tr | Tel: 0530 745 68 00 | Adres: İstanbul, Türkiye`,
            },
            {
              title: "2. İşlenen Kişisel Veriler",
              body: `Pi-Lot olarak aşağıdaki kişisel verilerinizi işleyebiliriz:

• Kimlik bilgileri: Ad, soyad, unvan
• İletişim bilgileri: Telefon numarası, e-posta adresi, adres
• İşlem güvenliği bilgileri: IP adresi, çerez verileri, site kullanım verileri
• Talep/şikâyet bilgileri: Bizimle paylaştığınız proje ve talep detayları`,
            },
            {
              title: "3. Kişisel Verilerin İşlenme Amaçları",
              body: `Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:

• Danışmanlık hizmetlerinin sunulması
• Müşteri iletişiminin sağlanması
• Yasal yükümlülüklerin yerine getirilmesi
• İş geliştirme ve teklif hazırlama süreçleri
• Web sitesi güvenliği ve kullanım analizi`,
            },
            {
              title: "4. Kişisel Verilerin Aktarımı",
              body: `Kişisel verileriniz; yasal zorunluluklar haricinde üçüncü kişilerle paylaşılmaz. Hizmet alınan teknik altyapı sağlayıcıları, gizlilik sözleşmeleri çerçevesinde kısıtlı erişime sahiptir.`,
            },
            {
              title: "5. Haklarınız",
              body: `KVKK'nın 11. maddesi kapsamında aşağıdaki haklara sahipsiniz:

• Kişisel verilerinizin işlenip işlenmediğini öğrenme
• İşlenmişse bilgi talep etme
• İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme
• Yurt içinde/dışında aktarıldığı üçüncü kişileri öğrenme
• Eksik/yanlış işlenmişse düzeltme talep etme
• Silinmesi/yok edilmesi halinde bildirim talep etme
• İtiraz etme ve zararın giderilmesini talep etme

Başvurularınızı info@pi-lot.com.tr adresine iletebilirsiniz.`,
            },
            {
              title: "6. Güvenlik Önlemleri",
              body: `Pi-Lot, kişisel verilerin güvenliğini sağlamak amacıyla teknik ve idari tedbirler almaktadır. SSL şifreleme, erişim kontrolü ve düzenli güvenlik denetimleri uygulanmaktadır.`,
            },
            {
              title: "7. Politika Güncellemeleri",
              body: `Bu politika gerektiğinde güncellenebilir. Güncel versiyona web sitemizden ulaşabilirsiniz. Son güncelleme: Ocak 2025`,
            },
          ]}
        />
      </div>
    </main>
  );
}

function LegalContent({
  sections,
}: {
  sections: { title: string; body: string }[];
}) {
  return (
    <div className="flex flex-col gap-10">
      {sections.map((sec) => (
        <div key={sec.title}>
          <h2
            className="text-xl font-bold mb-4"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              color: "#2C3E50",
            }}
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
  );
}
