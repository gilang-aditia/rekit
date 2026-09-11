import { H2 } from '@/components/DocsHeading';
import { Tabs, TabsContent, TabsList, TabsTrigger, Button, Card } from '@rakit-ui/library';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function TabsPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Tabs</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Seperangkat tab panel untuk beralih antara berbagai bagian konten.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add tabs" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-100">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Akun</TabsTrigger>
        <TabsTrigger value="password">Kata Sandi</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Konten informasi akun Anda ada di sini.
      </TabsContent>
      <TabsContent value="password">
        Ubah kata sandi Anda di sini.
      </TabsContent>
    </Tabs>
  )
}`}
        >
          <Tabs defaultValue="account" className="w-full max-w-100">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="account">Akun</TabsTrigger>
              <TabsTrigger value="password">Kata Sandi</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <div className="p-4 rounded-md border text-sm text-muted-foreground">
                Konten informasi akun Anda ada di sini.
              </div>
            </TabsContent>
            <TabsContent value="password">
              <div className="p-4 rounded-md border text-sm text-muted-foreground">
                Ubah kata sandi Anda di sini.
              </div>
            </TabsContent>
          </Tabs>
        </ComponentPreview>
      </div>
    </>
  );
}
