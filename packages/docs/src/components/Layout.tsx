import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { Button } from 'rakit-ui'
import Sidebar from './Sidebar'
import { Toc } from './Toc'
import { MobileNav } from './MobileNav'
import { ThemeToggle } from './ThemeToggle'
import { mainNav } from '@/lib/docs-nav'
import { cn } from '@/lib/utils'

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <div className="container-wrapper px-6">
        <div className="flex h-(--header-height) items-center gap-2 **:data-[slot=separator]:h-4!">
          <MobileNav />

          <nav className="hidden items-center gap-0 lg:flex">
            {mainNav.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === '/'}
                className={({ isActive }) =>
                  cn(
                    'relative inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-md px-2.5 text-sm font-medium whitespace-nowrap transition-all outline-none',
                    'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
                    'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
                    isActive && 'text-foreground'
                  )
                }
              >
                {item.title}
              </NavLink>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
            <div className="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
              <button
                type="button"
                className="relative inline-flex h-8 w-full shrink-0 items-center justify-start gap-2 rounded-lg bg-muted pl-3 text-sm font-medium whitespace-nowrap text-foreground shadow-none transition-colors outline-none hover:bg-muted/50 md:w-48 lg:w-40 xl:w-64 dark:bg-card"
              >
                <span className="hidden xl:inline-flex">Search documentation...</span>
                <span className="inline-flex xl:hidden">Search...</span>
              </button>
            </div>

            <div data-slot="separator" className="ml-2 hidden w-px shrink-0 bg-border lg:block" />

            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/gilang-aditia" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                  <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
                </svg>
                <span className="sr-only">GitHub</span>
              </a>
            </Button>

            <div data-slot="separator" className="hidden w-px shrink-0 bg-border lg:block" />

            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}

export default function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className="[--header-height:--spacing(14)] lg:[--header-height:--spacing(16)]">
      <div className="flex min-h-svh flex-col">
        <SiteHeader />

        <main className="flex min-h-0 flex-1 flex-col">
          {isHome ? (
            <Outlet />
          ) : (
            <div className="container-wrapper flex flex-1 flex-col px-2">
              <div
                data-slot="sidebar-wrapper"
                style={
                  {
                    '--sidebar-width': 'calc(var(--spacing) * 72)',
                  } as React.CSSProperties
                }
                className="group/sidebar-wrapper flex min-h-min w-full flex-1 items-start px-0 [--top-spacing:0] lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)] lg:[--top-spacing:--spacing(4)]"
              >
                <div
                  data-slot="sidebar"
                  className="sticky top-[calc(var(--header-height)+0.6rem)] z-30 hidden h-[calc(100svh-10rem)] w-(--sidebar-width) flex-col overflow-hidden overscroll-none bg-transparent text-sidebar-foreground [--sidebar-menu-width:--spacing(56)] lg:flex"
                >
                  {/* Garis pemisah yang memudar di ujung atas dan bawah. */}
                  <div className="absolute top-12 right-2 bottom-0 hidden h-full w-px bg-[linear-gradient(to_bottom,transparent_0%,var(--border)_10%,var(--border)_90%,transparent_100%)] lg:flex" />
                  <Sidebar />
                </div>

                <div className="h-full w-full">
                  <div
                    data-slot="docs"
                    className="flex scroll-mt-24 items-stretch pb-8 text-[1.05rem] sm:text-[15px] xl:w-full"
                  >
                    <div className="flex min-w-0 flex-1 flex-col">
                      <div className="h-(--top-spacing) shrink-0" />
                      <div
                        data-docs-content
                        className="mx-auto flex w-full max-w-160 min-w-0 flex-1 flex-col gap-6 px-4 py-6 text-foreground md:px-0 lg:py-8"
                      >
                        <Outlet />
                      </div>
                    </div>

                    <div className="sticky top-[calc(var(--header-height)+1px)] z-30 ml-auto hidden h-[90svh] w-(--sidebar-width) flex-col gap-4 overflow-hidden overscroll-none pb-8 xl:flex">
                      <div className="h-(--top-spacing) shrink-0" />
                      <div className="scroll-fade no-scrollbar flex flex-col gap-8 overflow-y-auto px-8">
                        <Toc />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
