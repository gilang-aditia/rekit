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
import Gradients from './pages/Gradients'
import DesignIndex from './pages/design/Index'
import DesignHandoff from './pages/design/Handoff'
import DesignUiKit from './pages/design/UiKit'
import DesignWorkflow from './pages/design/Workflow'
import DesignPrototype from './pages/design/Prototype'
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
import DesignGuidelines from './pages/design/Guidelines'
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
import CheckboxPage from './pages/components/CheckboxPage'
import LabelPage from './pages/components/LabelPage'
import RadioGroupPage from './pages/components/RadioGroupPage'
import SwitchPage from './pages/components/SwitchPage'
import TextareaPage from './pages/components/TextareaPage'
import TooltipPage from './pages/components/TooltipPage'
import PopoverPage from './pages/components/PopoverPage'
import DropdownMenuPage from './pages/components/DropdownMenuPage'
import TabsPage from './pages/components/TabsPage'
import SheetPage from './pages/components/SheetPage'
import AlertDialogPage from './pages/components/AlertDialogPage'
import TablePage from './pages/components/TablePage'
import SkeletonPage from './pages/components/SkeletonPage'
import ProgressPage from './pages/components/ProgressPage'
import SeparatorPage from './pages/components/SeparatorPage'
import SpinnerPage from './pages/components/SpinnerPage'
import CalendarPage from './pages/components/CalendarPage'
import DatePickerPage from './pages/components/DatePickerPage'
import FormPage from './pages/components/FormPage'
import SliderPage from './pages/components/SliderPage'
import AspectRatioPage from './pages/components/AspectRatioPage'
import BreadcrumbPage from './pages/components/BreadcrumbPage'
import CarouselPage from './pages/components/CarouselPage'
import CollapsiblePage from './pages/components/CollapsiblePage'
import ComboboxPage from './pages/components/ComboboxPage'
import CommandPage from './pages/components/CommandPage'
import ContextMenuPage from './pages/components/ContextMenuPage'
import DrawerPage from './pages/components/DrawerPage'
import HoverCardPage from './pages/components/HoverCardPage'
import InputOTPPage from './pages/components/InputOTPPage'
import MenubarPage from './pages/components/MenubarPage'
import NavigationMenuPage from './pages/components/NavigationMenuPage'
import PaginationPage from './pages/components/PaginationPage'
import ResizablePage from './pages/components/ResizablePage'
import ScrollAreaPage from './pages/components/ScrollAreaPage'
import TogglePage from './pages/components/TogglePage'
import ToggleGroupPage from './pages/components/ToggleGroupPage'
import AttachmentPage from './pages/components/AttachmentPage'
import BubblePage from './pages/components/BubblePage'
import ButtonGroupPage from './pages/components/ButtonGroupPage'
import DataTablePage from './pages/components/DataTablePage'
import DirectionPage from './pages/components/DirectionPage'
import EmptyPage from './pages/components/EmptyPage'
import InputGroupPage from './pages/components/InputGroupPage'
import ItemPage from './pages/components/ItemPage'
import KbdPage from './pages/components/KbdPage'
import MarkerPage from './pages/components/MarkerPage'
import MessagePage from './pages/components/MessagePage'
import MessageScrollerPage from './pages/components/MessageScrollerPage'
import NativeSelectPage from './pages/components/NativeSelectPage'
import QuestionnairePage from './pages/components/QuestionnairePage'
import SidebarPage from './pages/components/SidebarPage'
import TypographyPage from './pages/components/TypographyPage'
import { componentsNav, designNav, sectionsNav } from './lib/docs-nav'

/** Halaman yang sudah ditulis, dipetakan dari path-nya di sidebar. */
const pages: Record<string, RouteObject['element']> = {
  '/docs': <Introduction />,
  '/docs/components': <ComponentsIndex />,
  '/docs/installation': <Installation />,
  '/docs/theming': <Theming />,
  '/docs/gradients': <Gradients />,
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
  '/docs/components/checkbox': <CheckboxPage />,
  '/docs/components/label': <LabelPage />,
  '/docs/components/radio-group': <RadioGroupPage />,
  '/docs/components/switch': <SwitchPage />,
  '/docs/components/textarea': <TextareaPage />,
  '/docs/components/tooltip': <TooltipPage />,
  '/docs/components/popover': <PopoverPage />,
  '/docs/components/dropdown-menu': <DropdownMenuPage />,
  '/docs/components/tabs': <TabsPage />,
  '/docs/components/sheet': <SheetPage />,
  '/docs/components/alert-dialog': <AlertDialogPage />,
  '/docs/components/table': <TablePage />,
  '/docs/components/skeleton': <SkeletonPage />,
  '/docs/components/progress': <ProgressPage />,
  '/docs/components/separator': <SeparatorPage />,
  '/docs/components/spinner': <SpinnerPage />,
  '/docs/components/calendar': <CalendarPage />,
  '/docs/components/date-picker': <DatePickerPage />,
  '/docs/components/form': <FormPage />,
  '/docs/components/slider': <SliderPage />,
  '/docs/components/aspect-ratio': <AspectRatioPage />,
  '/docs/components/breadcrumb': <BreadcrumbPage />,
  '/docs/components/carousel': <CarouselPage />,
  '/docs/components/collapsible': <CollapsiblePage />,
  '/docs/components/combobox': <ComboboxPage />,
  '/docs/components/command': <CommandPage />,
  '/docs/components/context-menu': <ContextMenuPage />,
  '/docs/components/drawer': <DrawerPage />,
  '/docs/components/hover-card': <HoverCardPage />,
  '/docs/components/input-otp': <InputOTPPage />,
  '/docs/components/menubar': <MenubarPage />,
  '/docs/components/navigation-menu': <NavigationMenuPage />,
  '/docs/components/pagination': <PaginationPage />,
  '/docs/components/resizable': <ResizablePage />,
  '/docs/components/scroll-area': <ScrollAreaPage />,
  '/docs/components/toggle': <TogglePage />,
  '/docs/components/toggle-group': <ToggleGroupPage />,
  '/docs/components/attachment': <AttachmentPage />,
  '/docs/components/bubble': <BubblePage />,
  '/docs/components/button-group': <ButtonGroupPage />,
  '/docs/components/data-table': <DataTablePage />,
  '/docs/components/direction': <DirectionPage />,
  '/docs/components/empty': <EmptyPage />,
  '/docs/components/input-group': <InputGroupPage />,
  '/docs/components/item': <ItemPage />,
  '/docs/components/kbd': <KbdPage />,
  '/docs/components/marker': <MarkerPage />,
  '/docs/components/message': <MessagePage />,
  '/docs/components/message-scroller': <MessageScrollerPage />,
  '/docs/components/native-select': <NativeSelectPage />,
  '/docs/components/questionnaire': <QuestionnairePage />,
  '/docs/components/sidebar': <SidebarPage />,
  '/docs/components/typography': <TypographyPage />,
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
  '/design/ui-kit': <DesignUiKit />,
  '/design/workflow': <DesignWorkflow />,
  '/design/prototype': <DesignPrototype />,
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
  '/design/guidelines': <DesignGuidelines />,
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
