import { H2 } from '@/components/DocsHeading';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from 'rakit-ui';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function AccordionPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Accordion</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Kumpulan panel yang ditumpuk secara vertikal yang bisa di-expand atau collapse.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs
          items={{
            npx: 'npx @moonblanck/rakit-ui add accordion',
          }}
        />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  } from "@/components/ui/accordion"

  export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Apakah ini bisa diakses?</AccordionTrigger>
        <AccordionContent>
          Ya. Semuanya mematuhi standar WAI-ARIA.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Apakah bisa dikustomisasi?</AccordionTrigger>
        <AccordionContent>
          Tentu saja. Ini hanyalah komponen React yang bisa kamu modifikasi.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
  }`}
        >
          <div className="w-112.5">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Apakah ini bisa diakses?</AccordionTrigger>
                <AccordionContent>
                  Ya. Semuanya mematuhi standar WAI-ARIA.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Apakah bisa dikustomisasi?</AccordionTrigger>
                <AccordionContent>
                  Tentu saja. Ini hanyalah komponen React yang bisa kamu modifikasi sesuai kebutuhan.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Apakah ini berbayar?</AccordionTrigger>
                <AccordionContent>
                  Tidak. Sepenuhnya gratis dan open source.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </ComponentPreview>
      </div>
    </>
  );
}
