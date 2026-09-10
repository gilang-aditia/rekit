import { H2 } from '@/components/DocsHeading';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
} from 'rakit-ui';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function ContextMenuPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Context Menu</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Menu konteks yang muncul saat klik kanan.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add context-menu" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSeparator,
  ContextMenuShortcut,
} from "@/components/ui/context-menu"

export function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-37.5 w-75 items-center justify-center rounded-md border border-dashed text-sm">
        Klik kanan di sini
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>Kembali<ContextMenuShortcut>⌘[</ContextMenuShortcut></ContextMenuItem>
        <ContextMenuItem>Maju<ContextMenuShortcut>⌘]</ContextMenuShortcut></ContextMenuItem>
        <ContextMenuItem>Muat Ulang<ContextMenuShortcut>⌘R</ContextMenuShortcut></ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Simpan Halaman Sebagai...<ContextMenuShortcut>⌘S</ContextMenuShortcut></ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}`}
        >
          <ContextMenu>
            <ContextMenuTrigger className="flex h-37.5 w-75 items-center justify-center rounded-md border border-dashed text-sm">
              Klik kanan di sini
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuItem>Kembali<ContextMenuShortcut>⌘[</ContextMenuShortcut></ContextMenuItem>
              <ContextMenuItem>Maju<ContextMenuShortcut>⌘]</ContextMenuShortcut></ContextMenuItem>
              <ContextMenuItem>Muat Ulang<ContextMenuShortcut>⌘R</ContextMenuShortcut></ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>Simpan Halaman Sebagai...<ContextMenuShortcut>⌘S</ContextMenuShortcut></ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </ComponentPreview>
      </div>
    </>
  );
}
