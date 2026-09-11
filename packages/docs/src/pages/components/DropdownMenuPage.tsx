import { H2 } from '@/components/DocsHeading';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Button
} from '@rakit-ui/library';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function DropdownMenuPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Dropdown Menu</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Menampilkan menu bagi pengguna—seperti aksi atau pilihan—yang muncul karena klik tombol.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add dropdown-menu" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Buka</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profil</DropdownMenuItem>
        <DropdownMenuItem>Tagihan</DropdownMenuItem>
        <DropdownMenuItem>Tim</DropdownMenuItem>
        <DropdownMenuItem>Berlangganan</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Buka</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profil</DropdownMenuItem>
              <DropdownMenuItem>Tagihan</DropdownMenuItem>
              <DropdownMenuItem>Tim</DropdownMenuItem>
              <DropdownMenuItem>Berlangganan</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ComponentPreview>
      </div>
    </>
  );
}
