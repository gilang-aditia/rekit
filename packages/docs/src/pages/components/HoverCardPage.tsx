import { H2 } from '@/components/DocsHeading';
import { Button, HoverCard, HoverCardContent, HoverCardTrigger } from 'rakit-ui';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function HoverCardPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Hover Card</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Kartu popup yang muncul saat elemen disorot.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add hover-card" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@rakit-ui</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@rakit-ui</h4>
            <p className="text-sm">
              Sistem desain modular sumber terbuka untuk React.
            </p>
            <div className="flex items-center pt-2">
              <span className="text-xs text-muted-foreground">
                Bergabung September 2024
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}`}
        >
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">@rakit-ui</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">@rakit-ui</h4>
                  <p className="text-sm">
                    Sistem desain modular sumber terbuka untuk React.
                  </p>
                  <div className="flex items-center pt-2">
                    <span className="text-xs text-muted-foreground">
                      Bergabung September 2024
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </ComponentPreview>
      </div>
    </>
  );
}
