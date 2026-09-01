import { H2 } from '@/components/DocsHeading'
import { Catatan, RadiusSample, SpecHeader, SpecTable } from '@/components/designer/SpecKit'
import { shapeScale } from '@/lib/m3-spec'

export default function DesignShape() {
  return (
    <>
      <SpecHeader
        title="Bentuk & radius"
        lead="Tujuh tingkat sudut. Setiap komponen sudah punya jatahnya sendiri."
      />

      <H2>Skala sudut</H2>
      <p className="text-muted-foreground">
        Radius bukan angka bebas. Material 3 menyediakan tujuh tingkat, dan tiap komponen dipetakan ke
        salah satunya. Kalau kamu mengubah satu tingkat, semua komponen yang memakainya ikut berubah —
        itu justru yang diinginkan, supaya konsisten.
      </p>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
        {shapeScale.map((s) => (
          <RadiusSample
            key={s.token}
            radius={s.value === 'setengah tinggi' ? 'full' : s.value.replace('dp', 'px')}
            label={s.name}
          />
        ))}
      </div>
      <SpecTable
        head={['Tingkat', 'Nilai', 'Dipakai di']}
        minWidth="38rem"
        rows={shapeScale.map((s) => [s.name, s.value, s.use])}
      />

      <H2>Full artinya setengah tinggi</H2>
      <p className="text-muted-foreground">
        <span className="font-mono text-[0.85em]">Full</span> bukan angka tetap. Ia selalu setengah
        dari tinggi elemen, sehingga menghasilkan kapsul sempurna. Tombol setinggi 40dp berarti radius
        20dp; chip setinggi 32dp berarti 16dp. Jangan tulis angka pastinya di spec — cukup sebut
        &ldquo;Full&rdquo;.
      </p>

      <H2>Sudut berubah saat ditekan</H2>
      <p className="text-muted-foreground">
        Di Material 3 versi terbaru, tombol berubah bentuk saat ditekan — dari bulat menjadi lebih
        persegi. Ini bawaan sistem, bukan sesuatu yang perlu kamu gambar di setiap mockup. Cukup
        ketahui bahwa itu terjadi, supaya tidak kaget saat melihat prototipe.
      </p>

      <Catatan judul="Cara menuliskannya di spec">
        Sebut nama tingkatnya, bukan angkanya: &ldquo;kartu pakai radius <strong>Large</strong>&rdquo;
        lebih baik daripada &ldquo;kartu radius 16&rdquo;. Kalau developer nanti menaikkan radius
        global, spec yang menyebut nama tingkat ikut menyesuaikan; yang menyebut angka jadi usang.
      </Catatan>

      <H2>Cara Mengatur Radius di Figma</H2>
      <p className="text-muted-foreground">
        Di Figma, radius sudut diatur lewat panel properties sebelah kanan. Berikut gambaran panelnya:
      </p>

      {/* Visual: Figma Corner Radius Panel */}
      <div className="my-4 flex flex-col sm:flex-row gap-6 items-center rounded-xl border p-5">
        {/* Figma Panel Mockup */}
        <div className="w-full max-w-xs overflow-hidden rounded-lg border bg-background text-xs shadow-xs">
          <div className="border-b px-3 py-2 font-medium">Design</div>
          <div className="p-3 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Corner radius</span>
              <div className="flex items-center gap-2">
                <span className="font-mono bg-muted px-2 py-0.5 rounded">16</span>
                <span className="text-muted-foreground text-[10px]">🔗</span>
              </div>
            </div>
            <div className="border-t pt-2 grid grid-cols-2 gap-2 text-[10px]">
              <div className="flex items-center justify-between bg-muted/50 rounded px-2 py-1">
                <span className="text-muted-foreground">↖</span><span className="font-mono">16</span>
              </div>
              <div className="flex items-center justify-between bg-muted/50 rounded px-2 py-1">
                <span className="text-muted-foreground">↗</span><span className="font-mono">16</span>
              </div>
              <div className="flex items-center justify-between bg-muted/50 rounded px-2 py-1">
                <span className="text-muted-foreground">↙</span><span className="font-mono">16</span>
              </div>
              <div className="flex items-center justify-between bg-muted/50 rounded px-2 py-1">
                <span className="text-muted-foreground">↘</span><span className="font-mono">16</span>
              </div>
            </div>
            <p className="text-[10px] text-muted-foreground">Klik ikon 🔗 untuk mengunci semua sudut bersamaan.</p>
          </div>
        </div>

        {/* Visual: Shape comparison */}
        <div className="flex-1 flex flex-col items-center gap-4">
          <div className="flex items-end gap-4">
            {[
              { label: 'None (0)', r: '0px' },
              { label: 'Small (8)', r: '8px' },
              { label: 'Medium (12)', r: '12px' },
              { label: 'Large (16)', r: '16px' },
              { label: 'Full', r: '9999px' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-2">
                <div className="size-14 bg-primary/20 border-2 border-primary/40" style={{ borderRadius: s.r }} />
                <span className="text-[10px] font-mono text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">Perbandingan visual tiap tingkat radius</span>
        </div>
      </div>
    </>
  )
}
