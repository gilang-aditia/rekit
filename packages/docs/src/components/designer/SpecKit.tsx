import * as React from 'react'
import { cn } from '@/lib/utils'

/** Judul halaman spesifikasi, seragam di seluruh jalur desainer. */
export function SpecHeader({ title, lead }: { title: string; lead: string }) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">{title}</h1>
      <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">{lead}</p>
    </div>
  )
}

export function Kode({ children }: { children: React.ReactNode }) {
  return <code className="rounded bg-code px-1 py-0.5 font-mono text-[0.85em]">{children}</code>
}

export function Catatan({
  judul,
  tone = 'netral',
  children,
}: {
  judul: string
  tone?: 'netral' | 'awas'
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-2 rounded-xl p-5 text-sm',
        tone === 'awas'
          ? 'border border-destructive/30 bg-destructive/5'
          : 'bg-surface text-surface-foreground'
      )}
    >
      <div className={cn('font-medium', tone === 'awas' ? 'text-destructive' : 'text-foreground')}>
        {judul}
      </div>
      <div className="text-muted-foreground [&_strong]:text-foreground">{children}</div>
    </div>
  )
}

/** Tabel spesifikasi dengan kolom pertama monospace. */
export function SpecTable({
  head,
  rows,
  minWidth = '36rem',
}: {
  head: string[]
  rows: React.ReactNode[][]
  minWidth?: string
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm" style={{ minWidth }}>
        <thead>
          <tr className="border-b text-left">
            {head.map((h) => (
              <th key={h} className="py-2 pr-4 font-medium whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b last:border-0">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={cn(
                    'py-2 pr-4 align-top',
                    j === 0 ? 'font-mono text-[0.78rem] whitespace-nowrap' : 'text-muted-foreground'
                  )}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/** Batang sebanding untuk memvisualkan ukuran dalam dp. */
export function DpBar({ dp, max, label }: { dp: number; max: number; label?: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-14 shrink-0 text-right font-mono text-[0.75rem] tabular-nums">{dp}dp</span>
      <div className="h-4 flex-1 overflow-hidden rounded-sm bg-muted">
        <div
          className="h-full rounded-sm bg-foreground/70"
          style={{ width: `${Math.max((dp / max) * 100, dp === 0 ? 0 : 1.5)}%` }}
        />
      </div>
      {label && <span className="w-40 shrink-0 text-xs text-muted-foreground">{label}</span>}
    </div>
  )
}

/** Kotak contoh dengan radius tertentu. */
export function RadiusSample({ radius, label }: { radius: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="grid h-20 w-full place-items-center bg-accent text-[0.7rem] text-accent-foreground"
        style={{ borderRadius: radius === 'full' ? '999px' : radius }}
      >
        {radius === 'full' ? '½ tinggi' : radius}
      </div>
      <span className="text-center text-xs text-muted-foreground">{label}</span>
    </div>
  )
}
