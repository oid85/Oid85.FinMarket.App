import React from 'react'
import { CONSTANTS } from '../../constants'
import { Bull } from './Bull'
import { Bear } from './Bear'
import './Icon.css'

export const Icon = ({value}) => {

    switch (value) {
                             
        case CONSTANTS.TREND_DIRECTION_UP:
        case CONSTANTS.VOLUME_DIRECTION_UP:
        case CONSTANTS.CANDLE_SECUENCE_WHITE:
        case CONSTANTS.RSI_INTERPRETATION_OVERBOUGHT:
            return (<Bull />)
        
        case CONSTANTS.TREND_DIRECTION_DOWN:
        case CONSTANTS.VOLUME_DIRECTION_DOWN:
        case CONSTANTS.CANDLE_SECUENCE_BLACK:
        case CONSTANTS.RSI_INTERPRETATION_OVERSOLD:
            return (<Bear />)    

        default:
            return (
            <React.Fragment>
                {value}
            </React.Fragment>
            )
    }    
}