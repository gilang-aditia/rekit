import { H2 } from '@/components/DocsHeading';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@rakit-ui/library';
import { Button } from '@rakit-ui/library';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function CardPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Card</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Menampilkan konten dan aksi terkait suatu topik.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs
          items={{
            npx: 'npx @moonblanck/rakit-ui add card',
          }}
        />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"

  export function CardDemo() {
  return (
    <Card className="w-87.5">
      <CardHeader>
        <CardTitle>Buat Project</CardTitle>
        <CardDescription>Deploy project baru kamu dalam satu klik.</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Konten Card */}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Batal</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
  }`}
        >
          <Card className="w-87.5">
            <CardHeader>
              <CardTitle>Buat Project</CardTitle>
              <CardDescription>Deploy project baru kamu dalam satu klik.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Isi konten kartu di sini.</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Batal</Button>
              <Button>Deploy</Button>
            </CardFooter>
          </Card>
        </ComponentPreview>
      </div>
    </>
  );
}
