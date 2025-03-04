import React from 'react'
import './Icon.css'

export const Ruble = ({value, color}) => {

    let displayValue = ``
    if (value !== '') {
        displayValue = `${value} руб.`
    }

    return (
        <React.Fragment>
            <div style={{backgroundColor: color}}>
                {displayValue}
            </div>
        </React.Fragment>
    )
}