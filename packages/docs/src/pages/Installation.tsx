import { H2, H3 } from '@/components/DocsHeading';
import { CodeBlock } from '../components/CodeBlock';
import { InstallTabs } from '../components/InstallTabs';

export default function Installation() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Installation</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Panduan memulai untuk menggunakan Rakit UI di project kamu.
        </p>
      </div>

      <H2>Prasyarat</H2>
      <p className="text-muted-foreground">
        Komponen Rakit UI ditulis dengan sintaks Tailwind CSS v4 — misalnya{' '}
        <code className="rounded bg-code px-1 py-0.5 font-mono text-[0.85em]">p-(--card-spacing)</code>{' '}
        dan <code className="rounded bg-code px-1 py-0.5 font-mono text-[0.85em]">ring-3</code>. Di Tailwind v3
        class seperti ini tidak akan ter-generate, jadi pastikan project kamu memakai v4.
      </p>
      <InstallTabs
        items={{
          npm: 'npm install -D tailwindcss@^4 @tailwindcss/vite@^4',
          pnpm: 'pnpm add -D tailwindcss@^4 @tailwindcss/vite@^4',
          yarn: 'yarn add -D tailwindcss@^4 @tailwindcss/vite@^4',
          bun: 'bun add -D tailwindcss@^4 @tailwindcss/vite@^4',
        }}
      />
      <p className="text-muted-foreground">
        Tailwind v4 tidak lagi memakai <code className="rounded bg-code px-1 py-0.5 font-mono text-[0.85em]">tailwind.config.js</code>{' '}
        maupun PostCSS. Daftarkan plugin-nya di Vite:
      </p>
      <CodeBlock
        code={`import { defineConfig } from 'vite'\nimport react from '@vitejs/plugin-react'\nimport tailwindcss from '@tailwindcss/vite'\n\nexport default defineConfig({\n  plugins: [react(), tailwindcss()],\n})`}
      />

      <H2>Instalasi</H2>
      <p className="text-muted-foreground">
        Rakit UI bukan package npm yang kamu install lalu import komponennya begitu saja. Konsepnya
        adalah menyalin source code langsung ke project kamu lewat CLI, sehingga kamu punya kendali
        penuh atas kode komponen — sama seperti shadcn/ui.
      </p>

      <H3>1. Inisialisasi project</H3>
      <p className="text-muted-foreground">
        Perintah <code className="rounded bg-code px-1 py-0.5 font-mono text-[0.85em]">init</code> membuat{' '}
        <code className="rounded bg-code px-1 py-0.5 font-mono text-[0.85em]">components.json</code>, utility{' '}
        <code className="rounded bg-code px-1 py-0.5 font-mono text-[0.85em]">cn</code>, dan menyalin{' '}
        <code className="rounded bg-code px-1 py-0.5 font-mono text-[0.85em]">styles.css</code> berisi seluruh
        token tema langsung dari library.
      </p>
      <InstallTabs cliCommand="init" />

      <H3>2. Import CSS-nya</H3>
      <p className="text-muted-foreground">
        Panggil file CSS tadi dari entry point aplikasi kamu.
      </p>
      <CodeBlock code={`import './styles.css'`} />

      <H3>3. Tambahkan komponen</H3>
      <p className="text-muted-foreground">
        CLI menyalin kode komponen ke folder lokal kamu beserta dependency yang diperlukan.
      </p>
      <InstallTabs cliCommand="add button card" />

      <H3>4. Gunakan komponen</H3>
      <p className="text-muted-foreground">
        Setelah disalin, kodenya milik kamu — bebas diubah sesuai kebutuhan.
      </p>
      <CodeBlock
        code={`import { Button } from "@/components/ui/button"\n\nexport default function App() {\n  return <Button>Click me</Button>\n}`}
      />
    </>
  );
}
