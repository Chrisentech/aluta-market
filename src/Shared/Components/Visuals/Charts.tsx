import React from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

interface DataItem {
	name: string;
	// uv?: number;
	orders: number;
	//   amt: number;
}

// const payload: DataItem[] = [
//   {
//     name: "Sept",
//     uv: 4000,
//     orders: 2400,
//     // amt: 2400,
//   },
//   {
//     name: "Oct",
//     uv: 3000,
//     orders: 1398,
//     // amt: 2210,
//   },
//   {
//     name: "Jan",
//     uv: 2000,
//     orders: 9800,
//     // amt: 2290,
//   },
//   {
//     name: "Feb",
//     uv: 2780,
//     orders: 3908,
//     // amt: 2000,
//   },
//   {
//     name: "March",
//     uv: 1890,
//     orders: 4800,
//     // amt: 2181,
//   },
//   {
//     name: "April",
//     uv: 2390,
//     orders: 3800,
//     // amt: 2500,
//   },
//   {
//     name: "May",
//     uv: 3490,
//     orders: 4300,
//     // amt: 2100,
//   },
//   {
//     name: "June",
//     uv: 3490,
//     orders: 4300,
//     // amt: 2100,
//   },
//   {
//     name: "July",
//     uv: 3490,
//     orders: 4300,
//     // amt: 2100,
//   },
//   {
//     name: "Aug",
//     uv: 3490,
//     orders: 4300,
//     // amt: 2100,
//   },
// ];
const payload: DataItem[] = [
	{
		name: "Sept",
		orders: 9800,
		// amt: 24000,
	},
	{
		name: "Oct",
		// uv: 3000,
		orders: 9800,
		// amt: 2210,
	},
	{
		name: "Nov",
		// uv: 2000,
		orders: 9800,
		// amt: 2290,
	},
	{
		name: "Dec",
		// uv: 2780,
		orders: 9800,
		// amt: 2000,
	},
	{
		name: "Jan",
		// uv: 1890,
		orders: 9800,
		// amt: 2181,
	},
	{
		name: "Feb",
		// uv: 2390,
		orders: 9800,
		// amt: 2500,
	},
];
const dotStyles = {
	boxShadow: "0 0 6px 1px rgba(0, 0, 0, 0.3)",
	borderRadius: "50%",
	width: "12px",
	height: "12px",
	backgroundColor: "white",
};

const Chart: React.FC<any> = ({ data }) => {
	return (
		<ResponsiveContainer width="100%" height={180}>
			<LineChart
				data={data ? data : payload}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				{/* <CartesianGrid strokeDasharray="3 3" stroke="#f00" /> */}
				<XAxis dataKey="name" />
				{/* <YAxis /> */} insert the flex
				<Tooltip />
				{/* <Legend /> */}
				<Line
					type="monotone"
					dataKey="orders"
					dot={dotStyles}
					strokeWidth={5}
					stroke="#0D6EFD"
					activeDot={{ r: 8, stroke: "#fff" }}
					fill="#0D6EFD"
				/>
			</LineChart>
		</ResponsiveContainer>
	);
};

export default Chart;
