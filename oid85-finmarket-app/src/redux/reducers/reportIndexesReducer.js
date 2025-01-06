import {
    FETCH_REPORT_INDEXES_SUPERTREND,
    FETCH_REPORT_INDEXES_CANDLE_SEQUENCE,
    FETCH_REPORT_INDEXES_RSI,
    FETCH_REPORT_INDEXES_YIELD_LTM,
    FETCH_REPORT_INDEX_AGGREGATED_ANALYSE,
    FETCH_INDEXES_WATCH_LIST_TICKERS
} from '../types/indexesTypes'

const initialState = {
    reportData: {},
    watchListTickers: {}
}

export const reportIndexesReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_REPORT_INDEXES_SUPERTREND:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_INDEXES_CANDLE_SEQUENCE:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_INDEXES_RSI:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_INDEXES_YIELD_LTM:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_INDEX_AGGREGATED_ANALYSE:
            return {...state, reportData: {...action.payload}}

        case FETCH_INDEXES_WATCH_LIST_TICKERS:
            return {...state, reportData: {...action.payload}}

        default: return state
    }
}