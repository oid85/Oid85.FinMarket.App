import React from 'react'
import { TableCell } from './TableCell'

export const TableRow = ({ key, rowValue }) => {
    return (
        <tr key = {key}>
            {rowValue.map((cellValue, index) => (
            <TableCell
                key={index} 
                cellValue={cellValue} />
        ))}
        </tr>
    )        
}