import React from 'react'
import { ReportTableHead } from './ReportTableHead'
import { ReportTableBody } from './ReportTableBody'

export const ReportTable = ({ title, reportTableData }) => {
    return (
        <div>
            <div>
                <h5>{title}</h5>
            </div>
            <table>
                <ReportTableHead header = {reportTableData.header} />
                <ReportTableBody body = {reportTableData.data} />
            </table>                        
        </div>
    )        
}