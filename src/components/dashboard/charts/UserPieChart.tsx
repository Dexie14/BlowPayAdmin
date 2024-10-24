/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mobile", value: 45, color: "#1D76BC" },
  { name: "Tablet", value: 15, color: "#FEB0C3" },
  { name: "Desktop", value: 40, color: "#849AA9" },
];

const COLORS = data.map((item) => item.color);

const UserPieChart = () => {
  const renderLegend = (props: any) => {
    const { payload } = props;
    return (
      <ul className="flex items-center justify-center space-x-3 mt-5 ">
        {payload.map((entry: any, index: number) => (
          <li key={`item-${index}`} className="flex items-center space-x-1">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: entry.color }}
            ></div>
            <span className="text-[10px] text-blueGray">{entry.value}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="bg-white shadow-lg rounded-[12px] py-4 px-1 w-full h-[300px]">
      <h2 className="text-lg font-bold mb-1 text-mediumGray">
        Users By Device
      </h2>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart width={200} height={200} className="my-5">
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" content={renderLegend} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserPieChart;
