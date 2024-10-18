import React from 'react'
import { ReportTableCell } from './ReportTableCell'

export const ReportTableRow = ({ rowValue }) => {
    return (
        <tr>{rowValue.map((cellValue, key) => (
            <ReportTableCell key={key} cellValue={cellValue} />
        ))}
        </tr>
    )        
}