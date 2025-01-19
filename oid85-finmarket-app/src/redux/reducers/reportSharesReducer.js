import {
    FETCH_REPORT_SHARES_SUPERTREND,
    FETCH_REPORT_SHARES_CANDLE_SEQUENCE,
    FETCH_REPORT_SHARES_CANDLE_VOLUME,
    FETCH_REPORT_SHARES_RSI,
    FETCH_REPORT_SHARES_YIELD_LTM,
    FETCH_REPORT_SHARES_ASSET_FUNDAMENTAL,
    FETCH_REPORT_SHARES_MULTIPLICATOR,
    FETCH_REPORT_DIVIDEND,
    FETCH_REPORT_SHARES_AGGREGATED_ANALYSE
} from '../types/reportSharesTypes'

const initialState = {
    reportData: {}
}

export const reportSharesReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_REPORT_SHARES_SUPERTREND:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_SHARES_CANDLE_SEQUENCE:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_SHARES_CANDLE_VOLUME:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_SHARES_RSI:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_SHARES_YIELD_LTM:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_SHARES_ASSET_FUNDAMENTAL:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_SHARES_MULTIPLICATOR:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_DIVIDEND:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_SHARES_AGGREGATED_ANALYSE:
            return {...state, reportData: {...action.payload}}

        default: return state
    }
}