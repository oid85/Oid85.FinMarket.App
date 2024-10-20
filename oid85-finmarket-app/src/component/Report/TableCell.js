import React from 'react'
import { Icon } from '../Icon/Icon'

export const TableCell = ({ key, cellValue }) => {
    return (
        <td style={{ fontSize: 16 }} key={key}><Icon value={cellValue} /></td>
    )       
}