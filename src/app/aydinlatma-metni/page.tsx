import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aydınlatma Metni",
  description: "Pi-Lot Mühendislik & Danışmanlık KVKK Aydınlatma Metni",
};

export default function AydinlatmaMetniPage() {
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
            Aydınlatma Metni
          </h1>
          <p className="mt-3 text-lg" style={{ color: "rgba(255,255,255,0.5)" }}>
            6698 Sayılı KVKK Kapsamında Kişisel Veri İşleme Hakkında Aydınlatma
          </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-16">
        <div className="flex flex-col gap-10">
          {[
            {
              title: "Veri Sorumlusu",
              body: `Pi-Lot Mühendislik & Danışmanlık
İstanbul, Türkiye
info@pi-lot.com.tr
Tel: 0530 745 68 00`,
            },
            {
              title: "İşlenen Kişisel Veriler ve İşlenme Amaçları",
              body: `Aşağıdaki kişisel verileriniz belirtilen amaçlarla işlenmektedir:

Ad, Soyad → Müşteri tanımlama, iletişim
Telefon Numarası → Hizmet görüşmesi, teknik destek
E-posta Adresi → Yazışma, teklif iletimi
Şirket Bilgileri → Kurumsal danışmanlık hizmeti
IP Adresi / Çerezler → Web sitesi güvenliği ve analiz`,
            },
            {
              title: "Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi",
              body: `Kişisel verileriniz aşağıdaki yöntemlerle toplanmaktadır:

• İletişim formları aracılığıyla (açık rıza)
• Telefon görüşmeleri yoluyla (sözleşmenin ifası)
• Web sitesi kullanımı sırasında otomatik olarak (meşru menfaat)

Hukuki dayanak: KVKK m.5/2-c (sözleşmenin ifası), m.5/2-f (meşru menfaat), m.5/1 (açık rıza)`,
            },
            {
              title: "Kişisel Verilerin Aktarımı",
              body: "İşlenen kişisel veriler, yurt içinde altyapı hizmet sağlayıcılarıyla gizlilik sözleşmeleri çerçevesinde paylaşılabilir. Yurt dışına aktarım söz konusu olduğunda KVKK'nın 9. maddesindeki şartlara uyulur.",
            },
            {
              title: "Veri Sahibinin Hakları (KVKK m.11)",
              body: `Kişisel veri sahibi olarak aşağıdaki haklara sahipsiniz:

a) Kişisel verilerinizin işlenip işlenmediğini öğrenme
b) İşlenmişse bilgi talep etme
c) İşlenme amacı ve amacına uygun kullanılıp kullanılmadığını öğrenme
d) Yurt içinde/dışında aktarıldığı üçüncü kişileri öğrenme
e) Eksik/yanlış verilerin düzeltilmesini talep etme
f) KVKK'daki şartlar çerçevesinde silme/yok edilmesini talep etme
g) Yukarıdaki işlemlerin aktarılan üçüncü kişilere bildirilmesini isteme
h) İşlenen verilerin analiz edilmesi suretiyle aleyhinize bir sonuç ortaya çıkmasına itiraz etme
i) Kanuna aykırı işlenmesi nedeniyle uğradığınız zararın giderilmesini talep etme`,
            },
            {
              title: "Başvuru Yöntemi",
              body: `Haklarınızı kullanmak için başvurularınızı:

E-posta: info@pi-lot.com.tr
Telefon: 0530 745 68 00

adreslerine iletebilirsiniz. Başvurularınız 30 gün içinde yanıtlanacaktır.`,
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
