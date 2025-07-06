import React from 'react'
import { Icon } from '../Icon/Icon'

export const TableCell = ({ key, cellValue }) => {
    return (
        <td 
        style={{
            border: '1px solid black',
            fontSize: 12,
            backgroundColor: cellValue.color
        }} 
        key={key}>
            <Icon
                displayType={cellValue.type}
                displayValue={cellValue.value}
                displayColor={cellValue.color} />
        </td>
    )       
}