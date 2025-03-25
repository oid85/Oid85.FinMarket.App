import React from 'react'
import './Icon.css'
import report from "./img/report.png";

export const AssetReportEvent = ({value, color}) => {
    const height = 44
    const width = 44

    return <img src={report} alt="" height={height} width={width}/>
}