import React from 'react'
import { Icon } from '../Icon/Icon'

export const TableCell = ({ key, cellValue }) => {
    return (
        <td 
        style={{
            border: '1px solid darkgray',
            fontSize: 14
        }} 
        key={key}>
            <Icon
                displayType={cellValue.type}
                displayValue={cellValue.value}
                displayColor={cellValue.color} />
        </td>
    )       
}