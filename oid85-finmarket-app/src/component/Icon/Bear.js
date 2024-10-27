import React from 'react'
import { CONSTANTS } from '../../constants'
import './Icon.css'

export const Bear = () => {
    
    return (
        <React.Fragment>
            <div style={{ 
                    textAlign: 'center',
                    background: CONSTANTS.COLOR_RED
                }}>
                &#128059;
            </div>
        </React.Fragment>
    )
}