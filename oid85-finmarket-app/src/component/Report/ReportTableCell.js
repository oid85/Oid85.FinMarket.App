import React from 'react'
import { CONSTANTS } from '../../constants'
import { Bull } from '../Icon/Bull'
import { Bear } from '../Icon/Bear'
import { Icon } from '../Icon/Icon'

export const ReportTableCell = ({ key, cellValue }) => {
    if (cellValue == CONSTANTS.TREND_UP)
        return (
            <td style={{ fontSize: 16, background: CONSTANTS.COLOR_GREEN }} key={key}><Bull /></td>
        )

    if (cellValue == CONSTANTS.TREND_DOWN)
        return (
            <td style={{ fontSize: 16, background: CONSTANTS.COLOR_RED }} key={key}><Bull /></td>
        )    
        
    if (cellValue == '')
        return (
            <td style={{ fontSize: 16, background: CONSTANTS.COLOR_YELLOW }} key={key}></td>
        )

    return (
        <td style={{ fontSize: 16 }} key={key}><Icon value={cellValue} /></td>
    )        
}