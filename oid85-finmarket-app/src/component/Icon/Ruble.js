import React from 'react'
import './Icon.css'

export const Ruble = ({value, color}) => {

    let displayValue = ``
    if (value !== '') {
        displayValue = `${value} руб.`
    }

    return (
        <React.Fragment>
            <div style={{ 
                    textAlign: 'center',
                    color: color,
                    fontSize: 12
                }}>
                {displayValue}
            </div>
        </React.Fragment>
    )
}