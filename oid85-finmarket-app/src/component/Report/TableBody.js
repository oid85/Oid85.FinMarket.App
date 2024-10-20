import React from 'react'
import { TableRow } from './TableRow'

export const TableBody = ({ body }) => {
    return (
        <tbody>{body.map((rowValue) => (
            <TableRow rowValue = {rowValue} />
        ))}
        </tbody>
    )        
}