import { H2 } from '@/components/DocsHeading';
import { Avatar, AvatarFallback, AvatarImage } from '@rakit-ui/library';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function AvatarPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Avatar</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Komponen gambar yang akan ter-*fallback* otomatis ke inisial jika gambar gagal dimuat.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add avatar" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  } from "@/components/ui/avatar"

  export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
  }`}
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </ComponentPreview>
      </div>
    </>
  );
}
