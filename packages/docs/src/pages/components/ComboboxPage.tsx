import * as React from 'react';
import { H2 } from '@/components/DocsHeading';
import { Button } from '@rakit-ui/library';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@rakit-ui/library';
import { Popover, PopoverContent, PopoverTrigger } from '@rakit-ui/library';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt.js', label: 'Nuxt.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
];

function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-50 justify-between">
          {value
            ? frameworks.find((f) => f.value === value)?.label
            : 'Pilih framework...'}
          <span className="ml-2 opacity-50">⌄</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-50 p-0">
        <Command>
          <CommandInput placeholder="Cari framework..." />
          <CommandList>
            <CommandEmpty>Tidak ditemukan.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}
                >
                  {framework.label}
                  {value === framework.value && <span className="ml-auto">✓</span>}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default function ComboboxPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Combobox</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Input pilihan dengan pencarian otomatis (autocomplete).
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add command popover" />
        <p className="text-sm text-muted-foreground">
          Combobox dibuat dari gabungan komponen <code>Command</code> dan <code>Popover</code>. Instal keduanya untuk menggunakannya.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
]

export function ComboboxDemo() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-50 justify-between">
          {value ? frameworks.find((f) => f.value === value)?.label : "Pilih framework..."}
          <span className="ml-2 opacity-50">⌄</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-50 p-0">
        <Command>
          <CommandInput placeholder="Cari framework..." />
          <CommandList>
            <CommandEmpty>Tidak ditemukan.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(val) => { setValue(val === value ? "" : val); setOpen(false) }}
                >
                  {framework.label}
                  {value === framework.value && <span className="ml-auto">✓</span>}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}`}
        >
          <ComboboxDemo />
        </ComponentPreview>
      </div>
    </>
  );
}
