import { H2 } from '@/components/DocsHeading';
import { Alert, AlertDescription, AlertTitle } from 'rakit-ui';
import { Terminal, AlertCircle } from 'lucide-react';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function AlertPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Alert</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Menampilkan *callout* atau *alert message* untuk menarik perhatian pengguna.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add alert" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
  import { Terminal } from "lucide-react"

  export function AlertDemo() {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  )
  }`}
        >
          <div className="w-112.5">
            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                You can add components to your app using the cli.
              </AlertDescription>
            </Alert>
          </div>
        </ComponentPreview>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Destructive</H2>
        <ComponentPreview
          code={`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
  import { AlertCircle } from "lucide-react"

  export function AlertDestructive() {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Sesi anda telah berakhir. Silahkan login kembali.
      </AlertDescription>
    </Alert>
  )
  }`}
        >
          <div className="w-112.5">
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Sesi anda telah berakhir. Silahkan login kembali.
              </AlertDescription>
            </Alert>
          </div>
        </ComponentPreview>
      </div>
    </>
  );
}
