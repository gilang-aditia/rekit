import { H2 } from '@/components/DocsHeading';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@rakit-ui/library';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function ResizablePage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Resizable</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Panel yang bisa diubah ukurannya dengan drag.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add resizable" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export function ResizableDemo() {
  return (
    <ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-50 items-center justify-center p-6">
          <span className="font-semibold">Satu</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Dua</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Tiga</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`}
        >
          <ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border">
            <ResizablePanel defaultSize={50}>
              <div className="flex h-50 items-center justify-center p-6">
                <span className="font-semibold">Satu</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
              <ResizablePanelGroup direction="vertical">
                <ResizablePanel defaultSize={25}>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Dua</span>
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={75}>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Tiga</span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ComponentPreview>
      </div>
    </>
  );
}
