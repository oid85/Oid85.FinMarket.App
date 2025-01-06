import {
    FETCH_REPORT_SHARES_SUPERTREND,
    FETCH_REPORT_SHARES_CANDLE_SEQUENCE,
    FETCH_REPORT_SHARES_CANDLE_VOLUME,
    FETCH_REPORT_SHARES_RSI,
    FETCH_REPORT_SHARES_YIELD_LTM,
    FETCH_REPORT_SHARES_ASSET_FUNDAMENTAL,
    FETCH_REPORT_DIVIDENDS,
    FETCH_REPORT_SHARE_AGGREGATED_ANALYSE,
    FETCH_SHARES_WATCH_LIST_TICKERS
} from '../types/sharesTypes'

const initialState = {
    reportData: {},
    watchListTickers: {}
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

        case FETCH_REPORT_DIVIDENDS:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_SHARE_AGGREGATED_ANALYSE:
            return {...state, reportData: {...action.payload}}

        case FETCH_SHARES_WATCH_LIST_TICKERS:
            return {...state, watchListTickers: {...action.payload}}

        default: return state
    }
}