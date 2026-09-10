import { H2 } from '@/components/DocsHeading';
import { Badge, DataTable, type ColumnDef } from 'rakit-ui';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';

type Pesanan = {
  id: string;
  pelanggan: string;
  status: 'lunas' | 'menunggu';
  total: number;
};

const data: Pesanan[] = [
  { id: 'INV-001', pelanggan: 'Rangga', status: 'lunas', total: 250000 },
  { id: 'INV-002', pelanggan: 'Sari', status: 'menunggu', total: 120000 },
  { id: 'INV-003', pelanggan: 'Bima', status: 'lunas', total: 480000 },
  { id: 'INV-004', pelanggan: 'Nadia', status: 'menunggu', total: 95000 },
];

const columns: ColumnDef<Pesanan>[] = [
  { accessorKey: 'id', header: 'Invoice' },
  { accessorKey: 'pelanggan', header: 'Pelanggan' },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <Badge variant={row.original.status === 'lunas' ? 'secondary' : 'outline'}>
        {row.original.status}
      </Badge>
    ),
  },
  {
    accessorKey: 'total',
    header: 'Total',
    cell: ({ row }) =>
      row.original.total.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0,
      }),
  },
];

export default function DataTablePage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Data Table</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Tabel data di atas TanStack Table: pengurutan, penyaringan, paginasi,
          dan pemilihan baris.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add data-table" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <ComponentPreview
          code={`import { DataTable, type ColumnDef } from "@/components/ui/data-table"

type Pesanan = {
  id: string
  pelanggan: string
  total: number
}

const columns: ColumnDef<Pesanan>[] = [
  { accessorKey: "id", header: "Invoice" },
  { accessorKey: "pelanggan", header: "Pelanggan" },
  { accessorKey: "total", header: "Total" },
]

export function DataTableDemo() {
  return <DataTable columns={columns} data={data} pageSize={3} />
}`}
        >
          <div className="w-full text-left">
            <DataTable columns={columns} data={data} pageSize={3} />
          </div>
        </ComponentPreview>
      </div>
    </>
  );
}
