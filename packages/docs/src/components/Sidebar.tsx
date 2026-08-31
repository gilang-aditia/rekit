import * as React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { designNav, docsNav, type NavItem } from '@/lib/docs-nav'

const menuButtonClass = cn(
  'peer/menu-button relative flex h-[30px] w-fit items-center gap-2 overflow-visible rounded-md border border-transparent p-2 text-left text-[0.8rem] font-medium outline-hidden ring-sidebar-ring transition-[width,height,padding]',
  'after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md',
  'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
  'focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground',
  'aria-disabled:pointer-events-none aria-disabled:opacity-50',
  'data-[active=true]:border-accent data-[active=true]:bg-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground',
  '[&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0',
  '3xl:w-full 3xl:max-w-48'
)

function SidebarMenuItem({ item }: { item: NavItem }) {
  return (
    <li data-slot="sidebar-menu-item" data-sidebar="menu-item" className="group/menu-item relative">
      <NavLink
        to={item.href}
        end
        data-slot="sidebar-menu-button"
        data-sidebar="menu-button"
        data-size="default"
        className={({ isActive }) =>
          cn(menuButtonClass, item.soon && 'text-muted-foreground', isActive && 'border-accent bg-accent text-sidebar-accent-foreground')
        }
      >
        {/* Memperlebar area klik hingga selebar kolom menu. */}
        <span className="absolute inset-0 flex w-(--sidebar-menu-width) bg-transparent" />
        {item.title}
        {item.isNew && (
          <span className="flex size-2 rounded-full bg-blue-500" title="New" />
        )}
      </NavLink>
    </li>
  )
}

export default function Sidebar() {
  const { pathname } = useLocation()
  const contentRef = React.useRef<HTMLDivElement>(null)
  // Jalur desainer dan jalur developer punya daftar isi yang berbeda.
  const groups = pathname.startsWith('/design') ? designNav : docsNav

  // Daftar komponennya panjang; bawa item yang sedang dibuka ke tengah viewport sidebar.
  React.useEffect(() => {
    const active = contentRef.current?.querySelector('[aria-current="page"]')
    active?.scrollIntoView({ block: 'center' })
  }, [pathname])

  return (
    <div
      ref={contentRef}
      data-slot="sidebar-content"
      data-sidebar="content"
      className="scroll-fade no-scrollbar flex min-h-0 w-(--sidebar-menu-width) flex-1 flex-col gap-2 overflow-auto overflow-x-hidden pl-2.5"
    >
      {groups.map((group, index) => (
        <div
          key={group.title}
          data-slot="sidebar-group"
          data-sidebar="group"
          className={cn('relative flex w-full min-w-0 flex-col p-2', index === 0 && 'pt-12')}
        >
          <div
            data-slot="sidebar-group-label"
            data-sidebar="group-label"
            className="flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-muted-foreground outline-hidden ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2"
          >
            {group.title}
          </div>
          <div data-slot="sidebar-group-content" data-sidebar="group-content" className="w-full text-sm">
            <ul data-slot="sidebar-menu" data-sidebar="menu" className="flex w-full min-w-0 flex-col gap-1">
              {group.items.map((item) => (
                <SidebarMenuItem key={item.href} item={item} />
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
