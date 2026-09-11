import { H2 } from '@/components/DocsHeading';
import { Button, Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@rakit-ui/library';
import { InboxIcon } from 'lucide-react';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function EmptyPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Empty</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Keadaan kosong dengan ikon, judul, penjelasan, dan aksi lanjutan.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add empty" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import { InboxIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export function EmptyDemo() {
  return (
    <Empty className="border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <InboxIcon />
        </EmptyMedia>
        <EmptyTitle>Belum ada pesan</EmptyTitle>
        <EmptyDescription>
          Pesan yang masuk akan muncul di sini.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Tulis pesan</Button>
      </EmptyContent>
    </Empty>
  )
}`}
        >
          <Empty className="w-full border">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <InboxIcon />
              </EmptyMedia>
              <EmptyTitle>Belum ada pesan</EmptyTitle>
              <EmptyDescription>Pesan yang masuk akan muncul di sini.</EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button>Tulis pesan</Button>
            </EmptyContent>
          </Empty>
        </ComponentPreview>
      </div>
    </>
  );
}
