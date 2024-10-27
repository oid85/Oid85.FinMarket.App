import React from 'react'
import { TableRow } from './TableRow'

export const TableBody = ({ body }) => {
    return (
        <tbody>{body.map((rowValue, index) => (
            <TableRow 
                key = {index} 
                rowValue = {rowValue} />
        ))}
        </tbody>
    )        
}