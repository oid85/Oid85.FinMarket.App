import React from 'react'

export const TableHead = ({ header }) => {
    return (
        <thead>
            <tr 
            style={{ 
                border: '1px solid darkgray' 
                }}>
                {header.map((headValue, key) => (
                    <th key={key}>{headValue}</th>
                ))}
            </tr>
        </thead>
    )        
}