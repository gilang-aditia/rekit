import { H2, H3 } from '@/components/DocsHeading'
import { Catatan, Kode, SpecHeader, SpecTable } from '@/components/designer/SpecKit'
import { breakpoints } from '@/lib/m3-spec'

export default function DesignLayout() {
  return (
    <>
      <SpecHeader
        title="Layout & breakpoint"
        lead="Lebar layar menentukan margin, jumlah pane, dan letak navigasi. Ini fondasi semua ukuran lain."
      />

      <H2>Lima breakpoint</H2>
      <p className="text-muted-foreground">
        Material 3 tidak mendesain per perangkat, tapi per rentang lebar. Satu ponsel bisa pindah
        breakpoint hanya dengan diputar ke lanskap, dan tablet bisa turun ke compact saat dipakai
        split-screen. Jadi rancang untuk rentangnya, bukan untuk model HP tertentu.
      </p>
      <SpecTable
        head={['Breakpoint', 'Lebar', 'Margin', 'Pane', 'Navigasi']}
        minWidth="44rem"
        rows={breakpoints.map((b) => [b.name, b.width, `${b.margin}dp`, b.pane, b.nav])}
      />

      <H2>Margin dan spacer</H2>
      <p className="text-muted-foreground">
        Margin adalah jarak dari tepi jendela ke konten. Angkanya cuma dua, dan ini yang paling
        sering salah di mockup:
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {/* Compact — 16dp */}
        <div className="flex flex-col gap-3 rounded-xl border p-5">
          <div className="text-sm font-medium">Compact — 16dp</div>
          <div className="relative flex items-stretch gap-0 overflow-hidden rounded-xl border-2 border-foreground/10 bg-muted">
            {/* Left margin */}
            <div className="relative w-5 shrink-0 bg-red-500/10 border-r border-dashed border-red-400/40 flex items-center justify-center">
              <span className="text-[8px] font-mono text-red-500 -rotate-90 whitespace-nowrap">16dp</span>
            </div>
            {/* Content area */}
            <div className="flex-1 p-2 flex flex-col gap-1.5">
              {/* App bar mockup */}
              <div className="flex items-center gap-1.5 mb-0.5">
                <div className="size-3.5 rounded-sm bg-foreground/15" />
                <div className="h-2 w-14 rounded bg-foreground/20" />
              </div>
              {/* Search bar */}
              <div className="h-5 rounded-full bg-background border border-foreground/10 flex items-center px-2">
                <div className="size-2 rounded-full bg-foreground/15 mr-1" />
                <div className="h-1.5 w-10 rounded bg-foreground/10" />
              </div>
              {/* Card 1 */}
              <div className="rounded-lg bg-background p-1.5 shadow-xs">
                <div className="h-8 rounded bg-foreground/5 mb-1" />
                <div className="h-1.5 w-full rounded bg-foreground/10 mb-0.5" />
                <div className="h-1.5 w-3/4 rounded bg-foreground/10" />
              </div>
              {/* Card 2 */}
              <div className="rounded-lg bg-background p-1.5 shadow-xs">
                <div className="h-8 rounded bg-foreground/5 mb-1" />
                <div className="h-1.5 w-full rounded bg-foreground/10 mb-0.5" />
                <div className="h-1.5 w-2/3 rounded bg-foreground/10" />
              </div>
              {/* Bottom nav */}
              <div className="flex items-center justify-around mt-auto pt-1 border-t border-foreground/5">
                {[1,2,3,4].map(i => (
                  <div key={i} className="flex flex-col items-center gap-0.5">
                    <div className="size-2.5 rounded-sm bg-foreground/15" />
                    <div className="h-1 w-4 rounded bg-foreground/10" />
                  </div>
                ))}
              </div>
            </div>
            {/* Right margin */}
            <div className="relative w-5 shrink-0 bg-red-500/10 border-l border-dashed border-red-400/40 flex items-center justify-center">
              <span className="text-[8px] font-mono text-red-500 -rotate-90 whitespace-nowrap">16dp</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <div className="size-3 rounded-xs bg-red-500/10 border border-red-400/30" />
            <span>= area margin (16dp kiri & kanan)</span>
          </div>
          <p className="text-xs text-muted-foreground">Semua layar di bawah 600dp. Konten mengisi sisa ruang setelah margin.</p>
        </div>

        {/* Medium ke atas — 24dp */}
        <div className="flex flex-col gap-3 rounded-xl border p-5">
          <div className="text-sm font-medium">Medium ke atas — 24dp</div>
          <div className="relative flex items-stretch gap-0 overflow-hidden rounded-xl border-2 border-foreground/10 bg-muted">
            {/* Left margin */}
            <div className="relative w-5 shrink-0 bg-red-500/10 border-r border-dashed border-red-400/40 flex items-center justify-center">
              <span className="text-[8px] font-mono text-red-500 -rotate-90 whitespace-nowrap">24dp</span>
            </div>
            {/* Pane 1 — List / Navigation pane */}
            <div className="flex-1 p-1.5 flex flex-col gap-1">
              <div className="text-[8px] font-medium text-foreground/50 px-0.5">Pane 1 — Daftar</div>
              {[1,2,3,4,5].map(i => (
                <div key={i} className={`flex items-center gap-1.5 rounded-md p-1 ${i === 1 ? 'bg-primary/10' : 'bg-background'}`}>
                  <div className="size-4 shrink-0 rounded-full bg-foreground/10" />
                  <div className="flex-1">
                    <div className="h-1.5 w-full rounded bg-foreground/15 mb-0.5" />
                    <div className="h-1 w-3/4 rounded bg-foreground/8" />
                  </div>
                </div>
              ))}
            </div>
            {/* Gutter between panes */}
            <div className="relative w-5 shrink-0 bg-orange-500/10 border-x border-dashed border-orange-400/40 flex items-center justify-center">
              <span className="text-[8px] font-mono text-orange-500 -rotate-90 whitespace-nowrap">24dp</span>
            </div>
            {/* Pane 2 — Detail / Content pane */}
            <div className="flex-1 p-1.5 flex flex-col gap-1">
              <div className="text-[8px] font-medium text-foreground/50 px-0.5">Pane 2 — Detail</div>
              <div className="h-14 rounded-md bg-foreground/5 flex items-center justify-center">
                <div className="size-5 rounded bg-foreground/10" />
              </div>
              <div className="h-2 w-full rounded bg-foreground/15" />
              <div className="h-1.5 w-full rounded bg-foreground/10" />
              <div className="h-1.5 w-4/5 rounded bg-foreground/10" />
              <div className="h-1.5 w-3/5 rounded bg-foreground/10" />
            </div>
            {/* Right margin */}
            <div className="relative w-5 shrink-0 bg-red-500/10 border-l border-dashed border-red-400/40 flex items-center justify-center">
              <span className="text-[8px] font-mono text-red-500 -rotate-90 whitespace-nowrap">24dp</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="size-3 rounded-xs bg-red-500/10 border border-red-400/30" />
              <span>= margin (24dp)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-3 rounded-xs bg-orange-500/10 border border-orange-400/30" />
              <span>= gutter antar pane (24dp)</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Pane 1 biasanya berisi daftar/navigasi, Pane 2 berisi detail. Jarak antar pane sama dengan margin.
          </p>
        </div>
      </div>

      <H2>Navigasi berpindah tempat</H2>
      <p className="text-muted-foreground">
        Navigasi utama tidak tetap di satu posisi. Di compact ia ada di bawah layar supaya terjangkau
        ibu jari; mulai medium ia pindah ke sisi kiri sebagai rail selebar 80dp. Kalau mockup kamu
        hanya menggambar versi ponsel, sebutkan apa yang terjadi pada navigasi saat layar melebar.
      </p>

      <H2>Cara Set-up Grid di Figma</H2>
      <p className="text-muted-foreground">
        Untuk desainer, mengatur Layout Grid di Figma sangat penting agar desain tetap konsisten dengan aturan margin dan pane. Berikut cara setup grid dasar untuk layar ponsel (Compact) dan layar medium/desktop.
      </p>

        <H3 className="mt-6">1. Grid Layar Ponsel (Compact)</H3>
        <div className="my-4 overflow-hidden rounded-xl border">
          <img
            src="/images/figma/grid-mobile.png"
            alt="Figma Layout Grid setting untuk mobile: 4 kolom, margin 16, gutter 16"
            className="w-full"
          />
        </div>
        <ol className="ml-6 mt-4 list-decimal space-y-2 text-muted-foreground">
          <li>Pilih Frame desainmu (misalnya iPhone 14 Pro / 393&times;852).</li>
          <li>Di panel properties sebelah kanan, pada bagian <strong>Layout grid</strong>, klik icon <strong>+</strong>.</li>
          <li>Klik icon kotak-kotak (grid settings), lalu ubah dropdown dari <Kode>Grid</Kode> ke <strong>Columns</strong>.</li>
          <li>Isi pengaturannya: Count = <strong>4</strong>, Type = <strong>Stretch</strong>, Margin = <strong>16</strong>, Gutter = <strong>16</strong>.</li>
        </ol>

        <H3 className="mt-8">2. Grid Layar Tablet/Desktop (Medium ke atas)</H3>
        <div className="my-4 overflow-hidden rounded-xl border">
          <img
            src="/images/figma/grid-desktop.png"
            alt="Figma Layout Grid setting untuk desktop: 12 kolom, margin 24, gutter 24"
            className="w-full"
          />
        </div>
        <ol className="ml-6 mt-4 list-decimal space-y-2 text-muted-foreground">
          <li>Pilih Frame yang lebih besar (misalnya Desktop 1440).</li>
          <li>Tambahkan Layout grid <strong>Columns</strong> seperti langkah sebelumnya.</li>
          <li>Untuk <strong>Tablet (Medium)</strong> gunakan 8 kolom, untuk <strong>Desktop (Large)</strong> gunakan 12 kolom dengan margin/gutter 24.</li>
        </ol>

        <Catatan judul="Simpan sebagai Grid Style">
          Jangan lupa klik icon titik empat (Style) di sebelah Layout grid, lalu klik <strong>+</strong> untuk menyimpannya. Beri nama seperti <Kode>Grid / Desktop</Kode> agar bisa langsung dipasang ke frame-frame lainnya dengan sekali klik!
        </Catatan>

        <div className="mt-8">
          <H2>Membuat Prototype dan Line Flow</H2>
          <p className="text-muted-foreground mt-2">
            Selain menyiapkan layout grid statis, kamu juga disarankan membuat <strong>alur navigasi</strong> (Line Flow) atau <strong>prototype yang bisa diklik</strong>.
          </p>

          <H3 className="mt-6">1. Cara Membuat Prototype di Figma</H3>
          <div className="my-4 overflow-hidden rounded-xl border">
            <img
              src="/images/figma/prototype-flow.png"
              alt="Figma Prototype mode: dua layar dihubungkan dengan panah biru, panel Interaction Details di kanan"
              className="w-full"
            />
          </div>
          <ol className="ml-6 mt-4 list-decimal space-y-2 text-muted-foreground">
            <li>Ubah mode panel kanan Figma ke tab <strong>Prototype</strong> (shortcut: <Kode>Shift + E</Kode>).</li>
            <li>Pilih elemen interaktif (misalnya Tombol). Kamu akan melihat titik bulat (node) di sisinya.</li>
            <li>Tarik (drag) node tersebut ke Frame layar tujuan seperti gambar di atas.</li>
            <li>Pada menu pop-up <strong>Interaction Details</strong>, atur pemicu (contoh: <em>On click</em>) dan animasinya.</li>
          </ol>

          <H3 className="mt-6">2. Menggambar Line Flow</H3>
          <p className="text-muted-foreground mt-4">
            Garis alur (Line flow) ditarik menggunakan plugin agar lebih mudah dibaca sekilas.
          </p>
          <ol className="ml-6 mt-4 list-decimal space-y-2 text-muted-foreground">
            <li>Gunakan plugin gratis seperti <strong>Autoflow</strong>, <strong>Arrow Auto</strong>, atau <strong>FigFig</strong>.</li>
            <li>Pilih elemen awal, tahan <Kode>Shift</Kode>, lalu pilih frame tujuan.</li>
            <li>Plugin akan otomatis menarik garis panah melengkung di antara kedua elemen tersebut.</li>
          </ol>

          <div className="mt-8">
            <Catatan judul="Tutorial Video (YouTube)">
              Klik tautan pencarian YouTube berikut untuk menonton tutorial lebih detail:
              <ul className="mt-2 ml-4 list-disc space-y-1">
                <li>
                  <a href="https://www.youtube.com/results?search_query=figma+prototyping+tutorial+for+beginners" target="_blank" rel="noreferrer" className="font-medium text-foreground underline underline-offset-4">
                    Figma Tutorial: Prototyping Basics
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/results?search_query=figma+interactive+components+tutorial" target="_blank" rel="noreferrer" className="font-medium text-foreground underline underline-offset-4">
                    Figma Tutorial: Interactive Components
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/results?search_query=figma+autoflow+plugin+tutorial" target="_blank" rel="noreferrer" className="font-medium text-foreground underline underline-offset-4">
                    Cara Membuat User Flow dengan Autoflow
                  </a>
                </li>
              </ul>
            </Catatan>
          </div>
        </div>
    </>
  )
}
