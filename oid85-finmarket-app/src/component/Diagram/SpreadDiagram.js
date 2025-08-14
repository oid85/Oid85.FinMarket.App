import React from 'react'
import {BarChart, YAxis, Tooltip, Bar, ReferenceLine} from 'recharts'
import {CONSTANTS} from "../../constants";

export const SpreadDiagram = ({ key, title, series }) => {
    return (
        <div
            style={{
                border: '1px solid black',
                margin: '10px',
            }}>
            <h6>{title}</h6>
            <BarChart key = {key} width={450} height={150} data={series}>
                <YAxis type="number" domain={[-3, 3]} />
                <Tooltip />
                <ReferenceLine y={1} stroke={CONSTANTS.COLOR_BLACK} />
                <ReferenceLine y={2} stroke={CONSTANTS.COLOR_BLACK} />
                <ReferenceLine y={3} stroke={CONSTANTS.COLOR_BLACK} />
                <ReferenceLine y={-1} stroke={CONSTANTS.COLOR_BLACK} />
                <ReferenceLine y={-2} stroke={CONSTANTS.COLOR_BLACK} />
                <ReferenceLine y={-3} stroke={CONSTANTS.COLOR_BLACK} />
                <Bar type="monotone" dataKey="value" stroke={CONSTANTS.COLOR_BLACK} fill={CONSTANTS.COLOR_GREEN} />
            </BarChart>
        </div>
    )
}
