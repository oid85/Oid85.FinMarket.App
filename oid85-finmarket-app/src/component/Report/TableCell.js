import React from 'react'
import { CONSTANTS } from '../../constants'

export const TableCell = ({ id, value }) => {
    if (value == CONSTANTS.TREND_UP)
        return (
            <td style={{ fontSize: 10, background: CONSTANTS.COLOR_GREEN }} key={id}>&#128570;</td>
        )

    if (value == CONSTANTS.TREND_DOWN)
        return (
            <td style={{ fontSize: 10, background: CONSTANTS.COLOR_RED }} key={id}>&#128574;</td>
        )    
        
    return (
        <td style={{ fontSize: 10 }} key={id}>{value}</td>
    )        
}