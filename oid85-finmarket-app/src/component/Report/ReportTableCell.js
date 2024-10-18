import React from 'react'
import { CONSTANTS } from '../../constants'

export const ReportTableCell = ({ key, cellValue }) => {
    if (cellValue == CONSTANTS.TREND_UP)
        return (
            <td style={{ fontSize: 16, background: CONSTANTS.COLOR_GREEN }} key={key}>&#128046;</td>
        )

    if (cellValue == CONSTANTS.TREND_DOWN)
        return (
            <td style={{ fontSize: 16, background: CONSTANTS.COLOR_RED }} key={key}>&#128059;</td>
        )    
        
    if (cellValue == '')
        return (
            <td style={{ fontSize: 16, background: CONSTANTS.COLOR_YELLOW }} key={key}></td>
        )

    return (
        <td style={{ fontSize: 16 }} key={key}>{cellValue}</td>
    )        
}