import { H2 } from '@/components/DocsHeading';
import { Button } from 'rakit-ui';
import { Toaster } from 'rakit-ui';
import { toast } from 'sonner';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function ToastPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Toast (Sonner)</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Pesan peringatan ringkas yang ditujukan kepada pengguna. Dibangun di atas pustaka *Sonner*.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add sonner" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <p className="text-muted-foreground">
          Tambahkan komponen <code>Toaster</code> ke bagian atas dari root file app kamu (misal: di layout.tsx atau App.tsx). 
          Kemudian gunakan fungsi <code>toast</code> dari mana saja di aplikasi kamu.
        </p>
        <ComponentPreview
          code={`import { Toaster, toast } from "@/components/ui/sonner"
  import { Button } from "@/components/ui/button"

  export function ToastDemo() {
  return (
    <div>
      <Toaster />
      <Button
        variant="outline"
        onClick={() =>
          toast("Acara telah dibuat", {
            description: "Minggu, 3 Desember 2023 pada pukul 09:00 pagi",
            action: {
              label: "Batal",
              onClick: () => console.log("Batal"),
            },
          })
        }
      >
        Tampilkan Toast
      </Button>
    </div>
  )
  }`}
        >
          <div>
            <Toaster />
            <Button
              variant="outline"
              onClick={() =>
                toast("Acara telah dibuat", {
                  description: "Minggu, 3 Desember 2023 pada pukul 09:00 pagi",
                  action: {
                    label: "Batal",
                    onClick: () => console.log("Batal"),
                  },
                })
              }
            >
              Tampilkan Toast
            </Button>
          </div>
        </ComponentPreview>
      </div>
    </>
  );
}
