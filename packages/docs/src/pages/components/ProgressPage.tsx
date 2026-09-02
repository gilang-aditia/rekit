import { H2 } from '@/components/DocsHeading';
import { Progress } from 'rakit-ui';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function ProgressPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Progress</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Menampilkan indikator untuk task yang sedang berjalan, biasanya digambarkan dengan progress bar.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add progress" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import { Progress } from "@/components/ui/progress"

export function ProgressDemo() {
  return <Progress value={33} />
}`}
        >
          <div className="w-[60%]">
            <Progress value={33} />
          </div>
        </ComponentPreview>
      </div>
    </>
  );
}
