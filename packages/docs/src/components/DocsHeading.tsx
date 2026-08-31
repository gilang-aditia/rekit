import * as React from 'react'
import { cn } from '@/lib/utils'

function slugify(node: React.ReactNode): string {
  return String(node)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

type HeadingProps = React.ComponentProps<'h2'> & { children: React.ReactNode }

/** Heading dengan anchor "#" yang muncul saat hover, seperti di docs shadcn. */
function Heading({ level, className, children, id, ...props }: HeadingProps & { level: 2 | 3 }) {
  const Tag = level === 2 ? 'h2' : 'h3'
  const slug = id ?? slugify(children)

  return (
    <Tag
      id={slug}
      className={cn(
        'scroll-m-28 font-medium tracking-tight',
        level === 2 ? 'mt-12 text-2xl first:mt-0' : 'mt-8 text-xl',
        className
      )}
      {...props}
    >
      <a href={`#${slug}`} className="group no-underline">
        <span className="underline-offset-4 group-hover:underline">{children}</span>
        <span aria-hidden="true" className="ml-2 text-muted-foreground opacity-0 group-hover:opacity-100">
          #
        </span>
      </a>
    </Tag>
  )
}

export function H2(props: HeadingProps) {
  return <Heading level={2} {...props} />
}

export function H3(props: HeadingProps) {
  return <Heading level={3} {...props} />
}
