import { H2, H3 } from "@/components/DocsHeading";
import { Catatan, Kode, SpecHeader } from "@/components/designer/SpecKit";
import { CodeBlock } from "../../components/CodeBlock";

export default function DesignHandoff() {
  return (
    <>
      <SpecHeader
        title="Serah terima"
        lead="Format spec yang bisa langsung dikerjakan, dan yang selalu balik lagi ke kamu."
      />

      <H2>Perbedaannya cuma satu kalimat</H2>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="flex flex-col gap-2 rounded-xl border border-destructive/30 bg-destructive/5 p-5 text-sm">
          <div className="font-medium text-destructive">Balik lagi ke kamu</div>
          <p>
            &ldquo;Tombol Simpan warnanya #6750A4, teks putih, 24px semibold,
            radius 20.&rdquo;
          </p>
          <p className="text-xs text-muted-foreground">
            Empat pertanyaan langsung muncul: ini slot primary atau warna sekali
            pakai? Dark mode-nya apa? 24px itu gaya teks yang mana? Radius 20
            tetap atau ikut global?
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-xl border p-5 text-sm">
          <div className="font-medium">Langsung dikerjakan</div>
          <p>
            &ldquo;Tombol Simpan: <Kode>primary</Kode> / <Kode>onPrimary</Kode>,
            Label Large, radius Full, tinggi 40dp.&rdquo;
          </p>
          <p className="text-xs text-muted-foreground">
            Semua nilainya sudah ada di sistem. Dark mode terbentuk sendiri.
          </p>
        </div>
      </div>

      <H2>Format spec yang lengkap</H2>
      <p className="text-muted-foreground">
        Untuk tiap elemen yang tidak memakai nilai bawaan, sebutkan empat hal
        ini:
      </p>
      <CodeBlock
        language="text"
        code={`Nama elemen
  Warna   : <slot latar> / <slot teks>
  Teks    : <nama gaya tipografi>
  Bentuk  : <tingkat radius>
  Ukuran  : <tinggi dp, atau "bawaan">

Contoh:
Kartu produk
  Warna   : surfaceContainer / onSurface
  Teks    : judul Title Medium, harga Body Medium
  Bentuk  : Medium
  Ukuran  : padding 16dp, bawaan`}
      />
      <p className="text-muted-foreground">
        Elemen yang memakai nilai bawaan tidak perlu ditulis sama sekali. Spec
        yang mengulang nilai bawaan justru membuat developer ragu apakah itu
        disengaja.
      </p>

      <H2>Checklist sebelum menyerahkan</H2>
      <div className="flex flex-col gap-0">
        {[
          "Setiap warna punya nama slot, bukan cuma hex.",
          "Setiap teks punya nama gaya, bukan cuma ukuran px.",
          "Sudah disebut warna brand mana yang wajib persis, supaya dikunci developer.",
          "Semua jarak diambil dari skala spacing — tidak ada 15dp atau 18dp.",
          "Semua elemen yang bisa ditekan punya area sentuh minimal 48×48dp.",
          "Sudah disebut breakpoint mana yang didesain, dan apa yang berubah di breakpoint lain.",
          "Sudah dicek di mode terang dan gelap.",
          "Warna status seperti error dan sukses tidak diambil dari palet brand.",
        ].map((item) => (
          <div
            key={item}
            className="flex items-start gap-3 border-b py-3 last:border-0"
          >
            <span className="mt-1 size-4 shrink-0 rounded border border-input" />
            <p className="text-sm">{item}</p>
          </div>
        ))}
      </div>

      <H2>
        Kamu Sebagai Designer bisa melihat component yang digunakan Mobile DEV
        kamu
      </H2>
      <H3>Konfigurasi tema</H3>
      <p className="text-muted-foreground">
        Developer mobile memakai{" "}
        <a
          href="https://rydmike.com/flexcolorscheme/themesplayground-latest/"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-foreground underline underline-offset-4"
        >
          Themes Playground
        </a>{" "}
        untuk menyetel tema. Di sana ada menu <Kode>Export Import</Kode> yang
        menghasilkan satu berkas konfigurasi. Minta berkas atau tautannya, lalu
        buka sendiri di browser — kamu bisa melihat seluruh slot warna dengan
        nilai aslinya dan mencobanya di simulator perangkat, tanpa menginstal
        apa pun.
      </p>

      <H3>Angka global yang sedang berlaku</H3>
      <p className="text-muted-foreground">
        Tanyakan tiga hal ini di awal proyek, karena semuanya memengaruhi
        seluruh aplikasi sekaligus: berapa radius global yang dipakai, apakah
        surface blend aktif dan di level berapa, serta warna brand mana yang
        sedang dikunci.
      </p>

      <Catatan judul="Kalau kamu perlu keluar dari sistem">
        Kadang ada kebutuhan yang memang tidak tercakup — ilustrasi khusus,
        layar promo, komponen buatan sendiri. Itu wajar. Yang penting sebutkan
        eksplisit di spec bahwa elemen ini <strong>sengaja</strong> di luar
        sistem, supaya developer tidak menghabiskan waktu mencari token yang
        cocok.
      </Catatan>
    </>
  );
}
