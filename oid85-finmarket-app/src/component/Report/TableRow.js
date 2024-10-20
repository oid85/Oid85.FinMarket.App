import React from 'react'
import { TableCell } from './TableCell'

export const TableRow = ({ rowValue }) => {
    return (
        <tr>{rowValue.map((cellValue, key) => (
            <TableCell key={key} cellValue={cellValue} />
        ))}
        </tr>
    )        
}