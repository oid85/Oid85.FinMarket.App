import React from 'react'
import './Icon.css'
import {CONSTANTS} from '../../constants'
import {Calendar} from '../Calendar/Calendar'
import {Percent} from './Percent'
import {Ruble} from './Ruble'
import {TextElement} from "./TextElement";
import {NumberElement} from "./NumberElement";
import {Ticker} from "./Tickers/Ticker";
import {Sector} from "./Sectors/Sector";
import {AnalyseResult} from "./AnalyseResult";
import {Currency} from "./Currency/Currency";
import {AssetReportEvent} from "./AssetReportEvent/AssetReportEvent";

export const Icon = ({displayType, displayValue, displayColor}) => {

    switch (displayType) {
        case CONSTANTS.DISPLAY_TYPE_STRING:
            return (<TextElement value={displayValue} color={displayColor}/>)

        case CONSTANTS.DISPLAY_TYPE_NUMBER:
            return (<NumberElement value={displayValue} color={displayColor}/>)

        case CONSTANTS.DISPLAY_TYPE_TICKER:
            return (<Ticker value={displayValue} color={displayColor}/>)

        case CONSTANTS.DISPLAY_TYPE_DATE:
            return (<Calendar date={displayValue} />)

        case CONSTANTS.DISPLAY_TYPE_PERCENT:
            return (<Percent value={displayValue} color={displayColor}/>)

        case CONSTANTS.DISPLAY_TYPE_RUBLE:
            return (<Ruble value={displayValue} color={displayColor}/>)

        case CONSTANTS.DISPLAY_TYPE_SECTOR:
            return (<Sector value={displayValue} color={displayColor}/>)

        case CONSTANTS.DISPLAY_TYPE_CURRENCY:
            return (<Currency value={displayValue} color={displayColor}/>)

        case CONSTANTS.DISPLAY_TYPE_ANALYSE_RESULT:
            return (<AnalyseResult value={displayValue} color={displayColor}/>)

        case CONSTANTS.DISPLAY_TYPE_ASSET_REPORT_EVENT:
            return (<AssetReportEvent value={displayValue} color={displayColor}/>)

        default:
            return (<React.Fragment>{displayValue}</React.Fragment>)
    }
}