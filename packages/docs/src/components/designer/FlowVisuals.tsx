import * as React from 'react'
import { cn } from '@/lib/utils'

/* ------------------------------------------------------------------ *
 * Visual untuk jalur proses desain. Semuanya digambar dengan DOM biasa
 * supaya ikut tema terang/gelap dan tetap tajam di layar mana pun —
 * bukan gambar statis yang harus diganti tiap token berubah.
 * ------------------------------------------------------------------ */

/** Satu tahap bernomor. Dipakai berderet di dalam <Tahapan>. */
export function Tahap({
  no,
  judul,
  ringkas,
  children,
}: {
  no: number
  judul: string
  ringkas?: string
  children?: React.ReactNode
}) {
  return (
    <div className="group relative flex gap-4 pb-8 last:pb-0">
      {/* garis penghubung antar tahap — tidak digambar setelah tahap terakhir */}
      <div
        className="absolute top-9 bottom-0 left-[0.9375rem] w-px bg-border group-last:hidden"
        aria-hidden="true"
      />
      <div className="relative z-10 grid size-8 shrink-0 place-items-center rounded-full border bg-background font-mono text-[0.8rem] tabular-nums">
        {no}
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-3 pt-1">
        <div className="flex flex-col gap-1">
          <span className="font-medium">{judul}</span>
          {ringkas && <span className="text-sm text-muted-foreground">{ringkas}</span>}
        </div>
        {children}
      </div>
    </div>
  )
}

export function Tahapan({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col">{children}</div>
}

/* ------------------------------------------------------------------ */

/** Bingkai artboard dengan keterangan ukuran di bawahnya. */
export function Artboard({
  label,
  ukuran,
  ratio = '9 / 19.5',
  className,
  children,
}: {
  label: string
  ukuran: string
  ratio?: string
  className?: string
  children?: React.ReactNode
}) {
  return (
    <figure className="flex min-w-0 flex-col gap-2">
      <div
        style={{ aspectRatio: ratio }}
        className={cn(
          'relative w-full max-w-full overflow-hidden rounded-lg border bg-card',
          className
        )}
      >
        {children}
      </div>
      <figcaption className="flex flex-wrap items-baseline gap-x-2">
        <span className="text-[0.8rem] font-medium">{label}</span>
        <span className="font-mono text-[0.7rem] text-muted-foreground">{ukuran}</span>
      </figcaption>
    </figure>
  )
}

/* --- isi mockup: dipakai di dalam <Artboard> --- */

const bar = 'rounded-full bg-foreground/15'
const barKuat = 'rounded-full bg-foreground/40'

/** Wireframe layar ponsel: app bar, konten, navigation bar. */
export function IsiMobile({ wire = false }: { wire?: boolean }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-2 border-b px-3 py-2.5">
        <div className={cn('size-3.5 rounded-sm', barKuat)} />
        <div className={cn('h-2 w-16', barKuat)} />
      </div>
      <div className="flex flex-1 flex-col gap-2.5 p-3">
        {wire ? (
          <>
            <div className="h-12 rounded-md bg-foreground/[0.07]" />
            <div className="h-12 rounded-md bg-foreground/[0.07]" />
            <div className="h-12 rounded-md bg-foreground/[0.07]" />
          </>
        ) : (
          [0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-2.5 rounded-md border p-2.5">
              <div className="size-7 shrink-0 rounded-md bg-foreground/10" />
              <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                <div className={cn('h-1.5 w-3/4', barKuat)} />
                <div className={cn('h-1.5 w-1/2', bar)} />
              </div>
            </div>
          ))
        )}
      </div>
      <div className="flex items-center justify-around border-t px-3 py-2.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className={cn('size-3.5 rounded-sm', i === 0 ? barKuat : bar)} />
        ))}
      </div>
    </div>
  )
}

