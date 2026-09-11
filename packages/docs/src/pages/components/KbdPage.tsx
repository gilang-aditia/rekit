import { H2 } from '@/components/DocsHeading';
import { Kbd, KbdGroup } from '@rakit-ui/library';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function KbdPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Kbd</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Menampilkan tombol papan ketik di dalam teks.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add kbd" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import { Kbd, KbdGroup } from "@/components/ui/kbd"

export function KbdDemo() {
  return (
    <KbdGroup>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  )
}`}
        >
          <div className="flex flex-col items-center gap-4">
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
            </KbdGroup>
            <p className="text-sm text-muted-foreground">
              Tekan <Kbd>Ctrl</Kbd> + <Kbd>B</Kbd> untuk membuka sidebar.
            </p>
          </div>
        </ComponentPreview>
      </div>
    </>
  );
}
