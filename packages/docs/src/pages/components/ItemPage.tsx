import { H2 } from '@/components/DocsHeading';
import {
  Button,
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from 'rakit-ui';
import { FolderIcon } from 'lucide-react';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function ItemPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Item</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Baris konten serbaguna dengan media, judul, deskripsi, dan aksi.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add item" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import { FolderIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

export function ItemDemo() {
  return (
    <Item variant="outline">
      <ItemMedia variant="icon">
        <FolderIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Dokumen proyek</ItemTitle>
        <ItemDescription>12 berkas · diperbarui 2 jam lalu</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" size="sm">Buka</Button>
      </ItemActions>
    </Item>
  )
}`}
        >
          <ItemGroup className="w-full gap-2">
            <Item variant="outline">
              <ItemMedia variant="icon">
                <FolderIcon />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Dokumen proyek</ItemTitle>
                <ItemDescription>12 berkas · diperbarui 2 jam lalu</ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button variant="outline" size="sm">
                  Buka
                </Button>
              </ItemActions>
            </Item>
            <ItemSeparator />
            <Item variant="outline" size="sm">
              <ItemMedia variant="icon">
                <FolderIcon />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Arsip</ItemTitle>
                <ItemDescription>3 berkas</ItemDescription>
              </ItemContent>
            </Item>
          </ItemGroup>
        </ComponentPreview>
      </div>
    </>
  );
}
