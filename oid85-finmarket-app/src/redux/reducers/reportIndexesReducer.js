import {
    FETCH_REPORT_INDEXES_SUPERTREND,
    FETCH_REPORT_INDEXES_CANDLE_SEQUENCE,
    FETCH_REPORT_INDEXES_CANDLE_VOLUME,
    FETCH_REPORT_INDEXES_RSI,
    FETCH_REPORT_INDEX_ANALYSE,
    FETCH_INDEXES_WATCH_LIST_TICKERS
} from '../types'

const initialState = {
    reportData: {},
    watchListTickers: {}
}

export const reportIndexesReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_INDEXES_WATCH_LIST_TICKERS:
            return {...state, watchListTickers: {...action.payload}}

        case FETCH_REPORT_INDEXES_SUPERTREND:
            return {...state, reportData: {...action.payload}}
        
        case FETCH_REPORT_INDEXES_CANDLE_SEQUENCE:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_INDEXES_CANDLE_VOLUME:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_INDEXES_RSI:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_INDEX_ANALYSE:
            return {...state, reportData: {...action.payload}}

        default: return state
    }
}