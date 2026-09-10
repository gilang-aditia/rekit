import { Link } from 'react-router-dom'
import { H2 } from '@/components/DocsHeading'
import { Catatan, SpecHeader } from '@/components/designer/SpecKit'
import { designNav } from '@/lib/docs-nav'

export default function DesignIndex() {
  const fondasi = designNav.find((g) => g.title === 'Fondasi')?.items ?? []

  return (
    <>
      <SpecHeader
        title="Panduan desainer"
        lead="Aturan ukuran, jarak, bentuk, dan warna yang dipakai aplikasi kami — beserta cara menyerahkannya ke developer."
      />

      <Catatan judul="Kenapa halaman ini ada">
        Aplikasi mobile kami dibangun di atas <strong>Material 3</strong>, dan aplikasi web di atas
        Rakit UI. Keduanya sistem tertutup: ukuran, jarak, dan warnanya sudah ditentukan. Desain yang
        memakai angka di luar sistem tidak bisa dikerjakan tanpa kompromi. Halaman-halaman berikut
        merangkum angka yang berlaku, supaya kamu tidak perlu menebak.
      </Catatan>

      <H2>Kalau baru mulai</H2>
      <p className="text-muted-foreground">
        Halaman fondasi di bawah berisi angka baku — dipakai saat kamu sudah tahu mau menggambar apa.
        Kalau yang kamu cari justru urutan kerjanya, mulai dari dua halaman ini.
      </p>
      <div className="grid gap-2 sm:grid-cols-2">
        {[
          ['/design/workflow', 'Alur kerja', 'Tujuh tahap dari brief sampai spec, setup file, ukuran artboard, dan aturan boleh/tidak.'],
          ['/design/prototype', 'Prototype', 'Seberapa dalam prototype perlu dibuat, gerakan mana yang bisa dibangun, dan cara mengujinya.'],
        ].map(([href, judul, isi]) => (
          <Link
            key={href}
            to={href}
            className="flex flex-col gap-1 rounded-xl border p-4 transition-colors hover:bg-accent"
          >
            <span className="text-sm font-medium">{judul}</span>
            <span className="text-xs text-muted-foreground">{isi}</span>
          </Link>
        ))}
      </div>

      <H2>Fondasi</H2>
      <p className="text-muted-foreground">
        Enam halaman ini memuat semua angka baku. Baca berurutan kalau baru pertama kali, atau
        langsung ke yang kamu butuhkan.
      </p>
      <div className="grid gap-2 sm:grid-cols-2">
        {fondasi.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="flex flex-col gap-1 rounded-xl border p-4 transition-colors hover:bg-accent"
          >
            <span className="text-sm font-medium">{item.title}</span>
            <span className="text-xs text-muted-foreground">{deskripsi[item.href]}</span>
          </Link>
        ))}
      </div>

      <H2>Tiga aturan yang berlaku di mana-mana</H2>
      <div className="flex flex-col gap-3">
        {[
          [
            'Sebut nama, bukan angka',
            'Tulis "Headline Small" bukan "24px semibold". Tulis "radius Large" bukan "16". Nama bertahan saat sistemnya disetel ulang; angka jadi usang.',
          ],
          [
            'Area sentuh minimal 48×48dp',
            'Berlaku untuk semua elemen yang bisa ditekan, sekecil apa pun tampilannya. Ini aturan aksesibilitas, bukan preferensi.',
          ],
          [
            'Rancang untuk rentang lebar, bukan untuk satu HP',
            'Satu perangkat bisa berpindah breakpoint hanya dengan diputar. Sebutkan apa yang berubah saat layar melebar.',
          ],
        ].map(([judul, isi]) => (
          <div key={judul} className="flex flex-col gap-1 border-b pb-3 last:border-0">
            <span className="text-sm font-medium">{judul}</span>
            <span className="text-sm text-muted-foreground">{isi}</span>
          </div>
        ))}
      </div>

      <H2>Kalau cuma sempat baca satu halaman</H2>
      <p className="text-muted-foreground">
        Baca{' '}
        <Link to="/design/handoff" className="font-medium text-foreground underline underline-offset-4">
          Serah terima
        </Link>
        . Isinya format spec yang bisa langsung dikerjakan, dan contoh spec yang selalu balik lagi ke
        kamu.
      </p>
    </>
  )
}

const deskripsi: Record<string, string> = {
  '/design/layout': 'Lima breakpoint, margin 16 dan 24dp, jumlah pane.',
  '/design/spacing': 'Skala 0–72dp dan nilai yang paling sering dipakai.',
  '/design/shape': 'Tujuh tingkat sudut, dari 0 sampai kapsul penuh.',
  '/design/typography': 'Lima belas gaya teks beserta ukuran dan tinggi barisnya.',
  '/design/icons': 'Empat ukuran ikon dan aturan area sentuh.',
  '/design/elevation': 'Enam tingkat kedalaman, dan kenapa warna lebih penting dari bayangan.',
}
