import { H2 } from '@/components/DocsHeading';
import { SearchInput } from 'rakit-ui';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function SearchInputPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Search Input</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Kolom pencarian dengan icon pencarian yang sudah bawaan, dirancang untuk formulir pencarian.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add search-input" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import { SearchInput } from "@/components/ui/search-input"

  export function SearchInputDemo() {
  return <SearchInput placeholder="Cari data..." />
  }`}
        >
          <div className="w-[350px]">
            <SearchInput placeholder="Cari data..." />
          </div>
        </ComponentPreview>
      </div>
    </>
  );
}
