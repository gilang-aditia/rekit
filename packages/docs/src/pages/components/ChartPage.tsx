import { H2 } from '@/components/DocsHeading';
import { ComponentPreview } from '../../components/ComponentPreview';
import { InstallTabs } from '../../components/InstallTabs';
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@rakit-ui/library"

const chartData = [
  { month: "Januari", desktop: 186, mobile: 80 },
  { month: "Februari", desktop: 305, mobile: 200 },
  { month: "Maret", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "Mei", desktop: 209, mobile: 130 },
  { month: "Juni", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--color-blue-600)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--color-blue-400)",
  },
} satisfies ChartConfig

export default function ChartPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Chart</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Sistem grafik yang cantik menggunakan Recharts. Memberikan style otomatis menggunakan CSS Variables.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <H2>Instalasi</H2>
        <InstallTabs cliCommand="add chart" />
      </div>

      <div className="flex flex-col gap-4">
        <H2>Penggunaan</H2>
        <p className="text-muted-foreground">
          Ini adalah fondasi grafik. Kamu dapat merakit diagram garis, diagram batang, maupun diagram pie menggunakan Recharts dan membungkusnya dalam <code>ChartContainer</code> dari komponen ini agar otomatis tersinkronisasi dengan tema (termasuk Dark Mode).
        </p>
        <ComponentPreview
          code={`import { Bar, BarChart } from "recharts"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

const chartData = [
  { month: "Januari", desktop: 186, mobile: 80 },
  { month: "Februari", desktop: 305, mobile: 200 },
  { month: "Maret", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "Mei", desktop: 209, mobile: 130 },
  { month: "Juni", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--color-blue-600)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--color-blue-400)",
  },
} satisfies ChartConfig

export function ChartDemo() {
  return (
    <ChartContainer config={chartConfig} className="min-h-50 w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}`}
        >
          <div className="flex w-full justify-center">
            <ChartContainer config={chartConfig} className="min-h-50 w-full max-w-lg">
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
              </BarChart>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-red-500 font-bold">
                TEST VISIBILITY
              </div>
            </ChartContainer>
          </div>
        </ComponentPreview>
      </div>
    </>
  );
}
