import { H2 } from '@/components/DocsHeading';
import { Checkbox, Label } from 'rakit-ui';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function CheckboxPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Checkbox</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Kontrol yang memungkinkan pengguna untuk beralih antara status dicentang atau tidak dicentang.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add checkbox" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Setuju dengan syarat dan ketentuan</Label>
    </div>
  )
}`}
        >
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Setuju dengan syarat dan ketentuan</Label>
          </div>
        </ComponentPreview>
      </div>
    </>
  );
}
