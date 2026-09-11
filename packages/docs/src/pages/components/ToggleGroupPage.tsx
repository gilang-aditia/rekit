import { H2 } from '@/components/DocsHeading';
import { ToggleGroup, ToggleGroupItem } from '@rakit-ui/library';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function ToggleGroupPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Toggle Group</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Grup tombol toggle yang saling terkait.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add toggle-group" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export function ToggleGroupDemo() {
  return (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <b>B</b>
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <i>I</i>
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <u>U</u>
      </ToggleGroupItem>
    </ToggleGroup>
  )
}`}
        >
          <ToggleGroup type="multiple">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <b>B</b>
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <i>I</i>
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
              <u>U</u>
            </ToggleGroupItem>
          </ToggleGroup>
        </ComponentPreview>
      </div>
    </>
  );
}
