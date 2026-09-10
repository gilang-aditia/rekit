import { H2 } from '@/components/DocsHeading';
import { Typography } from 'rakit-ui';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function TypographyPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Typography</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Skala tipografi konsisten untuk judul, paragraf, kutipan, dan kode.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add typography" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import { Typography } from "@/components/ui/typography"

export function TypographyDemo() {
  return (
    <div>
      <Typography variant="h3">Merakit antarmuka</Typography>
      <Typography>
        Setiap komponen bisa disalin langsung ke dalam project kamu.
      </Typography>
      <Typography variant="blockquote">
        Konsistensi lahir dari batasan yang disepakati.
      </Typography>
      <Typography variant="muted">Diperbarui hari ini</Typography>
    </div>
  )
}`}
        >
          <div className="w-full text-left">
            <Typography variant="h3">Merakit antarmuka</Typography>
            <Typography>
              Setiap komponen bisa disalin langsung ke dalam project kamu.
            </Typography>
            <Typography variant="blockquote">
              Konsistensi lahir dari batasan yang disepakati.
            </Typography>
            <Typography variant="muted" className="mt-4">
              Diperbarui hari ini
            </Typography>
          </div>
        </ComponentPreview>
      </div>
    </>
  );
}
