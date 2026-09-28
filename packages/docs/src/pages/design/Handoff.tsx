import { H2, H3 } from "@/components/DocsHeading";
import { Catatan, Kode, SpecHeader } from "@/components/designer/SpecKit";
import { CodeBlock } from "../../components/CodeBlock";
import {
  AlignHorizontalSpaceAround,
  AlignVerticalSpaceAround,
  ArrowDown,
  ArrowRight,
  ChevronDown,
  LayoutTemplate,
  Minus,
  Palette,
  Plus,
  Type,
} from "lucide-react";

const FigmaPanel = ({ title, children, action }: any) => (
  <div className="my-6 w-full max-w-70 select-none rounded-lg border bg-card text-xs font-sans text-card-foreground shadow-sm">
    <div className="flex items-center justify-between border-b bg-muted/30 px-3 py-2">
      <div className="font-semibold">{title}</div>
      <div className="flex gap-1 text-muted-foreground">{action}</div>
    </div>
    <div className="flex flex-col gap-3 p-3">{children}</div>
  </div>
);

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

      <H2>Panduan Menu Figma</H2>
      <p className="text-muted-foreground">
        Berikut adalah panduan praktis menu di Panel Kanan Figma agar desain
        siap di-coding oleh Developer secara responsif.
      </p>

      <H3>1. Menu Auto Layout (Wajib Digunakan)</H3>
      <p className="text-muted-foreground">
        Seleksi elemen dan klik <Kode>+</Kode> pada bagian Auto layout atau
        tekan <Kode>Shift + A</Kode>.
      </p>
      <FigmaPanel title="Auto layout" action={<Minus className="size-3.5" />}>
        <div className="flex items-center justify-between">
          <div className="flex rounded-md border bg-muted/50 p-0.5">
            <div className="rounded bg-background p-1 shadow-sm">
              <ArrowDown className="size-3.5" />
            </div>
            <div className="rounded p-1 text-muted-foreground">
              <ArrowRight className="size-3.5" />
            </div>
            <div className="rounded p-1 text-muted-foreground">
              <LayoutTemplate className="size-3.5" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-muted-foreground">
              <AlignHorizontalSpaceAround className="size-3.5" />
            </div>
            <span className="w-8">16</span>
          </div>
        </div>
        <div className="mt-1 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-muted-foreground">
              <AlignHorizontalSpaceAround className="size-3.5 rotate-90" />
            </div>
            <span className="w-8">24</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-muted-foreground">
              <AlignVerticalSpaceAround className="size-3.5" />
            </div>
            <span className="w-8">24</span>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-center rounded-md border border-dashed py-2 text-muted-foreground">
          <div className="flex items-center gap-1">
            <div className="grid grid-cols-3 grid-rows-3 gap-0.5 p-1">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className={`size-1.5 rounded-[1px] ${i === 4 ? "bg-primary" : "border border-muted-foreground/30"}`}
                />
              ))}
            </div>
            <span className="ml-2">Center</span>
          </div>
        </div>
      </FigmaPanel>
      <ul className="ml-6 mt-4 mb-6 list-disc space-y-2 text-sm text-muted-foreground">
        <li>
          Jangan menggeser teks manual ke tengah, gunakan{" "}
          <strong>Alignment Center</strong>.
        </li>
        <li>
          Pastikan angka Gap dan Padding adalah kelipatan 8 (misal: 8, 16, 24,
          32).
        </li>
      </ul>

      <H3>2. Menu Resizing (Sifat Responsif)</H3>
      <p className="text-muted-foreground">
        Beritahu developer apakah elemen harus melebar atau mengecil mengikuti
        konten.
      </p>
      <FigmaPanel title="Frame" action={<ChevronDown className="size-3.5" />}>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="w-4 text-muted-foreground">W</span>
            <div className="flex flex-1 items-center justify-between rounded-md border px-2 py-1">
              <span>Fill</span>
              <ChevronDown className="size-3" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="w-4 text-muted-foreground">H</span>
            <div className="flex flex-1 items-center justify-between rounded-md border px-2 py-1">
              <span>Hug</span>
              <ChevronDown className="size-3" />
            </div>
          </div>
        </div>
      </FigmaPanel>
      <ul className="ml-6 mt-4 mb-6 list-disc space-y-2 text-sm text-muted-foreground">
        <li>
          <strong>Fixed:</strong> Ukuran tetap (untuk ikon 24x24).
        </li>
        <li>
          <strong>Hug:</strong> Kotak mengecil memeluk teks (untuk tombol).
        </li>
        <li>
          <strong>Fill:</strong> Kotak melebar memenuhi layar (untuk
          navbar/input).
        </li>
      </ul>

      <H3>3. Menu Constraints</H3>
      <p className="text-muted-foreground">
        Untuk elemen yang melayang (tanpa Auto Layout), atur posisi jangkarnya.
      </p>
      <FigmaPanel title="Constraints" action={<Minus className="size-3.5" />}>
        <div className="flex items-center gap-4">
          <div className="relative size-12 rounded border-2 border-dashed border-muted-foreground/30">
            <div className="absolute inset-0 m-auto size-4 border border-primary bg-primary/20" />
            <div className="absolute left-0 right-0 top-1/2 h-px bg-primary/50" />
            <div className="absolute bottom-0 left-1/2 top-0 w-px bg-primary/50" />
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <div className="flex items-center justify-between rounded-md border px-2 py-1">
              <span>Center</span>
              <ChevronDown className="size-3" />
            </div>
            <div className="flex items-center justify-between rounded-md border px-2 py-1">
              <span>Center</span>
              <ChevronDown className="size-3" />
            </div>
          </div>
        </div>
      </FigmaPanel>
      <p className="mt-4 mb-6 text-sm text-muted-foreground">
        Misal untuk kotak Modal/Dialog, atur Horizontal & Vertical ke{" "}
        <strong>Center</strong> agar selalu di tengah layar.
      </p>

      <H3>4. Menu Local Styles</H3>
      <p className="text-muted-foreground">
        Dilarang menggunakan warna <em>hex</em> acak. Klik ikon titik empat (∷)
        dan pilih dari sistem.
      </p>
      <FigmaPanel title="Local styles" action={<Plus className="size-3.5" />}>
        <div className="flex flex-col gap-3">
          <div>
            <div className="mb-1 flex items-center gap-2 text-muted-foreground">
              <Type className="size-3.5" />
              <span className="font-medium">Text</span>
            </div>
            <div className="flex flex-col pl-5">
              <div className="flex items-center justify-between py-1">
                <span>Heading 1</span>
                <span className="text-muted-foreground">24px, Bold</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span>Body 1</span>
                <span className="text-muted-foreground">16px, Reg</span>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-1 flex items-center gap-2 text-muted-foreground">
              <Palette className="size-3.5" />
              <span className="font-medium">Color</span>
            </div>
            <div className="flex flex-col pl-5">
              <div className="flex items-center justify-between py-1">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-blue-600" />
                  <span>Primary 500</span>
                </div>
                <span className="text-muted-foreground">#0052CC</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full border bg-slate-100" />
                  <span>Gray 100</span>
                </div>
                <span className="text-muted-foreground">#F4F5F7</span>
              </div>
            </div>
          </div>
        </div>
      </FigmaPanel>
    </>
  );
}
