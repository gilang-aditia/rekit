export type NavItem = {
  title: string
  href: string
  /** Item ada di sidebar tapi halamannya belum ditulis. */
  soon?: boolean
  /** Titik biru penanda "baru", seperti pada Changelog di shadcn. */
  isNew?: boolean
}

export type NavGroup = {
  title: string
  items: NavItem[]
}

export const sectionsNav: NavItem[] = [
  { title: 'Introduction', href: '/docs' },
  { title: 'Components', href: '/docs/components' },
  { title: 'Installation', href: '/docs/installation' },
  { title: 'Theming', href: '/docs/theming' },
  { title: 'Gradients', href: '/docs/gradients', isNew: true },
  { title: 'CLI', href: '/docs/cli' },
  { title: 'Typeset', href: '/docs/typeset', soon: true },
  { title: 'Skills', href: '/docs/skills', soon: true },
  { title: 'Registry', href: '/docs/registry', soon: true },
  { title: 'Changelog', href: '/docs/changelog', isNew: true },
]


/** Urutan dan penamaan mengikuti sidebar Components milik shadcn/ui. */
export const componentsNav: NavItem[] = [
  { title: 'Accordion', href: '/docs/components/accordion' },
  { title: 'Alert', href: '/docs/components/alert' },
  { title: 'Alert Dialog', href: '/docs/components/alert-dialog' },
  { title: 'Aspect Ratio', href: '/docs/components/aspect-ratio' },
  { title: 'Attachment', href: '/docs/components/attachment', isNew: true },
  { title: 'Avatar', href: '/docs/components/avatar' },
  { title: 'Badge', href: '/docs/components/badge' },
  { title: 'Breadcrumb', href: '/docs/components/breadcrumb' },
  { title: 'Bubble', href: '/docs/components/bubble', isNew: true },
  { title: 'Button', href: '/docs/components/button' },
  { title: 'Button Group', href: '/docs/components/button-group', isNew: true },
  { title: 'Calendar', href: '/docs/components/calendar' },
  { title: 'Card', href: '/docs/components/card' },
  { title: 'Carousel', href: '/docs/components/carousel' },
  { title: 'Chart', href: '/docs/components/chart' },
  { title: 'Checkbox', href: '/docs/components/checkbox' },
  { title: 'Collapsible', href: '/docs/components/collapsible' },
  { title: 'Combobox', href: '/docs/components/combobox' },
  { title: 'Command', href: '/docs/components/command' },
  { title: 'Context Menu', href: '/docs/components/context-menu' },
  { title: 'Data Table', href: '/docs/components/data-table', isNew: true },
  { title: 'Date Picker', href: '/docs/components/date-picker' },
  { title: 'Dialog', href: '/docs/components/dialog' },
  { title: 'Direction', href: '/docs/components/direction', isNew: true },
  { title: 'Drawer', href: '/docs/components/drawer' },
  { title: 'Dropdown Menu', href: '/docs/components/dropdown-menu' },
  { title: 'Empty', href: '/docs/components/empty', isNew: true },
  { title: 'Form', href: '/docs/components/form' },
  { title: 'Hover Card', href: '/docs/components/hover-card' },
  { title: 'Input', href: '/docs/components/input' },
  { title: 'Input Group', href: '/docs/components/input-group', isNew: true },
  { title: 'Input OTP', href: '/docs/components/input-otp' },
  { title: 'Item', href: '/docs/components/item', isNew: true },
  { title: 'Kbd', href: '/docs/components/kbd', isNew: true },
  { title: 'Label', href: '/docs/components/label' },
  { title: 'Marker', href: '/docs/components/marker', isNew: true },
  { title: 'Menubar', href: '/docs/components/menubar' },
  { title: 'Message', href: '/docs/components/message', isNew: true },
  { title: 'Message Scroller', href: '/docs/components/message-scroller', isNew: true },
  { title: 'Native Select', href: '/docs/components/native-select', isNew: true },
  { title: 'Navigation Menu', href: '/docs/components/navigation-menu' },
  { title: 'Pagination', href: '/docs/components/pagination' },
  { title: 'Popover', href: '/docs/components/popover' },
  { title: 'Progress', href: '/docs/components/progress' },
  { title: 'Questionnaire', href: '/docs/components/questionnaire', isNew: true },
  { title: 'Radio Group', href: '/docs/components/radio-group' },
  { title: 'Resizable', href: '/docs/components/resizable' },
  { title: 'Scroll Area', href: '/docs/components/scroll-area' },
  { title: 'Search Input', href: '/docs/components/search-input' },
  { title: 'Select', href: '/docs/components/select' },
  { title: 'Separator', href: '/docs/components/separator' },
  { title: 'Sheet', href: '/docs/components/sheet' },
  { title: 'Sidebar', href: '/docs/components/sidebar', isNew: true },
  { title: 'Skeleton', href: '/docs/components/skeleton' },
  { title: 'Slider', href: '/docs/components/slider' },
  { title: 'Spinner', href: '/docs/components/spinner' },
  { title: 'Switch', href: '/docs/components/switch' },
  { title: 'Table', href: '/docs/components/table' },
  { title: 'Tabs', href: '/docs/components/tabs' },
  { title: 'Textarea', href: '/docs/components/textarea' },
  { title: 'Toast', href: '/docs/components/toast' },
  { title: 'Toggle', href: '/docs/components/toggle' },
  { title: 'Toggle Group', href: '/docs/components/toggle-group' },
  { title: 'Tooltip', href: '/docs/components/tooltip' },
  { title: 'Typography', href: '/docs/components/typography', isNew: true },
]

