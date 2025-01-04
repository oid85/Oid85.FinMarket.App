import React from 'react'
import { CONSTANTS } from '../../constants'
import './Icon.css'

export const Percent = ({value}) => {

    let displayValue = ``

    if (value !== '') {
        displayValue = `${value} %`
    }

    return (
        <React.Fragment>
            <div style={{ 
                    textAlign: 'center',
                    color: CONSTANTS.COLOR_WHITE,
                    background: CONSTANTS.COLOR_STATEBLUE,
                    fontSize: 12
                }}>
                {displayValue}
            </div>
        </React.Fragment>
    )
}