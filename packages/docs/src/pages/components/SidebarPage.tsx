import { H2 } from '@/components/DocsHeading';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
} from '@rakit-ui/library';
import { HomeIcon, InboxIcon, SearchIcon, SettingsIcon } from 'lucide-react';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

const menu = [
  { title: 'Beranda', icon: HomeIcon, aktif: true },
  { title: 'Kotak masuk', icon: InboxIcon, aktif: false },
  { title: 'Pencarian', icon: SearchIcon, aktif: false },
];

export default function SidebarPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Sidebar</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Sidebar navigasi yang bisa diciutkan. Di layar kecil ia otomatis
          berubah jadi Sheet, dan keadaannya disimpan antar kunjungan.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add sidebar" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <p className="text-sm text-muted-foreground">
          Bungkus aplikasi dengan <code className="font-mono text-foreground">SidebarProvider</code>,
          lalu pasang <code className="font-mono text-foreground">Sidebar</code> berdampingan
          dengan <code className="font-mono text-foreground">SidebarInset</code>. Tekan{' '}
          <code className="font-mono text-foreground">Ctrl/⌘ + B</code> untuk membuka-tutup.
        </p>
        <ComponentPreview
          code={`import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export function SidebarDemo() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menu.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton isActive={item.aktif} tooltip={item.title}>
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      <SidebarInset>
        <SidebarTrigger />
        {/* isi halaman */}
      </SidebarInset>
    </SidebarProvider>
  )
}`}
        >
          {/* Pratinjau memakai collapsible="none" supaya sidebar tetap di dalam
              kotak contoh, bukan menempel ke tepi layar. */}
          <div className="w-full overflow-hidden rounded-lg border">
            <SidebarProvider className="min-h-0">
              <div className="flex h-72 w-full">
                <Sidebar collapsible="none" className="border-r">
                  <SidebarHeader className="px-3 py-2 text-sm font-medium">
                    Rakit UI
                  </SidebarHeader>
                  <SidebarSeparator />
                  <SidebarContent>
                    <SidebarGroup>
                      <SidebarGroupLabel>Menu</SidebarGroupLabel>
                      <SidebarGroupContent>
                        <SidebarMenu>
                          {menu.map((item) => (
                            <SidebarMenuItem key={item.title}>
                              <SidebarMenuButton isActive={item.aktif}>
                                <item.icon />
                                <span>{item.title}</span>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          ))}
                        </SidebarMenu>
                      </SidebarGroupContent>
                    </SidebarGroup>
                  </SidebarContent>
                  <SidebarFooter>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <SettingsIcon />
                          <span>Pengaturan</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarFooter>
                </Sidebar>
                <div className="flex-1 bg-background p-4 text-sm text-muted-foreground">
                  Area konten
                </div>
              </div>
            </SidebarProvider>
          </div>
        </ComponentPreview>
      </div>
    </>
  );
}
