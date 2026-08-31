import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Akar package `rakit-ui`: folder monorepo saat development, atau
 * lokasinya di node_modules ketika CLI dipakai dari project lain.
 */
export function getSourceDir(): string {
  // 1. Saat development (menjalankan lewat source code)
  const monoRepoPath = path.resolve(__dirname, '..', '..', 'ui');
  if (fs.existsSync(monoRepoPath)) {
    return monoRepoPath;
  }

  // 2. Saat production (menjalankan lewat npx)
  // Folder `ui` akan disalin ke dalam folder `dist` saat build
  const prodPath = path.resolve(__dirname, 'ui');
  if (fs.existsSync(prodPath)) {
    return prodPath;
  }

  throw new Error(
    'Package UI internal tidak ditemukan. Pastikan CLI di-build dengan benar.'
  );
}

export function getRegistryDir(): string {
  return path.join(getSourceDir(), 'registry');
}
