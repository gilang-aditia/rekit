import { H2 } from '@/components/DocsHeading';
import { Badge } from '@rakit-ui/library';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function BadgePage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Badge</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Menampilkan *badge* atau komponen yang terlihat seperti *badge*.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add badge" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import { Badge } from "@/components/ui/badge"

  export function BadgeDemo() {
  return <Badge>Badge</Badge>
  }`}
        >
          <Badge>Badge</Badge>
        </ComponentPreview>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Varian</H2>
      
        <ComponentPreview
          title="Secondary"
          code={`<Badge variant="secondary">Secondary</Badge>`}
        >
          <Badge variant="secondary">Secondary</Badge>
        </ComponentPreview>
      
        <ComponentPreview
          title="Destructive"
          code={`<Badge variant="destructive">Destructive</Badge>`}
        >
          <Badge variant="destructive">Destructive</Badge>
        </ComponentPreview>
      
        <ComponentPreview
          title="Outline"
          code={`<Badge variant="outline">Outline</Badge>`}
        >
          <Badge variant="outline">Outline</Badge>
        </ComponentPreview>
      </div>
    </>
  );
}
