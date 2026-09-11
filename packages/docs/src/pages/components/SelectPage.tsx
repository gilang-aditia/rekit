import { H2 } from '@/components/DocsHeading';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@rakit-ui/library';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function SelectPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Select</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Menampilkan daftar opsi bagi pengguna untuk memilih, yang dipicu oleh sebuah tombol.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add select" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  } from "@/components/ui/select"

  export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-45">
        <SelectValue placeholder="Pilih framework" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Next.js</SelectItem>
        <SelectItem value="dark">Vite</SelectItem>
        <SelectItem value="system">Remix</SelectItem>
      </SelectContent>
    </Select>
  )
  }`}
        >
          <Select>
            <SelectTrigger className="w-45">
              <SelectValue placeholder="Pilih framework" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Next.js</SelectItem>
              <SelectItem value="dark">Vite</SelectItem>
              <SelectItem value="system">Remix</SelectItem>
            </SelectContent>
          </Select>
        </ComponentPreview>
      </div>
    </>
  );
}
