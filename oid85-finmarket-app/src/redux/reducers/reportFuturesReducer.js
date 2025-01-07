import {
    FETCH_REPORT_FUTURES_SUPERTREND,
    FETCH_REPORT_FUTURES_CANDLE_SEQUENCE,
    FETCH_REPORT_FUTURES_CANDLE_VOLUME,
    FETCH_REPORT_FUTURES_RSI,
    FETCH_REPORT_FUTURES_YIELD_LTM,
    FETCH_REPORT_SPREADS,
    FETCH_REPORT_FUTURES_AGGREGATED_ANALYSE
} from '../types/reportFuturesTypes'

const initialState = {
    reportData: {}
}

export const reportFuturesReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_REPORT_FUTURES_SUPERTREND:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_FUTURES_CANDLE_SEQUENCE:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_FUTURES_CANDLE_VOLUME:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_FUTURES_RSI:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_FUTURES_YIELD_LTM:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_SPREADS:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_FUTURES_AGGREGATED_ANALYSE:
            return {...state, reportData: {...action.payload}}

        default: return state
    }
}