/**
 * Membangun indeks pencarian dari source halaman docs.
 *
 * Dijalankan saat predev/prebuild, bukan di browser: memuat source halaman lewat
 * import.meta.glob('?raw') akan ikut membundel ~100 file .tsx ke dalam bundle
 * klien. Di sini kita hanya mengekspor teksnya, jadi hasilnya kecil.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = path.join(root, 'src');

/** Bersihkan satu potongan JSX jadi teks biasa. */
function toText(chunk) {
  let s = chunk;
  s = s.replace(/className=(?:"[^"]*"|'[^']*'|\{[^}]*\})/g, ' ');
  // Ekspresi JSX bisa bersarang, jadi kupas berulang dari yang terdalam.
  for (let i = 0; i < 6; i++) s = s.replace(/\{[^{}]*\}/g, ' ');
  s = s.replace(/<[^>]*>/g, ' ');
  // Sebuah file bisa memuat beberapa komponen; deklarasi di antara blok JSX-nya
  // ikut terbawa dan harus dirontokkan juga.
  s = s.replace(/\b(?:export\s+default\s+)?function\s+\w+\s*\([^)]*\)/g, ' ');
  s = s.replace(/\b(?:export|const|let|var|return|import)\b/g, ' ');
  // Sisa tanda baca struktural yang tidak membawa makna untuk pencarian.
  s = s.replace(/[(){}[\];]+/g, ' ');
  s = s
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"');
  return s.replace(/\s+/g, ' ').trim();
}

function extractPage(source) {
  // Ambil judul dan heading sebelum markup dirontokkan. Halaman docs memakai
  // <h1>, halaman design memakai <SpecHeader title="..." lead="..." />.
  const h1 = source.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  const specTitle = source.match(/<SpecHeader[^>]*?\btitle="([^"]*)"/s);
  const specLead = source.match(/<SpecHeader[^>]*?\blead="([^"]*)"/s);
  const headings = [
    ...[...source.matchAll(/<H2>([\s\S]*?)<\/H2>/g)],
    ...[...source.matchAll(/<H3>([\s\S]*?)<\/H3>/g)],
  ]
    .map((m) => toText(m[1]))
    .filter(Boolean);

  // Hanya bagian JSX yang dipakai; kode di atas `return (` bukan isi halaman.
  const jsxStart = source.indexOf('return (');
  let body = jsxStart === -1 ? source : source.slice(jsxStart + 'return ('.length);
  body = body.replace(/^import[\s\S]*?from\s+['"][^'"]+['"];?\s*$/gm, ' ');
  // Contoh kode dibuang: isinya markup dan class, bukan kalimat yang dicari orang.
  body = body.replace(/code=\{`[\s\S]*?`\}/g, ' ');
  body = body.replace(/items=\{\{[\s\S]*?\}\}/g, ' ');

  const lead = specLead ? specLead[1] : '';
  return {
    title: h1 ? toText(h1[1]) : specTitle ? specTitle[1].trim() : '',
    headings: [...new Set(headings)],
    text: `${lead} ${toText(body)}`.trim().slice(0, 1200),
  };
}

// Petakan href -> file halaman dengan membaca router, bukan menebak dari nama file.
// Konvensi nama tidak konsisten (InputOTPPage, ComponentsIndex, design/Index).
const router = fs.readFileSync(path.join(srcDir, 'router.tsx'), 'utf8');

const imports = new Map();
for (const m of router.matchAll(/import\s+(\w+)\s+from\s+'(\.\/pages\/[^']+)'/g)) {
  imports.set(m[1], m[2]);
}

// Route docs diturunkan dari sidebar, jadi halaman yang entri nav-nya dicabut
// tidak punya route lagi dan akan jatuh ke ComingSoon. Jangan tawarkan lewat
// pencarian — daftar ini ikut menyesuaikan setiap kali nav berubah.
const nav = fs.readFileSync(path.join(srcDir, 'lib', 'docs-nav.ts'), 'utf8');
const routable = new Set(
  [...nav.matchAll(/href:\s*['"](\/[^'"]+)['"]/g)].map((m) => m[1])
);

const entries = [];
const seen = new Set();
for (const m of router.matchAll(/'([^']+)':\s*<(\w+)\s*\/>/g)) {
  const [, href, component] = m;
  const rel = imports.get(component);
  if (!rel || seen.has(href)) continue;
  seen.add(href);

  const file = path.join(srcDir, rel.replace(/^\.\//, '') + '.tsx');
  if (!fs.existsSync(file)) {
    console.warn(`  ! lewati ${href}: ${path.relative(root, file)} tidak ada`);
    continue;
  }
  const page = extractPage(fs.readFileSync(file, 'utf8'));
  if (!page.title && !page.text) continue;
  if (!routable.has(href)) {
    console.warn(`  ! lewati ${href}: tidak ada entri nav, jadi tidak punya route`);
    continue;
  }
  entries.push({ href, ...page });
}

entries.sort((a, b) => a.href.localeCompare(b.href));
const out = path.join(srcDir, 'lib', 'search-index.json');
fs.writeFileSync(out, JSON.stringify(entries, null, 0));

const kb = (fs.statSync(out).size / 1024).toFixed(1);
console.log(`✓ indeks pencarian: ${entries.length} halaman, ${kb} KB`);
