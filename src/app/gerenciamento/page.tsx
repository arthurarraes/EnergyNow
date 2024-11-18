"use client"
import { Bar, BarChart, CartesianGrid, XAxis, Line, LineChart } from "recharts"

import {
  Card,
  CardContent
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", precokWhE: 186, precokWhN: 80, precokWhR: 50},
  { month: "February", precokWhE: 305, precokWhN: 200, precokWhR: 70 },
  { month: "March", precokWhE: 237, precokWhN: 120, precokWhR: 90 },
  { month: "April", precokWhE: 73, precokWhN: 190, precokWhR: 50 },
  { month: "May", precokWhE: 209, precokWhN: 22, precokWhR: 90 },
  { month: "June", precokWhE: 214, precokWhN: 140, precokWhR: 100 },
]

const chartConfig = {
  precokWhE: {
    label: "Conta com Mudança de hábito",
    color: "#bae6fd",
  },
  precokWhN: {
    label: "Conta Normal",
    color: "#a793fd",
  },
  precokWhR: {
    label: "Conta com Energia Limpa",
    color: "#93fd93",
  },
} satisfies ChartConfig

    


export default function Gerenciamento() {
    return (
      <main className="flex items-center flex-col bg-gray-100 p-3">
        <div className="bg-white rounded-md p-5 text-center m-3 w-10/12">
          <h1 className=" text-xl md:text-2xl mx-auto pb-3">Atual</h1>
          <div className="flex items-center justify-center">
          <Card className="w-full">
            <CardContent>
              <ChartContainer config={chartConfig}>
                <LineChart
                  accessibilityLayer
                  data={chartData}
                  margin={{
                    left: 12,
                    right: 12,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Line
                    dataKey="precokWhN"
                    type="linear"
                    stroke="var(--color-precokWhN)"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
          
    </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-10/12">
          <div className="bg-gray-200 rounded-md p-3 text-center">
            <h1 className="text-xl md:text-2xl mx-auto pb-3">Projeção com mudança de hábitos</h1>
            <Card>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dashed" />}
                />
                <Bar dataKey="precokWhE" fill="var(--color-precokWhE)" radius={4} />
                <Bar dataKey="precokWhN" fill="var(--color-precokWhN)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
      </Card>
          </div>
          <div className="bg-gray-200 rounded-md p-3 text-center">
          <h1 className="text-xl md:text-2xl mx-auto pb-3">Projeção com Energia Limpa</h1>
          <Card>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dashed" />}
                />
                <Bar dataKey="precokWhE" fill="var(--color-precokWhE)" radius={4} />
                <Bar dataKey="precokWhR" fill="var(--color-precokWhR)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
      </Card>
          </div>
        </div>
      </main>
    );
  }