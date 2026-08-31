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
    </>
  )
}
