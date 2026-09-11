import { H2 } from '@/components/DocsHeading';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Button
} from '@rakit-ui/library';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function SheetPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Sheet</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Memperluas tepi layar secara vertikal atau horizontal untuk menampilkan konten baru (Sidebar/Drawer).
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add sheet" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Buka Profil</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Profil</SheetTitle>
          <SheetDescription>
            Buat perubahan pada profil Anda di sini. Klik simpan saat Anda selesai.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}`}
        >
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Buka Profil</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit Profil</SheetTitle>
                <SheetDescription>
                  Buat perubahan pada profil Anda di sini. Klik simpan saat Anda selesai.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </ComponentPreview>
      </div>
    </>
  );
}
