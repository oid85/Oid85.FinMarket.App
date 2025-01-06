import { 
    FETCH_REPORT_SHARES_SUPERTREND,
    FETCH_REPORT_SHARES_CANDLE_SEQUENCE,
    FETCH_REPORT_SHARES_CANDLE_VOLUME,
    FETCH_REPORT_SHARES_RSI,
    FETCH_REPORT_DIVIDENDS,
    FETCH_REPORT_SHARE_ANALYSE,
    FETCH_SHARES_WATCH_LIST_TICKERS
} from '../types/types'

const initialState = {
    reportData: {},
    watchListTickers: {}
}

export const reportSharesReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_SHARES_WATCH_LIST_TICKERS:
            return {...state, watchListTickers: {...action.payload}}

        case FETCH_REPORT_SHARES_SUPERTREND:
            return {...state, reportData: {...action.payload}}
        
        case FETCH_REPORT_SHARES_CANDLE_SEQUENCE:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_SHARES_CANDLE_VOLUME:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_SHARES_RSI:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_DIVIDENDS:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_SHARE_ANALYSE:
            return {...state, reportData: {...action.payload}}

        default: return state
    }
}