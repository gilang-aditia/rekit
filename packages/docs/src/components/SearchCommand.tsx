import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CommandDialog,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@rakit-ui/library'
import { parseQuery, searchDocs, type Entry } from '@/lib/search'

function highlight(text: string, terms: string[]) {
  if (!terms.length) return text
  const pattern = new RegExp(`(${terms.map(escapeRegExp).join('|')})`, 'ig')
  return text.split(pattern).map((part, i) =>
    terms.some((t) => t.toLowerCase() === part.toLowerCase()) ? (
      <mark key={i} className="rounded-sm bg-primary/20 text-foreground">
        {part}
      </mark>
    ) : (
      part
    )
  )
}

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export function SearchCommand() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [entries, setEntries] = useState<Entry[]>([])
  const navigate = useNavigate()

  // Indeks baru diambil saat dialog pertama kali dibuka, jadi tidak membebani
  // muatan awal halaman.
  useEffect(() => {
    if (!open || entries.length) return
    let cancelled = false
    import('@/lib/search-index.json').then((mod) => {
      if (!cancelled) setEntries(mod.default as Entry[])
    })
    return () => {
      cancelled = true
    }
  }, [open, entries.length])

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key.toLowerCase() === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  const terms = useMemo(() => parseQuery(query), [query])
  const groups = useMemo(() => searchDocs(entries, query), [entries, query])

  function go(href: string) {
    setOpen(false)
    setQuery('')
    navigate(href)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative inline-flex h-8 w-8 md:w-48 lg:w-40 xl:w-64 shrink-0 items-center justify-center md:justify-start gap-2 rounded-lg bg-muted md:pl-3 text-sm font-medium whitespace-nowrap text-foreground shadow-none transition-colors outline-none hover:bg-muted/50 focus-visible:ring-[3px] focus-visible:ring-ring/50 dark:bg-card"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4 md:hidden"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <span className="hidden xl:inline-flex text-muted-foreground">Cari dokumentasi...</span>
        <span className="hidden md:inline-flex xl:hidden text-muted-foreground">Cari...</span>
        <kbd className="pointer-events-none absolute top-1/2 right-1.5 hidden -translate-y-1/2 items-center gap-0.5 rounded border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground md:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
        <span className="sr-only">Cari dokumentasi</span>
      </button>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        shouldFilter={false}
        title="Cari dokumentasi"
        description="Ketik kata kunci untuk mencari di seluruh halaman."
      >
        {/* Penyaringan bawaan cmdk dimatikan: kami menilai sendiri agar isi
            paragraf ikut dicari dan cuplikannya bisa ditampilkan. */}
        <CommandInput
          placeholder="Cari komponen, panduan, atau kata apa pun..."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList className="max-h-[60vh]">
          {/* Status kosong dirender sendiri, bukan lewat CommandEmpty: dengan
              shouldFilter dimatikan, CommandEmpty bergantung pada hitungan
              internal cmdk yang tidak lagi mencerminkan hasil kami. */}
          {query.trim() && groups.length === 0 && (
            <div className="px-3 py-6 text-center text-sm text-muted-foreground">
              Tidak ada hasil untuk &ldquo;{query}&rdquo;.
            </div>
          )}
          {!query.trim() && (
            <div className="px-3 py-6 text-center text-sm text-muted-foreground">
              Ketik untuk mencari di {entries.length || 88} halaman.
            </div>
          )}
          {groups.map(({ section, hits }) => (
            <CommandGroup key={section} heading={section}>
              {hits.map((hit) => (
                <CommandItem
                  key={hit.href}
                  value={hit.href}
                  onSelect={() => go(hit.href)}
                  className="flex-col items-start gap-0.5 px-2 py-2"
                >
                  <span className="font-medium">{highlight(hit.title, terms)}</span>
                  <span className="line-clamp-2 text-xs text-muted-foreground">
                    {highlight(hit.snippet, terms)}
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}
