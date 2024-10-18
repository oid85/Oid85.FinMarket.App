import React from 'react'

export const ReportTableHead = ({ header }) => {
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