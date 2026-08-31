import { H2 } from '@/components/DocsHeading'
import { Catatan, SpecHeader, SpecTable } from '@/components/designer/SpecKit'
import { TonalPaletteView } from '@/components/designer/Visuals'
import { colorSlots } from '@/lib/m3-palette'

export default function DesignTonal() {
  return (
    <>
      <SpecHeader
        title="Seed & tonal palette"
        lead="Dari mana 30 slot warna itu berasal, dan kenapa warna brand kamu bisa berubah sendiri."
      />

      <H2>Dark mode bukan desain kedua</H2>
      <p className="text-muted-foreground">
        Kamu tidak perlu menyiapkan dua palet terpisah. Material 3 menyusun enam deret warna — namanya
        tonal palette — dari gelap ke terang. Tiap langkah diberi nomor 0 sampai 100, dan nomor itu
        disebut <em>tone</em>.
      </p>
      <TonalPaletteView highlight />
      <p className="text-muted-foreground">
        Mode terang dan gelap memakai <strong>deret yang sama persis</strong>. Yang berbeda cuma tone
        mana yang diambil. Perhatikan dua langkah bertanda di deret Primary: light mengambil tone 40,
        dark mengambil tone 80.
      </p>
      <SpecTable
        head={['Slot', 'Light mengambil', 'Dark mengambil']}
        minWidth="34rem"
        rows={colorSlots.slice(0, 8).map((s) => [s.slot, s.lightTone, s.darkTone])}
      />

      <H2>Kenapa warna brand bisa bergeser</H2>
      <p className="text-muted-foreground">
        Developer biasanya cukup memberi satu sampai tiga warna kunci, lalu seluruh slot dihitung
        otomatis. Prosesnya disebut <em>seed</em>. Algoritmanya punya aturan kaku soal kepekatan warna
        (chroma) dan posisi warna (hue):
      </p>
      <SpecTable
        head={['Palet', 'Aturan algoritma', 'Akibatnya bagi desain']}
        minWidth="42rem"
        rows={[
          ['Primary', 'Chroma minimal 48', 'Warna pucat dipaksa jadi lebih pekat'],
          ['Secondary', 'Chroma dikunci ke 16', 'Selalu kalem — tidak bisa dibuat cerah'],
          ['Tertiary', 'Chroma 24, hue diputar +60°', 'Berubah jadi hue yang lain sama sekali'],
          ['Neutral', 'Chroma 4', 'Abu-abu bernuansa tipis warna brand'],
          ['Error', 'Nilai tetap, mengabaikan brand', 'Selalu merah baku'],
        ]}
      />

      <Catatan judul="Kalau warna brand wajib persis" tone="awas">
        Minta developer <strong>mengunci</strong> slot itu — istilahnya <em>keep</em> atau{' '}
        <em>lock</em>. Warna yang dikunci tetap di nilai aslinya, sementara slot lain tetap dihitung
        otomatis. Tanpa permintaan ini warnamu akan digeser algoritma, dan itu perilaku normal, bukan
        kelalaian developer.
      </Catatan>

      <H2>Kamus istilah</H2>
      <SpecTable
        head={['Istilah', 'Artinya']}
        minWidth="34rem"
        rows={[
          ['Tone', 'Angka 0–100 yang menyatakan terang-gelapnya warna. 0 hitam, 100 putih.'],
          ['Tonal palette', 'Satu deret lengkap tone dari sebuah warna dasar.'],
          ['Seed', 'Menghasilkan seluruh slot warna dari satu sampai tiga warna kunci.'],
          ['Chroma', 'Kepekatan warna. Makin rendah makin mendekati abu-abu.'],
          ['Hue', 'Posisi warna di lingkaran warna — merah, biru, hijau, dan seterusnya.'],
          ['Container', 'Versi lembut sebuah warna, untuk latar yang tidak perlu menonjol.'],
        ]}
      />
    </>
  )
}
