import React from 'react'
import { Icon } from '../Icon/Icon'

export const TableCell = ({ key, cellValue }) => {
    return (
        <td 
        style={{ 
            border: '1px solid darkgray' 
        }} 
        key={key}>
            <Icon
                displayType={cellValue.type}
                displayValue={cellValue.value} />
        </td>
    )       
}