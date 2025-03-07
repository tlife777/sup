"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Label,
  LabelList,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  Rectangle,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Separator } from "@/components/ui/separator";
import {
  Activity,
  ClipboardCheck,
  Clock,
  Icon,
  NotebookPen,
  Scale,
  Waves,
} from "lucide-react";
import { flowerLotus } from "@lucide/lab";

const autorreflexaoData = [
  {
    activity: "stand",
    value: (8 / 12) * 100,
    label: "8/12 hr",
    fill: "var(--color-stand)",
  },
];

const meditacaoData = [
  {
    activity: "exercise",
    value: (5 / 15) * 100,
    label: "5/15 min",
    fill: "var(--color-exercise)",
  },
];

const hobbyData = [
  {
    activity: "move",
    value: (60 / 120) * 100,
    label: "60/120 min",
    fill: "var(--color-move)",
  },
];

export function Overview() {
  return (
    <div className="chart-wrapper mx-auto flex max-w-6xl flex-col flex-wrap items-start justify-center gap-6 p-6 sm:flex-row sm:p-8">
      <div className="grid w-full gap-6 sm:grid-cols-2 lg:max-w-[22rem] lg:grid-cols-1 xl:max-w-[25rem]">
        <Card
          className="lg:max-w-md bg-gradient-to-br from-sky-300 via-indigo-300 to-violet-400 shadow-md border-solid"
          x-chunk="charts-01-chunk-4"
        >
          <CardHeader className="flex flex-row justify-between items-center p-4 pb-0">
            <CardTitle className="text-2xl font-bold text-blue-900">
              Metas do dia
            </CardTitle>
            <ClipboardCheck className="text-blue-900" size={30} />
          </CardHeader>
          <CardContent className="grid p-4 gap-2">
            <div className="flex flex-row gap-2 w-full items-center">
              <NotebookPen className="text-blue-800" size={30} />
              <div className="flex flex-col">
                <div className="flex text-lg font-semibold text-blue-800 items-start w-72">
                  Autorreflexão
                </div>
                <ChartContainer
                  config={{
                    steps: {
                      label: "Steps",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                  className="aspect-auto h-[32px] w-full"
                >
                  <BarChart
                    accessibilityLayer
                    layout="vertical"
                    margin={{
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                    }}
                    data={[
                      {
                        date: "73/120 min",
                        steps: 12435,
                      },
                    ]}
                  >
                    <Bar
                      dataKey="steps"
                      fill="hsl(var(--secondary))"
                      radius={10}
                      barSize={70}
                    >
                      <LabelList
                        position="insideLeft"
                        dataKey="date"
                        offset={8}
                        fontSize={12}
                        fill="white"
                      />
                    </Bar>
                    <YAxis dataKey="date" type="category" tickCount={1} hide />
                    <XAxis dataKey="steps" type="number" hide />
                  </BarChart>
                </ChartContainer>
              </div>
            </div>
            <div className="flex flex-row gap-2 w-full items-center">
              <Icon
                iconNode={flowerLotus}
                className="text-blue-800"
                size={30}
              />
              <div className="flex flex-col">
                <div className="flex text-lg font-semibold text-blue-800 items-start w-72">
                  Meditação
                </div>
                <ChartContainer
                  config={{
                    steps: {
                      label: "Steps",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                  className="aspect-auto h-[32px] w-full"
                >
                  <BarChart
                    accessibilityLayer
                    layout="vertical"
                    margin={{
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                    }}
                    data={[
                      {
                        date: "5/15 min",
                        steps: 12435,
                      },
                    ]}
                  >
                    <Bar
                      dataKey="steps"
                      fill="hsl(var(--secondary))"
                      radius={10}
                      barSize={40}
                    >
                      <LabelList
                        position="insideLeft"
                        dataKey="date"
                        offset={8}
                        fontSize={12}
                        fill="white"
                      />
                    </Bar>
                    <YAxis dataKey="date" type="category" tickCount={1} hide />
                    <XAxis dataKey="steps" type="number" hide />
                  </BarChart>
                </ChartContainer>
              </div>
            </div>
            <div className="flex flex-row gap-2 w-full items-center">
              <Activity className="text-blue-800" size={30} />
              <div className="flex flex-col">
                <div className="flex text-lg font-semibold text-blue-800 items-start w-72">
                  Hobby
                </div>
                <ChartContainer
                  config={{
                    steps: {
                      label: "Steps",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                  className="aspect-auto h-[32px] w-full"
                >
                  <BarChart
                    accessibilityLayer
                    layout="vertical"
                    margin={{
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                    }}
                    data={[
                      {
                        date: "73/120 min",
                        steps: 12435,
                      },
                    ]}
                  >
                    <Bar
                      dataKey="steps"
                      fill="hsl(var(--secondary))"
                      radius={10}
                      barSize={32}
                    >
                      <LabelList
                        position="insideLeft"
                        dataKey="date"
                        offset={8}
                        fontSize={12}
                        fill="white"
                      />
                    </Bar>
                    <YAxis dataKey="date" type="category" tickCount={1} hide />
                    <XAxis dataKey="steps" type="number" hide />
                  </BarChart>
                </ChartContainer>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-row border-t border-b-slate-950 p-4">
            <div className="flex w-full items-center gap-2 border-b-0">
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-xs text-slate-50">Move</div>
                <div className="flex items-baseline gap-1 text-purple-700 text-2xl font-bold tabular-nums leading-none">
                  562
                  <span className="text-sm font-normal text-purple-700">
                    kcal
                  </span>
                </div>
              </div>
              <Separator orientation="vertical" className="mx-2 h-10 w-px" />
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-xs text-slate-50">Exercise</div>
                <div className="flex items-baseline gap-1 text-purple-700 text-2xl font-bold tabular-nums leading-none">
                  73
                  <span className="text-sm font-normal text-purple-700">
                    min
                  </span>
                </div>
              </div>
              <Separator orientation="vertical" className="mx-2 h-10 w-px" />
              <div className="grid flex-1 auto-rows-min gap-0.5">
                <div className="text-xs text-slate-50">Stand</div>
                <div className="flex items-baseline gap-1 text-purple-700 text-2xl font-bold tabular-nums leading-none">
                  14
                  <span className="text-sm font-normal text-purple-700">
                    hr
                  </span>
                </div>
              </div>
            </div>
          </CardFooter>
        </Card>
        <Card
          className="lg:max-w-md bg-gradient-to-br from-sky-300 via-indigo-300 to-violet-400 shadow-md"
          x-chunk="charts-01-chunk-7"
        >
          <CardHeader className="flex flex-col justify-between p-4 pb-0">
            <div className="flex flex-row justify-between">
              <CardTitle className="text-2xl font-bold text-purple-900">
                Tempo de meditação
              </CardTitle>
              <Clock className="text-purple-900" size={30} />
            </div>
            <div className="flex w-full">
              <div className="w-1/2">
                <CardDescription className="text-slate-50">
                  Média por sessão
                </CardDescription>
                <CardTitle className="flex items-baseline text-purple-900 gap-1 text-4xl">
                  5
                  <span className="text-sm font-normal tracking-normal text-slate-50">
                    min
                  </span>
                </CardTitle>
              </div>
              <div className="w-1/2">
                <CardDescription className="text-slate-50">
                  Total
                </CardDescription>
                <div className="flex flex-row">
                  <CardTitle className="flex items-baseline text-purple-900 gap-1 text-4xl">
                    35
                    <span className="text-sm font-normal tracking-normal text-slate-50">
                      h
                    </span>
                  </CardTitle>
                  <CardTitle className="flex items-baseline text-purple-900 gap-1 text-4xl">
                    17
                    <span className="text-sm font-normal tracking-normal text-slate-50">
                      min
                    </span>
                  </CardTitle>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ChartContainer
              config={{
                time: {
                  label: "Time",
                  color: "hsl(var(--chart-2))",
                },
              }}
            >
              <AreaChart
                accessibilityLayer
                data={[
                  {
                    date: "2024-01-01",
                    time: 8.5,
                  },
                  {
                    date: "2024-01-02",
                    time: 7.2,
                  },
                  {
                    date: "2024-01-03",
                    time: 8.1,
                  },
                  {
                    date: "2024-01-04",
                    time: 6.2,
                  },
                  {
                    date: "2024-01-05",
                    time: 5.2,
                  },
                  {
                    date: "2024-01-06",
                    time: 8.1,
                  },
                  {
                    date: "2024-01-07",
                    time: 7.0,
                  },
                ]}
                margin={{
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                }}
              >
                <XAxis dataKey="date" hide />
                <YAxis domain={["dataMin - 5", "dataMax + 2"]} hide />
                <defs>
                  <linearGradient id="fillTime" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-time)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-time)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="time"
                  type="natural"
                  fill="url(#fillTime)"
                  fillOpacity={0.4}
                  stroke="var(--color-time)"
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                  formatter={(value) => (
                    <div className="flex min-w-[120px] items-center text-xs text-muted-foreground">
                      Time in bed
                      <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                        {value}
                        <span className="font-normal text-muted-foreground">
                          hr
                        </span>
                      </div>
                    </div>
                  )}
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="lg:max-w-md" x-chunk="charts-01-chunk-0">
          <CardHeader className="space-y-0 pb-2">
            <CardDescription>Today</CardDescription>
            <CardTitle className="text-4xl tabular-nums">
              12,584{" "}
              <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
                steps
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                steps: {
                  label: "Steps",
                  color: "hsl(var(--chart-1))",
                },
              }}
            >
              <BarChart
                accessibilityLayer
                margin={{
                  left: -4,
                  right: -4,
                }}
                data={[
                  {
                    date: "2024-01-01",
                    steps: 2000,
                  },
                  {
                    date: "2024-01-02",
                    steps: 2100,
                  },
                  {
                    date: "2024-01-03",
                    steps: 2200,
                  },
                  {
                    date: "2024-01-04",
                    steps: 1300,
                  },
                  {
                    date: "2024-01-05",
                    steps: 1400,
                  },
                  {
                    date: "2024-01-06",
                    steps: 2500,
                  },
                  {
                    date: "2024-01-07",
                    steps: 1600,
                  },
                ]}
              >
                <Bar
                  dataKey="steps"
                  fill="var(--color-steps)"
                  radius={5}
                  fillOpacity={0.6}
                  activeBar={<Rectangle fillOpacity={0.8} />}
                />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={4}
                  tickFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      weekday: "short",
                    });
                  }}
                />
                <ChartTooltip
                  defaultIndex={2}
                  content={
                    <ChartTooltipContent
                      hideIndicator
                      labelFormatter={(value) => {
                        return new Date(value).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        });
                      }}
                    />
                  }
                  cursor={false}
                />
                <ReferenceLine
                  y={1200}
                  stroke="hsl(var(--muted-foreground))"
                  strokeDasharray="3 3"
                  strokeWidth={1}
                >
                  <Label
                    position="insideBottomLeft"
                    value="Average Steps"
                    offset={10}
                    fill="hsl(var(--foreground))"
                  />
                  <Label
                    position="insideTopLeft"
                    value="12,343"
                    className="text-lg"
                    fill="hsl(var(--foreground))"
                    offset={10}
                    startOffset={100}
                  />
                </ReferenceLine>
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col items-start gap-1">
            <CardDescription>
              Over the past 7 days, you have walked{" "}
              <span className="font-medium text-foreground">53,305</span> steps.
            </CardDescription>
            <CardDescription>
              You need{" "}
              <span className="font-medium text-foreground">12,584</span> more
              steps to reach your goal.
            </CardDescription>
          </CardFooter>
        </Card>
      </div>
      <div className="grid w-full flex-1 gap-6 lg:max-w-[20rem]">
        
        <Card className="max-w-xs" x-chunk="charts-01-chunk-3">
          <CardHeader className="p-4 pb-0">
            <CardTitle>Walking Distance</CardTitle>
            <CardDescription>
              Over the last 7 days, your distance walked and run was 12.5 miles
              per day.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-row items-baseline gap-4 p-4 pt-0">
            <div className="flex items-baseline gap-1 text-3xl font-bold tabular-nums leading-none">
              12.5
              <span className="text-sm font-normal text-muted-foreground">
                miles/day
              </span>
            </div>
            <ChartContainer
              config={{
                steps: {
                  label: "Steps",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="ml-auto w-[72px]"
            >
              <BarChart
                accessibilityLayer
                margin={{
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                }}
                data={[
                  {
                    date: "2024-01-01",
                    steps: 2000,
                  },
                  {
                    date: "2024-01-02",
                    steps: 2100,
                  },
                  {
                    date: "2024-01-03",
                    steps: 2200,
                  },
                  {
                    date: "2024-01-04",
                    steps: 1300,
                  },
                  {
                    date: "2024-01-05",
                    steps: 1400,
                  },
                  {
                    date: "2024-01-06",
                    steps: 2500,
                  },
                  {
                    date: "2024-01-07",
                    steps: 1600,
                  },
                ]}
              >
                <Bar
                  dataKey="steps"
                  fill="var(--color-steps)"
                  radius={2}
                  fillOpacity={0.2}
                  activeIndex={6}
                  activeBar={<Rectangle fillOpacity={0.8} />}
                />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={4}
                  hide
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
      <div className="grid w-full flex-1 gap-6">
        <Card className="max-w-xs" x-chunk="charts-01-chunk-6">
          <CardHeader className="p-4 pb-0">
            <CardTitle>Active Energy</CardTitle>
            <CardDescription>
              Youre burning an average of 754 calories per day. Good job!
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-row items-baseline gap-4 p-4 pt-2">
            <div className="flex items-baseline gap-2 text-3xl font-bold tabular-nums leading-none">
              1,254
              <span className="text-sm font-normal text-muted-foreground">
                kcal/day
              </span>
            </div>
            <ChartContainer
              config={{
                calories: {
                  label: "Calories",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="ml-auto w-[64px]"
            >
              <BarChart
                accessibilityLayer
                margin={{
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                }}
                data={[
                  {
                    date: "2024-01-01",
                    calories: 354,
                  },
                  {
                    date: "2024-01-02",
                    calories: 514,
                  },
                  {
                    date: "2024-01-03",
                    calories: 345,
                  },
                  {
                    date: "2024-01-04",
                    calories: 734,
                  },
                  {
                    date: "2024-01-05",
                    calories: 645,
                  },
                  {
                    date: "2024-01-06",
                    calories: 456,
                  },
                  {
                    date: "2024-01-07",
                    calories: 345,
                  },
                ]}
              >
                <Bar
                  dataKey="calories"
                  fill="var(--color-calories)"
                  radius={2}
                  fillOpacity={0.2}
                  activeIndex={6}
                  activeBar={<Rectangle fillOpacity={0.8} />}
                />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={4}
                  hide
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
