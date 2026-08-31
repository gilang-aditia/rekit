import { H2 } from '@/components/DocsHeading'
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
        <div className="flex flex-col gap-3 rounded-xl border p-5">
          <div className="text-sm font-medium">Compact — 16dp</div>
          <div className="flex h-28 items-stretch gap-0 overflow-hidden rounded-lg bg-muted">
            <div className="w-4 bg-accent/40" />
            <div className="grid flex-1 place-items-center text-xs text-muted-foreground">konten</div>
            <div className="w-4 bg-accent/40" />
          </div>
          <p className="text-xs text-muted-foreground">Semua layar di bawah 600dp.</p>
        </div>
        <div className="flex flex-col gap-3 rounded-xl border p-5">
          <div className="text-sm font-medium">Medium ke atas — 24dp</div>
          <div className="flex h-28 items-stretch gap-0 overflow-hidden rounded-lg bg-muted">
            <div className="w-6 bg-accent/40" />
            <div className="grid flex-1 place-items-center text-xs text-muted-foreground">pane 1</div>
            <div className="w-6 bg-accent/40" />
            <div className="grid flex-1 place-items-center text-xs text-muted-foreground">pane 2</div>
            <div className="w-6 bg-accent/40" />
          </div>
          <p className="text-xs text-muted-foreground">
            Jarak antar pane juga 24dp, sama dengan marginnya.
          </p>
        </div>
      </div>

      <H2>Navigasi berpindah tempat</H2>
      <p className="text-muted-foreground">
        Navigasi utama tidak tetap di satu posisi. Di compact ia ada di bawah layar supaya terjangkau
        ibu jari; mulai medium ia pindah ke sisi kiri sebagai rail selebar 80dp. Kalau mockup kamu
        hanya menggambar versi ponsel, sebutkan apa yang terjadi pada navigasi saat layar melebar.
      </p>

      <Catatan judul="Yang harus ada di spec layout">
        Sebutkan breakpoint mana yang kamu desain, berapa pane-nya, dan apa yang berubah saat naik ke
        breakpoint berikutnya: elemen mana yang <strong>muncul</strong>, <strong>dibagi</strong>,{' '}
        <strong>diubah ukurannya</strong>, <strong>dipindah</strong>, atau <strong>diganti</strong>.
      </Catatan>

      <Catatan judul="dp, bukan pixel" tone="awas">
        Semua angka di sini satuannya <Kode>dp</Kode> — density-independent pixel. Kalau kamu
        mendesain di Figma dengan frame 390&times;844 (iPhone), itu sudah dp. Jangan menyerahkan ukuran
        dalam pixel @2x atau @3x; developer akan bingung harus membagi berapa.
      </Catatan>
    </>
  )
}
