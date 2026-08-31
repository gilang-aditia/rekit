import { Link } from 'react-router-dom'
import { componentsNav } from '@/lib/docs-nav'
import { cn } from '@/lib/utils'

export default function ComponentsIndex() {
  const ready = componentsNav.filter((item) => !item.soon)

  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Components</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Kumpulan komponen yang bisa kamu salin ke dalam project. {ready.length} dari{' '}
          {componentsNav.length} komponen sudah tersedia.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {componentsNav.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              'flex h-9 items-center justify-between gap-2 rounded-lg bg-surface px-3 text-[0.8rem] font-medium transition-colors',
              item.soon ? 'text-muted-foreground' : 'text-surface-foreground hover:bg-accent'
            )}
          >
            <span className="truncate">{item.title}</span>
            {item.soon && <span className="shrink-0 text-[0.7rem] text-muted-foreground">soon</span>}
          </Link>
        ))}
      </div>
    </>
  )
}
