import { Link, useLocation } from 'react-router-dom'
import { componentsNav, mainNav, sectionsNav } from '@/lib/docs-nav'

/**
 * Halaman untuk entri sidebar yang sudah ada di daftar shadcn tapi
 * komponennya belum tersedia di Rakit UI.
 */
export default function ComingSoon() {
  const { pathname } = useLocation()
  const item = [...sectionsNav, ...componentsNav, ...mainNav].find((entry) => entry.href === pathname)
  const title = item?.title ?? 'Halaman'

  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Halaman ini belum tersedia di Rakit UI.
        </p>
      </div>

      <div className="flex flex-col gap-4 rounded-xl bg-surface p-6 text-sm text-surface-foreground">
        <p>
          <span className="font-medium text-foreground">{title}</span> ada di daftar komponen shadcn/ui
          dan sudah disiapkan tempatnya di sini, tapi implementasinya masih dalam pengerjaan.
        </p>
        <p className="text-muted-foreground">
          Sementara ini kamu bisa menelusuri komponen yang sudah siap pakai lewat halaman{' '}
          <Link to="/docs/components" className="font-medium text-foreground underline underline-offset-4">
            Components
          </Link>
          .
        </p>
      </div>
    </>
  )
}
