import { tonalPalettes, surfaceLevels } from '@/lib/m3-palette'
import { cn } from '@/lib/utils'

/** Deret tone satu palet, dengan penanda tone mana yang dipakai light/dark. */
export function TonalPaletteView({ highlight = false }: { highlight?: boolean }) {
  return (
    <div className="flex flex-col gap-3">
      {tonalPalettes.map((palette) => (
        <div key={palette.name} className="flex flex-col gap-1.5">
          <div className="flex flex-wrap items-baseline gap-x-2">
            <span className="text-[0.8rem] font-medium">{palette.name}</span>
            <span className="text-xs text-muted-foreground">{palette.note}</span>
          </div>
          <div className="flex overflow-hidden rounded-lg">
            {palette.tones.map((t) => {
              const isLight = highlight && palette.name === 'Primary' && t.tone === 40
              const isDark = highlight && palette.name === 'Primary' && t.tone === 80
              return (
                <div
                  key={t.tone}
                  title={`${palette.name} ${t.tone} — ${t.hex}`}
                  style={{ backgroundColor: t.hex }}
                  className={cn(
                    'relative flex h-10 flex-1 items-center justify-center text-[0.6rem] font-medium',
                    t.tone >= 60 ? 'text-black/60' : 'text-white/70',
                    (isLight || isDark) && 'ring-2 ring-foreground ring-inset z-10'
                  )}
                >
                  {t.tone}
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

/** Tangga surface Material 3 dalam dua mode. */
export function SurfaceLadder() {
  return (
    <div className="overflow-x-auto">
      <div className="flex min-w-[34rem] flex-col gap-1">
        {surfaceLevels.map((level) => (
          <div key={level.name} className="flex items-center gap-3">
            <code className="w-56 shrink-0 font-mono text-[0.75rem]">{level.name}</code>
            <div className="flex h-9 flex-1 overflow-hidden rounded-md border">
              <div className="flex-1" style={{ backgroundColor: level.light }} />
              <div className="flex-1" style={{ backgroundColor: level.dark }} />
            </div>
            <span className="w-32 shrink-0 text-xs text-muted-foreground">{level.guna}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/** Pasangan warna latar + warna teks di atasnya. */
export function PairDemo() {
  const pairs = [
    { bg: '#6750A4', fg: '#FFFFFF', a: 'primary', b: 'onPrimary' },
    { bg: '#EADDFF', fg: '#21005D', a: 'primaryContainer', b: 'onPrimaryContainer' },
    { bg: '#B3261E', fg: '#FFFFFF', a: 'error', b: 'onError' },
    { bg: '#F9DEDC', fg: '#410E0B', a: 'errorContainer', b: 'onErrorContainer' },
  ]
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {pairs.map((p) => (
        <div
          key={p.a}
          style={{ backgroundColor: p.bg, color: p.fg }}
          className="flex flex-col gap-1 rounded-xl p-4"
        >
          <span className="font-mono text-[0.7rem] opacity-80">{p.a}</span>
          <span className="text-sm font-medium">Teks memakai</span>
          <span className="font-mono text-[0.7rem] opacity-80">{p.b}</span>
        </div>
      ))}
    </div>
  )
}
