import React from 'react'
import {SimpleDiagram} from "./SimpleDiagram"
import './Diagram.css'

export const SimpleDiagramContainer = ({ containerData }) => {
    return (
        <React.Fragment>
            <div className='diagram-container'>
                {
                    containerData.data.map((diagramData, index) => (
                        <SimpleDiagram
                            key={index}
                            title={diagramData.title}
                            series={diagramData.series}/>))
                }
            </div>
        </React.Fragment>
    )
}