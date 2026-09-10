import { H2 } from '@/components/DocsHeading';
import { AspectRatio } from 'rakit-ui';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function AspectRatioPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Aspect Ratio</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Menampilkan konten dalam rasio aspek yang diinginkan.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add aspect-ratio" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import { AspectRatio } from "@/components/ui/aspect-ratio"

export function AspectRatioDemo() {
  return (
    <div className="w-112.5">
      <AspectRatio ratio={16 / 9}>
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Foto oleh Drew Beamer"
          className="h-full w-full rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  )
}`}
        >
          <div className="w-112.5">
            <AspectRatio ratio={16 / 9}>
              <img
                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                alt="Foto oleh Drew Beamer"
                className="h-full w-full rounded-md object-cover"
              />
            </AspectRatio>
          </div>
        </ComponentPreview>
      </div>
    </>
  );
}
