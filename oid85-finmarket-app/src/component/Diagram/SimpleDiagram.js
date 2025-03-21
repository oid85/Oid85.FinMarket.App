import React from 'react';
import { AreaChart, Area, YAxis, CartesianGrid, Tooltip } from 'recharts';

export const SimpleDiagram = ({ key, title, series }) => {
    return (
        <div>
            <div>{title}</div>
            <AreaChart
                width={270}
                height={150}
                data={series}>
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis />
                <Tooltip />
                <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#8884d8"
                    fill="#8884d8" />
            </AreaChart>
        </div>
    )
}
