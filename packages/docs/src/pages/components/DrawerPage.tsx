import { H2 } from '@/components/DocsHeading';
import { Button } from '@rakit-ui/library';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@rakit-ui/library';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function DrawerPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Drawer</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Panel yang meluncur dari bawah layar.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add drawer" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Buka Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Edit profil</DrawerTitle>
          <DrawerDescription>Ubah pengaturan profil kamu di sini.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p className="text-sm text-muted-foreground">
            Konten drawer di sini.
          </p>
        </div>
        <DrawerFooter>
          <Button>Simpan</Button>
          <DrawerClose asChild>
            <Button variant="outline">Batal</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}`}
        >
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Buka Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Edit profil</DrawerTitle>
                <DrawerDescription>Ubah pengaturan profil kamu di sini.</DrawerDescription>
              </DrawerHeader>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">
                  Konten drawer di sini.
                </p>
              </div>
              <DrawerFooter>
                <Button>Simpan</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Batal</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </ComponentPreview>
      </div>
    </>
  );
}
