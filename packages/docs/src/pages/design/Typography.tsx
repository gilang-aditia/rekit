import { H2 } from '@/components/DocsHeading'
import { Catatan, SpecHeader, SpecTable } from '@/components/designer/SpecKit'
import { typeRoles, typeScale } from '@/lib/m3-spec'

export default function DesignTypography() {
  const groups = ['Display', 'Headline', 'Title', 'Body', 'Label']

  return (
    <>
      <SpecHeader
        title="Tipografi"
        lead="Lima belas gaya teks dengan nama tetap. Tidak ada ukuran di luar daftar ini."
      />

      <H2>Lima kelompok</H2>
      <p className="text-muted-foreground">
        Setiap kelompok punya tiga ukuran: Large, Medium, Small. Tidak ada produk yang memakai semua
        lima belas; pilih yang sesuai dan pakai konsisten.
      </p>
      <SpecTable
        head={['Kelompok', 'Untuk apa']}
        minWidth="30rem"
        rows={[
          ['Display', 'Momen ekspresif. Angka besar, layar sambutan. Jarang dipakai.'],
          ['Headline', 'Judul halaman dan judul dialog.'],
          ['Title', 'Judul app bar, judul kartu, judul baris daftar.'],
          ['Body', 'Isi teks. Paling banyak dipakai.'],
          ['Label', 'Teks di dalam komponen: tombol, chip, navigasi.'],
        ]}
      />

      <H2>Daftar lengkap</H2>
      <p className="text-muted-foreground">
        Angka <span className="font-mono text-[0.85em]">sp</span> mengikuti pengaturan ukuran teks di
        perangkat pengguna, jadi bisa membesar. Tinggi baris dan tracking sudah ditentukan — jangan
        menyetelnya sendiri di mockup.
      </p>
      <div className="flex flex-col gap-8">
        {groups.map((g) => (
          <div key={g} className="flex flex-col gap-3">
            <div className="text-sm font-medium">{g}</div>
            {typeScale
              .filter((t) => t.name.startsWith(g))
              .map((t) => (
                <div key={t.token} className="flex flex-col gap-1 border-b pb-3 last:border-0">
                  <div
                    className="truncate text-foreground"
                    style={{
                      fontSize: `${Math.min(t.size, 40)}px`,
                      lineHeight: `${Math.min(t.line, 48)}px`,
                      letterSpacing: `${t.track}px`,
                      fontWeight: t.weight,
                    }}
                  >
                    {t.name}
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[0.7rem] text-muted-foreground tabular-nums">
                    <span>{t.size}sp</span>
                    <span>baris {t.line}sp</span>
                    <span>tracking {t.track > 0 ? '+' : ''}{t.track}</span>
                    <span>weight {t.weight}</span>
                    <span className="text-foreground/60">{typeRoles[t.token]}</span>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>

      <Catatan judul="Ukuran di atas 40sp ditampilkan lebih kecil">
        Contoh di halaman ini dibatasi supaya muat di kolom. Nilai asli tetap seperti tertulis di
        keterangan — Display Large sebenarnya 57sp.
      </Catatan>

      <H2>Ada versi tebalnya</H2>
      <p className="text-muted-foreground">
        Setiap gaya punya pasangan <em>emphasized</em> dengan bobot lebih berat. Dipakai untuk item
        terpilih, pesan belum dibaca, dan aksi utama. Komponen tidak memakainya secara otomatis, jadi
        kalau kamu mau versi tebal, sebutkan eksplisit di spec.
      </p>

      <Catatan judul="Cara menuliskannya di spec" tone="awas">
        Jangan tulis &ldquo;judul 24px semibold&rdquo;. Tulis &ldquo;judul pakai{' '}
        <strong>Headline Small</strong>&rdquo;. Ukuran, tinggi baris, tracking, dan bobotnya sudah
        satu paket — menyebut salah satunya saja justru memicu tebakan.
      </Catatan>

      <H2>Cara Membuat Text Styles di Figma</H2>
      <p className="text-muted-foreground">
        Agar semua halaman konsisten, buat Text Styles di Figma yang sesuai dengan daftar tipografi di atas. Berikut gambaran panel Text Styles:
      </p>

      {/* Visual: Figma Text Styles Panel */}
      <div className="my-4 flex flex-col sm:flex-row gap-6 items-start rounded-xl border p-5">
        <div className="w-full max-w-xs overflow-hidden rounded-lg border bg-background text-xs shadow-xs">
          <div className="border-b px-3 py-2 font-medium flex items-center justify-between">
            Text
            <span className="text-muted-foreground">Styles</span>
          </div>
          <div className="p-3 flex flex-col gap-2">
            {[
              { name: 'Headline Large', size: '32', weight: '400', line: '40' },
              { name: 'Headline Medium', size: '28', weight: '400', line: '36' },
              { name: 'Title Medium', size: '16', weight: '500', line: '24' },
              { name: 'Body Medium', size: '14', weight: '400', line: '20' },
              { name: 'Label Large', size: '14', weight: '500', line: '20' },
            ].map((t) => (
              <div key={t.name} className="flex items-center justify-between border-b pb-1.5 last:border-0 last:pb-0">
                <span className="font-medium text-foreground">{t.name}</span>
                <span className="font-mono text-muted-foreground">{t.size}/{t.line} w{t.weight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual: How to create */}
        <div className="flex-1 flex flex-col gap-3">
          <div className="text-sm font-medium">Langkah membuat Text Styles:</div>
          <ol className="ml-4 list-decimal space-y-2 text-sm text-muted-foreground">
            <li>Buat text layer, atur font, size, weight, dan line height sesuai tabel di atas.</li>
            <li>Di panel <strong>Text</strong> sebelah kanan, klik ikon titik empat (<strong>⋮⋮</strong>) &rarr; klik <strong>+</strong>.</li>
            <li>Beri nama sesuai daftar, contoh: <span className="font-mono bg-muted px-1 rounded">Headline/Large</span>.</li>
            <li>Ulangi untuk setiap gaya yang kamu gunakan di proyek.</li>
          </ol>
        </div>
      </div>
    </>
  )
}
