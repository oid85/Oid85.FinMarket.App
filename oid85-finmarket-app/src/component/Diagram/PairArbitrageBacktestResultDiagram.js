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

export const PairArbitrageBacktestResultDiagram = ({ data }) => {
  return (
      <React.Fragment>
        <div className='backtest-result-diagram-container'>
          <ComposedChart width={1900} height={700} data={data} margin={{top: 0, right: 0, left: 0, bottom: 0,}}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="date"/>
            <YAxis type="number" domain={['auto', 'auto']} />
            <Tooltip/>
            <Line type="natural" dataKey="priceFirst" dot={false} activeDot={false} stroke={CONSTANTS.COLOR_DARKSLATEGRAY}/>
            <Line type="natural" dataKey="priceSecond" dot={false} activeDot={false} stroke={CONSTANTS.COLOR_MIDNIGHTBLUE}/>
            <Scatter name="buyFirst" dataKey="buyPriceFirst" fill={CONSTANTS.COLOR_GREEN}/>
            <Scatter name="buySecond" dataKey="buyPriceSecond" fill={CONSTANTS.COLOR_GREEN}/>
            <Scatter name="sellFirst" dataKey="sellPriceFirst" fill={CONSTANTS.COLOR_RED}/>
            <Scatter name="sellSecond" dataKey="sellPriceSecond" fill={CONSTANTS.COLOR_RED}/>
          </ComposedChart>
          <ComposedChart width={1900} height={100} data={data} margin={{top: 0, right: 0, left: 0, bottom: 0,}}>
            <CartesianGrid strokeDasharray="3 3"/>
            <YAxis type="number" domain={['auto', 'auto']} />
            <Tooltip/>
            <Line type="natural" dataKey="spread" dot={false} activeDot={false} stroke={CONSTANTS.COLOR_MIDNIGHTBLUE}/>
            <Area type="natural" dataKey="spread" stroke={CONSTANTS.COLOR_MIDNIGHTBLUE} fill={CONSTANTS.COLOR_BLUE}/>
          </ComposedChart>
          <ComposedChart width={1900} height={100} data={data} margin={{top: 0, right: 0, left: 0, bottom: 0,}}>
            <CartesianGrid strokeDasharray="3 3"/>
            <YAxis type="number" domain={['auto', 'auto']} />
            <Tooltip/>
            <Line type="natural" dataKey="equity" dot={false} activeDot={false} stroke={CONSTANTS.COLOR_DARKGREEN}/>
            <Area type="natural" dataKey="equity" stroke={CONSTANTS.COLOR_DARKGREEN} fill={CONSTANTS.COLOR_GREEN}/>
          </ComposedChart>
          <ComposedChart width={1900} height={50} data={data} margin={{top: 0, right: 0, left: 0, bottom: 0,}}>
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

