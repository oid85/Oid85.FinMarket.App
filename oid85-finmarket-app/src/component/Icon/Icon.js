import React from 'react'
import './Icon.css'
import {CONSTANTS} from "../../constants";
import {Calendar} from "../Calendar/Calendar";
import {Bull} from "./Bull";
import {Bear} from "./Bear";
import {Percent} from "./Percent";
import {Ruble} from "./Ruble";

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
            return (<Bull />)
        }

        if (displayValue.match(CONSTANTS.TREND_DIRECTION_DOWN)) {
            return (<Bear />)
        }
    }

    if (displayType.match(CONSTANTS.DISPLAY_TYPE_ANALYSE_RESULT_CANDLE_SEQUENCE)) {
        if (displayValue.match(CONSTANTS.CANDLE_SECUENCE_WHITE)) {
            return (<Bull />)
        }

        if (displayValue.match(CONSTANTS.CANDLE_SECUENCE_BLACK)) {
            return (<Bear />)
        }
    }

    if (displayType.match(CONSTANTS.DISPLAY_TYPE_ANALYSE_RESULT_CANDLE_VOLUME)) {
        if (displayValue.match(CONSTANTS.VOLUME_DIRECTION_UP)) {
            return (<Bull />)
        }

        if (displayValue.match(CONSTANTS.VOLUME_DIRECTION_DOWN)) {
            return (<Bear />)
        }
    }

    if (displayType.match(CONSTANTS.DISPLAY_TYPE_ANALYSE_RESULT_RSI)) {
        if (displayValue.match(CONSTANTS.RSI_INTERPRETATION_OVERSOLD)) {
            return (<Bull />)
        }

        if (displayValue.match(CONSTANTS.RSI_INTERPRETATION_OVERBOUGHT)) {
            return (<Bear />)
        }
    }

    return (<React.Fragment>{displayValue}</React.Fragment>)
}