import { H2 } from '@/components/DocsHeading';
import { Separator } from 'rakit-ui';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function SeparatorPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Separator</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Pemisah visual (garis).
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add separator" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import { Separator } from "@/components/ui/separator"

export function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Rakit UI</h4>
        <p className="text-sm text-muted-foreground">
          Sistem desain modular sumber terbuka.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Dokumentasi</div>
        <Separator orientation="vertical" />
        <div>Kode Sumber</div>
      </div>
    </div>
  )
}`}
        >
          <div>
            <div className="space-y-1">
              <h4 className="text-sm font-medium leading-none">Rakit UI</h4>
              <p className="text-sm text-muted-foreground">
                Sistem desain modular sumber terbuka.
              </p>
            </div>
            <Separator className="my-4" />
            <div className="flex h-5 items-center space-x-4 text-sm">
              <div>Blog</div>
              <Separator orientation="vertical" />
              <div>Dokumentasi</div>
              <Separator orientation="vertical" />
              <div>Kode Sumber</div>
            </div>
          </div>
        </ComponentPreview>
      </div>
    </>
  );
}
