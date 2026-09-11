export type Entry = {
  href: string
  title: string
  headings: string[]
  text: string
}

export type Hit = Entry & { score: number; snippet: string }

export type Group = { section: string; hits: Hit[] }

const SECTION_ORDER = ['Dokumentasi', 'Komponen', 'Untuk Desainer']

export function sectionOf(href: string) {
  if (href.startsWith('/docs/components')) return 'Komponen'
  if (href.startsWith('/design')) return 'Untuk Desainer'
  return 'Dokumentasi'
}

/** Skor tertinggi menang: judul lebih berarti daripada isi paragraf. */
export function scoreEntry(entry: Entry, term: string) {
  const title = entry.title.toLowerCase()
  if (title === term) return 100
  if (title.startsWith(term)) return 90
  if (title.includes(term)) return 80
  if (entry.headings.some((h) => h.toLowerCase().includes(term))) return 60
  if (entry.href.toLowerCase().includes(term)) return 45
  if (entry.text.toLowerCase().includes(term)) return 30
  return 0
}

/** Potong teks di sekitar kata yang cocok supaya pengguna melihat konteksnya. */
export function makeSnippet(entry: Entry, term: string) {
  const heading = entry.headings.find((h) => h.toLowerCase().includes(term))
  if (heading) return heading

  const i = entry.text.toLowerCase().indexOf(term)
  if (i === -1) return entry.text.slice(0, 100)

  const start = Math.max(0, i - 40)
  const slice = entry.text.slice(start, start + 120).trim()
  return `${start > 0 ? '…' : ''}${slice}…`
}

export function parseQuery(query: string) {
  return query
    .toLowerCase()
    .split(/\s+/)
    .map((term) => term.replace(/[(){}[\];]/g, ''))
    .filter(Boolean)
}

/**
 * Mencari ke seluruh isi halaman: judul, heading, alamat, dan teks paragraf.
 * Semua kata harus ketemu, supaya kueri dua kata menyaring dan bukan melebar.
 */
export function searchDocs(entries: Entry[], query: string, perSection = 8): Group[] {
  const terms = parseQuery(query)
  if (!terms.length) return []

  const hits: Hit[] = []
  for (const entry of entries) {
    const scores = terms.map((t) => scoreEntry(entry, t))
    if (scores.some((s) => s === 0)) continue
    hits.push({ ...entry, score: Math.max(...scores), snippet: makeSnippet(entry, terms[0]) })
  }

  hits.sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))

  const bySection = new Map<string, Hit[]>()
  for (const hit of hits) {
    const list = bySection.get(sectionOf(hit.href))
    if (list) list.push(hit)
    else bySection.set(sectionOf(hit.href), [hit])
  }

  return [...bySection.entries()]
    .map(([section, list]) => ({ section, hits: list.slice(0, perSection) }))
    .sort(
      (a, b) =>
        b.hits[0].score - a.hits[0].score ||
        SECTION_ORDER.indexOf(a.section) - SECTION_ORDER.indexOf(b.section)
    )
}
