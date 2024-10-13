import React from 'react'

export const ReportTableHead = ({ header }) => {
    return (
        <thead>
            <tr>
                {header.map((head, headId) => (
                    <th key={headId}></th>
                ))}
            </tr>
        </thead>
    )        
}