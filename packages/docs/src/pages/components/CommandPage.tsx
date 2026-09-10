import { H2 } from '@/components/DocsHeading';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from 'rakit-ui';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function CommandPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Command</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Palet perintah cepat bergaya command/search.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add command" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export function CommandDemo() {
  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Ketik perintah atau cari..." />
      <CommandList>
        <CommandEmpty>Tidak ditemukan.</CommandEmpty>
        <CommandGroup heading="Saran">
          <CommandItem>Kalender</CommandItem>
          <CommandItem>Pencarian Emoji</CommandItem>
          <CommandItem>Kalkulator</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Pengaturan">
          <CommandItem>Profil<CommandShortcut>⌘P</CommandShortcut></CommandItem>
          <CommandItem>Mail<CommandShortcut>⌘B</CommandShortcut></CommandItem>
          <CommandItem>Pengaturan<CommandShortcut>⌘S</CommandShortcut></CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}`}
        >
          <Command className="rounded-lg border shadow-md md:min-w-112.5">
            <CommandInput placeholder="Ketik perintah atau cari..." />
            <CommandList>
              <CommandEmpty>Tidak ditemukan.</CommandEmpty>
              <CommandGroup heading="Saran">
                <CommandItem>Kalender</CommandItem>
                <CommandItem>Pencarian Emoji</CommandItem>
                <CommandItem>Kalkulator</CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Pengaturan">
                <CommandItem>Profil<CommandShortcut>⌘P</CommandShortcut></CommandItem>
                <CommandItem>Mail<CommandShortcut>⌘B</CommandShortcut></CommandItem>
                <CommandItem>Pengaturan<CommandShortcut>⌘S</CommandShortcut></CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </ComponentPreview>
      </div>
    </>
  );
}
