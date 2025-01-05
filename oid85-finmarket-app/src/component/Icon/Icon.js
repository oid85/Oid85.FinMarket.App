import React from 'react'
import './Icon.css'
import {CONSTANTS} from '../../constants'
import {Calendar} from '../Calendar/Calendar'
import {Percent} from './Percent'
import {Ruble} from './Ruble'
import {DarkGreen} from './DarkGreen'
import {DarkRed} from './DarkRed'
import {Bull} from "./Bull";

export const Icon = ({displayType, displayValue}) => {

    if (displayType.match(CONSTANTS.DISPLAY_TYPE_DATE)) {
        return (<Calendar date={displayValue} />)
    }

    if (displayType.match(CONSTANTS.DISPLAY_TYPE_PERCENT)) {
        return (<Percent value={displayValue} />)
    }

    if (displayType.match(CONSTANTS.DISPLAY_TYPE_RUBLE)) {
        return (<Ruble value={displayValue} />)
    }

    if (displayType.match(CONSTANTS.DISPLAY_TYPE_ANALYSE_RESULT_SUPERTREND)) {
        if (displayValue.match(CONSTANTS.TREND_DIRECTION_UP)) {
            return (<DarkGreen />)
        }

        if (displayValue.match(CONSTANTS.TREND_DIRECTION_DOWN)) {
            return (<DarkRed />)
        }
    }

    if (displayType.match(CONSTANTS.DISPLAY_TYPE_ANALYSE_RESULT_CANDLE_SEQUENCE)) {
        if (displayValue.match(CONSTANTS.CANDLE_SECUENCE_WHITE)) {
            return (<DarkGreen />)
        }

        if (displayValue.match(CONSTANTS.CANDLE_SECUENCE_BLACK)) {
            return (<DarkRed />)
        }
    }

    if (displayType.match(CONSTANTS.DISPLAY_TYPE_ANALYSE_RESULT_CANDLE_VOLUME)) {
        if (displayValue.match(CONSTANTS.VOLUME_DIRECTION_UP)) {
            return (<DarkGreen />)
        }

        if (displayValue.match(CONSTANTS.VOLUME_DIRECTION_DOWN)) {
            return (<DarkRed />)
        }
    }

    if (displayType.match(CONSTANTS.DISPLAY_TYPE_ANALYSE_RESULT_RSI)) {
        if (displayValue.match(CONSTANTS.RSI_INTERPRETATION_OVERSOLD)) {
            return (<DarkGreen />)
        }

        if (displayValue.match(CONSTANTS.RSI_INTERPRETATION_OVERBOUGHT)) {
            return (<DarkRed />)
        }
    }

    return (<React.Fragment>{displayValue}</React.Fragment>)
}