import React from 'react'
import {BarChart, Area, YAxis, CartesianGrid, Tooltip, Bar} from 'recharts'
import {Attention} from "../Icon/Attention"
import {CONSTANTS} from "../../constants";

export const SpreadDiagram = ({ key, title, series }) => {
    return (
        <div>
            <Attention visible={false}/>
            <h3>{title}</h3>
            <BarChart key = {key} width={1900} height={300} data={series}>
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis type="number" domain={[-3, 3]} />
                <Tooltip />
                <Bar type="monotone" dataKey="value" stroke={CONSTANTS.COLOR_DARKGREEN} fill={CONSTANTS.COLOR_DARKGREEN} />
            </BarChart>
        </div>
    )
}
