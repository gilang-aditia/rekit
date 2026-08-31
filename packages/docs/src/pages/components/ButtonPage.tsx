import { H2 } from '@/components/DocsHeading';
import { Button } from 'rakit-ui';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function ButtonPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Button</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Menampilkan tombol atau komponen yang tampak seperti tombol.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs
          items={{
            npx: 'npx @moonblanck/rakit-ui add button',
          }}
        />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"\n\nexport function ButtonDemo() {\n  return <Button>Button</Button>\n}`}
        >
          <Button>Button</Button>
        </ComponentPreview>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Varian</H2>
      
        <ComponentPreview
          title="Secondary"
          code={`<Button variant="secondary">Secondary</Button>`}
        >
          <Button variant="secondary">Secondary</Button>
        </ComponentPreview>

        <ComponentPreview
          title="Destructive"
          code={`<Button variant="destructive">Destructive</Button>`}
        >
          <Button variant="destructive">Destructive</Button>
        </ComponentPreview>
      
        <ComponentPreview
          title="Outline"
          code={`<Button variant="outline">Outline</Button>`}
        >
          <Button variant="outline">Outline</Button>
        </ComponentPreview>
      
        <ComponentPreview
          title="Ghost"
          code={`<Button variant="ghost">Ghost</Button>`}
        >
          <Button variant="ghost">Ghost</Button>
        </ComponentPreview>
      
        <ComponentPreview
          title="Link"
          code={`<Button variant="link">Link</Button>`}
        >
          <Button variant="link">Link</Button>
        </ComponentPreview>
      </div>
    </>
  );
}
