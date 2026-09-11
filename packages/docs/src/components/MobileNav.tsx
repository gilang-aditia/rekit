import * as React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { designNav, docsNav, mainNav } from '@/lib/docs-nav'
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from '@rakit-ui/library'

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const { pathname } = useLocation()
  const groups = pathname.startsWith('/design') ? designNav : docsNav

  React.useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
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
          <span className="flex h-8 items-center text-sm leading-none font-medium">Menu</span>
        </button>
      </SheetTrigger>

      <SheetContent side="left" className="w-80 p-6 lg:hidden overflow-y-auto no-scrollbar" showCloseButton={true}>
        <SheetHeader className="p-0 mb-6 text-left">
          <SheetTitle asChild>
            <NavLink to="/" className="flex items-center" onClick={() => setOpen(false)}>
              <span className="font-bold text-lg">Rakit UI</span>
            </NavLink>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div className="text-sm font-medium text-muted-foreground">Menu</div>
            <div className="flex flex-col gap-2 text-[1.05rem] font-medium">
              {mainNav.map((item) => (
                <NavLink key={item.href} to={item.href} onClick={() => setOpen(false)} className="text-foreground/80 transition-colors hover:text-foreground">
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
                    onClick={() => setOpen(false)}
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
      </SheetContent>
    </Sheet>
  )
}
