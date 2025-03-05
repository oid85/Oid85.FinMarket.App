import React from 'react'
import './Icon.css'

export const Ruble = ({value, color}) => {

    let displayValue = ``
    if (value !== '') {
        displayValue = `${value}`
    }

    return (
        <React.Fragment>
            <div style={{backgroundColor: color}}>
                {displayValue}&nbsp;руб.
            </div>
        </React.Fragment>
    )
}