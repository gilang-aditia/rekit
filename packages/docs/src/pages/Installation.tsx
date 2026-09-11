import { H2, H3 } from '@/components/DocsHeading';
import { CodeBlock } from '../components/CodeBlock';
import { InstallTabs } from '../components/InstallTabs';

export default function Installation() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Installation</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Panduan langkah demi langkah menggunakan Rakit UI di project kamu (sangat direkomendasikan untuk pemula).
        </p>
      </div>

      <H2>Cara Install Rakit UI</H2>
      <p className="text-muted-foreground">
        Rakit UI didesain khusus untuk Tailwind CSS v4. Berikut adalah cara paling mudah mengaturnya dari nol menggunakan Vite & React.
      </p>

      <H3>1. Buat Project Baru (Opsional)</H3>
      <p className="text-muted-foreground">
        Lewati langkah ini jika kamu sudah punya project React (Vite). Jika belum, jalankan perintah ini di terminal:
      </p>
      <InstallTabs
        items={{
          npm: 'npm create vite@latest my-app -- --template react-ts\ncd my-app\nnpm install',
          pnpm: 'pnpm create vite@latest my-app --template react-ts\ncd my-app\npnpm install',
          yarn: 'yarn create vite my-app --template react-ts\ncd my-app\nyarn install',
          bun: 'bun create vite my-app --template react-ts\ncd my-app\nbun install',
        }}
      />

      <H3>2. Install Tailwind CSS v4 & Path Alias</H3>
      <p className="text-muted-foreground">
        Rakit UI butuh Tailwind CSS v4 dan pengaturan alias <code className="rounded bg-code px-1 py-0.5 font-mono text-[0.85em]">@/</code> untuk import file. Install library berikut:
      </p>
      <InstallTabs
        items={{
          npm: 'npm install -D tailwindcss@^4 @tailwindcss/vite@^4 @types/node',
          pnpm: 'pnpm add -D tailwindcss@^4 @tailwindcss/vite@^4 @types/node',
          yarn: 'yarn add -D tailwindcss@^4 @tailwindcss/vite@^4 @types/node',
          bun: 'bun add -D tailwindcss@^4 @tailwindcss/vite@^4 @types/node',
        }}
      />

      <H3>3. Ubah File Konfigurasi Vite & TypeScript</H3>
      <p className="text-muted-foreground">
        Agar Vite mengerti Tailwind v4 dan import dengan awalan <code className="rounded bg-code px-1 py-0.5 font-mono text-[0.85em]">@/</code>, buka file <strong className="text-foreground">vite.config.ts</strong> di folder project kamu, lalu ganti isinya dengan ini:
      </p>
      <CodeBlock
        code={`import path from "path"\nimport { defineConfig } from 'vite'\nimport react from '@vitejs/plugin-react'\nimport tailwindcss from '@tailwindcss/vite'\n\nexport default defineConfig({\n  plugins: [react(), tailwindcss()],\n  resolve: {\n    alias: {\n      "@": path.resolve(__dirname, "./src"),\n    },\n  },\n})`}
      />

      <p className="text-muted-foreground mt-4">
        Lalu, buka file <strong className="text-foreground">tsconfig.app.json</strong> (atau <strong className="text-foreground">tsconfig.json</strong>), tambahkan pengaturan <code className="rounded bg-code px-1 py-0.5 font-mono text-[0.85em]">baseUrl</code> dan <code className="rounded bg-code px-1 py-0.5 font-mono text-[0.85em]">paths</code> di dalam bagian <code className="rounded bg-code px-1 py-0.5 font-mono text-[0.85em]">compilerOptions</code>:
      </p>
      <CodeBlock
        language="json"
        code={`{\n  "compilerOptions": {\n    // ... pengaturan bawaan lainnya tetap biarkan\n    "baseUrl": ".",\n    "paths": {\n      "@/*": ["./src/*"]\n    }\n  }\n}`}
      />

      <H3>4. Inisialisasi Rakit UI</H3>
      <p className="text-muted-foreground">
        Jalankan perintah ini untuk membuat konfigurasi otomatis (<code className="rounded bg-code px-1 py-0.5 font-mono text-[0.85em]">components.json</code>) dan menyalin file CSS bawaan Rakit UI.
      </p>
      <InstallTabs cliCommand="init" />

      <H3>5. Import CSS ke Aplikasi</H3>
      <p className="text-muted-foreground">
        Buka file <strong className="text-foreground">src/main.tsx</strong> (atau <code className="rounded bg-code px-1 py-0.5 font-mono text-[0.85em]">src/index.tsx</code>). Hapus import css bawaan seperti <code className="rounded bg-code px-1 py-0.5 font-mono text-[0.85em]">import './index.css'</code>, dan ganti dengan:
      </p>
      <CodeBlock code={`import './styles.css'`} />

      <H3>6. Selesai! Saatnya Tambah Komponen</H3>
      <p className="text-muted-foreground">
        Kini project kamu sudah siap. Mari coba tambahkan komponen <code className="rounded bg-code px-1 py-0.5 font-mono text-[0.85em]">button</code>:
      </p>
      <InstallTabs cliCommand="add button" />
      <p className="text-muted-foreground mt-4">
        Gunakan langsung komponennya di kodemu! Karena source codenya disalin ke foldermu (<code className="rounded bg-code px-1 py-0.5 font-mono text-[0.85em]">src/components/ui/button.tsx</code>), kamu bebas memodifikasinya!
      </p>
      <CodeBlock
        code={`import { Button } from "@/components/ui/button"\n\nexport default function App() {\n  return (\n    <div className="p-8">\n      <Button>Click me</Button>\n    </div>\n  )\n}`}
      />

      <H2>Apa yang masuk ke package.json?</H2>
      <p className="text-muted-foreground">
        CLI hanya memasang apa yang benar-benar dibutuhkan komponen yang kamu tambahkan. Setelah
        mengikuti langkah di atas, bagian <code className="rounded bg-code px-1 py-0.5 font-mono text-[0.85em]">dependencies</code> kamu kira-kira seperti ini:
      </p>
      <CodeBlock
        language="json"
        code={`{\n  "dependencies": {\n    "@moonblanck/rakit-ui": "^0.2.0",\n    "class-variance-authority": "^0.7.1",\n    "clsx": "^2.1.1",\n    "tailwind-merge": "^3.6.0",\n    "tw-animate-css": "^1.4.0"\n  }\n}`}
      />
      <p className="text-muted-foreground mt-4">
        <code className="rounded bg-code px-1 py-0.5 font-mono text-[0.85em]">@moonblanck/rakit-ui</code> berisi primitive headless yang dipakai komponen.
        Paket yang sama juga menyediakan CLI-nya, jadi tidak ada paket kedua yang perlu kamu urus.
        Sisanya utilitas kecil: <code className="rounded bg-code px-1 py-0.5 font-mono text-[0.85em]">clsx</code> dan <code className="rounded bg-code px-1 py-0.5 font-mono text-[0.85em]">tailwind-merge</code> untuk fungsi <code className="rounded bg-code px-1 py-0.5 font-mono text-[0.85em]">cn()</code>,
        <code className="rounded bg-code px-1 py-0.5 font-mono text-[0.85em]">class-variance-authority</code> untuk variant, dan <code className="rounded bg-code px-1 py-0.5 font-mono text-[0.85em]">tw-animate-css</code> untuk animasi
        yang dipakai komponen seperti dialog dan dropdown.
      </p>
      <p className="text-muted-foreground mt-4">
        Komponen yang memakai ikon juga akan menarik <code className="rounded bg-code px-1 py-0.5 font-mono text-[0.85em]">lucide-react</code>, dan beberapa komponen
        lain punya kebutuhan sendiri — CLI menampilkan apa saja yang dipasang setiap kali kamu menjalankan <code className="rounded bg-code px-1 py-0.5 font-mono text-[0.85em]">add</code>.
      </p>
    </>
  );
}
