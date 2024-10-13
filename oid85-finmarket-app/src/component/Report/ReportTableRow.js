import React from 'react'
import { ReportTableCell } from './ReportTableCell'

export const ReportTableRow = ({ rowValue }) => {
    return (
        <tr>{rowValue.map((cellValue, rowId) => (
            <ReportTableCell rowId={rowId} cellValue={cellValue} />
        ))}
        </tr>
    )        
}