import * as React from 'react';
import { H2 } from '@/components/DocsHeading';
import { Button } from 'rakit-ui';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from 'rakit-ui';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-87.5 space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">@pena/ui mempunyai 3 repositori</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            {isOpen ? '⌃' : '⌄'}
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
        @pena/primitives
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          @pena/colors
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          @pena/utils
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export default function CollapsiblePage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Collapsible</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Konten yang bisa di-expand dan collapse secara interaktif.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add collapsible" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-87.5 space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">@pena/ui mempunyai 3 repositori</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            {isOpen ? '⌃' : '⌄'}
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
        @pena/primitives
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          @pena/colors
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          @pena/utils
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}`}
        >
          <CollapsibleDemo />
        </ComponentPreview>
      </div>
    </>
  );
}
