import { H2 } from '@/components/DocsHeading'
import { Catatan, Kode, SpecHeader, SpecTable } from '@/components/designer/SpecKit'
import { iconAxes, iconSizes } from '@/lib/m3-spec'

export default function DesignIcons() {
  return (
    <>
      <SpecHeader
        title="Ikon"
        lead="Empat ukuran resmi, dan aturan area sentuh yang tidak boleh dilanggar."
      />

      <H2>Empat ukuran</H2>
      <p className="text-muted-foreground">
        Ukuran ikon disebut <em>optical size</em>, dan hanya ada empat nilai. Angka di antaranya —
        misalnya 28dp atau 32dp — bukan bagian dari sistem.
      </p>
      <div className="flex flex-wrap items-end gap-8 rounded-xl border p-6">
        {iconSizes.map((s) => (
          <div key={s.dp} className="flex flex-col items-center gap-2">
            <svg
              width={s.dp}
              height={s.dp}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-foreground"
            >
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="font-mono text-[0.7rem] text-muted-foreground">{s.dp}dp</span>
          </div>
        ))}
      </div>
      <SpecTable
        head={['Ukuran', 'Area sentuh', 'Dipakai untuk']}
        minWidth="34rem"
        rows={iconSizes.map((s) => [`${s.dp}dp`, `${s.target}dp`, s.use])}
      />

      <H2>Area sentuh minimum 48dp</H2>
      <p className="text-muted-foreground">
        Ini aturan aksesibilitas, bukan preferensi. Ikon 24dp harus punya area sentuh 48&times;48dp —
        artinya ada ruang kosong 12dp mengelilinginya yang tetap bisa ditekan. Ikon boleh berdekatan
        secara visual, tapi area sentuhnya tidak boleh tumpang tindih.
      </p>
      <div className="flex flex-wrap items-center gap-6 rounded-xl border p-6">
        <div className="flex flex-col items-center gap-2">
          <div className="relative grid size-12 place-items-center rounded-md border border-dashed border-destructive/50">
            <div className="size-6 rounded-sm bg-foreground/70" />
          </div>
          <span className="text-xs text-muted-foreground">ikon 24dp di area 48dp</span>
        </div>
        <p className="max-w-sm text-sm text-muted-foreground">
          Garis putus-putus adalah area sentuh. Ia tidak terlihat oleh pengguna, tapi harus kamu
          perhitungkan saat menata ikon berjajar — kalau tidak, tombol jadi susah ditekan.
        </p>
      </div>

      <H2>Jangan sekadar memperbesar</H2>
      <p className="text-muted-foreground">
        Ikon Material punya empat sumbu yang bisa disetel. Yang paling penting: kalau ikon 24dp kamu
        perbesar jadi 40dp begitu saja, garisnya ikut menebal dan terlihat berat. Pakai optical size
        yang sesuai supaya ketebalan garis tetap terjaga.
      </p>
      <SpecTable
        head={['Sumbu', 'Rentang', 'Catatan']}
        minWidth="40rem"
        rows={iconAxes.map((a) => [a.axis, a.range, a.note])}
      />

      <H2>Ikon di bawah 20dp butuh label</H2>
      <p className="text-muted-foreground">
        Ikon yang lebih kecil dari 20dp sulit dikenali sendirian. Sertakan teks label di bawahnya,
        kecuali ikon itu sudah sangat umum dikenal.
      </p>

      <Catatan judul="Grade untuk latar gelap">
        Ikon terang di atas latar gelap terlihat lebih tebal daripada seharusnya. Material menyediakan
        sumbu <Kode>grade</Kode> untuk mengoreksinya — pakai <Kode>-25</Kode> di dark mode. Ini
        biasanya sudah diatur developer, tapi kalau kamu melihat ikon dark mode terasa terlalu tebal,
        inilah penyebabnya.
      </Catatan>
    </>
  )
}