export const docsNav: NavGroup[] = [
  { title: 'Sections', items: sectionsNav },
  { title: 'Components', items: componentsNav },
]

export const mainNav = [
  { title: 'Home', href: '/' },
  { title: 'Designer', href: '/design' },
  { title: 'Docs', href: '/docs' },
  { title: 'Components', href: '/docs/components' },
  { title: 'Gradients', href: '/docs/gradients' },
  { title: 'Blocks', href: '/blocks' },
  { title: 'Charts', href: '/docs/components/chart' },
  { title: 'Directory', href: '/docs/directory' },
  { title: 'Typeset', href: '/docs/typeset' },
  { title: 'Create', href: '/create' },
]

/**
 * Navigasi khusus jalur desainer. Sengaja terpisah dari sidebar developer:
 * isinya spesifikasi Material 3 dan aturan serah-terima, bukan API komponen.
 */
export const designNav: NavGroup[] = [
  {
    title: 'Mulai',
    items: [
      { title: 'Pengantar', href: '/design' },
      { title: 'UI Kit Figma', href: '/design/ui-kit', isNew: true },
      { title: 'Serah terima', href: '/design/handoff' },
    ],
  },
  {
    title: 'Proses',
    items: [
      { title: 'Alur kerja', href: '/design/workflow', isNew: true },
      { title: 'Prototype', href: '/design/prototype', isNew: true },
    ],
  },
  {
    title: 'Fondasi',
    items: [
      { title: 'Layout & breakpoint', href: '/design/layout' },
      { title: 'Spacing', href: '/design/spacing' },
      { title: 'Bentuk & radius', href: '/design/shape' },
      { title: 'Tipografi', href: '/design/typography' },
      { title: 'Ikon', href: '/design/icons' },
      { title: 'Elevasi', href: '/design/elevation' },
    ],
  },
  {
    title: 'Warna',
    items: [
      { title: 'Sistem warna', href: '/design/color' },
      { title: 'Seed & tonal palette', href: '/design/tonal' },
    ],
  },
  {
    title: 'Ukuran komponen',
    items: [
      { title: 'Daftar ukuran', href: '/design/components' },
      { title: 'Padanan web', href: '/design/web' },
    ],
  },
  {
    title: 'Pedoman',
    items: [
      { title: 'Pedoman UI/UX', href: '/design/guidelines', isNew: true },
    ],
  },
]
