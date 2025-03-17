import {
    FETCH_REPORT_SHARES_SUPERTREND,
    FETCH_REPORT_SHARES_CANDLE_SEQUENCE,
    FETCH_REPORT_SHARES_CANDLE_VOLUME,
    FETCH_REPORT_SHARES_RSI,
    FETCH_REPORT_SHARES_YIELD_LTM,
    FETCH_REPORT_SHARES_DRAWDOWN_FROM_MAXIMUM,
    FETCH_REPORT_SHARES_MULTIPLICATOR,
    FETCH_REPORT_DIVIDEND,
    FETCH_REPORT_SHARES_AGGREGATED_ANALYSE,
    FETCH_REPORT_SHARES_FORECAST_TARGET,
    FETCH_REPORT_SHARES_FORECAST_CONSENSUS,
    FETCH_REPORT_SHARES_MARKET_EVENT,
    FETCH_REPORT_SHARES_ASSET_REPORT_EVENT,
    FETCH_REPORT_SHARES_FEER_GREED_INDEX
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

        case FETCH_REPORT_SHARES_DRAWDOWN_FROM_MAXIMUM:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_SHARES_MULTIPLICATOR:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_DIVIDEND:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_SHARES_AGGREGATED_ANALYSE:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_SHARES_FORECAST_TARGET:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_SHARES_FORECAST_CONSENSUS:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_SHARES_MARKET_EVENT:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_SHARES_ASSET_REPORT_EVENT:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_SHARES_FEER_GREED_INDEX:
            return {...state, reportData: {...action.payload}}

        default: return state
    }
}