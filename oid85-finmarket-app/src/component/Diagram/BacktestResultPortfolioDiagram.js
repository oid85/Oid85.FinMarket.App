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

export const BacktestResultPortfolioDiagram = ({ data }) => {
  return (
      <React.Fragment>
        <div className='backtest-result-diagram-container'>
          <ComposedChart width={1900} height={700} data={data} margin={{top: 0, right: 0, left: 0, bottom: 0,}}>
            <CartesianGrid strokeDasharray="3 3"/>
            <YAxis type="number" domain={['auto', 'auto']} />
            <Tooltip/>
            <Line type="natural" dataKey="equity" dot={false} activeDot={false} stroke={CONSTANTS.COLOR_DARKGREEN}/>
            <Area type="natural" dataKey="equity" stroke={CONSTANTS.COLOR_DARKGREEN} fill={CONSTANTS.COLOR_GREEN}/>
          </ComposedChart>
          <ComposedChart width={1900} height={200} data={data} margin={{top: 0, right: 0, left: 0, bottom: 0,}}>
            <CartesianGrid strokeDasharray="3 3"/>
            <YAxis type="number" domain={['auto', 'auto']} />
            <Tooltip/>
            <Line type="natural" dataKey="drawdown" dot={false} activeDot={false} stroke={CONSTANTS.COLOR_DARKRED}/>
            <Area type="natural" dataKey="drawdown" stroke={CONSTANTS.COLOR_DARKRED} fill={CONSTANTS.COLOR_RED}/>
          </ComposedChart>
        </div>
      </React.Fragment>
  );
}

