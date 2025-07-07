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

export const BacktestResultDiagram = ({ data }) => {
  return (
      <ComposedChart
          width={1900}
          height={900}
          data={data}
          margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
          }}
      >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Area
              type="monotone"
              dataKey="channelBands"
              stroke="none"
              fill="#cccccc"
              dot={false}
              activeDot={false}
          />
          <Line type="natural" dataKey="price" dot={false} activeDot={false} />
          <Scatter name="buy" dataKey="buyPrice" fill="green" />
          <Scatter name="sell" dataKey="sellPrice" fill="red" />
      </ComposedChart>
  );
}

