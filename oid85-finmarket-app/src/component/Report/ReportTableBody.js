import React from 'react'
import { ReportTableRow } from './ReportTableRow'

export const ReportTableBody = ({ body }) => {
    return (
        <tbody>{body.map((rowValue) => (
            <ReportTableRow rowValue = {rowValue} />
        ))}
        </tbody>
    )        
}