import { H2 } from '@/components/DocsHeading';
import { Button, ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from '@rakit-ui/library';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function ButtonGroupPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Button Group</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Mengelompokkan beberapa tombol menjadi satu kesatuan kontrol.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add button-group" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export function ButtonGroupDemo() {
  return (
    <ButtonGroup>
      <Button variant="outline">Kiri</Button>
      <Button variant="outline">Tengah</Button>
      <Button variant="outline">Kanan</Button>
    </ButtonGroup>
  )
}`}
        >
          <ButtonGroup>
            <Button variant="outline">Kiri</Button>
            <Button variant="outline">Tengah</Button>
            <Button variant="outline">Kanan</Button>
          </ButtonGroup>
        </ComponentPreview>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Dengan teks dan pemisah</H2>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"

export function ButtonGroupTextDemo() {
  return (
    <ButtonGroup>
      <ButtonGroupText>https://</ButtonGroupText>
      <Button variant="outline">rakit-ui.dev</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">Salin</Button>
    </ButtonGroup>
  )
}`}
        >
          <ButtonGroup>
            <ButtonGroupText>https://</ButtonGroupText>
            <Button variant="outline">rakit-ui.dev</Button>
            <ButtonGroupSeparator />
            <Button variant="outline">Salin</Button>
          </ButtonGroup>
        </ComponentPreview>
      </div>
    </>
  );
}
