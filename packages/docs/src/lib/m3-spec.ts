/**
 * Nilai baku Material 3, diambil dari m3.material.io dan token resmi
 * material-components/material-web (versi v0_192).
 * Satuan dp/sp — di Flutter 1dp = 1 logical pixel.
 */

export const typeScale = [
  { name: 'Display Large', token: 'display-large', size: 57, line: 64, track: -0.25, weight: 400 },
  { name: 'Display Medium', token: 'display-medium', size: 45, line: 52, track: 0, weight: 400 },
  { name: 'Display Small', token: 'display-small', size: 36, line: 44, track: 0, weight: 400 },
  { name: 'Headline Large', token: 'headline-large', size: 32, line: 40, track: 0, weight: 400 },
  { name: 'Headline Medium', token: 'headline-medium', size: 28, line: 36, track: 0, weight: 400 },
  { name: 'Headline Small', token: 'headline-small', size: 24, line: 32, track: 0, weight: 400 },
  { name: 'Title Large', token: 'title-large', size: 22, line: 28, track: 0, weight: 400 },
  { name: 'Title Medium', token: 'title-medium', size: 16, line: 24, track: 0.15, weight: 500 },
  { name: 'Title Small', token: 'title-small', size: 14, line: 20, track: 0.1, weight: 500 },
  { name: 'Body Large', token: 'body-large', size: 16, line: 24, track: 0.5, weight: 400 },
  { name: 'Body Medium', token: 'body-medium', size: 14, line: 20, track: 0.25, weight: 400 },
  { name: 'Body Small', token: 'body-small', size: 12, line: 16, track: 0.4, weight: 400 },
  { name: 'Label Large', token: 'label-large', size: 14, line: 20, track: 0.1, weight: 500 },
  { name: 'Label Medium', token: 'label-medium', size: 12, line: 16, track: 0.5, weight: 500 },
  { name: 'Label Small', token: 'label-small', size: 11, line: 16, track: 0.5, weight: 500 },
]

export const typeRoles: Record<string, string> = {
  'display-large': 'Angka besar, layar splash, momen ekspresif. Jarang dipakai.',
  'display-medium': 'Judul hero di layar lebar.',
  'display-small': 'Judul hero di layar kecil.',
  'headline-large': 'Judul halaman utama.',
  'headline-medium': 'Judul halaman.',
  'headline-small': 'Judul dialog, judul seksi besar.',
  'title-large': 'Judul di app bar.',
  'title-medium': 'Judul kartu, judul list item.',
  'title-small': 'Sub-judul, header kolom.',
  'body-large': 'Paragraf utama.',
  'body-medium': 'Teks isi standar. Paling sering dipakai.',
  'body-small': 'Keterangan, metadata, caption.',
  'label-large': 'Teks di dalam tombol.',
  'label-medium': 'Label navigasi, chip.',
  'label-small': 'Label terkecil, badge.',
}

export const shapeScale = [
  { name: 'None', token: 'corner-none', value: '0dp', use: 'Elemen menempel penuh ke tepi layar.' },
  { name: 'Extra small', token: 'corner-extra-small', value: '4dp', use: 'Menu, snackbar, text field.' },
  { name: 'Small', token: 'corner-small', value: '8dp', use: 'Chip, tombol kecil.' },
  { name: 'Medium', token: 'corner-medium', value: '12dp', use: 'Kartu, tombol persegi ukuran kecil.' },
  { name: 'Large', token: 'corner-large', value: '16dp', use: 'Bottom sheet, kartu besar, navigation drawer.' },
  { name: 'Extra large', token: 'corner-extra-large', value: '28dp', use: 'Dialog, FAB, search bar.' },
  { name: 'Full', token: 'corner-full', value: 'setengah tinggi', use: 'Tombol, chip, badge — bentuk kapsul.' },
]

export const spacingScale = [
  { token: 'space0', dp: 0 },
  { token: 'space25', dp: 2 },
  { token: 'space50', dp: 4 },
  { token: 'space75', dp: 6 },
  { token: 'space100', dp: 8 },
  { token: 'space125', dp: 10 },
  { token: 'space150', dp: 12 },
  { token: 'space175', dp: 14 },
  { token: 'space200', dp: 16 },
  { token: 'space250', dp: 20 },
  { token: 'space300', dp: 24 },
  { token: 'space400', dp: 32 },
  { token: 'space450', dp: 36 },
  { token: 'space500', dp: 40 },
  { token: 'space600', dp: 48 },
  { token: 'space700', dp: 56 },
  { token: 'space800', dp: 64 },
  { token: 'space900', dp: 72 },
]

export const breakpoints = [
  { name: 'Compact', width: 'Di bawah 600dp', margin: 16, pane: 'Satu pane', nav: 'Navigation bar di bawah', device: 'Ponsel potret' },
  { name: 'Medium', width: '600 – 839dp', margin: 24, pane: 'Satu atau dua pane', nav: 'Navigation rail', device: 'Tablet potret, foldable terbuka' },
  { name: 'Expanded', width: '840 – 1199dp', margin: 24, pane: 'Dua pane', nav: 'Navigation rail', device: 'Ponsel lanskap, tablet lanskap, desktop' },
  { name: 'Large', width: '1200 – 1599dp', margin: 24, pane: 'Dua pane', nav: 'Rail atau drawer permanen', device: 'Desktop' },
  { name: 'Extra-large', width: '1600dp ke atas', margin: 24, pane: 'Dua sampai tiga pane', nav: 'Drawer permanen', device: 'Monitor ultra-wide' },
]

