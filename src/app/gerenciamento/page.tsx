"use client";

import { useState, useEffect, useContext } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, Line, LineChart } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { AuthContext } from "../context";

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
} satisfies ChartConfig;

interface EconomiaData {
  economiaE: number;
  economiaR: number;
}

export default function Gerenciamento() {
  const { user } = useContext(AuthContext);
  const [chartData, setChartData] = useState([]);
  const [economia, setEconomia] = useState<EconomiaData[]>([]); // Defina o tipo correto aqui

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8080/gerenciamento/getLista/${user?.email}/2`);
      const data = await response.json();
      console.log(data);

      const transformedData = data.map((item: { month: any; precokWhE: any; precokWhN: any; precokWhR: any; }) => ({
        month: item.month,
        precokWhE: item.precokWhE,
        precokWhN: item.precokWhN,
        precokWhR: item.precokWhR,
      }));

      const economia = data.map((item: { economiaE: any; economiaR: any }) => ({
        economiaE: item.economiaE,
        economiaR: item.economiaR
      }));

      setEconomia(economia);
      setChartData(transformedData);
    };

    fetchData();
  }, []);

  // Verifica se existe dados em economia antes de acessar
  const ultimaEconomia = economia.length > 0 ? economia[economia.length - 1] : null;

  return (
    <main className="flex items-center flex-col bg-gray-100 p-3">
      <div className="bg-white rounded-md p-5 text-center m-3 w-10/12">
        <h1 className="text-xl md:text-2xl mx-auto pb-3">Atual</h1>
        <div className="flex items-center justify-center">
          <Card className="w-3/4">
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
                  <Line
                    dataKey="precokWhE"
                    type="linear"
                    stroke="var(--color-precokWhE)"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    dataKey="precokWhR"
                    type="linear"
                    stroke="var(--color-precokWhR)"
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
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dashed" />}
                  />
                  <Bar dataKey="precokWhN" fill="var(--color-precokWhN)" radius={4} />
                  <Bar dataKey="precokWhE" fill="var(--color-precokWhE)" radius={4} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
          {ultimaEconomia && (
            <div>
              <p className=" pt-2">Economia para o próximo mês com mudança de hábito:</p>
              <p>R$ {ultimaEconomia.economiaE}</p>
            </div>
      )}
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
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dashed" />}
                  />
                  <Bar dataKey="precokWhN" fill="var(--color-precokWhN)" radius={4} />
                  <Bar dataKey="precokWhR" fill="var(--color-precokWhR)" radius={4} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
          {ultimaEconomia && (
            <div>
              <p className=" pt-2">Economia para o próximo mês com energia limpa:</p>
              <p>R$ {ultimaEconomia.economiaR}</p>
            </div>
      )}
        </div>
      </div>
    </main>
  );
}
