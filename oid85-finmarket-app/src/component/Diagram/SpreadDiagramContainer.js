import React from 'react'
import {SpreadDiagram} from "./SpreadDiagram"
import './Diagram.css'

export const SpreadDiagramContainer = ({ containerData }) => {
    return (
        <React.Fragment>
            <div className='diagram-container'>
                {
                    containerData.data.map((diagramData, index) => (
                        <SpreadDiagram
                            key={index}
                            title={diagramData.title}
                            series={diagramData.series}/>))
                }
            </div>
        </React.Fragment>
    )
}