import {
    FETCH_REPORT_CURRENCIES_SUPERTREND,
    FETCH_REPORT_CURRENCIES_CANDLE_SEQUENCE,
    FETCH_REPORT_CURRENCIES_RSI,
    FETCH_REPORT_CURRENCIES_YIELD_LTM,
    FETCH_REPORT_CURRENCY_AGGREGATED_ANALYSE,
    FETCH_CURRENCIES_WATCH_LIST_TICKERS
} from '../types/currenciesTypes'

const initialState = {
    reportData: {},
    watchListTickers: {}
}

export const reportCurrenciesReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_REPORT_CURRENCIES_SUPERTREND:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_CURRENCIES_CANDLE_SEQUENCE:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_CURRENCIES_RSI:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_CURRENCIES_YIELD_LTM:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_CURRENCY_AGGREGATED_ANALYSE:
            return {...state, reportData: {...action.payload}}

        case FETCH_CURRENCIES_WATCH_LIST_TICKERS:
            return {...state, reportData: {...action.payload}}

        default: return state
    }
}