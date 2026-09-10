import type * as React from 'react'

/**
 * Preset gradient siap pakai — terinspirasi feralui.dev/gradients.
 *
 * `css` adalah nilai untuk properti `background` (untuk kategori statis, layer
 * warna dasar boleh jadi layer terakhir). Untuk kategori Animated, `css` adalah
 * nilai untuk `background-image` saja; halaman menambahkan `background-size` dan
 * animasi `grad-drift` sendiri.
 */
export type GradientCategory =
  | 'Mesh'
  | 'Grainy'
  | 'Animated'
  | 'Aurora'
  | 'Linear'
  | 'Radial'
  | 'Conic'

export type GradientPreset = {
  name: string
  slug: string
  category: GradientCategory
  css: string
  /** Butuh `background-size` besar + animasi drift. */
  animated?: boolean
}

/** Overlay film grain — noise SVG yang di-inline sebagai data URI. */
export const GRAIN_LAYER =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.32'/%3E%3C/svg%3E\")"

export const CATEGORIES: GradientCategory[] = [
  'Mesh',
  'Grainy',
  'Animated',
  'Aurora',
  'Linear',
  'Radial',
  'Conic',
]

export const gradients: GradientPreset[] = [
  // ── Mesh ──────────────────────────────────────────────────────────────
  {
    name: 'Prisma',
    slug: 'prisma',
    category: 'Mesh',
    css: [
      'radial-gradient(at 27% 37%, #3a86ff 0px, transparent 55%)',
      'radial-gradient(at 97% 21%, #8338ec 0px, transparent 50%)',
      'radial-gradient(at 52% 99%, #ff006e 0px, transparent 55%)',
      'radial-gradient(at 10% 29%, #fb5607 0px, transparent 45%)',
      'radial-gradient(at 97% 96%, #ffbe0b 0px, transparent 50%)',
      'radial-gradient(at 33% 50%, #06d6a0 0px, transparent 55%)',
      '#0b1220',
    ].join(', '),
  },
  {
    name: 'Senja Karang',
    slug: 'senja-karang',
    category: 'Mesh',
    css: [
      'radial-gradient(at 80% 0%, #ff9a8b 0px, transparent 50%)',
      'radial-gradient(at 0% 50%, #ff6a88 0px, transparent 50%)',
      'radial-gradient(at 80% 100%, #ff99ac 0px, transparent 50%)',
      'radial-gradient(at 20% 90%, #fbc687 0px, transparent 50%)',
      '#f8b195',
    ].join(', '),
  },
  {
    name: 'Rimba Kabut',
    slug: 'rimba-kabut',
    category: 'Mesh',
    css: [
      'radial-gradient(at 15% 20%, #2dd4bf 0px, transparent 50%)',
      'radial-gradient(at 85% 25%, #4ade80 0px, transparent 50%)',
      'radial-gradient(at 50% 90%, #0ea5e9 0px, transparent 55%)',
      'radial-gradient(at 10% 80%, #a3e635 0px, transparent 45%)',
      '#064e3b',
    ].join(', '),
  },
  {
    name: 'Nebula Ungu',
    slug: 'nebula-ungu',
    category: 'Mesh',
    css: [
      'radial-gradient(at 20% 25%, #7c3aed 0px, transparent 50%)',
      'radial-gradient(at 75% 15%, #db2777 0px, transparent 50%)',
      'radial-gradient(at 60% 80%, #2563eb 0px, transparent 55%)',
      'radial-gradient(at 15% 85%, #9333ea 0px, transparent 45%)',
      '#0f0720',
    ].join(', '),
  },
  {
    name: 'Sorbet',
    slug: 'sorbet',
    category: 'Mesh',
    css: [
      'radial-gradient(at 10% 10%, #fecdd3 0px, transparent 50%)',
      'radial-gradient(at 90% 20%, #bae6fd 0px, transparent 50%)',
      'radial-gradient(at 70% 90%, #ddd6fe 0px, transparent 55%)',
      'radial-gradient(at 20% 80%, #fef3c7 0px, transparent 50%)',
      '#fdf4ff',
    ].join(', '),
  },

  // ── Grainy ────────────────────────────────────────────────────────────
  {
    name: 'Poster Jingga',
    slug: 'poster-jingga',
    category: 'Grainy',
    css: `${GRAIN_LAYER}, radial-gradient(at 30% 20%, #f97316 0px, transparent 55%), radial-gradient(at 80% 80%, #db2777 0px, transparent 55%), #7c2d12`,
  },
  {
    name: 'Beton Biru',
    slug: 'beton-biru',
    category: 'Grainy',
    css: `${GRAIN_LAYER}, linear-gradient(135deg, #1e3a8a, #0ea5e9), #1e3a8a`,
  },
  {
    name: 'Debu Mawar',
    slug: 'debu-mawar',
    category: 'Grainy',
    css: `${GRAIN_LAYER}, radial-gradient(at 50% 0%, #fda4af 0px, transparent 60%), #881337`,
  },
  {
    name: 'Malam Zaitun',
    slug: 'malam-zaitun',
    category: 'Grainy',
    css: `${GRAIN_LAYER}, linear-gradient(160deg, #365314, #1a2e05), #1a2e05`,
  },
  {
    name: 'Kertas Senja',
    slug: 'kertas-senja',
    category: 'Grainy',
    css: `${GRAIN_LAYER}, linear-gradient(120deg, #fbbf24, #f97316 45%, #9333ea), #f97316`,
  },

  // ── Animated ──────────────────────────────────────────────────────────
  {
    name: 'Arus Laut',
    slug: 'arus-laut',
    category: 'Animated',
    animated: true,
    css: 'linear-gradient(-45deg, #0ea5e9, #22d3ee, #2563eb, #14b8a6)',
  },
  {
    name: 'Fajar Perlahan',
    slug: 'fajar-perlahan',
    category: 'Animated',
    animated: true,
    css: 'linear-gradient(-45deg, #fda4af, #fca5a5, #fdba74, #c4b5fd)',
  },
  {
    name: 'Kaca Neon',
    slug: 'kaca-neon',
    category: 'Animated',
    animated: true,
    css: 'linear-gradient(-45deg, #6d28d9, #db2777, #2563eb, #7c3aed)',
  },
  {
    name: 'Hutan Napas',
    slug: 'hutan-napas',
    category: 'Animated',
    animated: true,
    css: 'linear-gradient(-45deg, #065f46, #10b981, #14532d, #34d399)',
  },

  // ── Aurora ────────────────────────────────────────────────────────────
  {
    name: 'Aurora Klasik',
    slug: 'aurora-klasik',
    category: 'Aurora',
    css: [
      'radial-gradient(ellipse 80% 50% at 20% 30%, rgba(74, 222, 128, 0.55), transparent 60%)',
      'radial-gradient(ellipse 70% 40% at 70% 25%, rgba(34, 211, 238, 0.5), transparent 60%)',
      'radial-gradient(ellipse 90% 60% at 50% 10%, rgba(59, 130, 246, 0.4), transparent 65%)',
      '#040711',
    ].join(', '),
  },
  {
    name: 'Aurora Magenta',
    slug: 'aurora-magenta',
    category: 'Aurora',
    css: [
      'radial-gradient(ellipse 80% 50% at 25% 20%, rgba(217, 70, 239, 0.55), transparent 60%)',
      'radial-gradient(ellipse 70% 45% at 75% 30%, rgba(139, 92, 246, 0.5), transparent 60%)',
      'radial-gradient(ellipse 90% 55% at 50% 5%, rgba(236, 72, 153, 0.35), transparent 65%)',
      '#0a0417',
    ].join(', '),
  },
  {
    name: 'Aurora Es',
    slug: 'aurora-es',
    category: 'Aurora',
    css: [
      'radial-gradient(ellipse 75% 50% at 30% 25%, rgba(125, 211, 252, 0.5), transparent 60%)',
      'radial-gradient(ellipse 70% 40% at 70% 20%, rgba(165, 243, 252, 0.45), transparent 60%)',
      'radial-gradient(ellipse 85% 55% at 50% 8%, rgba(99, 102, 241, 0.35), transparent 65%)',
      '#03060f',
    ].join(', '),
  },

  // ── Linear ────────────────────────────────────────────────────────────
  {
    name: 'Sakura',
    slug: 'sakura',
    category: 'Linear',
    css: 'linear-gradient(135deg, #fbcfe8 0%, #f9a8d4 65%, #c084fc 100%)',
  },
  {
    name: 'Indigo Dalam',
    slug: 'indigo-dalam',
    category: 'Linear',
    css: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 60%, #4338ca 100%)',
  },
  {
    name: 'Matahari Terbit',
    slug: 'matahari-terbit',
    category: 'Linear',
    css: 'linear-gradient(120deg, #f59e0b 0%, #ef4444 55%, #db2777 100%)',
  },
  {
    name: 'Teh Hijau',
    slug: 'teh-hijau',
    category: 'Linear',
    css: 'linear-gradient(135deg, #ecfccb 0%, #86efac 60%, #10b981 100%)',
  },
  {
    name: 'Baja Dingin',
    slug: 'baja-dingin',
    category: 'Linear',
    css: 'linear-gradient(135deg, #e2e8f0 0%, #94a3b8 55%, #475569 100%)',
  },

  // ── Radial ────────────────────────────────────────────────────────────
  {
    name: 'Lampu Kabut',
    slug: 'lampu-kabut',
    category: 'Radial',
    css: 'radial-gradient(circle at 50% 40%, #fde68a 0%, #f97316 35%, #7c2d12 100%)',
  },
  {
    name: 'Sorot Ungu',
    slug: 'sorot-ungu',
    category: 'Radial',
    css: 'radial-gradient(circle at 50% 45%, #c4b5fd 0%, #7c3aed 40%, #1e1b4b 100%)',
  },
  {
    name: 'Orb Toska',
    slug: 'orb-toska',
    category: 'Radial',
    css: 'radial-gradient(circle at 50% 50%, #99f6e4 0%, #14b8a6 40%, #042f2e 100%)',
  },
  {
    name: 'Bara',
    slug: 'bara',
    category: 'Radial',
    css: 'radial-gradient(circle at 50% 55%, #fca5a5 0%, #dc2626 40%, #450a0a 100%)',
  },

  // ── Conic ─────────────────────────────────────────────────────────────
  {
    name: 'Kipas Spektrum',
    slug: 'kipas-spektrum',
    category: 'Conic',
    css: 'conic-gradient(from 180deg at 50% 50%, #3b82f6, #8b5cf6, #ec4899, #f59e0b, #10b981, #3b82f6)',
  },
  {
    name: 'Roda Senja',
    slug: 'roda-senja',
    category: 'Conic',
    css: 'conic-gradient(from 90deg at 50% 50%, #f97316, #db2777, #7c3aed, #f97316)',
  },
  {
    name: 'Pusaran Dingin',
    slug: 'pusaran-dingin',
    category: 'Conic',
    css: 'conic-gradient(from 45deg at 50% 50%, #0ea5e9, #6366f1, #22d3ee, #0ea5e9)',
  },
]

/** CSS lengkap untuk disalin, sudah memperhitungkan opsi grain. */
export function gradientCss(preset: GradientPreset, grain: boolean): string {
  if (preset.animated) {
    const image = grain ? `${GRAIN_LAYER}, ${preset.css}` : preset.css
    return [
      `background-image: ${image};`,
      'background-size: 300% 300%;',
      'animation: grad-drift 14s ease infinite;',
      '',
      '@keyframes grad-drift {',
      '  0%   { background-position: 0% 50%; }',
      '  50%  { background-position: 100% 50%; }',
      '  100% { background-position: 0% 50%; }',
      '}',
    ].join('\n')
  }
  const value = grain ? `${GRAIN_LAYER}, ${preset.css}` : preset.css
  return `background: ${value};`
}

/** Style inline untuk kartu pratinjau. */
export function gradientStyle(
  preset: GradientPreset,
  grain: boolean,
): React.CSSProperties {
  if (preset.animated) {
    return {
      backgroundImage: grain ? `${GRAIN_LAYER}, ${preset.css}` : preset.css,
      backgroundSize: '300% 300%',
      animation: 'grad-drift 14s ease infinite',
    }
  }
  return { background: grain ? `${GRAIN_LAYER}, ${preset.css}` : preset.css }
}
