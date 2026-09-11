import { H2 } from '@/components/DocsHeading';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@rakit-ui/library';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function MenubarPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Menubar</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Menu bar horizontal bergaya desktop.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add menubar" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function MenubarDemo() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Tab Baru<MenubarShortcut>⌘T</MenubarShortcut></MenubarItem>
          <MenubarItem>Jendela Baru<MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Bagikan</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Cetak<MenubarShortcut>⌘P</MenubarShortcut></MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Undo<MenubarShortcut>⌘Z</MenubarShortcut></MenubarItem>
          <MenubarItem>Redo<MenubarShortcut>⇧⌘Z</MenubarShortcut></MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Potong</MenubarItem>
          <MenubarItem>Salin</MenubarItem>
          <MenubarItem>Tempel</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Tampilan</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Muat Ulang<MenubarShortcut>⌘R</MenubarShortcut></MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Toggle Layar Penuh</MenubarItem>
          <MenubarItem>Sembunyikan Sidebar</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}`}
        >
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Tab Baru<MenubarShortcut>⌘T</MenubarShortcut></MenubarItem>
                <MenubarItem>Jendela Baru<MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Bagikan</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Cetak<MenubarShortcut>⌘P</MenubarShortcut></MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Undo<MenubarShortcut>⌘Z</MenubarShortcut></MenubarItem>
                <MenubarItem>Redo<MenubarShortcut>⇧⌘Z</MenubarShortcut></MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Potong</MenubarItem>
                <MenubarItem>Salin</MenubarItem>
                <MenubarItem>Tempel</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Tampilan</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Muat Ulang<MenubarShortcut>⌘R</MenubarShortcut></MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Toggle Layar Penuh</MenubarItem>
                <MenubarItem>Sembunyikan Sidebar</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </ComponentPreview>
      </div>
    </>
  );
}
