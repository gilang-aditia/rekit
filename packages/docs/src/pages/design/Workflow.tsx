import { Link } from 'react-router-dom'
import { H2, H3 } from '@/components/DocsHeading'
import { Catatan, Kode, SpecHeader, SpecTable } from '@/components/designer/SpecKit'
import {
  Artboard,
  BolehJangan,
  GridOverlay,
  IsiMobile,
  IsiWeb,
  Tahap,
  Tahapan,
} from '@/components/designer/FlowVisuals'

export default function DesignWorkflow() {
  return (
    <>
      <SpecHeader
        title="Alur kerja"
        lead="Urutan kerja dari brief kosong sampai spec yang bisa langsung dikerjakan — dan di titik mana kamu harus berhenti untuk bertanya."
      />

      <Catatan judul="Halaman ini soal urutan, bukan angka">
        Halaman fondasi sudah memuat semua angka baku — ukuran, jarak, radius, warna. Yang belum ada
        adalah <strong>urutannya</strong>: mulai dari mana, apa yang dikerjakan lebih dulu, dan kapan
        sebuah desain dianggap selesai. Itu isi halaman ini.
      </Catatan>

      <H2>Tujuh tahap</H2>
      <p className="text-muted-foreground">
        Urutannya bukan formalitas. Tiap tahap menutup satu jenis pertanyaan, supaya pertanyaan itu
        tidak muncul lagi belakangan — saat memperbaikinya sudah jauh lebih mahal.
      </p>

      <Tahapan>
        <Tahap
          no={1}
          judul="Pahami masalahnya"
          ringkas="Sebelum membuka Figma. Tahap ini menghasilkan tulisan, bukan gambar."
        >
          <p className="text-sm text-muted-foreground">
            Tulis tiga hal, masing-masing satu kalimat: masalah apa yang sedang dipecahkan, siapa
            yang mengalaminya, dan apa tanda kalau desainnya berhasil. Kalau tanda berhasilnya tidak
            bisa ditulis, fiturnya belum siap didesain.
          </p>
        </Tahap>

        <Tahap
          no={2}
          judul="Petakan alurnya"
          ringkas="Daftar layar dan percabangannya — masih berupa kotak dan panah."
        >
          <p className="text-sm text-muted-foreground">
            Alur dipetakan sebelum satu layar pun digambar. Di tahap ini percabangan yang terlupa
            masih gratis untuk ditambal; setelah dua puluh layar jadi, tidak lagi. Cara menariknya
            di Figma ada di{' '}
            <Link to="/design/prototype" className="font-medium text-foreground underline underline-offset-4">
              Prototype
            </Link>
            .
          </p>
        </Tahap>

        <Tahap
          no={3}
          judul="Wireframe abu-abu"
          ringkas="Struktur dan hierarki dulu. Tanpa warna, tanpa foto, tanpa font pilihan."
        >
          <p className="text-sm text-muted-foreground">
            Batasi ke abu-abu sengaja: selama masih abu-abu, diskusi tetap soal susunan dan
            prioritas. Begitu warna masuk, umpan balik langsung berpindah ke selera.
          </p>
        </Tahap>

        <Tahap
          no={4}
          judul="Cek komponen yang sudah ada"
          ringkas="Sebelum menggambar elemen baru, pastikan belum ada padanannya."
        >
          <p className="text-sm text-muted-foreground">
            Buka{' '}
            <Link to="/docs/components" className="font-medium text-foreground underline underline-offset-4">
              daftar komponen
            </Link>
            . Elemen yang sudah ada berarti gratis — tinggal dipakai. Elemen baru berarti waktu
            tambahan untuk dibangun, diuji, dan dirawat selamanya. Itu bukan alasan untuk tidak
            pernah membuat yang baru, tapi harus jadi keputusan sadar.
          </p>
        </Tahap>

        <Tahap
          no={5}
          judul="Hi-fi dengan nama token"
          ringkas="Naikkan ke visual final — memakai nama slot, bukan nilai sekali pakai."
        >
          <p className="text-sm text-muted-foreground">
            Tiap warna diambil dari style yang sudah ada, tiap teks dari gaya tipografi yang sudah
            ada. Warna yang dipetik manual dengan color picker akan jadi pertanyaan saat serah
            terima.
          </p>
        </Tahap>

        <Tahap
          no={6}
          judul="Prototype"
          ringkas="Hubungkan layar secukupnya untuk menjawab pertanyaan yang tersisa."
        >
          <p className="text-sm text-muted-foreground">
            Prototype bukan pameran animasi. Kedalamannya ditentukan oleh apa yang mau kamu
            buktikan — selengkapnya di{' '}
            <Link to="/design/prototype" className="font-medium text-foreground underline underline-offset-4">
              Prototype
            </Link>
            .
          </p>
        </Tahap>

        <Tahap
          no={7}
          judul="Uji, rapikan, serahkan"
          ringkas="Coba ke orang lain, benahi, lalu tulis spec-nya."
        >
          <p className="text-sm text-muted-foreground">
            Format spec dan checklist akhirnya ada di{' '}
            <Link to="/design/handoff" className="font-medium text-foreground underline underline-offset-4">
              Serah terima
            </Link>
            .
          </p>
        </Tahap>
      </Tahapan>

      <H2>Menyiapkan file</H2>
      <p className="text-muted-foreground">
        Satu fitur, satu file. File yang memuat tiga fitur sekaligus akan selalu berakhir dengan
        seseorang mengerjakan versi yang salah.
      </p>
      <SpecTable
        head={['Page di Figma', 'Isinya', 'Boleh berantakan?']}
        minWidth="34rem"
        rows={[
          ['📕 Cover', 'Nama fitur, status, tanggal, pemilik', 'Tidak'],
          ['🔭 Flow', 'Peta alur — kotak dan panah', 'Boleh'],
          ['🔨 Wireframe', 'Rangka abu-abu', 'Boleh'],
          ['✅ Design', 'Layar final yang diserahkan', 'Tidak'],
          ['🧩 Component', 'Komponen lokal khusus fitur ini', 'Tidak'],
          ['🗄️ Archive', 'Versi lama yang sudah tidak dipakai', 'Boleh'],
        ]}
      />
      <Catatan judul="Hanya page Design yang dibaca developer">
        Beri tanda jelas di nama page mana yang final. Tanpa itu, developer harus menebak layar mana
        yang berlaku — dan tebakan yang salah baru ketahuan setelah fiturnya jadi.
      </Catatan>

      <H2>Ukuran artboard</H2>
      <p className="text-muted-foreground">
        Desain dibuat pada satu ukuran per breakpoint, bukan pada ukuran perangkat kesayangan.
        Angka-angka ini sejalan dengan lima breakpoint di{' '}
        <Link to="/design/layout" className="font-medium text-foreground underline underline-offset-4">
          Layout &amp; breakpoint
        </Link>
        .
      </p>

      <div className="grid gap-5 sm:grid-cols-[minmax(0,9rem)_minmax(0,1fr)]">
        <Artboard label="Mobile" ukuran="360 × 800">
          <IsiMobile />
        </Artboard>
        <Artboard label="Web — desktop" ukuran="1440 × 1024" ratio="16 / 10">
          <IsiWeb />
        </Artboard>
      </div>

      <SpecTable
        head={['Target', 'Ukuran artboard', 'Breakpoint', 'Kenapa ini']}
        minWidth="40rem"
        rows={[
          ['Mobile', '360 × 800', 'Compact', 'Lebar Android paling umum. Kalau muat di 360, muat di semua HP.'],
          ['Mobile besar', '412 × 915', 'Compact', 'Opsional — untuk mengecek ruang berlebih, bukan untuk diserahkan.'],
          ['Tablet', '840 × 1280', 'Medium', 'Batas bawah dua pane.'],
          ['Web — desktop', '1440 × 1024', 'Large', 'Ukuran desain web standar.'],
          ['Web — mobile', '390 × 844', 'Compact', 'Web di HP. Sering dilupakan, padahal trafiknya terbesar.'],
        ]}
      />

      <Catatan judul="Satu artboard bukan satu desain" tone="awas">
        Layar yang cuma pernah dilihat pada 360×800 akan pecah di 412 atau di tablet. Minimal
        sebutkan apa yang <strong>melar</strong>, apa yang <strong>tetap</strong>, dan apa yang{' '}
        <strong>berpindah</strong> saat layar melebar.
      </Catatan>

      <H2>Grid, dan kenapa harus dinyalakan</H2>
      <p className="text-muted-foreground">
        Cara memasang Layout Grid di Figma sudah ada langkah demi langkahnya di{' '}
        <Link to="/design/layout" className="font-medium text-foreground underline underline-offset-4">
          Layout &amp; breakpoint
        </Link>
        . Yang perlu ditambahkan di sini cuma satu: grid dipasang <em>sebelum</em> menggambar, bukan
        sesudah. Grid yang dipasang belakangan hanya jadi alat untuk membuktikan bahwa desainnya
        sudah melenceng.
      </p>
      <div className="grid gap-5 sm:grid-cols-[minmax(0,9rem)_minmax(0,1fr)]">
        <Artboard label="Mobile — 4 kolom" ukuran="margin 16 · gutter 16">
          <IsiMobile wire />
          <GridOverlay cols={4} margin={16} gutter={16} />
        </Artboard>
        <Artboard label="Desktop — 12 kolom" ukuran="margin 24 · gutter 24" ratio="16 / 10">
          <IsiWeb wire />
          <GridOverlay cols={12} margin={24} gutter={24} />
        </Artboard>
      </div>

      <H2>Auto layout bukan pilihan</H2>
      <p className="text-muted-foreground">
        Ini penyebab nomor satu desain yang &ldquo;tidak bisa dibangun persis&rdquo;. Kode menyusun
        elemen secara berurutan dan mendorong tetangganya; Figma tanpa auto layout menempatkan
        elemen pada koordinat tetap. Desain yang dirakit dengan koordinat tetap tidak punya jawaban
        untuk pertanyaan paling dasar: kalau teksnya jadi dua baris, yang lain bergeser ke mana?
      </p>
      <BolehJangan
        boleh={
          <>
            <p>
              Bungkus tiap kelompok elemen dengan <strong>auto layout</strong> — kartu, baris daftar,
              isi tombol, seluruh halaman.
            </p>
            <p>
              Atur jaraknya lewat <Kode>gap</Kode> dan <Kode>padding</Kode>, dengan angka dari skala
              spacing.
            </p>
            <p>
              Uji dengan mengetik teks yang jauh lebih panjang. Kalau susunannya tetap masuk akal,
              desainnya siap.
            </p>
          </>
        }
        jangan={
          <>
            <p>
              Menata elemen dengan menggeser manual sampai &ldquo;kelihatan pas&rdquo;, lalu
              merapikannya dengan spasi kosong.
            </p>
            <p>
              Memakai jarak hasil geseran seperti <Kode>15</Kode> atau <Kode>18</Kode>. Angka di luar
              skala akan dibulatkan diam-diam oleh developer.
            </p>
            <p>
              Menganggap teks selalu sependek contoh. Nama orang, judul produk, dan terjemahan hampir
              selalu lebih panjang.
            </p>
          </>
        }
      />

      <H2>State yang wajib ada</H2>
      <p className="text-muted-foreground">
        Satu layar bukan satu keadaan. Layar daftar yang cuma didesain dalam kondisi &ldquo;berisi
        lima item&rdquo; menyisakan empat keadaan lain yang harus dikarang sendiri oleh developer —
        dan hasil karangannya jarang cocok dengan yang kamu bayangkan.
      </p>
      <SpecTable
        head={['State', 'Kapan muncul', 'Yang harus kamu tentukan']}
        minWidth="38rem"
        rows={[
          ['Kosong', 'Belum ada data sama sekali', 'Kalimatnya, dan satu aksi untuk keluar dari keadaan ini'],
          ['Memuat', 'Data sedang diambil', 'Skeleton atau spinner — pilih satu dan konsisten'],
          ['Error', 'Gagal memuat atau gagal simpan', 'Kalimat penyebab, dan tombol coba lagi'],
          ['Sebagian', 'Data ada tapi tidak lengkap', 'Apa yang ditampilkan sebagai pengganti'],
          ['Terlalu panjang', 'Teks melebihi ruang', 'Dipotong dengan elipsis, atau turun ke baris berikutnya'],
        ]}
      />
      <Catatan judul="Cukup sekali per pola">
        Tidak perlu menggambar lima state untuk tiap layar. Gambar sekali untuk tiap{' '}
        <em>pola</em> — satu kali untuk daftar, satu kali untuk form — lalu tulis di spec bahwa pola
        itu berlaku di semua layar sejenis.
      </Catatan>

      <H2>Yang boleh dan tidak boleh</H2>

      <H3>Soal warna dan teks</H3>
      <BolehJangan
        boleh={
          <>
            <p>
              Ambil warna dari style yang sudah terdaftar, dan sebut namanya di spec:{' '}
              <Kode>primary</Kode>, <Kode>surfaceContainer</Kode>.
            </p>
            <p>Sebut gaya teks dengan namanya: <strong>Title Medium</strong>, bukan 16px semibold.</p>
            <p>Cek desain di mode terang dan gelap sebelum diserahkan.</p>
          </>
        }
        jangan={
          <>
            <p>Memetik warna dengan color picker dari mockup atau dari gambar referensi.</p>
            <p>
              Membuat gaya teks baru untuk satu layar. Lima belas gaya yang ada hampir selalu cukup.
            </p>
            <p>
              Memakai warna brand untuk status error atau sukses. Status punya slot warnanya sendiri.
            </p>
          </>
        }
      />

      <H3>Soal komponen</H3>
      <BolehJangan
        boleh={
          <>
            <p>Pakai komponen yang sudah ada apa adanya, termasuk tinggi dan padding bawaannya.</p>
            <p>
              Kalau butuh yang baru, tandai eksplisit di spec bahwa ini <strong>komponen baru</strong>,
              dan sebutkan komponen mana yang paling mirip.
            </p>
          </>
        }
        jangan={
          <>
            <p>
              Mengubah tinggi atau radius komponen yang sudah ada hanya untuk satu layar. Perubahan
              itu berlaku global di kode.
            </p>
            <p>
              Menggambar ulang komponen yang sudah ada dari nol. Hasilnya mirip tapi tidak sama, dan
              perbedaannya baru ketahuan saat sudah dibangun.
            </p>
          </>
        }
      />

      <H3>Soal ukuran dan area sentuh</H3>
      <BolehJangan
        boleh={
          <>
            <p>
              Area sentuh minimal <strong>48×48dp</strong> untuk semua yang bisa ditekan, sekecil apa
              pun ikonnya terlihat.
            </p>
            <p>
              Semua jarak diambil dari skala spacing — 4, 8, 12, 16, 24, 32.
            </p>
          </>
        }
        jangan={
          <>
            <p>
              Ikon 16dp tanpa ruang tekan di sekelilingnya. Terlihat rapi di layar besar, meleset
              terus di tangan.
            </p>
            <p>
              Menempelkan dua elemen yang bisa ditekan tanpa jarak. Salah tekan jadi hal yang wajar.
            </p>
          </>
        }
      />

      <H2>Checklist sebelum lanjut ke prototype</H2>
      <div className="flex flex-col gap-0">
        {[
          'Alurnya sudah dipetakan, termasuk percabangan saat gagal.',
          'Semua layar dirakit dengan auto layout, bukan koordinat tetap.',
          'Sudah diuji dengan teks panjang dan nama panjang.',
          'State kosong, memuat, dan error sudah ada minimal satu contoh per pola.',
          'Semua warna berasal dari style, tidak ada hasil color picker.',
          'Semua gaya teks memakai nama, bukan ukuran px lepas.',
          'Sudah dilihat di mode terang dan gelap.',
          'Area sentuh minimal 48×48dp sudah dicek pada elemen terkecil.',
          'Sudah jelas apa yang berubah saat layar melebar.',
        ].map((item) => (
          <div key={item} className="flex items-start gap-3 border-b py-3 last:border-0">
            <span className="mt-1 size-4 shrink-0 rounded border border-input" />
            <p className="text-sm">{item}</p>
          </div>
        ))}
      </div>
    </>
  )
}
