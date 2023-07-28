import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface DataItem {
  name: string;
  value: number;
}

const data: DataItem[] = [
  { name: "Link", value: 63 },
  { name: "Search", value: 37 },
];

const COLORS = ["#FF9017", "#2776EA", "#FFBB28", "#FF8042"];



const PieChartComponent: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
