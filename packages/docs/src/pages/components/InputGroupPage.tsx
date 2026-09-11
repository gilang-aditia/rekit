import { H2 } from '@/components/DocsHeading';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from '@rakit-ui/library';
import { SearchIcon, XIcon } from 'lucide-react';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function InputGroupPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Input Group</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Input yang dipadukan dengan ikon, label, atau tombol dalam satu bingkai.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add input-group" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import { SearchIcon, XIcon } from "lucide-react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"

export function InputGroupDemo() {
  return (
    <InputGroup>
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupInput placeholder="Cari komponen..." />
      <InputGroupAddon align="inline-end">
        <InputGroupButton>
          <XIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}`}
        >
          <div className="flex w-full max-w-sm flex-col gap-3">
            <InputGroup>
              <InputGroupAddon>
                <SearchIcon />
              </InputGroupAddon>
              <InputGroupInput placeholder="Cari komponen..." />
              <InputGroupAddon align="inline-end">
                <InputGroupButton>
                  <XIcon />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>

            <InputGroup>
              <InputGroupAddon>
                <InputGroupText>https://</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput placeholder="rakit-ui.dev" />
            </InputGroup>
          </div>
        </ComponentPreview>
      </div>
    </>
  );
}
