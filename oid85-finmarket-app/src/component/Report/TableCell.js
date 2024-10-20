import React from 'react'
import { Icon } from '../Icon/Icon'

export const TableCell = ({ key, cellValue }) => {
    return (
        <td style={{ fontSize: 16, border: '1px solid darkgray' }} key={key}><Icon value={cellValue} /></td>
    )       
}