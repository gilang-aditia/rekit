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
  const monoRepoPath = path.resolve(__dirname, '..', '..', 'ui');
  if (fs.existsSync(monoRepoPath)) {
    return monoRepoPath;
  }

  try {
    return path.dirname(require.resolve('rakit-ui/package.json', { paths: [process.cwd()] }));
  } catch {
    throw new Error(
      'Package rakit-ui tidak ditemukan. Install dulu dengan: npm install rakit-ui'
    );
  }
}

export function getRegistryDir(): string {
  return path.join(getSourceDir(), 'registry');
}
