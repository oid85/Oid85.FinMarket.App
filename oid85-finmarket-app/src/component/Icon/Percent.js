import React from 'react'
import './Icon.css'

export const Percent = ({value, color}) => {

    let displayValue = ``
    if (value !== '') {
        displayValue = `${value}`
    }

    return <div style={{backgroundColor: color}}>{displayValue}&nbsp;%</div>
}