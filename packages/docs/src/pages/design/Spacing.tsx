import { H2 } from '@/components/DocsHeading'
import { Catatan, DpBar, Kode, SpecHeader, SpecTable } from '@/components/designer/SpecKit'
import { spacingScale } from '@/lib/m3-spec'

export default function DesignSpacing() {
  return (
    <>
      <SpecHeader
        title="Spacing"
        lead="Jarak antar elemen diambil dari satu skala tetap. Angka di luar skala ini akan terlihat asing."
      />

      <H2>Skalanya linear</H2>
      <p className="text-muted-foreground">
        Tidak ada rumus rumit. Material memakai deret sederhana dengan patokan{' '}
        <Kode>space100 = 8dp</Kode>. Nama tokennya adalah nilai dp dikali 12,5 — tapi kamu tidak perlu
        menghitung, cukup ambil dari daftar.
      </p>
      <div className="flex flex-col gap-1.5">
        {spacingScale.map((s) => (
          <DpBar key={s.token} dp={s.dp} max={72} label={s.token} />
        ))}
      </div>

      <H2>Nilai yang paling sering dipakai</H2>
      <p className="text-muted-foreground">
        Dari 18 nilai di atas, hanya segelintir yang muncul berulang. Kalau ragu, mulai dari sini:
      </p>
      <SpecTable
        head={['Nilai', 'Token', 'Dipakai untuk']}
        rows={[
          ['4dp', 'space50', 'Jarak antara ikon dan labelnya.'],
          ['8dp', 'space100', 'Jarak antar elemen yang saling berkaitan erat.'],
          ['12dp', 'space150', 'Padding dalam komponen kecil.'],
          ['16dp', 'space200', 'Margin layar compact. Padding kartu. Jarak antar item daftar.'],
          ['24dp', 'space300', 'Margin layar medium ke atas. Jarak antar seksi.'],
          ['32dp', 'space400', 'Jarak antar blok besar.'],
          ['48dp', 'space600', 'Ukuran minimum area sentuh.'],
        ]}
      />

      <H2>Kelipatan 4, bukan angka bebas</H2>
      <p className="text-muted-foreground">
        Seluruh skala di atas kelipatan 2dp, dan sebagian besar kelipatan 4dp. Kalau di mockup ada
        jarak 15dp atau 18dp, itu hampir pasti hasil geser manual, bukan keputusan desain. Bulatkan
        ke nilai terdekat di skala.
      </p>

      <H2>Padding kartu dan permukaan</H2>
      <p className="text-muted-foreground">
        Padding dalam kartu umumnya 16dp di semua sisi. Untuk kartu yang isinya padat informasi,
        12dp masih wajar. Di bawah 8dp konten akan terasa menempel ke tepi.
      </p>
      <div className="grid gap-3 sm:grid-cols-3">
        {[
          ['8dp', 'Terlalu sempit untuk kartu'],
          ['16dp', 'Nilai baku'],
          ['24dp', 'Kartu lapang'],
        ].map(([pad, note]) => (
          <div key={pad} className="flex flex-col gap-2">
            <div className="rounded-xl border bg-card" style={{ padding: pad }}>
              <div className="grid h-16 place-items-center rounded-md bg-muted text-xs text-muted-foreground">
                konten
              </div>
            </div>
            <span className="text-xs text-muted-foreground">
              <span className="font-mono">{pad}</span> — {note}
            </span>
          </div>
        ))}
      </div>

      <Catatan judul="Spacing tidak ikut mengecil saat teks membesar">
        Kalau pengguna menaikkan ukuran teks sistem sampai 200%, jarak antar elemen{' '}
        <strong>tetap sama</strong>. Yang membesar cuma teksnya. Jadi rancang kartu dan baris daftar
        supaya tingginya bisa memanjang, bukan terkunci pada satu angka.
      </Catatan>

      <H2>Cara Mengatur Spacing di Figma</H2>
      <p className="text-muted-foreground">
        Gunakan fitur Auto Layout untuk mengatur jarak antar elemen secara konsisten. Berikut gambaran panel Auto Layout di Figma:
      </p>

      {/* Visual: Figma Auto Layout Panel Mockup */}
      <div className="my-4 flex flex-col sm:flex-row gap-6 items-start rounded-xl border p-5">
        <div className="w-full max-w-xs overflow-hidden rounded-lg border bg-background text-xs shadow-xs">
          <div className="border-b px-3 py-2 font-medium flex items-center justify-between">
            Auto layout
            <span className="text-muted-foreground">↓ Vertical</span>
          </div>
          <div className="p-3 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-center gap-0.5">
                <div className="flex items-center gap-1">
                  <span className="text-muted-foreground text-[10px]">↕</span>
                  <span className="font-mono">16</span>
                </div>
                <span className="text-[10px] text-muted-foreground">Padding atas/bawah</span>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <div className="flex items-center gap-1">
                  <span className="text-muted-foreground text-[10px]">↔</span>
                  <span className="font-mono">16</span>
                </div>
                <span className="text-[10px] text-muted-foreground">Padding kiri/kanan</span>
              </div>
            </div>
            <div className="border-t pt-2 flex items-center justify-between">
              <span className="text-muted-foreground">Gap between items</span>
              <span className="font-mono">8</span>
            </div>
          </div>
        </div>

        {/* Visual: Card with spacing annotations */}
        <div className="flex-1 flex flex-col items-center gap-3">
          <div className="relative rounded-xl border-2 border-dashed border-primary/40 p-0">
            {/* Top padding indicator */}
            <div className="flex items-center justify-center h-4 bg-primary/10 rounded-t-lg">
              <span className="text-[9px] font-mono text-primary">16dp</span>
            </div>
            <div className="flex">
              {/* Left padding indicator */}
              <div className="flex items-center justify-center w-8 bg-primary/10">
                <span className="text-[9px] font-mono text-primary -rotate-90">16dp</span>
              </div>
              {/* Content */}
              <div className="flex flex-col gap-2 p-1">
                <div className="h-4 w-32 rounded bg-muted" />
                <div className="flex items-center justify-center h-2 bg-orange-500/15 rounded">
                  <span className="text-[8px] font-mono text-orange-600">gap 8dp</span>
                </div>
                <div className="h-4 w-24 rounded bg-muted" />
              </div>
              {/* Right padding indicator */}
              <div className="flex items-center justify-center w-8 bg-primary/10">
                <span className="text-[9px] font-mono text-primary -rotate-90">16dp</span>
              </div>
            </div>
            {/* Bottom padding indicator */}
            <div className="flex items-center justify-center h-4 bg-primary/10 rounded-b-lg">
              <span className="text-[9px] font-mono text-primary">16dp</span>
            </div>
          </div>
          <span className="text-xs text-muted-foreground">Kartu dengan padding 16dp dan gap 8dp</span>
        </div>
      </div>
    </>
  )
}
