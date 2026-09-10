import { H2 } from '@/components/DocsHeading';
import { DirectionProvider, Slider } from 'rakit-ui';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function DirectionPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Direction</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Menetapkan arah baca (ltr/rtl) untuk seluruh komponen di bawahnya.
          Pasang sekali di root aplikasi.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add direction" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import { DirectionProvider } from "@/components/ui/direction"

export function App() {
  return (
    <DirectionProvider dir="rtl">
      {/* Slider, Select, DropdownMenu, dan komponen Radix lain
          menyesuaikan arah navigasi keyboard serta posisinya. */}
      <Slider defaultValue={[40]} />
    </DirectionProvider>
  )
}`}
        >
          <div className="flex w-full max-w-sm flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs text-muted-foreground">dir=&quot;ltr&quot;</span>
              <DirectionProvider dir="ltr">
                <Slider defaultValue={[40]} />
              </DirectionProvider>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs text-muted-foreground">dir=&quot;rtl&quot;</span>
              <DirectionProvider dir="rtl">
                <Slider defaultValue={[40]} />
              </DirectionProvider>
            </div>
          </div>
        </ComponentPreview>
      </div>
    </>
  );
}
