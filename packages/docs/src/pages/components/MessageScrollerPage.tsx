import { H2 } from '@/components/DocsHeading';
import {
  Bubble,
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
} from 'rakit-ui';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

const percakapan = Array.from({ length: 14 }, (_, index) => ({
  id: index,
  dariSaya: index % 3 === 0,
  teks:
    index % 3 === 0
      ? `Pesan saya nomor ${index + 1}`
      : `Balasan otomatis nomor ${index + 1}`,
}));

export default function MessageScrollerPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Message Scroller</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Wadah gulir percakapan. Selama kamu berada di dasar, pesan baru otomatis
          diikuti; begitu menggulir ke atas, posisi bacamu dipertahankan.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add message-scroller" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import { Bubble } from "@/components/ui/bubble"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
} from "@/components/ui/message-scroller"

export function MessageScrollerDemo() {
  return (
    <MessageScroller className="h-72 rounded-lg border">
      <MessageScrollerContent>
        {pesan.map((item) => (
          <Bubble
            key={item.id}
            align={item.dariSaya ? "end" : "start"}
            variant={item.dariSaya ? "primary" : "default"}
          >
            {item.teks}
          </Bubble>
        ))}
      </MessageScrollerContent>
      <MessageScrollerButton />
    </MessageScroller>
  )
}`}
        >
          <MessageScroller className="h-72 w-full max-w-md rounded-lg border">
            <MessageScrollerContent>
              {percakapan.map((item) => (
                <Bubble
                  key={item.id}
                  align={item.dariSaya ? 'end' : 'start'}
                  variant={item.dariSaya ? 'primary' : 'default'}
                >
                  {item.teks}
                </Bubble>
              ))}
            </MessageScrollerContent>
            <MessageScrollerButton />
          </MessageScroller>
        </ComponentPreview>
      </div>
    </>
  );
}
