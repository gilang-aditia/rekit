import { H2 } from '@/components/DocsHeading';
import { Toggle } from 'rakit-ui';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function TogglePage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Toggle</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Tombol dua keadaan (aktif/nonaktif).
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add toggle" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import { Toggle } from "@/components/ui/toggle"

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle italic">
      <b>B</b>
    </Toggle>
  )
}`}
        >
          <div className="flex gap-2">
            <Toggle aria-label="Toggle bold">
              <b>B</b>
            </Toggle>
            <Toggle aria-label="Toggle italic">
              <i>I</i>
            </Toggle>
            <Toggle aria-label="Toggle underline">
              <u>U</u>
            </Toggle>
          </div>
        </ComponentPreview>
      </div>
    </>
  );
}
