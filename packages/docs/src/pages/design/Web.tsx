import { H2 } from '@/components/DocsHeading'
import { Catatan, Kode, SpecHeader, SpecTable } from '@/components/designer/SpecKit'

export default function DesignWeb() {
  return (
    <>
      <SpecHeader
        title="Padanan web"
        lead="Rakit UI memakai sistem yang lebih sederhana dari Material 3. Ini peta perbedaannya."
      />

      <Catatan judul="Dark mode tidak otomatis di web" tone="awas">
        Di Flutter, dark mode terbentuk sendiri dari tonal palette. Di web{' '}
        <strong>tidak</strong> — setiap warna harus kamu tentukan dua kali, satu untuk terang dan satu
        untuk gelap. Spec mobile tidak bisa dipakai ulang begitu saja.
      </Catatan>

      <H2>Token warna</H2>
      <p className="text-muted-foreground">
        Polanya mirip Material 3 — ada pasangan latar dan teks — hanya jumlahnya lebih sedikit dan
        namanya memakai akhiran <Kode>-foreground</Kode>, bukan awalan <Kode>on</Kode>.
      </p>
      <SpecTable
        head={['Token', 'Dipakai untuk']}
        minWidth="32rem"
        rows={[
          ['background / foreground', 'Latar halaman dan teks utama'],
          ['card / card-foreground', 'Permukaan kartu'],
          ['popover / popover-foreground', 'Dropdown, tooltip, dialog'],
          ['primary / primary-foreground', 'Aksi utama'],
          ['secondary / secondary-foreground', 'Aksi sekunder'],
          ['muted / muted-foreground', 'Teks dan latar yang diredam'],
          ['accent / accent-foreground', 'Hover dan item aktif'],
          ['destructive', 'Aksi menghapus'],
          ['border / input / ring', 'Garis tepi, field, focus ring'],
        ]}
      />

      <H2>Peta padanan</H2>
      <SpecTable
        head={['Mobile — Material 3', 'Web — Rakit UI', 'Catatan']}
        minWidth="40rem"
        rows={[
          ['primary / onPrimary', 'primary / primary-foreground', 'Padanan langsung'],
          ['surface / onSurface', 'background / foreground', 'Nama berbeda, fungsi sama'],
          ['surfaceContainer', 'card', 'Web hanya punya satu tingkat'],
          ['secondaryContainer', 'accent', 'Sama-sama untuk item aktif'],
          ['outline', 'border', 'Padanan langsung'],
          ['error / onError', 'destructive', 'Web tidak punya pasangan on-nya'],
          ['tertiary', '—', 'Tidak ada padanannya'],
          ['Tonal palette', '—', 'Web tidak memakai konsep ini'],
        ]}
      />

      <H2>Ukuran dan jarak</H2>
      <p className="text-muted-foreground">
        Web memakai satuan <Kode>rem</Kode>, bukan dp. Patokannya 1rem = 16px, dan skala Tailwind
        naik per 4px — jadi angkanya sebenarnya sejalan dengan skala spacing Material.
      </p>
      <SpecTable
        head={['Material 3', 'Rakit UI', 'Nilai']}
        minWidth="30rem"
        rows={[
          ['space50 — 4dp', 'gap-1 / p-1', '0.25rem'],
          ['space100 — 8dp', 'gap-2 / p-2', '0.5rem'],
          ['space150 — 12dp', 'gap-3 / p-3', '0.75rem'],
          ['space200 — 16dp', 'gap-4 / p-4', '1rem'],
          ['space300 — 24dp', 'gap-6 / p-6', '1.5rem'],
          ['space400 — 32dp', 'gap-8 / p-8', '2rem'],
        ]}
      />

      <H2>Yang berbeda dan perlu diputuskan</H2>
      <ul className="flex list-disc flex-col gap-2 pl-5 text-muted-foreground marker:text-muted-foreground">
        <li>
          <Kode>tertiary</Kode> dan keluarga <Kode>*Fixed</Kode> tidak ada di web. Siapkan
          penggantinya.
        </li>
        <li>Web tidak punya tingkatan surface berjenjang — hanya <Kode>background</Kode> dan <Kode>card</Kode>.</li>
        <li>Tinggi komponen web lebih ringkas: tombol 32px, bukan 40dp.</li>
        <li>Area sentuh 48dp tidak berlaku untuk web desktop, tapi tetap berlaku di web mobile.</li>
      </ul>
    </>
  )
}
