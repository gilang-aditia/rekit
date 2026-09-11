import { H2 } from '@/components/DocsHeading';
import { CodeBlock } from '../components/CodeBlock';

const tokens = [
  ['background / foreground', 'Warna dasar halaman dan teksnya.'],
  ['card / card-foreground', 'Permukaan kartu dan teks di atasnya.'],
  ['popover / popover-foreground', 'Permukaan melayang: dropdown, tooltip, dialog.'],
  ['primary / primary-foreground', 'Aksi utama, misalnya tombol default.'],
  ['secondary / secondary-foreground', 'Aksi sekunder yang lebih kalem.'],
  ['muted / muted-foreground', 'Latar dan teks yang sengaja diredam.'],
  ['accent / accent-foreground', 'Highlight, hover state, item aktif.'],
  ['destructive', 'Aksi merusak seperti hapus.'],
  ['border / input / ring', 'Garis tepi, field input, dan focus ring.'],
  ['sidebar-*', 'Varian token khusus area sidebar.'],
  ['chart-1 … chart-5', 'Deret warna untuk visualisasi data.'],
];

export default function Theming() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Theming</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Mengatur tampilan komponen lewat CSS variables.
        </p>
      </div>

      <H2>Cara kerjanya</H2>
      <p className="text-muted-foreground">
        Semua warna didefinisikan sebagai CSS variable di{' '}
        <code className="rounded bg-code px-1 py-0.5 font-mono text-[0.85em]">styles.css</code>, lalu
        dipetakan ke utility Tailwind lewat blok{' '}
        <code className="rounded bg-code px-1 py-0.5 font-mono text-[0.85em]">@theme inline</code>. Jadi{' '}
        <code className="rounded bg-code px-1 py-0.5 font-mono text-[0.85em]">bg-background</code> selalu
        mengikuti nilai <code className="rounded bg-code px-1 py-0.5 font-mono text-[0.85em]">--background</code>{' '}
        yang berlaku.
      </p>
      <CodeBlock
        language="css"
        code={`@theme inline {\n  --color-background: var(--background);\n  --color-foreground: var(--foreground);\n}\n\n:root {\n  --background: #ffffff;\n  --foreground: #000000;\n}`}
      />

      <H2>Dark mode</H2>
      <p className="text-muted-foreground">
        Mode gelap cukup menimpa nilai variabel yang sama di dalam class{' '}
        <code className="rounded bg-code px-1 py-0.5 font-mono text-[0.85em]">.dark</code>. Tidak ada
        komponen yang perlu diubah — semuanya ikut otomatis.
      </p>
      <CodeBlock
        language="css"
        code={`.dark {\n  --background: #0a0a0a;\n  --foreground: #fafafa;\n}`}
      />

      <H2>Mengganti tema</H2>
      <p className="text-muted-foreground">
        Token tinggal di <code className="rounded bg-code px-1 py-0.5 font-mono text-[0.85em]">src/styles.css</code> milik project kamu — file itu disalin ke sana oleh <code className="rounded bg-code px-1 py-0.5 font-mono text-[0.85em]">rakit-ui init</code>. Untuk memakai warna brand sendiri, timpa variabelnya di situ.
        Nilainya bebas dalam format warna CSS apa pun — hex, <code className="rounded bg-code px-1 py-0.5 font-mono text-[0.85em]">oklch()</code>,
        atau <code className="rounded bg-code px-1 py-0.5 font-mono text-[0.85em]">hsl()</code>.
      </p>
      <CodeBlock
        language="css"
        code={`/* src/styles.css — hasil salinan \`rakit-ui init\` */\n@import "tailwindcss";\n@import "tw-animate-css";\n\n:root {\n  --primary: oklch(0.55 0.22 264);\n  --primary-foreground: #ffffff;\n  --radius: 0.5rem;\n}`}
      />

      <H2>Daftar token</H2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-left">
              <th className="py-2 pr-4 font-medium">Token</th>
              <th className="py-2 font-medium">Kegunaan</th>
            </tr>
          </thead>
          <tbody>
            {tokens.map(([name, use]) => (
              <tr key={name} className="border-b last:border-0">
                <td className="py-2 pr-4 align-top font-mono text-[0.8rem] whitespace-nowrap">{name}</td>
                <td className="py-2 align-top text-muted-foreground">{use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
