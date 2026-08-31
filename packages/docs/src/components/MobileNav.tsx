import * as React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { designNav, docsNav, mainNav } from '@/lib/docs-nav'

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const { pathname } = useLocation()
  const groups = pathname.startsWith('/design') ? designNav : docsNav

  React.useEffect(() => {
    setOpen(false)
  }, [pathname])

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex h-8 shrink-0 touch-manipulation items-center justify-start gap-2.5 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-0 lg:hidden"
      >
        <div className="relative flex h-8 w-4 items-center justify-center">
          <div className="relative size-4">
            <span
              className={cn(
                'absolute left-0 block h-0.5 w-4 bg-foreground transition-all duration-100',
                open ? 'top-[0.4rem] rotate-45' : 'top-1'
              )}
            />
            <span
              className={cn(
                'absolute left-0 block h-0.5 w-4 bg-foreground transition-all duration-100',
                open ? 'top-[0.4rem] -rotate-45' : 'top-2.5'
              )}
            />
          </div>
          <span className="sr-only">Toggle Menu</span>
        </div>
        <span className="flex h-8 items-center text-lg leading-none font-medium">Menu</span>
      </button>

      {open && (
        <div className="fixed inset-x-0 top-(--header-height) bottom-0 z-50 overflow-y-auto bg-background p-6 lg:hidden">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <div className="text-sm font-medium text-muted-foreground">Menu</div>
              <div className="flex flex-col gap-2 text-[1.05rem] font-medium">
                {mainNav.map((item) => (
                  <NavLink key={item.href} to={item.href} className="text-foreground/80 transition-colors hover:text-foreground">
                    {item.title}
                  </NavLink>
                ))}
              </div>
            </div>
            {groups.map((group) => (
              <div key={group.title} className="flex flex-col gap-3">
                <div className="text-sm font-medium text-muted-foreground">{group.title}</div>
                <div className="flex flex-col gap-2 text-[1.05rem] font-medium">
                  {group.items.map((item) => (
                    <NavLink
                      key={item.href}
                      to={item.href}
                      end
                      className={({ isActive }) =>
                        cn(
                          'transition-colors hover:text-foreground',
                          isActive ? 'text-foreground' : 'text-foreground/80',
                          item.soon && 'text-muted-foreground'
                        )
                      }
                    >
                      {item.title}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
