import React from 'react'
import { Icon } from '../Icon/Icon'

export const TableHead = ({ header }) => {
    return (
        <thead>
            <tr>
                {header.map((headValue, index) => (
                    <th 
                        style={{
                            border: '1px solid black',
                            fontSize: 16
                    }} 
                        key={index}>
                        <Icon
                            displayType={headValue.type}
                            displayValue={headValue.value} />
                    </th>
                ))}
            </tr>
        </thead>
    )        
}
