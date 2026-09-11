import { H2 } from '@/components/DocsHeading';
import { Bubble, BubbleFooter, BubbleGroup } from '@rakit-ui/library';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function BubblePage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Bubble</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Permukaan visual satu pesan percakapan. Tata letak barisnya diurus oleh{' '}
          <span className="font-medium text-foreground">Message</span>.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add bubble" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import { Bubble, BubbleFooter, BubbleGroup } from "@/components/ui/bubble"

export function BubbleDemo() {
  return (
    <BubbleGroup>
      <Bubble>Halo, ada yang bisa dibantu?</Bubble>
      <Bubble variant="primary" align="end">
        Saya mau pasang Rakit UI.
        <BubbleFooter>10:24</BubbleFooter>
      </Bubble>
    </BubbleGroup>
  )
}`}
        >
          <BubbleGroup className="w-full max-w-md">
            <Bubble>Halo, ada yang bisa dibantu?</Bubble>
            <Bubble variant="primary" align="end">
              Saya mau pasang Rakit UI.
              <BubbleFooter>10:24</BubbleFooter>
            </Bubble>
            <Bubble variant="outline">Jalankan perintah CLI-nya, ya.</Bubble>
          </BubbleGroup>
        </ComponentPreview>
      </div>
    </>
  );
}
