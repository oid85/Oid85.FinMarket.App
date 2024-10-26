import React from 'react'
import { CONSTANTS } from '../../constants'
import './Icon.css'

export const Dividend = ({value}) => {
    
    return (
        <React.Fragment>
            <div style={{ 
                    textAlign: 'center',
                    background: CONSTANTS.COLOR_GREEN
                }}>
                {value}
            </div>
        </React.Fragment>
    )
}