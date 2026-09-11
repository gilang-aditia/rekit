import { H2 } from '@/components/DocsHeading';
import {
  Attachment,
  AttachmentActions,
  AttachmentContent,
  AttachmentGroup,
  AttachmentMeta,
  AttachmentName,
  AttachmentPreview,
  AttachmentProgress,
  Button,
} from '@rakit-ui/library';
import { DownloadIcon, FileTextIcon, ImageIcon } from 'lucide-react';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function AttachmentPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Attachment</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Kartu berkas atau gambar di dalam percakapan, lengkap dengan metadata
          dan status unggahan.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add attachment" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import { DownloadIcon, FileTextIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Attachment,
  AttachmentActions,
  AttachmentContent,
  AttachmentMeta,
  AttachmentName,
  AttachmentPreview,
} from "@/components/ui/attachment"

export function AttachmentDemo() {
  return (
    <Attachment>
      <AttachmentPreview>
        <FileTextIcon />
      </AttachmentPreview>
      <AttachmentContent>
        <AttachmentName>laporan-kuartal.pdf</AttachmentName>
        <AttachmentMeta>PDF · 1,2 MB</AttachmentMeta>
      </AttachmentContent>
      <AttachmentActions>
        <Button variant="ghost" size="icon-sm">
          <DownloadIcon />
        </Button>
      </AttachmentActions>
    </Attachment>
  )
}`}
        >
          <AttachmentGroup className="w-full max-w-sm">
            <Attachment>
              <AttachmentPreview>
                <FileTextIcon />
              </AttachmentPreview>
              <AttachmentContent>
                <AttachmentName>laporan-kuartal.pdf</AttachmentName>
                <AttachmentMeta>PDF · 1,2 MB</AttachmentMeta>
              </AttachmentContent>
              <AttachmentActions>
                <Button variant="ghost" size="icon-sm">
                  <DownloadIcon />
                </Button>
              </AttachmentActions>
            </Attachment>

            <Attachment>
              <AttachmentPreview>
                <ImageIcon />
              </AttachmentPreview>
              <AttachmentContent>
                <AttachmentName>tangkapan-layar.png</AttachmentName>
                <AttachmentMeta>Mengunggah · 64%</AttachmentMeta>
                <AttachmentProgress value={64} />
              </AttachmentContent>
            </Attachment>
          </AttachmentGroup>
        </ComponentPreview>
      </div>
    </>
  );
}
