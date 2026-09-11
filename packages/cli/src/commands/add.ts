import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import ora from 'ora';
import { getRegistryDir, getSourceDir } from '../registry.js';
import { installDeps } from '../utils/package-manager.js';

interface RegistryItem {
  name: string;
  type: string;
  description: string;
  files: string[];
  dependencies: string[];
  devDependencies: string[];
  registryDependencies: string[];
}

async function resolveRegistryDeps(
  componentName: string,
  registryDir: string,
  resolved: Set<string> = new Set()
): Promise<RegistryItem[]> {
  if (resolved.has(componentName)) return [];
  resolved.add(componentName);

  const registryPath = path.join(registryDir, `${componentName}.json`);
  if (!fs.existsSync(registryPath)) {
    throw new Error(
      `Komponen "${componentName}" tidak ditemukan di registry.\nJalankan 'npx @moonblanck/rakit-ui add --help' untuk melihat komponen yang tersedia.`
    );
  }

  const registry: RegistryItem = await fs.readJSON(registryPath);
  const items: RegistryItem[] = [registry];

  for (const dep of registry.registryDependencies) {
    const depItems = await resolveRegistryDeps(dep, registryDir, resolved);
    items.push(...depItems);
  }

  return items;
}

export async function addCommand(
  components: string[],
  options: { cwd: string; overwrite: boolean }
) {
  const cwd = path.resolve(options.cwd);

  console.log('');
  console.log(chalk.bold('📦 Menambahkan komponen Rakit UI...'));
  console.log('');

  const registryDir = getRegistryDir();
  const sourceDir = getSourceDir();

  // List available components if none specified
  if (components.length === 0) {
    const files = await fs.readdir(registryDir);
    const available = files
      .filter((f) => f.endsWith('.json'))
      .map((f) => f.replace('.json', ''));
    console.log(chalk.bold('Komponen yang tersedia:'));
    for (const c of available) {
      const reg: RegistryItem = await fs.readJSON(path.join(registryDir, `${c}.json`));
      console.log(`  ${chalk.cyan(c)} — ${reg.description}`);
    }
    return;
  }

  // Resolve all components and their dependencies
  const allItems: RegistryItem[] = [];
  const allDeps = new Set<string>();
  const resolved = new Set<string>();

  for (const name of components) {
    try {
      const items = await resolveRegistryDeps(name, registryDir, resolved);
      allItems.push(...items);
    } catch (error: any) {
      console.error(chalk.red(`✖ ${error.message}`));
      process.exit(1);
    }
  }

  // Copy files
  const spinner = ora('Menyalin file komponen...').start();
  const copiedFiles: string[] = [];

  for (const item of allItems) {
    for (const file of item.files) {
      const srcPath = path.join(sourceDir, file);
      const destPath = path.join(cwd, file);

      if (fs.existsSync(destPath) && !options.overwrite) {
        console.log(chalk.dim(`  ℹ ${file} sudah ada, skip. (gunakan --overwrite)`));
        continue;
      }

      await fs.ensureDir(path.dirname(destPath));
      await fs.copyFile(srcPath, destPath);
      copiedFiles.push(file);
    }

    // Collect dependencies
    for (const dep of item.dependencies) {
      allDeps.add(dep);
    }
  }

  spinner.succeed(`${copiedFiles.length} file disalin.`);

  // Show copied files
  for (const f of copiedFiles) {
    console.log(chalk.green(`  ✔ ${f}`));
  }

  // Install dependencies
  if (allDeps.size > 0) {
    console.log('');
    const depSpinner = ora('Menginstall dependencies...').start();

    try {
      await installDeps(cwd, Array.from(allDeps));
      depSpinner.succeed('Dependencies terinstall.');
    } catch (error) {
      depSpinner.fail('Gagal install dependencies.');
      console.log(
        chalk.yellow(
          `  Install secara manual: ${Array.from(allDeps).join(' ')}`
        )
      );
    }
  }

  console.log('');
  console.log(chalk.green.bold('✅ Komponen berhasil ditambahkan!'));
  console.log('');
  console.log('Import komponen di file kamu:');
  for (const name of components) {
    const pascalName = name
      .split('-')
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join('');
    console.log(chalk.cyan(`  import { ${pascalName} } from '@/components/ui/${name}';`));
  }
  console.log('');
}