export const elevationLevels = [
  { level: 'Level 0', dp: 0, use: 'Permukaan dasar. Tidak terangkat.' },
  { level: 'Level 1', dp: 1, use: 'Kartu diam, search bar.' },
  { level: 'Level 2', dp: 3, use: 'Tombol terangkat, app bar saat di-scroll.' },
  { level: 'Level 3', dp: 6, use: 'FAB, menu, dialog.' },
  { level: 'Level 4', dp: 8, use: 'Navigation drawer.' },
  { level: 'Level 5', dp: 12, use: 'Elemen paling menonjol. Jarang dipakai.' },
]

export const iconSizes = [
  { dp: 20, target: 40, use: 'Layout padat di desktop, ikon di dalam tombol.' },
  { dp: 24, target: 48, use: 'Ukuran baku. Dipakai hampir semua komponen.' },
  { dp: 40, target: 48, use: 'Aksi utama yang perlu ditonjolkan.' },
  { dp: 48, target: 48, use: 'Aksi utama berukuran besar.' },
]

export const iconAxes = [
  { axis: 'Optical size', range: '20 – 48dp', note: 'Menjaga ketebalan garis tetap sama saat ikon diperbesar. Jangan sekadar men-scale ikon 24dp.' },
  { axis: 'Weight', range: '100 – 700, baku 400', note: 'Minimal 200 untuk ikon 24dp. Samakan dengan bobot tipografi di sekitarnya.' },
  { axis: 'Fill', range: '0 – 1', note: 'Menandai perubahan state, misalnya item navigasi yang sedang aktif.' },
  { axis: 'Grade', range: '−25 sampai 200, baku 0', note: 'Pakai −25 untuk ikon terang di atas latar gelap, agar tebalnya terlihat sama.' },
]

export const componentSizes = [
  { group: 'Tombol', name: 'Filled / Outlined / Text button', height: 40, icon: 18, note: 'Radius Full. Label pakai Label Large.' },
  { group: 'Tombol', name: 'Icon button', height: 40, icon: 24, note: 'Target sentuh wajib minimal 48×48dp.' },
  { group: 'Tombol', name: 'FAB kecil', height: 40, icon: 24, note: 'Lebar 40dp. Radius Medium 12dp.' },
  { group: 'Tombol', name: 'FAB', height: 56, icon: 24, note: 'Lebar 56dp. Radius Large 16dp.' },
  { group: 'Tombol', name: 'FAB besar', height: 96, icon: 36, note: 'Lebar 96dp. Radius Extra large 28dp.' },
  { group: 'Tombol', name: 'Extended FAB', height: 56, icon: 24, note: 'Lebar mengikuti label.' },
  { group: 'Bar', name: 'Top app bar — small', height: 64, icon: 24, note: 'Judul pakai Title Large.' },
  { group: 'Bar', name: 'Top app bar — medium', height: 112, icon: 24, note: 'Judul pakai Headline Small.' },
  { group: 'Bar', name: 'Top app bar — large', height: 152, icon: 24, note: 'Judul pakai Headline Medium.' },
  { group: 'Bar', name: 'Navigation bar', height: 80, icon: 24, note: 'Untuk breakpoint compact. 3–5 destinasi.' },
  { group: 'Bar', name: 'Navigation rail', height: 0, icon: 24, note: 'Lebar 80dp. Untuk medium ke atas.' },
  { group: 'Daftar', name: 'List item — 1 baris', height: 56, icon: 24, note: 'Padding kiri-kanan 16dp. Avatar 40dp.' },
  { group: 'Daftar', name: 'List item — 2 baris', height: 72, icon: 24, note: 'Padding kiri-kanan 16dp.' },
  { group: 'Daftar', name: 'List item — 3 baris', height: 88, icon: 24, note: 'Padding kiri-kanan 16dp.' },
  { group: 'Lainnya', name: 'Chip', height: 32, icon: 18, note: 'Radius Small 8dp.' },
  { group: 'Lainnya', name: 'Snackbar — 1 baris', height: 48, icon: 24, note: 'Radius Extra small 4dp.' },
  { group: 'Lainnya', name: 'Snackbar — 2 baris', height: 68, icon: 24, note: '' },
  { group: 'Lainnya', name: 'Checkbox', height: 18, icon: 18, note: 'Target sentuh 48×48dp.' },
]

/** Banner adalah sisa Material 2 — masih ada tokennya, tapi bukan komponen M3. */
export const bannerSizes = [
  { context: 'Mobile — 1 baris', height: 54 },
  { context: 'Mobile — 2 baris', height: 112 },
  { context: 'Mobile — 2 baris + gambar', height: 120 },
  { context: 'Desktop — 1 baris', height: 52 },
  { context: 'Desktop — 2 baris + gambar', height: 72 },
  { context: 'Desktop — 3 baris', height: 90 },
]
