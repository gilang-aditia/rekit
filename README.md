# Rakit UI

Monorepo pnpm berisi:

- `packages/cli` — **`@moonblanck/rakit-ui`**, satu-satunya paket yang diterbitkan ke
  npm. Punya dua peran: `bin` untuk CLI (`npx @moonblanck/rakit-ui add button`) dan
  entry library berisi primitive headless yang diimpor komponen hasil salinan
- `packages/ui` — `@rakit-ui/library`, sumber komponen React dan registry
  (base-nya shadcn/ui, style `radix-nova`). Privat, tidak pernah diterbitkan
- `packages/docs` — situs dokumentasi (Vite + React Router)

Komponen mengimpor primitive-nya lewat `@moonblanck/rakit-ui`, bukan `radix-ui`.
Nama tanpa scope `rakit-ui` tidak bisa dipakai: npm menolaknya karena dianggap
terlalu mirip dengan `radix-ui` (proteksi typosquatting). Nama ber-scope bebas
dari filter itu.

Dependency CLI (`commander`, `execa`, `fs-extra`, dan seterusnya) **dibundel** oleh
tsup ke dalam `dist/index.js`, sehingga satu-satunya dependency runtime paket ini
adalah `radix-ui`. Tanpa itu, setiap aplikasi pengguna ikut memasang seluruh
dependency CLI hanya untuk sebuah tombol.

## Prasyarat

Komponen ditulis dengan **sintaks Tailwind CSS v4** (`p-(--card-spacing)`, `ring-3`,
`in-data-[...]`, `--spacing()`). Class seperti itu tidak ter-generate di Tailwind v3,
jadi seluruh package di sini memakai Tailwind v4 lewat `@tailwindcss/vite` —
tanpa `tailwind.config.js` dan tanpa PostCSS.

`@tailwindcss/vite` v4 membutuhkan Vite 5 ke atas.

## Perintah

```bash
pnpm dev:docs     # jalankan situs dokumentasi
pnpm build:cli    # build paket terbit (CLI + primitives)
pnpm build:ui     # build library internal
pnpm build:docs   # build situs dokumentasi
pnpm build        # build semua package
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
