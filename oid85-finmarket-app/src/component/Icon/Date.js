import React from 'react'
import { CONSTANTS } from '../../constants'
import './Icon.css'

export const Date = ({value}) => {
    
    let date = Date.parse(value)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()

    return (
        <React.Fragment>
            <div style={{ 
                    textAlign: 'center'
                }}>
                {value}
            </div>
        </React.Fragment>
    )
}