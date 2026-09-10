import * as React from 'react'
import { H2 } from '@/components/DocsHeading'
import { CodeBlock } from '@/components/CodeBlock'
import { Catatan, Kode, SpecHeader } from '@/components/designer/SpecKit'
import { cn } from '@/lib/utils'
import {
  CATEGORIES,
  gradientCss,
  gradientStyle,
  gradients,
  type GradientCategory,
} from '@/lib/gradients'

type Filter = 'Semua' | GradientCategory

const FILTERS: Filter[] = ['Semua', ...CATEGORIES]

/** Bungkus deklarasi ke dalam `.hero {}`, dengan blok `@keyframes` di luarnya. */
function snippet(preset: (typeof gradients)[number]): string {
  const [decls, ...rest] = gradientCss(preset, false).split('\n\n')
  const body = decls
    .split('\n')
    .map((line) => `  ${line}`)
    .join('\n')
  const keyframes = rest.length ? `\n\n${rest.join('\n\n')}` : ''
  return `.hero {\n${body}\n}${keyframes}`
}

export default function Gradients() {
  const [filter, setFilter] = React.useState<Filter>('Semua')
  const [grain, setGrain] = React.useState(false)
  const [copied, setCopied] = React.useState<string | null>(null)

  React.useEffect(() => {
    if (!copied) return
    const t = setTimeout(() => setCopied(null), 1600)
    return () => clearTimeout(t)
  }, [copied])

  const visible = gradients.filter((g) => filter === 'Semua' || g.category === filter)

  function copy(slug: string, css: string) {
    navigator.clipboard.writeText(css)
    setCopied(slug)
  }

  return (
    <>
      <SpecHeader
        title="Gradients"
        lead="Kumpulan preset gradient mesh, grainy, animated, aurora, dan klasik. Klik satu kartu untuk menyalin CSS-nya."
      />

      <Catatan judul="Cara kerjanya">
        Setiap kartu adalah nilai <Kode>background</Kode> yang siap tempel. Aktifkan{' '}
        <strong>Film grain</strong> untuk menambah tekstur noise (berguna menutup banding di area
        besar). Preset kategori <strong>Animated</strong> ikut membawa <Kode>background-size</Kode>{' '}
        dan keyframe <Kode>grad-drift</Kode> saat disalin.
      </Catatan>

      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-1.5">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                'inline-flex h-8 items-center rounded-full border px-3 text-[0.8rem] font-medium transition-colors',
                filter === f
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-border text-muted-foreground hover:bg-accent hover:text-foreground',
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <label className="flex w-fit cursor-pointer items-center gap-2 text-sm text-muted-foreground">
          <input
            type="checkbox"
            checked={grain}
            onChange={(e) => setGrain(e.target.checked)}
            className="size-4 accent-foreground"
          />
          Film grain
        </label>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {visible.map((g) => {
          const css = gradientCss(g, grain)
          const isCopied = copied === g.slug
          return (
            <button
              key={g.slug}
              type="button"
              onClick={() => copy(g.slug, css)}
              className="group relative flex flex-col overflow-hidden rounded-xl border text-left transition-shadow hover:shadow-md"
            >
              <div className="h-40 w-full" style={gradientStyle(g, grain)} />
              <div className="flex items-center justify-between gap-2 border-t bg-background px-3 py-2">
                <div className="flex min-w-0 flex-col">
                  <span className="truncate text-sm font-medium">{g.name}</span>
                  <span className="text-xs text-muted-foreground">{g.category}</span>
                </div>
                <span
                  className={cn(
                    'shrink-0 rounded-md border px-2 py-1 text-xs font-medium transition-colors',
                    isCopied
                      ? 'border-emerald-500/40 text-emerald-600 dark:text-emerald-400'
                      : 'text-muted-foreground group-hover:bg-accent group-hover:text-foreground',
                  )}
                >
                  {isCopied ? 'Tersalin' : 'Salin CSS'}
                </span>
              </div>
            </button>
          )
        })}
      </div>

      <H2>Cara pakai</H2>
      <p className="text-muted-foreground">
        Tempel nilai yang tersalin ke properti <Kode>background</Kode> elemen mana pun — section hero,
        kartu, atau latar tombol. Contoh untuk preset statis:
      </p>
      <CodeBlock language="css" code={snippet(gradients[0])} />
      <p className="text-muted-foreground">
        Preset animated membawa <Kode>@keyframes grad-drift</Kode> — sudah ikut tersalin, letakkan di
        luar selector:
      </p>
      <CodeBlock language="css" code={snippet(gradients.find((g) => g.animated)!)} />

      <Catatan judul="Grain di produksi">
        Overlay grain memakai satu SVG <Kode>feTurbulence</Kode> yang di-inline sebagai data URI, jadi
        tidak ada request tambahan. Untuk area sangat besar (mis. wallpaper penuh), naikkan ukuran
        elemen SVG-nya atau turunkan <Kode>opacity</Kode> di dalam data URI agar tidak terlihat kasar.
      </Catatan>
    </>
  )
}
