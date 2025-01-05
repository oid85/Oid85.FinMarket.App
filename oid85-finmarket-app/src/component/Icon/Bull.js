import React from 'react'
import { CONSTANTS } from '../../constants'
import './Icon.css'

export const Bull = () => {
    
    return (
        <React.Fragment>
            <div style={{
                    textAlign: 'center', 
                    background: CONSTANTS.COLOR_DARKGREEN
                }}>
                &#128046;
            </div>
        </React.Fragment>
    )
}