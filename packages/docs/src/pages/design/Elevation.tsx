import { H2 } from '@/components/DocsHeading'
import { Catatan, SpecHeader, SpecTable } from '@/components/designer/SpecKit'
import { elevationLevels } from '@/lib/m3-spec'

export default function DesignElevation() {
  return (
    <>
      <SpecHeader
        title="Elevasi"
        lead="Enam tingkat kedalaman. Di Material 3, kedalaman lebih sering ditunjukkan lewat warna daripada bayangan."
      />

      <H2>Enam tingkat</H2>
      <SpecTable
        head={['Tingkat', 'Nilai', 'Dipakai untuk']}
        minWidth="34rem"
        rows={elevationLevels.map((e) => [e.level, `${e.dp}dp`, e.use])}
      />

      <H2>Warna dulu, bayangan belakangan</H2>
      <p className="text-muted-foreground">
        Ini perbedaan besar dari Material 2. Di Material 3, elemen yang lebih tinggi ditandai dengan
        permukaan yang lebih terang, bukan bayangan yang lebih tebal. Bayangan tetap ada, tapi
        perannya sekunder.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="flex flex-col gap-3 rounded-xl border p-5">
          <div className="text-sm font-medium">Cara Material 3</div>
          <div className="flex flex-col gap-2">
            <div className="rounded-lg bg-muted p-3 text-xs text-muted-foreground">dasar</div>
            <div className="rounded-lg bg-card p-3 text-xs shadow-sm">lebih tinggi — permukaan lebih terang</div>
          </div>
        </div>
        <div className="flex flex-col gap-3 rounded-xl border p-5">
          <div className="text-sm font-medium">Yang perlu dihindari</div>
          <div className="flex flex-col gap-2">
            <div className="rounded-lg bg-muted p-3 text-xs text-muted-foreground">dasar</div>
            <div className="rounded-lg bg-muted p-3 text-xs shadow-[0_8px_24px_rgba(0,0,0,.35)]">
              bayangan tebal tanpa perubahan warna
            </div>
          </div>
        </div>
      </div>

      <Catatan judul="Di dark mode, bayangan hampir tak terlihat">
        Latar gelap membuat bayangan kehilangan fungsinya. Kalau desain kamu mengandalkan bayangan
        untuk memisahkan lapisan, dark mode-nya akan terlihat rata. Pakai perbedaan permukaan —
        lihat tangga surface di halaman{' '}
        <a href="/design/color" className="font-medium text-foreground underline underline-offset-4">
          Sistem warna
        </a>
        .
      </Catatan>
    </>
  )
}
