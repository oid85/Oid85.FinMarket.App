import React from 'react'
import { CONSTANTS } from '../../constants'
import './Icon.css'

export const Dividend = ({percent}) => {
    
    let displayValue = percent.replace('Dividend: ', '')
    displayValue = `${displayValue} %`
    
    return (
        <React.Fragment>
            <div style={{ 
                    textAlign: 'center',
                    color: CONSTANTS.COLOR_WHITE,
                    background: CONSTANTS.COLOR_STATEBLUE
                }}>
                {displayValue}
            </div>
        </React.Fragment>
    )
}