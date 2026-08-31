import { H2 } from '@/components/DocsHeading';
import { Input } from 'rakit-ui';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function InputPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Input</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Menampilkan form input text atau kolom input dasar.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add input" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import { Input } from "@/components/ui/input"

  export function InputDemo() {
  return <Input type="email" placeholder="Email" />
  }`}
        >
          <div className="w-[300px]">
            <Input type="email" placeholder="Email" />
          </div>
        </ComponentPreview>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Disabled</H2>
        <ComponentPreview
          code={`import { Input } from "@/components/ui/input"

  export function InputDisabled() {
  return <Input disabled type="email" placeholder="Email" />
  }`}
        >
          <div className="w-[300px]">
            <Input disabled type="email" placeholder="Email" />
          </div>
        </ComponentPreview>
      </div>
    </>
  );
}