/** Wireframe layar web: header, sidebar, konten. */
export function IsiWeb({ wire = false }: { wire?: boolean }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-2 border-b px-3 py-2">
        <div className={cn('h-2 w-10', barKuat)} />
        <div className="ml-auto flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className={cn('h-1.5 w-6', bar)} />
          ))}
        </div>
      </div>
      <div className="flex min-h-0 flex-1">
        <div className="hidden w-1/5 flex-col gap-2 border-r p-2.5 sm:flex">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className={cn('h-1.5', i === 0 ? barKuat : bar, i === 0 ? 'w-4/5' : 'w-3/5')} />
          ))}
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-2 p-3">
          {wire ? (
            <>
              <div className="h-8 rounded-md bg-foreground/[0.07]" />
              <div className="grid flex-1 grid-cols-3 gap-2">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="rounded-md bg-foreground/[0.07]" />
                ))}
              </div>
            </>
          ) : (
            <>
              <div className={cn('h-2 w-1/3', barKuat)} />
              <div className="grid flex-1 grid-cols-3 gap-2">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="flex flex-col gap-1.5 rounded-md border p-2">
                    <div className="h-8 rounded bg-foreground/10" />
                    <div className={cn('h-1.5 w-4/5', barKuat)} />
                    <div className={cn('h-1.5 w-3/5', bar)} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */

/** Overlay kolom grid di atas sebuah frame. */
export function GridOverlay({
  cols,
  margin = 16,
  gutter = 16,
}: {
  cols: number
  margin?: number
  gutter?: number
}) {
  return (
    <div className="pointer-events-none absolute inset-0 flex" style={{ padding: `0 ${margin / 2}px` }}>
      <div className="flex flex-1" style={{ gap: `${gutter / 2}px` }}>
        {Array.from({ length: cols }).map((_, i) => (
          <div key={i} className="flex-1 bg-destructive/15" />
        ))}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */

/**
 * Dua kolom "boleh / jangan". Isi tiap sisi bebas — teks saja, atau
 * visual kecil supaya perbedaannya kelihatan, bukan cuma dibaca.
 */
export function BolehJangan({
  boleh,
  jangan,
  bolehLabel = 'Boleh',
  janganLabel = 'Jangan',
}: {
  boleh: React.ReactNode
  jangan: React.ReactNode
  bolehLabel?: string
  janganLabel?: string
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="flex flex-col gap-3 rounded-xl border border-emerald-600/30 bg-emerald-500/5 p-4">
        <div className="flex items-center gap-2 text-sm font-medium text-emerald-700 dark:text-emerald-400">
          <span aria-hidden="true" className="grid size-4 place-items-center rounded-full bg-emerald-600/15 text-[0.65rem]">
            ✓
          </span>
          {bolehLabel}
        </div>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground [&_strong]:text-foreground">
          {boleh}
        </div>
      </div>
      <div className="flex flex-col gap-3 rounded-xl border border-destructive/30 bg-destructive/5 p-4">
        <div className="flex items-center gap-2 text-sm font-medium text-destructive">
          <span aria-hidden="true" className="grid size-4 place-items-center rounded-full bg-destructive/15 text-[0.65rem]">
            ✕
          </span>
          {janganLabel}
        </div>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground [&_strong]:text-foreground">
          {jangan}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */

/** Layar mini untuk diagram alur. */
export function LayarMini({ nama, aktif = false }: { nama: string; aktif?: boolean }) {
  return (
    <div className="flex shrink-0 flex-col items-center gap-1.5">
      <div
        className={cn(
          'flex h-16 w-11 flex-col gap-1 rounded-md border p-1.5',
          aktif ? 'border-foreground/40 bg-card' : 'bg-muted/50'
        )}
      >
        <div className={cn('h-1 w-2/3 rounded-full', aktif ? 'bg-foreground/40' : 'bg-foreground/15')} />
        <div className="h-1 w-full rounded-full bg-foreground/10" />
        <div className="h-1 w-4/5 rounded-full bg-foreground/10" />
        <div className="mt-auto h-2 w-full rounded-sm bg-foreground/15" />
      </div>
      <span className="max-w-16 text-center text-[0.7rem] leading-tight text-muted-foreground">
        {nama}
      </span>
    </div>
  )
}

/** Rangkaian layar + panah, untuk menggambarkan satu alur prototype. */
export function AlurLayar({
  layar,
  keterangan,
}: {
  layar: { nama: string; aksi?: string }[]
  keterangan?: string
}) {
  return (
    <div className="flex flex-col gap-2 rounded-xl border p-4">
      <div className="flex items-start gap-1 overflow-x-auto pb-1">
        {layar.map((l, i) => (
          <React.Fragment key={l.nama}>
            {i > 0 && (
              <div className="flex min-w-14 shrink-0 flex-col items-center gap-1 pt-6">
                <span className="text-[0.65rem] whitespace-nowrap text-muted-foreground">
                  {layar[i].aksi ?? ''}
                </span>
                <span aria-hidden="true" className="text-muted-foreground">
                  →
                </span>
              </div>
            )}
            <LayarMini nama={l.nama} aktif={i === 0} />
          </React.Fragment>
        ))}
      </div>
      {keterangan && <p className="text-xs text-muted-foreground">{keterangan}</p>}
    </div>
  )
}

/* ------------------------------------------------------------------ */

/** Batang durasi untuk membandingkan lama transisi. */
export function DurasiBar({
  ms,
  max = 600,
  label,
  awas = false,
}: {
  ms: number
  max?: number
  label: string
  awas?: boolean
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-16 shrink-0 text-right font-mono text-[0.75rem] tabular-nums">{ms}ms</span>
      <div className="h-3 flex-1 overflow-hidden rounded-sm bg-muted">
        <div
          className={cn('h-full rounded-sm', awas ? 'bg-destructive/60' : 'bg-foreground/70')}
          style={{ width: `${Math.min((ms / max) * 100, 100)}%` }}
        />
      </div>
      <span className="w-44 shrink-0 text-xs text-muted-foreground">{label}</span>
    </div>
  )
}
