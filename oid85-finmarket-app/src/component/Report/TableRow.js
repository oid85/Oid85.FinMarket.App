import React from 'react'
import { TableCell } from './TableCell'

export const TableRow = ({ key, rowValue }) => {
    return (
        <tr
            style={{
                border: '1px solid black'
            }}
            key = {key}>
            {rowValue.map((cellValue, index) => (
            <TableCell
                key={index} 
                cellValue={cellValue} />
        ))}
        </tr>
    )        
}