import React from 'react'
import './Icon.css'

export const NumberElement = ({value, color}) => {

    return (
        <React.Fragment>
            <div style={{ 
                    textAlign: 'center',
                    color: color,
                    fontSize: 12
                }}>
                {value}
            </div>
        </React.Fragment>
    )
}