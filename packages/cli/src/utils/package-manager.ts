import fs from 'fs-extra';
import path from 'path';
import { execa } from 'execa';

export type PackageManager = 'pnpm' | 'yarn' | 'bun' | 'npm';

export function detectPackageManager(cwd: string): PackageManager {
  if (fs.existsSync(path.join(cwd, 'pnpm-lock.yaml'))) return 'pnpm';
  if (fs.existsSync(path.join(cwd, 'yarn.lock'))) return 'yarn';
  if (fs.existsSync(path.join(cwd, 'bun.lockb'))) return 'bun';
  return 'npm';
}

/**
 * Install dependency memakai package manager yang dipakai project.
 * npm memakai `install`, sisanya memakai `add`.
 */
export async function installDeps(cwd: string, deps: string[]): Promise<void> {
  if (deps.length === 0) return;
  const pm = detectPackageManager(cwd);
  await execa(pm, [pm === 'npm' ? 'install' : 'add', ...deps], { cwd });
}
