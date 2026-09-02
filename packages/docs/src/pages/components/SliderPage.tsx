import { H2 } from '@/components/DocsHeading';
import { Slider } from 'rakit-ui';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function SliderPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Slider</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Komponen input tempat pengguna memilih nilai dari dalam rentang tertentu.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add slider" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"

type SliderProps = React.ComponentProps<typeof Slider>

export function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn("w-[60%]", className)}
      {...props}
    />
  )
}`}
        >
          <div className="w-[60%] flex items-center justify-center p-8">
            <Slider
              defaultValue={[50]}
              max={100}
              step={1}
            />
          </div>
        </ComponentPreview>
      </div>
    </>
  );
}
