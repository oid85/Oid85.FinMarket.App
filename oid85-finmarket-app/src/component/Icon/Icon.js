import React from 'react'
import { CONSTANTS } from '../../constants'
import { Bull } from './Bull'
import { Bear } from './Bear'
import { Dividend } from './Dividend'
import { Date } from './Date'
import './Icon.css'

export const Icon = ({value}) => {

    if (value.match('[0-9][0-9][0-9][0-9]-[0,1][0-9]-[0,1,2,3][0-9]')) { 
        return (<Date date={value} />)    
    }

    else if (value.match('Dividend:\s*\d+\s*%')) { 
        return (<Dividend percent={value} />) 
    }

    else if (value.match(CONSTANTS.TREND_DIRECTION_UP)) { 
        return (<Bull />) 
    }

    else if (value.match(CONSTANTS.VOLUME_DIRECTION_UP)) { 
        return (<Bull />) 
    }

    else if (value.match(CONSTANTS.CANDLE_SECUENCE_WHITE)) { 
        return (<Bull />) 
    }

    else if (value.match(CONSTANTS.RSI_INTERPRETATION_OVERBOUGHT)) { 
        return (<Bull />) 
    }

    else if (value.match(CONSTANTS.TREND_DIRECTION_DOWN)) { 
        return (<Bear />) 
    }

    else if (value.match(CONSTANTS.VOLUME_DIRECTION_DOWN)) { 
        return (<Bear />) 
    }

    else if (value.match(CONSTANTS.CANDLE_SECUENCE_BLACK)) { 
        return (<Bear />) 
    }
    
    else if (value.match(CONSTANTS.RSI_INTERPRETATION_OVERSOLD)) { 
        return (<Bear />) 
    }

    return (<React.Fragment>{value}</React.Fragment>)    
}