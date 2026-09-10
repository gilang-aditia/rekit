import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { H2 } from '@/components/DocsHeading'
import { Catatan, Kode, SpecHeader } from '@/components/designer/SpecKit'

type Kit = {
  nama: string
  pembuat: string
  href: string
  isi: string
}

/** Kit gratis, disalin dari daftar resmi shadcn/ui. */
const kitGratis: Kit[] = [
  {
    nama: 'shadcn/ui components',
    pembuat: 'Sitsiilia Bergmann',
    href: 'https://www.figma.com/community/file/1342715840824755935',
    isi: 'Library komponen yang tersusun rapi dan sejalan dengan sistem komponen shadcn. Dirawat secara berkala.',
  },
  {
    nama: 'shadcn/ui design system',
    pembuat: 'Pietro Schirano',
    href: 'https://www.figma.com/community/file/1203061493325953101',
    isi: 'Pendamping desain untuk shadcn/ui. Tiap komponen dibuat agar persis sama dengan implementasi kodenya.',
  },
  {
    nama: 'Obra shadcn/ui Community Edition',
    pembuat: 'Obra Studio',
    href: 'https://www.figma.com/community/file/1514746685758799870/',
    isi: 'Kit shadcn/ui gratis paling lengkap untuk Figma — semua komponen tersedia, dengan sistem tema yang mudah disetel. Dirawat oleh satu tim desainer.',
  },
  {
    nama: 'shadcncraft Free Starter Kit',
    pembuat: 'shadcncraft',
    href: 'https://www.figma.com/community/file/1534076420225325960',
    isi: 'Figma variables asli untuk delapan style shadcn/ui, impor tema dari tweakcn dan shadcn/ui Create, penggantian ikon, plus komponen React yang sepadan. Aktif dirawat.',
  },
]

export default function DesignUiKit() {
  return (
    <>
      <SpecHeader
        title="UI Kit Figma"
        lead="Berkas Figma siap pakai yang komponennya sudah sejalan dengan shadcn/ui — dasar yang dipakai Rakit UI."
      />

      <Catatan judul="Kit ini untuk desain web">
        Rakit UI dibangun di atas shadcn/ui, jadi kit di bawah bisa langsung dipakai sebagai titik
        awal desain web. Untuk desain <strong>mobile</strong>, patokannya tetap Material 3 — angkanya
        ada di{' '}
        <Link to="/design/layout" className="font-medium text-foreground underline underline-offset-4">
          halaman fondasi
        </Link>
        , dan keduanya tidak bisa saling menggantikan.
      </Catatan>

      <H2>Gratis</H2>
      <div className="flex flex-col gap-3">
        {kitGratis.map((kit) => (
          <a
            key={kit.href}
            href={kit.href}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col gap-1.5 rounded-xl border p-5 transition-colors hover:bg-accent"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="text-sm font-medium">{kit.nama}</span>
              <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
            <span className="text-xs text-muted-foreground">oleh {kit.pembuat}</span>
            <p className="text-sm text-muted-foreground">{kit.isi}</p>
          </a>
        ))}
      </div>
      <p className="text-sm text-muted-foreground">
        Daftar ini disalin dari{' '}
        <a
          href="https://ui.shadcn.com/docs/figma"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-foreground underline underline-offset-4"
        >
          halaman Figma milik shadcn/ui
        </a>
        , yang juga memuat pilihan berbayar kalau kamu butuh cakupan lebih luas.
      </p>

      <H2>Cara memakainya tanpa bikin masalah</H2>
      <p className="text-muted-foreground">
        Kit ini mempercepat kerja, tapi ia bukan sumber kebenaran. Yang dibangun developer adalah
        komponen di repositori ini, bukan berkas Figma. Kalau keduanya berbeda, yang menang selalu
        kode.
      </p>
      <div className="flex flex-col gap-0">
        {[
          [
            'Sesuaikan temanya lebih dulu',
            'Kit datang dengan warna bawaan shadcn. Ganti dulu ke token proyek ini sebelum menggambar apa pun, supaya tidak ada layar yang terlanjur memakai warna bawaan.',
          ],
          [
            'Pilih satu kit saja',
            'Mencampur dua kit menghasilkan dua tinggi tombol dan dua skala radius di file yang sama. Bedanya kecil, tapi cukup untuk memancing pertanyaan saat serah terima.',
          ],
          [
            'Cek dulu komponennya ada di sini',
            'Kit Figma sering memuat komponen yang belum tentu ada di Rakit UI. Cocokkan dengan daftar komponen sebelum memakainya.',
          ],
          [
            'Tetap sebut nama token di spec',
            'Warna yang diambil dari kit tetap harus diserahkan dengan nama slot, bukan hex — aturannya sama seperti biasa.',
          ],
        ].map(([judul, isi]) => (
          <div key={judul} className="flex flex-col gap-1 border-b py-3 last:border-0">
            <span className="text-sm font-medium">{judul}</span>
            <span className="text-sm text-muted-foreground">{isi}</span>
          </div>
        ))}
      </div>

      <Catatan judul="Kit bukan pengganti pengecekan" tone="awas">
        Komponen di kit bisa saja tertinggal beberapa versi dari kode. Sebelum memakai komponen yang
        jarang dipakai, buka{' '}
        <Link to="/docs/components" className="font-medium text-foreground underline underline-offset-4">
          daftar komponen
        </Link>{' '}
        dan bandingkan ukuran serta variannya. Yang paling sering berbeda: tinggi tombol, radius, dan
        nama varian seperti <Kode>secondary</Kode> atau <Kode>ghost</Kode>.
      </Catatan>
    </>
  )
}
