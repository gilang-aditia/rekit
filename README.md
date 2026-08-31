# Rakit UI

Monorepo pnpm berisi:

- `packages/ui` — library komponen React (base-nya shadcn/ui, style `radix-nova`)
- `packages/docs` — situs dokumentasi (Vite + React Router)
- `packages/cli` — CLI `rakit-ui` untuk menyalin komponen ke project lain

## Prasyarat

Komponen ditulis dengan **sintaks Tailwind CSS v4** (`p-(--card-spacing)`, `ring-3`,
`in-data-[...]`, `--spacing()`). Class seperti itu tidak ter-generate di Tailwind v3,
jadi seluruh package di sini memakai Tailwind v4 lewat `@tailwindcss/vite` —
tanpa `tailwind.config.js` dan tanpa PostCSS.

`@tailwindcss/vite` v4 membutuhkan Vite 5 ke atas.

## Perintah

```bash
pnpm dev:docs     # jalankan situs dokumentasi
pnpm build:ui     # build library
pnpm build:docs   # build situs dokumentasi
pnpm build:cli    # build CLI
pnpm build        # build library + docs
```

## Token tema

`packages/ui/src/styles.css` adalah satu-satunya sumber token warna dan tema.
Docs meng-import-nya lewat `@import "rakit-ui/styles.css"`, dan `rakit-ui init`
menyalin file yang sama ke project pengguna — jadi ketiganya tidak bisa melenceng.

## Catatan

Setelah mengubah versi dependency (Vite, Tailwind), **restart dev server**.
Proses Node yang sudah berjalan tetap memakai versi yang dimuat saat start,
sehingga bisa memunculkan error yang menyesatkan seperti
`Cannot read properties of undefined (reading 'devSourcemap')`.
