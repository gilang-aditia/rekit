import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import ora from 'ora';
import prompts from 'prompts';
import { getSourceDir } from '../registry.js';
import { installDeps } from '../utils/package-manager.js';

const DEFAULT_CONFIG = {
  $schema: 'https://rakit-ui.dev/schema.json',
  tsx: true,
  tailwind: {
    css: 'src/styles.css',
    baseColor: 'neutral',
    cssVariables: true,
  },
  iconLibrary: 'lucide',
  aliases: {
    components: '@/components',
    utils: '@/lib/utils',
    ui: '@/components/ui',
    lib: '@/lib',
  },
};

export async function initCommand(options: { yes: boolean; cwd: string }) {
  const cwd = path.resolve(options.cwd);

  console.log('');
  console.log(chalk.bold('🔧 Inisialisasi Rakit UI...'));
  console.log('');

  const configPath = path.join(cwd, 'components.json');
  if (fs.existsSync(configPath) && !options.yes) {
    const { overwrite } = await prompts({
      type: 'confirm',
      name: 'overwrite',
      message: 'File components.json sudah ada. Overwrite?',
      initial: false,
    });
    if (!overwrite) {
      console.log(chalk.yellow('Dibatalkan.'));
      return;
    }
  }

  const spinner = ora('Membuat konfigurasi...').start();

  try {
    await fs.writeJSON(configPath, DEFAULT_CONFIG, { spaces: 2 });
    spinner.succeed('components.json dibuat.');

    const utilsDir = path.join(cwd, 'src', 'lib');
    const utilsPath = path.join(utilsDir, 'utils.ts');
    if (!fs.existsSync(utilsPath)) {
      await fs.ensureDir(utilsDir);
      await fs.writeFile(
        utilsPath,
        `import { clsx, type ClassValue } from 'clsx';\nimport { twMerge } from 'tailwind-merge';\n\nexport function cn(...inputs: ClassValue[]) {\n  return twMerge(clsx(inputs));\n}\n`
      );
      console.log(chalk.green('  ✔ src/lib/utils.ts dibuat.'));
    } else {
      console.log(chalk.dim('  ℹ src/lib/utils.ts sudah ada, skip.'));
    }

    const uiDir = path.join(cwd, 'src', 'components', 'ui');
    await fs.ensureDir(uiDir);
    console.log(chalk.green('  ✔ src/components/ui/ directory dibuat.'));

    // CSS disalin langsung dari library agar token dan versi Tailwind-nya
    // selalu sama dengan komponen yang akan ditambahkan.
    const cssPath = path.join(cwd, 'src', 'styles.css');
    if (!fs.existsSync(cssPath)) {
      await fs.ensureDir(path.dirname(cssPath));
      await fs.copyFile(path.join(getSourceDir(), 'src', 'styles.css'), cssPath);
      console.log(chalk.green('  ✔ src/styles.css dibuat.'));
    } else {
      console.log(chalk.dim('  ℹ src/styles.css sudah ada, skip.'));
    }

    // styles.css meng-import "tw-animate-css". Tanpa paketnya terpasang, Tailwind v4
    // gagal me-resolve import itu dan SELURUH CSS tidak ter-compile — komponen
    // tampil tanpa style sama sekali. 12 komponen memakai animate-in/animate-out.
    const animSpinner = ora('Menginstall tw-animate-css...').start();
    try {
      await installDeps(cwd, ['tw-animate-css']);
      animSpinner.succeed('tw-animate-css terinstall.');
    } catch {
      animSpinner.fail('Gagal install tw-animate-css.');
      console.log(chalk.yellow('  Install secara manual: tw-animate-css'));
    }

    console.log('');
    console.log(chalk.green.bold('✅ Rakit UI berhasil diinisialisasi!'));
    console.log('');
    console.log(
      chalk.yellow('Komponen Rakit UI membutuhkan Tailwind CSS v4.') +
        ' Kalau belum terpasang:'
    );
    console.log(chalk.cyan('  npm install -D tailwindcss@^4 @tailwindcss/vite@^4'));
    console.log('');
    console.log('Daftarkan plugin-nya di vite.config.ts:');
    console.log(chalk.dim("  import tailwindcss from '@tailwindcss/vite'"));
    console.log(chalk.dim('  plugins: [react(), tailwindcss()]'));
    console.log('');
    console.log('Lalu tambahkan komponen:');
    console.log(chalk.cyan('  npx @moonblanck/rakit-ui add button'));
    console.log('');
  } catch (error) {
    spinner.fail('Gagal inisialisasi.');
    console.error(error);
    process.exit(1);
  }
}
