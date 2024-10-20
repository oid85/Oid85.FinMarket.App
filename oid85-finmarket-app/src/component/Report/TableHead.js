import React from 'react'

export const TableHead = ({ header }) => {
    return (
        <thead>
            <tr>
                {header.map((head, key) => (
                    <th key={key}></th>
                ))}
            </tr>
        </thead>
    )        
}