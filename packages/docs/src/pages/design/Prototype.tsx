import { Link } from 'react-router-dom'
import { H2, H3 } from '@/components/DocsHeading'
import { Catatan, Kode, SpecHeader, SpecTable } from '@/components/designer/SpecKit'
import { AlurLayar, BolehJangan, DurasiBar } from '@/components/designer/FlowVisuals'

export default function DesignPrototype() {
  return (
    <>
      <SpecHeader
        title="Prototype"
        lead="Seberapa jauh prototype perlu dibuat, gerakan mana yang benar-benar bisa dibangun, dan cara mengujinya sebelum diserahkan."
      />

      <Catatan judul="Cara dasarnya ada di halaman lain">
        Langkah menarik node dan menghubungkan dua frame di Figma sudah ada di{' '}
        <Link to="/design/layout" className="font-medium text-foreground underline underline-offset-4">
          Layout &amp; breakpoint
        </Link>
        , lengkap dengan gambarnya. Halaman ini melanjutkan dari sana: <strong>seberapa dalam</strong>{' '}
        prototype perlu dibuat, dan mana yang realistis untuk dibangun.
      </Catatan>

      <H2>Tiga tingkat kedalaman</H2>
      <p className="text-muted-foreground">
        Kesalahan yang paling sering terjadi bukan prototype yang kurang bagus, melainkan prototype
        yang terlalu dalam untuk pertanyaan yang sedang dijawab. Tentukan dulu apa yang mau
        dibuktikan, baru pilih tingkatnya.
      </p>
      <SpecTable
        head={['Tingkat', 'Isinya', 'Untuk menjawab', 'Waktu']}
        minWidth="38rem"
        rows={[
          [
            'Klik-through',
            'Layar terhubung, transisi seadanya',
            'Apakah alurnya masuk akal?',
            '1–2 jam',
          ],
          [
            'Semi-nyata',
            'Ditambah state kosong, error, dan isi yang berbeda-beda',
            'Apakah orang bisa menyelesaikan tugasnya?',
            'Setengah hari',
          ],
          [
            'Interaktif penuh',
            'Ditambah komponen interaktif, gerakan, dan micro-interaction',
            'Apakah gerakannya terasa benar?',
            '1–2 hari',
          ],
        ]}
      />
      <Catatan judul="Kebanyakan fitur berhenti di tingkat dua">
        Tingkat tiga baru sepadan kalau gerakannya <em>adalah</em> fiturnya — onboarding, animasi
        yang jadi ciri produk, atau interaksi yang belum pernah dipakai di aplikasi ini. Di luar itu,
        waktunya lebih berguna untuk merapikan state.
      </Catatan>

      <H2>Susun alurnya, bukan layarnya</H2>
      <p className="text-muted-foreground">
        Prototype yang baik menceritakan satu tugas dari awal sampai selesai. Buat satu alur per
        tugas utama, dan sertakan jalur gagalnya — justru di situ desain paling sering bocor.
      </p>
      <AlurLayar
        layar={[
          { nama: 'Daftar' },
          { nama: 'Detail', aksi: 'tap item' },
          { nama: 'Form', aksi: 'tap beli' },
          { nama: 'Selesai', aksi: 'kirim' },
        ]}
        keterangan="Jalur utama — yang biasanya sudah dibuat semua orang."
      />
      <AlurLayar
        layar={[
          { nama: 'Form' },
          { nama: 'Error', aksi: 'kirim gagal' },
          { nama: 'Form', aksi: 'coba lagi' },
        ]}
        keterangan="Jalur gagal — yang biasanya terlewat, padahal ini yang paling sering ditanyakan developer."
      />

      <H2>Gerakan yang bisa dibangun</H2>
      <p className="text-muted-foreground">
        Semua yang bisa dibuat di Figma tidak otomatis bisa dibuat di kode dengan biaya wajar. Tabel
        ini memetakan animasi Figma ke kenyataannya saat dibangun.
      </p>
      <SpecTable
        head={['Animasi di Figma', 'Di kode', 'Catatan']}
        minWidth="40rem"
        rows={[
          ['Instant', 'Gratis', 'Tidak ada animasi. Selalu aman.'],
          ['Dissolve', 'Murah', 'Fade biasa. Aman untuk apa pun.'],
          ['Move in / Move out', 'Murah', 'Transisi pindah halaman standar.'],
          ['Push', 'Murah', 'Cocok untuk navigasi maju–mundur.'],
          ['Slide in / Slide out', 'Murah', 'Untuk sheet dan panel samping.'],
          [
            'Smart animate',
            'Tergantung',
            'Murah kalau elemennya sedikit dan namanya sama persis di kedua frame. Mahal kalau seluruh layar ikut berubah.',
          ],
          ['Scroll to', 'Murah di web', 'Di mobile jarang dipakai.'],
        ]}
      />
      <Catatan judul="Syarat smart animate agar bisa ditiru" tone="awas">
        Smart animate hanya bisa dibangun ulang dengan wajar kalau elemen yang berpindah{' '}
        <strong>diberi nama sama persis</strong> di frame asal dan tujuan, dan jumlahnya sedikit —
        idealnya satu, misalnya gambar produk yang membesar jadi header. Kalau dua puluh layer
        bergerak sekaligus, developer akan menggantinya dengan fade dan hasilnya tidak akan mirip.
      </Catatan>

      <H2>Durasi dan easing</H2>
      <p className="text-muted-foreground">
        Durasi bawaan Figma sering terlalu lambat untuk aksi yang dilakukan berulang kali. Yang
        terasa memukau saat dipresentasikan bisa terasa lamban di pemakaian ke-limapuluh.
      </p>
      <div className="flex flex-col gap-2 rounded-xl border p-4">
        <DurasiBar ms={100} label="Umpan balik tekan, ripple" />
        <DurasiBar ms={200} label="Elemen kecil: chip, ikon, checkbox" />
        <DurasiBar ms={300} label="Pindah layar, buka sheet — patokan utama" />
        <DurasiBar ms={500} label="Animasi penekanan, sekali muncul" />
        <DurasiBar ms={800} label="Terlalu lama untuk aksi berulang" awas />
      </div>
      <SpecTable
        head={['Easing', 'Dipakai untuk']}
        minWidth="30rem"
        rows={[
          ['Ease out', 'Elemen masuk. Cepat di awal, melambat di akhir — terasa paling alami.'],
          ['Ease in', 'Elemen keluar. Kebalikannya.'],
          ['Ease in and out', 'Elemen yang berpindah posisi tanpa masuk atau keluar.'],
          ['Linear', 'Hampir tidak pernah. Terasa mekanis, kecuali untuk loading berputar.'],
        ]}
      />
      <Catatan judul="Kalau ragu, pakai 300ms ease out">
        Angka itu jarang salah, dan sudah sejalan dengan durasi bawaan komponen di kode. Sebutkan
        durasi di spec hanya kalau kamu memang menginginkan angka yang berbeda dari itu.
      </Catatan>

      <H2>Mobile dan web tidak sama</H2>
      <p className="text-muted-foreground">
        Prototype web yang mengandalkan hover akan berubah jadi jebakan begitu dibuka di HP, dan
        gestur mobile tidak punya padanan di desktop. Dua-duanya perlu diputuskan, bukan diasumsikan.
      </p>

      <H3>Mobile</H3>
      <BolehJangan
        boleh={
          <>
            <p>
              Pemicu: <Kode>On tap</Kode>, <Kode>On drag</Kode>, <Kode>Long press</Kode>.
            </p>
            <p>Sediakan cara kembali yang terlihat, bukan hanya swipe dari tepi layar.</p>
            <p>Beri umpan balik dalam 100ms setiap kali sesuatu ditekan.</p>
          </>
        }
        jangan={
          <>
            <p>
              Memakai <Kode>On hover</Kode>. Di layar sentuh, hover tidak pernah terjadi.
            </p>
            <p>
              Menyembunyikan aksi penting di balik gestur yang tidak terlihat. Swipe untuk menghapus
              boleh ada, tapi harus ada jalan lain yang kelihatan.
            </p>
            <p>Menaruh aksi utama di area yang tidak terjangkau ibu jari.</p>
          </>
        }
      />

      <H3>Web</H3>
      <BolehJangan
        boleh={
          <>
            <p>Hover untuk memperjelas apa yang bisa diklik — sebagai penegas, bukan satu-satunya petunjuk.</p>
            <p>
              Desain <strong>focus state</strong> untuk navigasi keyboard. Ini sering terlupa dan
              wajib secara aksesibilitas.
            </p>
            <p>Cek prototype yang sama pada lebar 390 — web di HP itu nyata.</p>
          </>
        }
        jangan={
          <>
            <p>
              Menaruh informasi yang hanya muncul saat hover. Pengguna keyboard dan layar sentuh
              tidak akan pernah melihatnya.
            </p>
            <p>Menghapus focus ring tanpa menggantinya dengan penanda lain.</p>
            <p>Menganggap semua pengguna web memakai mouse.</p>
          </>
        }
      />

      <H2>Menguji prototype</H2>
      <p className="text-muted-foreground">
        Lima orang sudah cukup untuk menemukan sebagian besar masalah besar. Yang menentukan bukan
        jumlahnya, melainkan cara bertanyanya.
      </p>
      <BolehJangan
        bolehLabel="Lakukan"
        janganLabel="Hindari"
        boleh={
          <>
            <p>
              Beri <strong>tugas</strong>: &ldquo;coba beli satu barang.&rdquo;
            </p>
            <p>Diam saat mereka bingung. Kebingungan itu justru datanya.</p>
            <p>Catat di detik ke berapa mereka ragu, dan apa yang mereka tekan lebih dulu.</p>
            <p>Uji dengan data yang panjang dan berantakan, bukan contoh yang rapi.</p>
          </>
        }
        jangan={
          <>
            <p>
              Bertanya <strong>pendapat</strong>: &ldquo;bagus tidak menurut kamu?&rdquo; Jawabannya
              hampir selalu sopan dan tidak berguna.
            </p>
            <p>Memandu saat mereka tersesat. Kamu tidak akan ada di sebelah pengguna sungguhan.</p>
            <p>Menjelaskan desainmu lebih dulu. Prototype harus bisa menjelaskan dirinya sendiri.</p>
          </>
        }
      />

      <H2>Sebelum diserahkan</H2>
      <p className="text-muted-foreground">
        Prototype tidak menggantikan spec. Ia menunjukkan <em>bagaimana rasanya</em>; spec
        menyebutkan <em>angkanya</em>. Developer butuh keduanya — cara menulis spec ada di{' '}
        <Link to="/design/handoff" className="font-medium text-foreground underline underline-offset-4">
          Serah terima
        </Link>
        .
      </p>
      <div className="flex flex-col gap-0">
        {[
          'Satu alur utuh bisa diselesaikan dari awal sampai akhir tanpa jalan buntu.',
          'Jalur gagal ikut diprototipekan, minimal satu.',
          'Tidak ada tombol mati yang tidak menuju ke mana-mana — atau kalau ada, ditandai sengaja.',
          'Semua gerakan memakai animasi yang ada di tabel "gerakan yang bisa dibangun".',
          'Smart animate hanya dipakai pada elemen yang namanya sama di kedua frame.',
          'Tidak ada pemicu hover pada prototype mobile.',
          'Focus state sudah didesain untuk prototype web.',
          'Sudah dicoba sendiri di HP sungguhan, bukan cuma di layar laptop.',
          'Sudah diuji ke minimal satu orang di luar tim desain.',
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
