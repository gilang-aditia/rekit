import { H2 } from '@/components/DocsHeading';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@rakit-ui/library';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

export default function TablePage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Table</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Tabel data yang responsif.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add table" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function TableDemo() {
  return (
    <Table>
      <TableCaption>Daftar invoice terbaru Anda.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-25">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Metode</TableHead>
          <TableHead className="text-right">Jumlah</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Lunas</TableCell>
          <TableCell>Kartu Kredit</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}`}
        >
          <div className="w-full">
            <Table>
              <TableCaption>Daftar invoice terbaru Anda.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-25">Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Metode</TableHead>
                  <TableHead className="text-right">Jumlah</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>Lunas</TableCell>
                  <TableCell>Kartu Kredit</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">INV002</TableCell>
                  <TableCell>Tertunda</TableCell>
                  <TableCell>PayPal</TableCell>
                  <TableCell className="text-right">$150.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </ComponentPreview>
      </div>
    </>
  );
}
