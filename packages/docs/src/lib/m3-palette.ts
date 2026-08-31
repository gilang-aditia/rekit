/**
 * Tonal palette baseline Material 3 (seed #6750A4), nilai yang sama dipakai
 * Themes Playground saat menampilkan skema "Material 3 purple".
 */
export type Tone = { tone: number; hex: string }

export const tonalPalettes: { name: string; note: string; tones: Tone[] }[] = [
  {
    name: 'Primary',
    note: 'Warna utama brand. Aksi paling penting.',
    tones: [
      { tone: 0, hex: '#000000' },
      { tone: 10, hex: '#21005D' },
      { tone: 20, hex: '#381E72' },
      { tone: 30, hex: '#4F378B' },
      { tone: 40, hex: '#6750A4' },
      { tone: 50, hex: '#7F67BE' },
      { tone: 60, hex: '#9A82DB' },
      { tone: 70, hex: '#B69DF8' },
      { tone: 80, hex: '#D0BCFF' },
      { tone: 90, hex: '#EADDFF' },
      { tone: 95, hex: '#F6EDFF' },
      { tone: 99, hex: '#FFFBFE' },
      { tone: 100, hex: '#FFFFFF' },
    ],
  },
  {
    name: 'Secondary',
    note: 'Pendukung. Sengaja lebih kalem dari primary.',
    tones: [
      { tone: 0, hex: '#000000' },
      { tone: 10, hex: '#1D192B' },
      { tone: 20, hex: '#332D41' },
      { tone: 30, hex: '#4A4458' },
      { tone: 40, hex: '#625B71' },
      { tone: 50, hex: '#7A7289' },
      { tone: 60, hex: '#958DA5' },
      { tone: 70, hex: '#B0A7C0' },
      { tone: 80, hex: '#CCC2DC' },
      { tone: 90, hex: '#E8DEF8' },
      { tone: 95, hex: '#F6EDFF' },
      { tone: 99, hex: '#FFFBFE' },
      { tone: 100, hex: '#FFFFFF' },
    ],
  },
  {
    name: 'Tertiary',
    note: 'Aksen kontras. Hue diputar +60° dari primary.',
    tones: [
      { tone: 0, hex: '#000000' },
      { tone: 10, hex: '#31111D' },
      { tone: 20, hex: '#492532' },
      { tone: 30, hex: '#633B48' },
      { tone: 40, hex: '#7D5260' },
      { tone: 50, hex: '#986977' },
      { tone: 60, hex: '#B58392' },
      { tone: 70, hex: '#D29DAC' },
      { tone: 80, hex: '#EFB8C8' },
      { tone: 90, hex: '#FFD8E4' },
      { tone: 95, hex: '#FFECF1' },
      { tone: 99, hex: '#FFFBFA' },
      { tone: 100, hex: '#FFFFFF' },
    ],
  },
  {
    name: 'Error',
    note: 'Selalu dari nilai tetap. Bukan dari warna brand.',
    tones: [
      { tone: 0, hex: '#000000' },
      { tone: 10, hex: '#410E0B' },
      { tone: 20, hex: '#601410' },
      { tone: 30, hex: '#8C1D18' },
      { tone: 40, hex: '#B3261E' },
      { tone: 50, hex: '#DC362E' },
      { tone: 60, hex: '#E46962' },
      { tone: 70, hex: '#EC928E' },
      { tone: 80, hex: '#F2B8B5' },
      { tone: 90, hex: '#F9DEDC' },
      { tone: 95, hex: '#FCEEEE' },
      { tone: 99, hex: '#FFFBF9' },
      { tone: 100, hex: '#FFFFFF' },
    ],
  },
  {
    name: 'Neutral',
    note: 'Latar dan permukaan. Menyimpan sedikit jejak primary.',
    tones: [
      { tone: 0, hex: '#000000' },
      { tone: 10, hex: '#1C1B1F' },
      { tone: 20, hex: '#313033' },
      { tone: 30, hex: '#484649' },
      { tone: 40, hex: '#605D62' },
      { tone: 50, hex: '#787579' },
      { tone: 60, hex: '#939094' },
      { tone: 70, hex: '#AEAAAE' },
      { tone: 80, hex: '#C9C5CA' },
      { tone: 90, hex: '#E6E1E5' },
      { tone: 95, hex: '#F4EFF4' },
      { tone: 99, hex: '#FFFBFE' },
      { tone: 100, hex: '#FFFFFF' },
    ],
  },
  {
    name: 'Neutral variant',
    note: 'Garis tepi, ikon sekunder, pembatas.',
    tones: [
      { tone: 0, hex: '#000000' },
      { tone: 10, hex: '#1D1A22' },
      { tone: 20, hex: '#322F37' },
      { tone: 30, hex: '#49454F' },
      { tone: 40, hex: '#605D66' },
      { tone: 50, hex: '#79747E' },
      { tone: 60, hex: '#938F99' },
      { tone: 70, hex: '#AEA9B4' },
      { tone: 80, hex: '#CAC4D0' },
      { tone: 90, hex: '#E7E0EC' },
      { tone: 95, hex: '#F5EEFA' },
      { tone: 99, hex: '#FFFBFE' },
      { tone: 100, hex: '#FFFFFF' },
    ],
  },
]

