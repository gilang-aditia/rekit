import { H2 } from '@/components/DocsHeading';
import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@rakit-ui/library';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function TooltipPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Tooltip</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Popup informasi yang muncul saat elemen difokuskan atau disorot.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add tooltip" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Arahkan kursor</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Tambahkan ke daftar pustaka</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}`}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Arahkan kursor</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Tambahkan ke daftar pustaka</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </ComponentPreview>
      </div>
    </>
  );
}
