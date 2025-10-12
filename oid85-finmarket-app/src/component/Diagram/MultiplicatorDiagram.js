import React from 'react';
import {
  ComposedChart,
  Line,
  Scatter,
  Area,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  DefaultLegendContent,
  ResponsiveContainer,
} from 'recharts';
import {CONSTANTS} from "../../constants";

export const MultiplicatorDiagram = ({ data }) => {
    return (
        <React.Fragment>
          <div className='backtest-result-diagram-container'>
            <ComposedChart width={1900} height={700} data={data} margin={{top: 0, right: 0, left: 0, bottom: 0,}}>
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis type="number" dataKey="x" />
              <YAxis type="number" dataKey="y" />
              <ZAxis type="number" dataKey="r" range={[0, 1000]} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={data} fill={CONSTANTS.COLOR_MIDNIGHTBLUE} shape="circle" />              
            </ComposedChart>
          </div>
        </React.Fragment>
    );
}
