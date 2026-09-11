import { H2 } from '@/components/DocsHeading';
import {
  Avatar,
  AvatarFallback,
  Bubble,
  Message,
  MessageAuthor,
  MessageAvatar,
  MessageContent,
  MessageHeader,
  MessageList,
  MessageTime,
} from '@rakit-ui/library';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function MessagePage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Message</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Tata letak satu baris percakapan: avatar, header, isi, dan footer.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add message" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bubble } from "@/components/ui/bubble"
import {
  Message,
  MessageAuthor,
  MessageAvatar,
  MessageContent,
  MessageHeader,
  MessageList,
  MessageTime,
} from "@/components/ui/message"

export function MessageDemo() {
  return (
    <MessageList>
      <Message>
        <MessageAvatar>
          <Avatar size="sm">
            <AvatarFallback>RA</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <MessageHeader>
            <MessageAuthor>Rangga</MessageAuthor>
            <MessageTime>10:24</MessageTime>
          </MessageHeader>
          <Bubble>Komponennya sudah aku pasang.</Bubble>
        </MessageContent>
      </Message>
    </MessageList>
  )
}`}
        >
          <MessageList className="w-full max-w-md">
            <Message>
              <MessageAvatar>
                <Avatar size="sm">
                  <AvatarFallback>RA</AvatarFallback>
                </Avatar>
              </MessageAvatar>
              <MessageContent>
                <MessageHeader>
                  <MessageAuthor>Rangga</MessageAuthor>
                  <MessageTime>10:24</MessageTime>
                </MessageHeader>
                <Bubble>Komponennya sudah aku pasang.</Bubble>
              </MessageContent>
            </Message>

            <Message align="end">
              <MessageAvatar>
                <Avatar size="sm">
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
              </MessageAvatar>
              <MessageContent>
                <MessageHeader>
                  <MessageAuthor>Sari</MessageAuthor>
                  <MessageTime>10:26</MessageTime>
                </MessageHeader>
                <Bubble variant="primary" align="end">
                  Mantap, lanjut ke tema.
                </Bubble>
              </MessageContent>
            </Message>
          </MessageList>
        </ComponentPreview>
      </div>
    </>
  );
}
