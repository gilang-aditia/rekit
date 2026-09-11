import { useEffect, useState } from 'react'
import { useTheme } from '@/components/ThemeProvider'

export type ResolvedTheme = 'light' | 'dark'

function systemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') return 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/**
 * ThemeProvider menyimpan pilihan mentah ('light' | 'dark' | 'system'), sedangkan
 * pemakai biasanya butuh warna yang benar-benar tampil. Hook ini menerjemahkan
 * 'system' dan ikut berubah saat preferensi OS berganti.
 */
export function useResolvedTheme(): ResolvedTheme {
  const { theme } = useTheme()
  const [system, setSystem] = useState<ResolvedTheme>(systemTheme)

  useEffect(() => {
    if (theme !== 'system') return undefined
    const query = window.matchMedia('(prefers-color-scheme: dark)')
    const update = () => setSystem(query.matches ? 'dark' : 'light')
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [theme])

  return theme === 'system' ? system : theme
}
