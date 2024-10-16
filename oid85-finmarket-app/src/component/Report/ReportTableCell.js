import React from 'react'
import { CONSTANTS } from '../../constants'

export const ReportTableCell = ({ rowId, cellValue }) => {
    if (cellValue == CONSTANTS.TREND_UP)
        return (
            <td style={{ fontSize: 16, background: CONSTANTS.COLOR_GREEN }} key={rowId}>&#128046;</td>
        )

    if (cellValue == CONSTANTS.TREND_DOWN)
        return (
            <td style={{ fontSize: 16, background: CONSTANTS.COLOR_RED }} key={rowId}>&#128059;</td>
        )    
        
    if (cellValue == '')
        return (
            <td style={{ fontSize: 16, background: CONSTANTS.COLOR_YELLOW }} key={rowId}></td>
        )

    return (
        <td style={{ fontSize: 16 }} key={rowId}>{cellValue}</td>
    )        
}