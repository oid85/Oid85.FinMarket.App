import React from 'react'
import { CONSTANTS } from '../../constants'

export const ReportTableCell = ({ rowId, cellValue }) => {
    if (cellValue == CONSTANTS.TREND_UP)
        return (
            <td style={{ fontSize: 10, background: CONSTANTS.COLOR_GREEN }} key={rowId}>&#128570;</td>
        )

    if (cellValue == CONSTANTS.TREND_DOWN)
        return (
            <td style={{ fontSize: 10, background: CONSTANTS.COLOR_RED }} key={rowId}>&#128574;</td>
        )    
        
    return (
        <td style={{ fontSize: 10 }} key={rowId}>{cellValue}</td>
    )        
}