import { H2 } from '@/components/DocsHeading';
import { Label, Textarea } from '@rakit-ui/library';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function TextareaPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Textarea</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Menampilkan input teks multiline.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add textarea" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function TextareaDemo() {
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Pesan Anda</Label>
      <Textarea placeholder="Tuliskan pesan Anda di sini." id="message" />
    </div>
  )
}`}
        >
          <div className="grid w-full max-w-sm gap-1.5">
            <Label htmlFor="message">Pesan Anda</Label>
            <Textarea placeholder="Tuliskan pesan Anda di sini." id="message" />
          </div>
        </ComponentPreview>
      </div>
    </>
  );
}
