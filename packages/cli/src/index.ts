#!/usr/bin/env node

import { Command } from 'commander';
import { initCommand } from './commands/init.js';
import { addCommand } from './commands/add.js';

const program = new Command();

program
  .name('rakit-ui')
  .description('CLI untuk menambahkan komponen Rakit UI ke project kamu.')
  .version('0.0.1');

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
