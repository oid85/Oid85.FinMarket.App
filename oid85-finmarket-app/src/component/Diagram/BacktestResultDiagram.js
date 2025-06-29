import React from 'react';
import {
  ComposedChart,
  Line,
  Scatter,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  DefaultLegendContent,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: "Page A",
    a: [0, 0],
    b: 0,
    green: 10
  },
  {
    name: "Page B",
    a: [50, 300],
    b: 106,
    green: 100
  },
  {
    name: "Page C",
    a: [150, 423],
    b: 110,
    green: 250
  }
];

export default function Example() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
      width={500}
      height={400}
      data={data}
      margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
      }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Area
            type="monotone"
            dataKey="a"
            stroke="none"
            fill="#cccccc"            
            dot={false}
            activeDot={false}
        />       
        <Line type="natural" dataKey="b" dot={false} activeDot={false} />
        <Scatter name="green" dataKey="green" fill="green" />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

