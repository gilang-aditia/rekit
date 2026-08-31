import { H2 } from '@/components/DocsHeading'
import { Catatan, SpecHeader, SpecTable } from '@/components/designer/SpecKit'
import { bannerSizes, componentSizes } from '@/lib/m3-spec'

export default function DesignComponents() {
  const groups = ['Tombol', 'Bar', 'Daftar', 'Lainnya']

  return (
    <>
      <SpecHeader
        title="Daftar ukuran komponen"
        lead="Tinggi baku tiap komponen. Angka ini sudah ditentukan sistem — kamu tidak perlu mengukurnya sendiri."
      />

      <p className="text-muted-foreground">
        Semua nilai di bawah adalah tinggi container dalam dp, diambil dari token resmi Material 3.
        Kalau desain kamu memakai angka lain, sebutkan alasannya di spec supaya developer tahu itu
        disengaja.
      </p>

      {groups.map((g) => (
        <div key={g} className="flex flex-col gap-3">
          <H2>{g}</H2>
          <SpecTable
            head={['Komponen', 'Tinggi', 'Ikon', 'Catatan']}
            minWidth="42rem"
            rows={componentSizes
              .filter((c) => c.group === g)
              .map((c) => [
                c.name,
                c.height ? `${c.height}dp` : '—',
                c.icon ? `${c.icon}dp` : '—',
                c.note,
              ])}
          />
        </div>
      ))}

      <H2>Banner</H2>
      <Catatan judul="Banner bukan komponen Material 3" tone="awas">
        Banner adalah peninggalan Material 2. Ia <strong>tidak ada</strong> di daftar komponen
        Material 3, meski tokennya masih tersisa. Kalau kamu butuh menyampaikan pesan, pilih salah
        satu penggantinya: <strong>Snackbar</strong> untuk pesan singkat yang hilang sendiri,{' '}
        <strong>Dialog</strong> untuk yang butuh keputusan, atau <strong>Card</strong> untuk
        pengumuman yang menetap di halaman.
      </Catatan>
      <p className="text-muted-foreground">
        Kalau tim tetap memutuskan memakai banner, ini ukuran yang tercatat di token lama:
      </p>
      <SpecTable
        head={['Konteks', 'Tinggi']}
        minWidth="26rem"
        rows={bannerSizes.map((b) => [b.context, `${b.height}dp`])}
      />

      <H2>Aturan yang berlaku untuk semua</H2>
      <ul className="flex list-disc flex-col gap-2 pl-5 text-muted-foreground marker:text-muted-foreground">
        <li>Apa pun ukuran visualnya, area sentuh minimal <strong>48&times;48dp</strong>.</li>
        <li>Tinggi container boleh memanjang kalau teks pengguna diperbesar — jangan dikunci.</li>
        <li>Ikon di dalam tombol berukuran 18dp; ikon berdiri sendiri 24dp.</li>
        <li>Padding kiri-kanan baris daftar selalu 16dp.</li>
      </ul>
    </>
  )
}