/** Slot ColorScheme yang paling sering muncul di spec desain. */
export const colorSlots: {
  slot: string
  pair: string
  guna: string
  lightTone: string
  darkTone: string
}[] = [
  { slot: 'primary', pair: 'onPrimary', guna: 'Tombol utama, FAB, elemen aktif', lightTone: 'Primary 40', darkTone: 'Primary 80' },
  { slot: 'primaryContainer', pair: 'onPrimaryContainer', guna: 'Latar lembut bernuansa primary', lightTone: 'Primary 90', darkTone: 'Primary 30' },
  { slot: 'secondary', pair: 'onSecondary', guna: 'Aksi pendukung, chip terpilih', lightTone: 'Secondary 40', darkTone: 'Secondary 80' },
  { slot: 'secondaryContainer', pair: 'onSecondaryContainer', guna: 'Latar item terpilih di navigasi', lightTone: 'Secondary 90', darkTone: 'Secondary 30' },
  { slot: 'tertiary', pair: 'onTertiary', guna: 'Aksen penyeimbang, badge', lightTone: 'Tertiary 40', darkTone: 'Tertiary 80' },
  { slot: 'tertiaryContainer', pair: 'onTertiaryContainer', guna: 'Latar aksen lembut', lightTone: 'Tertiary 90', darkTone: 'Tertiary 30' },
  { slot: 'error', pair: 'onError', guna: 'Status gagal, validasi', lightTone: 'Error 40', darkTone: 'Error 80' },
  { slot: 'errorContainer', pair: 'onErrorContainer', guna: 'Banner error, latar peringatan', lightTone: 'Error 90', darkTone: 'Error 30' },
  { slot: 'surface', pair: 'onSurface', guna: 'Latar layar dan kartu', lightTone: 'Neutral 98', darkTone: 'Neutral 6' },
  { slot: 'surfaceVariant', pair: 'onSurfaceVariant', guna: 'Teks sekunder, ikon kalem', lightTone: 'N. variant 90', darkTone: 'N. variant 30' },
  { slot: 'outline', pair: '—', guna: 'Garis tepi input dan pembatas', lightTone: 'N. variant 50', darkTone: 'N. variant 60' },
  { slot: 'inverseSurface', pair: 'onInverseSurface', guna: 'Snackbar, tooltip gelap', lightTone: 'Neutral 20', darkTone: 'Neutral 90' },
]

/** Tingkatan surface Material 3, dari paling rendah ke paling tinggi. */
export const surfaceLevels = [
  { name: 'surfaceContainerLowest', light: '#FFFFFF', dark: '#0F0D13', guna: 'Paling dasar' },
  { name: 'surfaceContainerLow', light: '#F7F2FA', dark: '#1D1B20', guna: 'Kartu tenang' },
  { name: 'surfaceContainer', light: '#F3EDF7', dark: '#211F26', guna: 'Default kartu' },
  { name: 'surfaceContainerHigh', light: '#ECE6F0', dark: '#2B2930', guna: 'Menu, dialog' },
  { name: 'surfaceContainerHighest', light: '#E6E0E9', dark: '#36343B', guna: 'Elemen paling menonjol' },
]
