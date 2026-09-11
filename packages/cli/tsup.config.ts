import { defineConfig } from 'tsup';

// Dua build terpisah karena keduanya punya target yang berbeda:
// entry CLI berjalan di Node, entry library berjalan di browser pengguna.
export default defineConfig([
  {
    // CLI (bin). Dependency-nya dibundel supaya aplikasi pengguna tidak ikut
    // memasang commander/execa/fs-extra hanya untuk sebuah tombol.
    entry: { index: 'src/index.ts' },
    format: ['esm'],
    dts: true,
    noExternal: ['commander', 'chalk', 'ora', 'prompts', 'fs-extra', 'execa'],
    // Sebagian dependency itu CJS dan memanggil require() modul bawaan Node.
    // Tanpa shim ini, bundel ESM-nya gagal dengan "Dynamic require of events".
    banner: {
      js: "import { createRequire as __rakitCreateRequire } from 'module';\nconst require = __rakitCreateRequire(import.meta.url);",
    },
  },
  {
    // Entry library: diimpor komponen di project pengguna, harus tetap bersih
    // dari apa pun yang khas Node — tidak ada banner, tidak ada bundling.
    entry: { primitives: 'src/primitives.ts' },
    format: ['esm'],
    dts: true,
    external: ['radix-ui'],
  },
]);
