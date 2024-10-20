import React from 'react'
import { TableHead } from './TableHead'
import { TableBody } from './TableBody'

export const Table = ({ title, reportTableData }) => {
    return (
        <div>
            <div>
                <h5>{title}</h5>
            </div>
            <table>
                <TableHead header = {reportTableData.header} />
                <TableBody body = {reportTableData.data} />
            </table>                        
        </div>
    )        
}