import { H2 } from '@/components/DocsHeading';
import { Label, Switch } from 'rakit-ui';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function SwitchPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Switch</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Kontrol yang memungkinkan pengguna untuk mengaktifkan atau menonaktifkan suatu opsi.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add switch" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Mode Pesawat</Label>
    </div>
  )
}`}
        >
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Mode Pesawat</Label>
          </div>
        </ComponentPreview>
      </div>
    </>
  );
}
