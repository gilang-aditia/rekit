import { createBrowserRouter, Navigate, type RouteObject } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Installation from './pages/Installation'
import Introduction from './pages/Introduction'
import Theming from './pages/Theming'
import CLI from './pages/CLI'
import Changelog from './pages/Changelog'
import ComingSoon from './pages/ComingSoon'
import ComponentsIndex from './pages/ComponentsIndex'
import DesignIndex from './pages/design/Index'
import DesignHandoff from './pages/design/Handoff'
import DesignLayout from './pages/design/Layout'
import DesignSpacing from './pages/design/Spacing'
import DesignShape from './pages/design/Shape'
import DesignTypography from './pages/design/Typography'
import DesignIcons from './pages/design/Icons'
import DesignElevation from './pages/design/Elevation'
import DesignColor from './pages/design/Color'
import DesignTonal from './pages/design/Tonal'
import DesignComponents from './pages/design/Components'
import DesignWeb from './pages/design/Web'
import ButtonPage from './pages/components/ButtonPage'
import CardPage from './pages/components/CardPage'
import AccordionPage from './pages/components/AccordionPage'
import AlertPage from './pages/components/AlertPage'
import AvatarPage from './pages/components/AvatarPage'
import BadgePage from './pages/components/BadgePage'
import SelectPage from './pages/components/SelectPage'
import DialogPage from './pages/components/DialogPage'
import InputPage from './pages/components/InputPage'
import ToastPage from './pages/components/ToastPage'
import SearchInputPage from './pages/components/SearchInputPage'
import ChartPage from './pages/components/ChartPage'
import { componentsNav, designNav, sectionsNav } from './lib/docs-nav'

/** Halaman yang sudah ditulis, dipetakan dari path-nya di sidebar. */
const pages: Record<string, RouteObject['element']> = {
  '/docs': <Introduction />,
  '/docs/components': <ComponentsIndex />,
  '/docs/installation': <Installation />,
  '/docs/theming': <Theming />,
  '/docs/cli': <CLI />,
  '/docs/changelog': <Changelog />,
  '/docs/components/accordion': <AccordionPage />,
  '/docs/components/alert': <AlertPage />,
  '/docs/components/avatar': <AvatarPage />,
  '/docs/components/badge': <BadgePage />,
  '/docs/components/button': <ButtonPage />,
  '/docs/components/card': <CardPage />,
  '/docs/components/chart': <ChartPage />,
  '/docs/components/dialog': <DialogPage />,
  '/docs/components/input': <InputPage />,
  '/docs/components/search-input': <SearchInputPage />,
  '/docs/components/select': <SelectPage />,
  '/docs/components/toast': <ToastPage />,
}

// Setiap entri sidebar punya route-nya sendiri; yang belum digarap
// jatuh ke halaman ComingSoon supaya tidak ada tautan mati.
const docsRoutes: RouteObject[] = [...sectionsNav, ...componentsNav].map((item) => ({
  path: item.href.replace(/^\//, ''),
  element: pages[item.href] ?? <ComingSoon />,
}))

/** Jalur desainer punya sidebar dan halamannya sendiri. */
const designPages: Record<string, RouteObject['element']> = {
  '/design': <DesignIndex />,
  '/design/handoff': <DesignHandoff />,
  '/design/layout': <DesignLayout />,
  '/design/spacing': <DesignSpacing />,
  '/design/shape': <DesignShape />,
  '/design/typography': <DesignTypography />,
  '/design/icons': <DesignIcons />,
  '/design/elevation': <DesignElevation />,
  '/design/color': <DesignColor />,
  '/design/tonal': <DesignTonal />,
  '/design/components': <DesignComponents />,
  '/design/web': <DesignWeb />,
}

const designRoutes: RouteObject[] = designNav
  .flatMap((group) => group.items)
  .map((item) => ({
    path: item.href.replace(/^\//, ''),
    element: designPages[item.href] ?? <ComingSoon />,
  }))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      ...docsRoutes,
      ...designRoutes,
      { path: 'docs/directory', element: <ComingSoon /> },
      // Path lama sebelum sidebar mengikuti struktur shadcn.
      { path: 'docs/getting-started', element: <Navigate to="/docs" replace /> },
      { path: 'docs/for-designers', element: <Navigate to="/design" replace /> },
      { path: '*', element: <ComingSoon /> },
    ],
  },
])
