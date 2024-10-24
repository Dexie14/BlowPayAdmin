/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";

const data = [
  {
    name: "8/04",
    moneyIncome: 11000,
  },
  {
    name: "9/04",
    moneyIncome: 7000,
  },
  {
    name: "10/04",
    moneyIncome: 15500,
  },
  {
    name: "11/04",
    moneyIncome: 21000,
  },
  {
    name: "12/04",
    moneyIncome: 33000,
  },
  {
    name: "13/04",
    moneyIncome: 5000,
  },
  {
    name: "14/04",
    uv: 9000,
  },
];

export default function StatsLineChart() {
  type CustomTooltipProps = {
    active?: boolean;
    payload?: any;
    label?: string;
  };

  const convertToTitleCase = (str: string): string => {
    return str
      .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space before uppercase letters
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word
  };

  const CustomLegend = (props: any) => {
    const { payload } = props;

    return (
      <ul className="flex space-x-2  justify-center">
        {payload.map((entry: any, index: number) => (
          <li key={`item-${index}`} className="flex items-center">
            <span
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor: entry.color,
                marginRight: 5,
              }}
            />
            <span className="text-sm">{convertToTitleCase(entry.value)}</span>
          </li>
        ))}
      </ul>
    );
  };

  const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="w-fit h-fit rounded-[4px] bg-blowText p-2 text-xs text-white font-semibold">
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-xs">
              <span className="">
                ${new Intl.NumberFormat().format(entry?.value)}
              </span>
            </p>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart width={500} height={200} data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          tick={{ fill: "#A0A0A0", fontSize: "12" }}
          stroke="none"
          dataKey="name"
          padding={{ left: 30, right: 30 }}
        />
        <YAxis stroke="none" tick={{ fill: "#A0A0A0", fontSize: "12" }} />
        <Tooltip content={<CustomTooltip />} />
        <Legend content={<CustomLegend />} />
        <Line
          type="monotone"
          dataKey="moneyIncome"
          stroke="#FF114A"
          dot={false}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
