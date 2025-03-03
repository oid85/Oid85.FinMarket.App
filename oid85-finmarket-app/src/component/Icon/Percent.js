import React from 'react'
import './Icon.css'

export const Percent = ({value, color}) => {

    let displayValue = ``
    if (value !== '') {
        displayValue = `${value} %`
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