import { H2 } from '@/components/DocsHeading';
import { Checkbox, Label } from '@rakit-ui/library';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function LabelPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Label</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Merender elemen HTML label yang mudah diakses dan terkait dengan kontrol formulir.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add label" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export function LabelDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Terima Syarat dan Ketentuan</Label>
    </div>
  )
}`}
        >
          <div className="flex items-center space-x-2">
            <Checkbox id="terms2" />
            <Label htmlFor="terms2">Terima Syarat dan Ketentuan</Label>
          </div>
        </ComponentPreview>
      </div>
    </>
  );
}
