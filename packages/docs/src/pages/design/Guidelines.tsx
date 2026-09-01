import { H2, H3 } from '@/components/DocsHeading'
import { Catatan, Kode, SpecHeader, SpecTable } from '@/components/designer/SpecKit'

/* ─── Do / Don't Card ─── */
function DoDont({
  type,
  visual,
  text,
}: {
  type: 'do' | 'dont'
  visual: React.ReactNode
  text: string
}) {
  const isDo = type === 'do'
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border">
      <div className={`h-1 ${isDo ? 'bg-green-500' : 'bg-red-500'}`} />
      <div className="flex flex-col gap-4 flex-1 items-center justify-center min-h-30 bg-muted/30">
        {visual}
      </div>
      <div className={`p-4 ${isDo ? 'bg-green-500/5' : 'bg-red-500/5'}`}>
        <div className="flex items-center gap-2 mb-1">
          <span className={`text-sm ${isDo ? 'text-green-600' : 'text-red-500'}`}>
            {isDo ? '✅' : '❌'}
          </span>
          <span className="text-sm font-semibold">{isDo ? 'Do' : "Don't"}</span>
        </div>
        <p className="text-sm text-muted-foreground">{text}</p>
      </div>
    </div>
  )
}

export default function DesignGuidelines() {
  return (
    <>
      <SpecHeader
        title="Pedoman UI/UX"
        lead="Kumpulan aturan Do & Don't, ukuran standar, dan perbandingan mobile vs web. Panduan ini membantu desainer membuat keputusan yang konsisten."
      />

      {/* ═══════════════════════════════════════════════════════ */}
      {/*  SECTION 1 — TOMBOL                                    */}
      {/* ═══════════════════════════════════════════════════════ */}
      <H2>Tombol (Button)</H2>
      <p className="text-muted-foreground">
        Tombol adalah elemen interaksi paling dasar. Kesalahan paling umum ada di ukuran, jarak, dan hierarki warna.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 mt-4">
        <DoDont
          type="do"
          visual={
            <div className="flex flex-col gap-3 items-center">
              <button className="h-10 px-6 rounded-full bg-primary text-primary-foreground text-sm font-medium">Simpan</button>
              <button className="h-10 px-6 rounded-full border text-sm font-medium">Batal</button>
            </div>
          }
          text="Gunakan hierarki yang jelas: tombol utama (filled) untuk aksi primer, tombol outlined untuk aksi sekunder."
        />
        <DoDont
          type="dont"
          visual={
            <div className="flex flex-col gap-3 items-center">
              <button className="h-10 px-6 rounded-full bg-primary text-primary-foreground text-sm font-medium">Simpan</button>
              <button className="h-10 px-6 rounded-full bg-blue-500 text-white text-sm font-medium">Batal</button>
            </div>
          }
          text="Jangan buat dua tombol filled berdekatan. Pengguna tidak tahu mana yang lebih penting."
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 mt-4">
        <DoDont
          type="do"
          visual={
            <div className="flex items-center gap-3">
              <button className="h-10 px-6 rounded-full bg-primary text-primary-foreground text-sm font-medium">Kirim</button>
              <span className="text-[10px] font-mono text-muted-foreground border border-dashed rounded p-1">min 48×48dp touch area</span>
            </div>
          }
          text="Pastikan area sentuh minimal 48×48dp, bahkan jika tombol secara visual lebih kecil."
        />
        <DoDont
          type="dont"
          visual={
            <div className="flex items-center gap-1">
              <button className="h-6 px-2 rounded bg-primary text-primary-foreground text-[10px]">Ya</button>
              <button className="h-6 px-2 rounded bg-destructive text-white text-[10px]">Hapus</button>
              <button className="h-6 px-2 rounded bg-blue-500 text-white text-[10px]">Edit</button>
            </div>
          }
          text="Jangan buat tombol terlalu kecil dan berdempetan. Susah ditekan, terutama di mobile."
        />
      </div>

      <SpecTable
        head={['Properti', 'Mobile (M3)', 'Web (Rakit UI)']}
        minWidth="36rem"
        rows={[
          ['Tinggi tombol', '40dp', '32–36px'],
          ['Padding horizontal', '24dp', '16–24px'],
          ['Radius', 'Full (kapsul)', '6–8px (rounded-md)'],
          ['Font', 'Label Large (14sp)', '14px / font-medium'],
          ['Area sentuh minimum', '48×48dp', '44×44px (mobile web)'],
        ]}
      />

      {/* ═══════════════════════════════════════════════════════ */}
      {/*  SECTION 2 — CARD                                      */}
      {/* ═══════════════════════════════════════════════════════ */}
      <H2>Kartu (Card)</H2>
      <div className="grid gap-4 sm:grid-cols-2 mt-4">
        <DoDont
          type="do"
          visual={
            <div className="w-full max-w-50 rounded-xl border bg-background p-4 shadow-xs">
              <div className="h-20 rounded-lg bg-muted mb-3" />
              <div className="h-3 w-3/4 rounded bg-foreground/15 mb-1.5" />
              <div className="h-2 w-full rounded bg-foreground/10 mb-1" />
              <div className="h-2 w-5/6 rounded bg-foreground/10" />
            </div>
          }
          text="Gunakan padding konsisten (16dp) dan radius yang sama di semua kartu. Beri jarak antar konten dengan spacing baku."
        />
        <DoDont
          type="dont"
          visual={
            <div className="w-full max-w-50 rounded-sm border bg-background p-1 shadow-[0_8px_24px_rgba(0,0,0,.35)]">
              <div className="h-20 bg-muted mb-1" />
              <div className="h-3 w-3/4 rounded bg-foreground/15 mb-0.5 mx-1" />
              <div className="h-2 w-full rounded bg-foreground/10 mb-0.5 mx-1" />
              <div className="h-2 w-5/6 rounded bg-foreground/10 mx-1 mb-1" />
            </div>
          }
          text="Jangan gunakan bayangan terlalu tebal, padding terlalu kecil, atau radius berbeda dari kartu lain."
        />
      </div>

      <SpecTable
        head={['Properti', 'Mobile (M3)', 'Web (Rakit UI)']}
        minWidth="36rem"
        rows={[
          ['Padding dalam', '16dp', '24px (p-6)'],
          ['Radius', 'Large (16dp)', '12px (rounded-xl)'],
          ['Elevasi', 'Level 1 (surface tint)', 'shadow-xs + border'],
          ['Gap antar konten', '8–16dp', '8–16px'],
        ]}
      />

      {/* ═══════════════════════════════════════════════════════ */}
      {/*  SECTION 3 — INPUT / FORM                               */}
      {/* ═══════════════════════════════════════════════════════ */}
      <H2>Input & Form</H2>
      <div className="grid gap-4 sm:grid-cols-2 mt-4">
        <DoDont
          type="do"
          visual={
            <div className="w-full max-w-50 flex flex-col gap-1">
              <label className="text-xs font-medium">Email</label>
              <div className="h-10 rounded-lg border-2 border-primary bg-background flex items-center px-3">
                <span className="text-sm text-muted-foreground">user@email.com</span>
              </div>
              <span className="text-[10px] text-muted-foreground">Contoh: user@email.com</span>
            </div>
          }
          text="Sertakan label di atas field, placeholder di dalam, dan helper text di bawah. Gunakan border focus yang jelas."
        />
        <DoDont
          type="dont"
          visual={
            <div className="w-full max-w-50 flex flex-col gap-1">
              <div className="h-10 rounded-lg bg-muted flex items-center px-3">
                <span className="text-sm text-muted-foreground">Email</span>
              </div>
            </div>
          }
          text="Jangan gunakan placeholder sebagai satu-satunya label. Begitu user mengetik, label hilang dan user lupa field apa ini."
        />
      </div>

      <SpecTable
        head={['Properti', 'Mobile (M3)', 'Web (Rakit UI)']}
        minWidth="36rem"
        rows={[
          ['Tinggi field', '56dp (filled) / 56dp (outlined)', '40px (h-10)'],
          ['Radius', 'Extra Small Top (4dp) / Small (4dp)', '6px (rounded-md)'],
          ['Label', 'Floating label di dalam field', 'Label terpisah di atas field'],
          ['Font isi', 'Body Large (16sp)', '14px (text-sm)'],
          ['Error state', 'Merah (#B3261E) + ikon', 'destructive + teks error'],
        ]}
      />

      {/* ═══════════════════════════════════════════════════════ */}
      {/*  SECTION 4 — WARNA & KONTRAS                            */}
      {/* ═══════════════════════════════════════════════════════ */}
      <H2>Warna & Kontras</H2>
      <div className="grid gap-4 sm:grid-cols-2 mt-4">
        <DoDont
          type="do"
          visual={
            <div className="flex flex-col items-center gap-2">
              <div className="w-48 h-3 rounded-full bg-muted overflow-hidden">
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 w-12 h-1.5 bg-primary rounded" />
              </div>
              <span className="text-[10px] font-mono text-muted-foreground">50%</span>
            </div>
          }
          text="Gunakan warna yang bermakna untuk membedakan status. Progress bar harus punya kontras yang jelas antara bagian terisi dan belum."
        />
        <DoDont
          type="dont"
          visual={
            <div className="flex flex-col items-center gap-2">
              <div className="w-48 h-3 rounded-full bg-muted/50 overflow-hidden">
                <div className="h-full w-1/2 rounded-full bg-muted" />
              </div>
              <span className="text-[10px] font-mono text-muted-foreground">50%</span>
            </div>
          }
          text="Jangan gunakan warna yang terlalu mirip antara bagian terisi dan belum. Pengguna tidak bisa membedakan progress-nya."
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 mt-4">
        <DoDont
          type="do"
          visual={
            <div className="flex gap-3">
              <div className="flex flex-col items-center gap-1">
                <div className="size-10 rounded-lg bg-primary grid place-items-center text-primary-foreground text-xs font-bold">Aa</div>
                <span className="text-[9px] text-muted-foreground">4.5:1 ✓</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="size-10 rounded-lg bg-destructive grid place-items-center text-white text-xs font-bold">!</div>
                <span className="text-[9px] text-muted-foreground">error</span>
              </div>
            </div>
          }
          text="Pastikan rasio kontras minimal 4.5:1 untuk teks normal dan 3:1 untuk teks besar. Gunakan slot warna berpasangan (primary + onPrimary)."
        />
        <DoDont
          type="dont"
          visual={
            <div className="flex gap-3">
              <div className="flex flex-col items-center gap-1">
                <div className="size-10 rounded-lg bg-yellow-200 grid place-items-center text-yellow-300 text-xs font-bold">Aa</div>
                <span className="text-[9px] text-muted-foreground">1.2:1 ✗</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="size-10 rounded-lg bg-green-500 grid place-items-center text-green-600 text-xs font-bold">!</div>
                <span className="text-[9px] text-muted-foreground">sulit dibaca</span>
              </div>
            </div>
          }
          text="Jangan taruh teks berwarna terang di atas latar terang. Kontras rendah membuat teks tidak terbaca, terutama di bawah sinar matahari."
        />
      </div>

      {/* ═══════════════════════════════════════════════════════ */}
      {/*  SECTION 5 — GRID: MOBILE vs WEB                       */}
      {/* ═══════════════════════════════════════════════════════ */}
      <H2>Grid: Mobile vs Web</H2>
      <p className="text-muted-foreground">
        Grid adalah tulang punggung layout. Mobile dan web punya jumlah kolom, margin, dan gutter yang berbeda.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 mt-4">
        {/* Mobile Grid */}
        <div className="flex flex-col gap-3 rounded-xl border p-5">
          <div className="text-sm font-medium flex items-center gap-2">
            <span>📱</span> Grid Mobile (Material 3)
          </div>
          <div className="relative h-36 w-20 mx-auto rounded-[1rem] border-2 border-foreground/15 bg-background overflow-hidden flex items-stretch px-1.5 gap-1">
            {[1,2,3,4].map(i => <div key={i} className="flex-1 bg-red-500/12" />)}
          </div>
          <div className="space-y-1 text-xs text-muted-foreground">
            <div className="flex justify-between"><span>Kolom</span><span className="font-mono">4</span></div>
            <div className="flex justify-between"><span>Margin</span><span className="font-mono">16dp</span></div>
            <div className="flex justify-between"><span>Gutter</span><span className="font-mono">16dp</span></div>
            <div className="flex justify-between"><span>Tipe</span><span className="font-mono">Stretch</span></div>
          </div>
        </div>

        {/* Web Grid */}
        <div className="flex flex-col gap-3 rounded-xl border p-5">
          <div className="text-sm font-medium flex items-center gap-2">
            <span>🖥️</span> Grid Web (Rakit UI / Tailwind)
          </div>
          <div className="relative h-20 w-full mx-auto rounded-md border-2 border-foreground/15 bg-background overflow-hidden flex items-stretch px-2 gap-1">
            {[...Array(12)].map((_, i) => <div key={i} className="flex-1 bg-blue-500/12" />)}
          </div>
          <div className="space-y-1 text-xs text-muted-foreground">
            <div className="flex justify-between"><span>Kolom</span><span className="font-mono">12</span></div>
            <div className="flex justify-between"><span>Max-width</span><span className="font-mono">1280px</span></div>
            <div className="flex justify-between"><span>Gutter</span><span className="font-mono">16–24px (gap-4/6)</span></div>
            <div className="flex justify-between"><span>Breakpoints</span><span className="font-mono">sm/md/lg/xl/2xl</span></div>
          </div>
        </div>
      </div>

      <SpecTable
        head={['Aspek', 'Mobile (Material 3)', 'Web (Rakit UI)']}
        minWidth="42rem"
        rows={[
          ['Compact (< 600dp)', '4 kolom, margin 16dp', 'w-full, px-4'],
          ['Medium (600–839dp)', '8 kolom, margin 24dp', 'max-w-3xl, gap-6'],
          ['Expanded (840–1199dp)', '12 kolom, margin 24dp', 'max-w-5xl, gap-6'],
          ['Large (1200–1599dp)', '12 kolom, margin 24dp', 'max-w-7xl, gap-8'],
          ['Extra-large (1600dp+)', '12 kolom, margin 24dp', 'max-w-[1400px], gap-8'],
        ]}
      />

      {/* ═══════════════════════════════════════════════════════ */}
      {/*  SECTION 6 — IKON: MOBILE vs WEB                       */}
      {/* ═══════════════════════════════════════════════════════ */}
      <H2>Ikon: Mobile vs Web</H2>
      <div className="grid gap-4 sm:grid-cols-2 mt-4">
        <DoDont
          type="do"
          visual={
            <div className="flex items-end gap-4">
              {[
                { size: 20, label: '20dp' },
                { size: 24, label: '24dp' },
                { size: 40, label: '40dp' },
                { size: 48, label: '48dp' },
              ].map(({ size, label }) => (
                <div key={label} className="flex flex-col items-center gap-1">
                  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="text-[9px] font-mono text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          }
          text="Gunakan optical size yang sudah ditentukan (20, 24, 40, 48dp). Setiap ukuran punya ketebalan garis yang pas."
        />
        <DoDont
          type="dont"
          visual={
            <div className="flex items-end gap-4">
              {[
                { size: 18, label: '18dp' },
                { size: 28, label: '28dp' },
                { size: 36, label: '36dp' },
              ].map(({ size, label }) => (
                <div key={label} className="flex flex-col items-center gap-1">
                  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-destructive/60">
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="text-[9px] font-mono text-destructive">{label}</span>
                </div>
              ))}
            </div>
          }
          text="Jangan gunakan ukuran sembarangan (18, 28, 36dp). Ikon akan terlihat tidak konsisten dan garis jadi terlalu tebal/tipis."
        />
      </div>

      <SpecTable
        head={['Properti', 'Mobile (M3)', 'Web (Rakit UI)']}
        minWidth="36rem"
        rows={[
          ['Ukuran standar', '24dp (optical size 24)', '16–20px (size-4 / size-5)'],
          ['Di dalam tombol', '18dp', '16px (size-4)'],
          ['Di navigation bar', '24dp', '20px (size-5)'],
          ['Berdiri sendiri', '24dp', '24px (size-6)'],
          ['Area sentuh', 'Selalu 48×48dp', '44×44px (mobile web)'],
          ['Icon set', 'Material Symbols', 'Lucide Icons'],
          ['Ketebalan garis', 'weight 400 (normal)', 'strokeWidth 2'],
        ]}
      />

      {/* ═══════════════════════════════════════════════════════ */}
      {/*  SECTION 7 — TIPOGRAFI: MOBILE vs WEB                   */}
      {/* ═══════════════════════════════════════════════════════ */}
      <H2>Tipografi: Mobile vs Web</H2>
      <div className="grid gap-4 sm:grid-cols-2 mt-4">
        <DoDont
          type="do"
          visual={
            <div className="flex flex-col gap-1 text-left w-full max-w-50">
              <span className="text-lg font-medium leading-tight">Headline Small</span>
              <span className="text-sm text-muted-foreground">Body Medium — teks isi utama.</span>
              <span className="text-xs font-medium text-primary">Label Large</span>
            </div>
          }
          text="Gunakan hierarki yang jelas: judul besar, isi sedang, label kecil. Konsisten dengan nama gaya dari sistem."
        />
        <DoDont
          type="dont"
          visual={
            <div className="flex flex-col gap-1 text-left w-full max-w-50">
              <span className="text-sm font-normal">judul sama kecil</span>
              <span className="text-sm text-muted-foreground">isi juga sama kecil</span>
              <span className="text-sm text-muted-foreground">label juga sama</span>
            </div>
          }
          text="Jangan gunakan ukuran teks yang sama untuk judul, isi, dan label. Tidak ada hierarki berarti pengguna tidak tahu mana yang penting."
        />
      </div>

      <SpecTable
        head={['Gaya teks', 'Mobile (M3)', 'Web (Rakit UI)']}
        minWidth="42rem"
        rows={[
          ['Judul halaman', 'Headline Small (24sp)', 'text-2xl font-bold (24px)'],
          ['Judul kartu', 'Title Medium (16sp/500)', 'text-lg font-semibold (18px)'],
          ['Isi paragraf', 'Body Medium (14sp/400)', 'text-sm (14px)'],
          ['Label tombol', 'Label Large (14sp/500)', 'text-sm font-medium'],
          ['Caption / helper', 'Body Small (12sp)', 'text-xs text-muted-foreground'],
        ]}
      />

      {/* ═══════════════════════════════════════════════════════ */}
      {/*  SECTION 8 — NAVIGASI                                   */}
      {/* ═══════════════════════════════════════════════════════ */}
      <H2>Navigasi</H2>
      <div className="grid gap-4 sm:grid-cols-2 mt-4">
        <DoDont
          type="do"
          visual={
            <div className="w-full max-w-50">
              {/* Bottom nav mockup */}
              <div className="flex items-center justify-around rounded-xl border bg-background p-2">
                {['🏠','🔍','❤️','👤'].map((icon, i) => (
                  <div key={i} className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-full ${i === 0 ? 'bg-primary/10' : ''}`}>
                    <span className="text-sm">{icon}</span>
                    <span className="text-[8px] text-muted-foreground">{['Home','Cari','Suka','Profil'][i]}</span>
                  </div>
                ))}
              </div>
            </div>
          }
          text="Di mobile, letakkan navigasi utama di bawah (bottom bar) dengan 3–5 item. Tandai item aktif dengan warna primer."
        />
        <DoDont
          type="dont"
          visual={
            <div className="w-full max-w-50">
              <div className="flex items-center justify-around rounded-xl border bg-background p-2">
                {['🏠','🔍','❤️','👤','⚙️','📊','📎'].map((icon, i) => (
                  <div key={i} className="flex flex-col items-center gap-0.5 px-1">
                    <span className="text-[10px]">{icon}</span>
                    <span className="text-[6px] text-muted-foreground truncate">{['Home','Cari','Suka','Profil','Setting','Data','File'][i]}</span>
                  </div>
                ))}
              </div>
            </div>
          }
          text="Jangan taruh lebih dari 5 item di bottom bar. Item jadi terlalu kecil dan sulit ditekan. Pindahkan sisanya ke menu hamburger."
        />
      </div>

      <SpecTable
        head={['Aspek', 'Mobile (M3)', 'Web (Rakit UI)']}
        minWidth="42rem"
        rows={[
          ['Posisi navigasi', 'Bottom bar (compact)', 'Sidebar kiri / top navbar'],
          ['Lebar nav rail', '80dp (medium ke atas)', 'w-64 (256px) sidebar'],
          ['Max item bar', '3–5 item', 'Tidak terbatas (scrollable)'],
          ['Tinggi bottom bar', '80dp', '— (web tidak pakai bottom bar)'],
          ['Ikon navigasi', '24dp + label di bawah', '20px + label di samping'],
        ]}
      />

      {/* ═══════════════════════════════════════════════════════ */}
      {/*  SECTION 9 — SPACING & JARAK                            */}
      {/* ═══════════════════════════════════════════════════════ */}
      <H2>Jarak & Spacing</H2>
      <div className="grid gap-4 sm:grid-cols-2 mt-4">
        <DoDont
          type="do"
          visual={
            <div className="flex flex-col gap-2 w-full max-w-50">
              <div className="h-6 rounded bg-muted" />
              <div className="h-1 flex items-center justify-center">
                <span className="text-[8px] font-mono text-primary bg-primary/10 px-1 rounded">8dp</span>
              </div>
              <div className="h-6 rounded bg-muted" />
              <div className="h-1 flex items-center justify-center">
                <span className="text-[8px] font-mono text-primary bg-primary/10 px-1 rounded">8dp</span>
              </div>
              <div className="h-6 rounded bg-muted" />
            </div>
          }
          text="Gunakan jarak dari skala yang sudah ditentukan (4, 8, 12, 16, 24, 32, 48dp). Konsisten di seluruh aplikasi."
        />
        <DoDont
          type="dont"
          visual={
            <div className="flex flex-col w-full max-w-50">
              <div className="h-6 rounded bg-muted" />
              <div className="h-0.75" />
              <div className="h-6 rounded bg-muted" />
              <div className="w-full max-w-50 flex items-center justify-center">
                <span className="text-[8px] font-mono text-destructive">15dp?</span>
              </div>
              <div className="h-6 rounded bg-muted" />
              <div className="h-1.75 flex items-center justify-center">
                <span className="text-[8px] font-mono text-destructive">7dp?</span>
              </div>
              <div className="h-6 rounded bg-muted" />
            </div>
          }
          text="Jangan menggunakan jarak sembarangan (3dp, 7dp, 15dp). Angka di luar skala menunjukkan hasil geser manual, bukan keputusan desain."
        />
      </div>

      {/* ═══════════════════════════════════════════════════════ */}
      {/*  SECTION 10 — DIALOG & MODAL                            */}
      {/* ═══════════════════════════════════════════════════════ */}
      <H2>Dialog & Modal</H2>
      <div className="grid gap-4 sm:grid-cols-2 mt-4">
        <DoDont
          type="do"
          visual={
            <div className="w-full max-w-50 rounded-2xl border bg-background p-4 shadow-lg">
              <div className="text-sm font-semibold mb-1">Hapus item?</div>
              <div className="text-xs text-muted-foreground mb-3">Item yang dihapus tidak bisa dikembalikan.</div>
              <div className="flex justify-end gap-2">
                <button className="h-7 px-3 rounded-full text-xs border">Batal</button>
                <button className="h-7 px-3 rounded-full text-xs bg-destructive text-white">Hapus</button>
              </div>
            </div>
          }
          text="Dialog harus singkat, punya judul jelas, dan maksimal 2 tombol aksi. Aksi destruktif diberi warna merah."
        />
        <DoDont
          type="dont"
          visual={
            <div className="w-full max-w-50 rounded-sm border bg-background p-2">
              <div className="text-[10px] font-semibold mb-0.5">Konfirmasi</div>
              <div className="text-[8px] text-muted-foreground mb-1">Apakah Anda yakin ingin menghapus item ini dari daftar? Tindakan ini permanen dan tidak dapat dibatalkan.</div>
              <div className="flex gap-1">
                <button className="h-5 px-2 rounded text-[8px] bg-primary text-white">Ya</button>
                <button className="h-5 px-2 rounded text-[8px] bg-blue-500 text-white">Tidak</button>
                <button className="h-5 px-2 rounded text-[8px] bg-muted">Nanti</button>
              </div>
            </div>
          }
          text="Jangan buat dialog dengan teks terlalu panjang atau lebih dari 2 tombol. Pengguna jadi bingung harus pilih apa."
        />
      </div>

      <SpecTable
        head={['Properti', 'Mobile (M3)', 'Web (Rakit UI)']}
        minWidth="36rem"
        rows={[
          ['Lebar dialog', '280–560dp (padding 24dp)', 'max-w-md (448px)'],
          ['Radius', 'Extra Large (28dp)', '12px (rounded-xl)'],
          ['Padding', '24dp', '24px (p-6)'],
          ['Overlay', 'Scrim 32% hitam', 'bg-black/80'],
          ['Posisi', 'Tengah layar', 'Tengah layar'],
        ]}
      />

      {/* ═══════════════════════════════════════════════════════ */}
      {/*  RINGKASAN UKURAN                                       */}
      {/* ═══════════════════════════════════════════════════════ */}
      <H2>Ringkasan Perbandingan Ukuran</H2>
      <p className="text-muted-foreground">
        Tabel ini merangkum seluruh perbedaan ukuran utama antara desain mobile (Material 3) dan web (Rakit UI):
      </p>
      <SpecTable
        head={['Elemen', 'Mobile (M3)', 'Web (Rakit UI)', 'Catatan']}
        minWidth="52rem"
        rows={[
          ['Tombol', '40dp', '32–36px', 'Web lebih compact'],
          ['Input', '56dp', '40px', 'Web pakai label terpisah'],
          ['Bottom bar', '80dp', '— (tidak ada)', 'Web pakai sidebar'],
          ['App bar', '64dp', '56–64px', 'Mirip'],
          ['Kartu padding', '16dp', '24px', 'Web lebih lapang'],
          ['Ikon standar', '24dp', '16–20px', 'Web lebih kecil'],
          ['Area sentuh', '48×48dp', '44×44px', 'Wajib di mobile'],
          ['Radius tombol', 'Full (kapsul)', '6–8px', 'Gaya berbeda'],
          ['Font body', '14sp', '14px', 'Sama'],
          ['Grid kolom', '4 (compact)', '12', 'Web selalu 12'],
          ['Margin layar', '16–24dp', '16–32px (container)', 'Mirip'],
        ]}
      />

      <Catatan judul="Ingat: desain mobile ≠ desain web">
        Jangan menyalin spec mobile langsung ke web atau sebaliknya. Ukuran, grid, navigasi, dan interaksinya berbeda.
        Selalu sebutkan di spec kamu: ini desain untuk <strong>mobile</strong> atau <strong>web</strong> — supaya developer tahu konteksnya.
      </Catatan>
    </>
  )
}
