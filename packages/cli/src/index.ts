#!/usr/bin/env node

import { createRequire } from 'module';
import { Command } from 'commander';
import { initCommand } from './commands/init.js';
import { addCommand } from './commands/add.js';

const require = createRequire(import.meta.url);
// package.json ada satu level di atas dist/index.js hasil bundle tsup.
const { version } = require('../package.json') as { version: string };

const program = new Command();

program
  .name('rakit-ui')
  .description('CLI untuk menambahkan komponen Rakit UI ke project kamu.')
  .version(version);

program
  .command('init')
  .description('Inisialisasi Rakit UI di project kamu.')
  .option('-y, --yes', 'Skip konfirmasi', false)
  .option('-c, --cwd <cwd>', 'Working directory', process.cwd())
  .action(initCommand);

program
  .command('add')
  .description('Tambahkan komponen ke project kamu.')
  .argument('<components...>', 'Nama komponen yang ingin ditambahkan')
  .option('-c, --cwd <cwd>', 'Working directory', process.cwd())
  .option('-o, --overwrite', 'Overwrite file yang sudah ada', false)
  .action(addCommand);

program.parse();
