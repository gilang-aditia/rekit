import { H2 } from '@/components/DocsHeading';
import { Popover, PopoverContent, PopoverTrigger, Button } from '@rakit-ui/library';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function PopoverPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Popover</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Menampilkan konten kaya di dalam sebuah portal, yang dipicu oleh sebuah tombol.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add popover" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Buka popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensi</h4>
            <p className="text-sm text-muted-foreground">
              Tetapkan dimensi untuk lapisan ini.
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}`}
        >
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Buka popover</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Dimensi</h4>
                  <p className="text-sm text-muted-foreground">
                    Tetapkan dimensi untuk lapisan ini.
                  </p>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </ComponentPreview>
      </div>
    </>
  );
}
