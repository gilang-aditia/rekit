import { H2 } from '@/components/DocsHeading';
import { Marker, MarkerLabel, MarkerShimmer } from '@rakit-ui/library';
import { SparklesIcon } from 'lucide-react';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function MarkerPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Marker</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Penanda di aliran percakapan: pembatas tanggal, catatan sistem, atau
          status pengerjaan yang sedang berjalan.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add marker" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import { SparklesIcon } from "lucide-react"
import { Marker, MarkerLabel, MarkerShimmer } from "@/components/ui/marker"

export function MarkerDemo() {
  return (
    <>
      <Marker variant="separator">
        <MarkerLabel>Hari ini</MarkerLabel>
      </Marker>

      <Marker>Sari bergabung ke percakapan</Marker>

      <Marker variant="outline">
        <SparklesIcon />
        <MarkerShimmer>Sedang menyusun jawaban…</MarkerShimmer>
      </Marker>
    </>
  )
}`}
        >
          <div className="flex w-full max-w-md flex-col gap-4">
            <Marker variant="separator">
              <MarkerLabel>Hari ini</MarkerLabel>
            </Marker>
            <Marker>Sari bergabung ke percakapan</Marker>
            <Marker variant="outline">
              <SparklesIcon />
              <MarkerShimmer>Sedang menyusun jawaban…</MarkerShimmer>
            </Marker>
          </div>
        </ComponentPreview>
      </div>
    </>
  );
}
