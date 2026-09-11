import { H2 } from '@/components/DocsHeading';
import { Spinner } from '@rakit-ui/library';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function SpinnerPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Spinner</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Indikator loading animasi berputar.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add spinner" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import { Spinner } from "@/components/ui/spinner"

export function SpinnerDemo() {
  return <Spinner className="h-8 w-8 text-primary" />
}`}
        >
          <div className="flex items-center justify-center p-8">
            <Spinner className="h-8 w-8 text-primary" />
          </div>
        </ComponentPreview>
      </div>
    </>
  );
}
