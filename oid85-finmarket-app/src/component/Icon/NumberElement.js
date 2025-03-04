import React from 'react'
import './Icon.css'

export const NumberElement = ({value, color}) => {

    return (
        <React.Fragment>
            <div style={{backgroundColor: color}}>
                {value}
            </div>
        </React.Fragment>
    )
}