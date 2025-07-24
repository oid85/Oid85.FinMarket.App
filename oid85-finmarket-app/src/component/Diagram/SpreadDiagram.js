import React from 'react'
import {BarChart, Area, YAxis, CartesianGrid, Tooltip, Bar} from 'recharts'
import {Attention} from "../Icon/Attention"

export const SpreadDiagram = ({ key, title, series }) => {
    return (
        <div>
            <Attention visible={false}/>
            <div>{title}</div>
            <BarChart key = {key} width={600} height={250} data={series}>
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis type="number" domain={['auto', 'auto']} />
                <Tooltip />
                <Bar type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
            </BarChart>
        </div>
    )
}
