import { H2 } from '@/components/DocsHeading';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function NavigationMenuPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Navigation Menu</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Menu navigasi horizontal dengan dropdown konten.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add navigation-menu" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Mulai</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-100 lg:w-125 lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md" href="/">
                    <div className="mb-2 mt-4 text-lg font-medium">Rakit UI</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Sistem desain modular sumber terbuka.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a href="/docs" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div className="text-sm font-medium leading-none">Dokumentasi</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Pelajari cara menggunakan komponen.</p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`}
        >
          <p className="text-sm text-muted-foreground text-center">
            Lihat contoh kode di bawah. Navigation Menu memerlukan lebih banyak ruang untuk demo interaktif.
          </p>
        </ComponentPreview>
      </div>
    </>
  );
}
