import { H2 } from '@/components/DocsHeading';
import { Label, NativeSelect } from 'rakit-ui';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function NativeSelectPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Native Select</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Select bawaan browser. Pakai ini bila kamu butuh menu asli platform —
          terutama di perangkat mobile — tanpa portal atau JavaScript tambahan.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add native-select" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import { NativeSelect } from "@/components/ui/native-select"

export function NativeSelectDemo() {
  return (
    <NativeSelect defaultValue="id">
      <option value="id">Indonesia</option>
      <option value="my">Malaysia</option>
      <option value="sg">Singapura</option>
    </NativeSelect>
  )
}`}
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="negara">Negara</Label>
            <NativeSelect id="negara" defaultValue="id">
              <option value="id">Indonesia</option>
              <option value="my">Malaysia</option>
              <option value="sg">Singapura</option>
            </NativeSelect>
          </div>
        </ComponentPreview>
      </div>
    </>
  );
}
