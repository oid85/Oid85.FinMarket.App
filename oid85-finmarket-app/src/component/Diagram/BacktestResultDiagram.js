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
import {CONSTANTS} from "../../constants";

export const BacktestResultDiagram = ({ data }) => {
  return (
      <React.Fragment>
        <div className='backtest-result-diagram-container'>
          <ComposedChart width={1900} height={900} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0, }} >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Area type="monotone" dataKey="channelBands" stroke="none" fill="#cccccc" dot={false} activeDot={false} />
            <Line type="natural" dataKey="price" dot={false} activeDot={false} stroke={CONSTANTS.COLOR_MIDNIGHTBLUE} />
            <Scatter name="buy" dataKey="buyPrice" fill={CONSTANTS.COLOR_DARKGREEN} />
            <Scatter name="sell" dataKey="sellPrice" fill={CONSTANTS.COLOR_DARKRED} />
          </ComposedChart>
          <ComposedChart width={1900} height={300} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0, }} >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Line type="natural" dataKey="equity" dot={false} activeDot={false} stroke={CONSTANTS.COLOR_DARKGREEN} />
          </ComposedChart>
          <ComposedChart width={1900} height={300} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0, }} >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Line type="natural" dataKey="drawdown" dot={false} activeDot={false} stroke={CONSTANTS.COLOR_DARKRED} />
          </ComposedChart>
        </div>
      </React.Fragment>
  );
}

