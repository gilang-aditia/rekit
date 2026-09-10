import * as React from "react"
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type ColumnFiltersState,
  type RowSelectionState,
  type SortingState,
  type Table as TanstackTable,
  type VisibilityState,
} from "@tanstack/react-table"
import { ArrowUpDownIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

/**
 * Tabel data siap pakai di atas TanStack Table: pengurutan, penyaringan,
 * paginasi, dan pemilihan baris. Untuk kebutuhan lanjutan, gunakan `children`
 * sebagai render prop untuk mengakses instance tabelnya.
 */
const DataTable = React.forwardRef(function DataTable<TData, TValue>(
  {
    columns,
    data,
    className,
    enableSorting = true,
    enableFiltering = true,
    enablePagination = true,
    pageSize = 10,
    emptyMessage = "Tidak ada data.",
    onRowSelectionChange,
    children,
    ...props
  }: Omit<React.ComponentPropsWithoutRef<"div">, "children"> & {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    enableSorting?: boolean
    enableFiltering?: boolean
    enablePagination?: boolean
    pageSize?: number
    emptyMessage?: React.ReactNode
    onRowSelectionChange?: (rows: TData[]) => void
    children?: (table: TanstackTable<TData>) => React.ReactNode
  },
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({})

  const table = useReactTable({
    data,
    columns,
    state: { sorting, columnFilters, columnVisibility, rowSelection },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    ...(enableSorting ? { getSortedRowModel: getSortedRowModel() } : {}),
    ...(enableFiltering ? { getFilteredRowModel: getFilteredRowModel() } : {}),
    ...(enablePagination
      ? { getPaginationRowModel: getPaginationRowModel() }
      : {}),
    initialState: { pagination: { pageSize } },
  })

  // Diberitahukan ke pemanggil sebagai baris data, bukan peta indeks.
  const selectedKey = JSON.stringify(rowSelection)
  React.useEffect(() => {
    if (!onRowSelectionChange) return
    onRowSelectionChange(
      table.getFilteredSelectedRowModel().rows.map((row) => row.original)
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedKey])

  return (
    <div
      ref={ref}
      data-slot="data-table"
      className={cn("flex w-full flex-col gap-3", className)}
      {...props}
    >
      {children?.(table)}
      <div className="overflow-hidden rounded-lg border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="bg-muted/50">
                {headerGroup.headers.map((header) => {
                  const canSort = header.column.getCanSort()
                  const sorted = header.column.getIsSorted()

                  return (
                    <TableHead key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder ? null : canSort ? (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="-ml-2.5"
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {sorted === "asc" ? (
                            <ChevronUpIcon />
                          ) : sorted === "desc" ? (
                            <ChevronDownIcon />
                          ) : (
                            <ArrowUpDownIcon className="opacity-50" />
                          )}
                        </Button>
                      ) : (
                        flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )
                      )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() ? "selected" : undefined}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow className="hover:bg-transparent">
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-muted-foreground"
                >
                  {emptyMessage}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {enablePagination && <DataTablePagination table={table} />}
    </div>
  )
}) as <TData, TValue>(
  props: Omit<React.ComponentPropsWithoutRef<"div">, "children"> & {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    enableSorting?: boolean
    enableFiltering?: boolean
    enablePagination?: boolean
    pageSize?: number
    emptyMessage?: React.ReactNode
    onRowSelectionChange?: (rows: TData[]) => void
    children?: (table: TanstackTable<TData>) => React.ReactNode
    ref?: React.ForwardedRef<HTMLDivElement>
  }
) => React.ReactElement

function DataTablePagination<TData>({
  table,
  className,
}: {
  table: TanstackTable<TData>
  className?: string
}) {
  const selectedCount = table.getFilteredSelectedRowModel().rows.length
  const totalCount = table.getFilteredRowModel().rows.length

  return (
    <div
      data-slot="data-table-pagination"
      className={cn(
        "flex flex-wrap items-center justify-between gap-2 text-sm text-muted-foreground",
        className
      )}
    >
      <div>
        {selectedCount > 0
          ? `${selectedCount} dari ${totalCount} baris dipilih.`
          : `${totalCount} baris.`}
      </div>
      <div className="flex items-center gap-2">
        <span className="tabular-nums">
          Halaman {table.getState().pagination.pageIndex + 1} dari{" "}
          {Math.max(1, table.getPageCount())}
        </span>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Sebelumnya
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Berikutnya
        </Button>
      </div>
    </div>
  )
}

export { DataTable, DataTablePagination }
export type { ColumnDef }
