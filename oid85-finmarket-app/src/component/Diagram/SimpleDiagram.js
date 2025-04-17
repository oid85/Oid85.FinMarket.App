import React from 'react'
import { AreaChart, Area, YAxis, CartesianGrid, Tooltip } from 'recharts'
import {Attention} from "../Icon/Attention"

export const SimpleDiagram = ({ key, title, series }) => {
    return (
        <div>
            <Attention visible={false}/>
            <div>{title}</div>
            <AreaChart
                key = {key}
                width={300}
                height={150}
                data={series}>
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis type="number" domain={['auto', 'auto']} />
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
