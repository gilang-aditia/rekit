import { H2, H3 } from '@/components/DocsHeading'
import { Catatan, Kode, SpecHeader, SpecTable } from '@/components/designer/SpecKit'
import { PairDemo, SurfaceLadder } from '@/components/designer/Visuals'
import { colorSlots } from '@/lib/m3-palette'

export default function DesignColor() {
  return (
    <>
      <SpecHeader
        title="Sistem warna"
        lead="Sekitar 30 slot warna bernama. Kamu memilih slot, bukan mencampur warna baru."
      />

      <H2>Warna itu slot</H2>
      <p className="text-muted-foreground">
        Material 3 menyediakan daftar slot dengan nama tetap. Kamu tidak menambah warna ke daftar itu;
        kamu memutuskan <em>slot mana</em> yang dipakai di setiap elemen. Semua komponen membaca dari
        daftar yang sama, jadi mengganti satu slot mengubah seluruh aplikasi sekaligus.
      </p>
      <p className="text-muted-foreground">
        Setiap slot latar punya pasangan berawalan <Kode>on</Kode> untuk teks dan ikon di atasnya.
        Pasangannya sudah dijamin kontras — kamu tidak perlu menghitung keterbacaan sendiri.
      </p>
      <PairDemo />
      <p className="text-sm text-muted-foreground">
        Baca <Kode>onPrimary</Kode> sebagai &ldquo;warna yang dipakai <em>di atas</em> primary&rdquo;.
      </p>

      <H3>Slot yang paling sering dibutuhkan</H3>
      <SpecTable
        head={['Slot', 'Pasangan teks', 'Dipakai untuk']}
        minWidth="42rem"
        rows={colorSlots.map((s) => [s.slot, s.pair, s.guna])}
      />

      <H2>Permukaan bertingkat</H2>
      <p className="text-muted-foreground">
        Material 3 memisahkan lapisan lewat tingkat kecerahan permukaan, bukan bayangan. Makin
        &ldquo;tinggi&rdquo; sebuah elemen, makin terang latarnya — berlaku di kedua mode.
      </p>
      <SurfaceLadder />
      <p className="text-sm text-muted-foreground">
        Separuh kiri tiap batang: light mode. Separuh kanan: dark mode.
      </p>

      <H2>Warna status berdiri sendiri</H2>
      <p className="text-muted-foreground">
        <Kode>error</Kode> tidak diambil dari palet brand. Nilainya tetap, karena merah punya makna
        yang harus konsisten di semua aplikasi. Jangan mengganti warna error dengan warna brand,
        sekalipun terlihat lebih serasi.
      </p>

      <Catatan judul="Soal surface blend">
        Ada pengaturan yang mencampur sedikit primary ke semua permukaan agar terasa lebih bermerek.
        Tapi kalau warnanya dihasilkan lewat seed, permukaan <strong>sudah</strong> mengandung jejak
        primary — menambah blend membuatnya menumpuk dan cepat berlebihan. Untuk tampilan Material 3
        yang murni, minta blend level nol.
      </Catatan>
    </>
  )
}
