import {
    FETCH_REPORT_BONDS_SUPERTREND,
    FETCH_REPORT_BONDS_CANDLE_SEQUENCE,
    FETCH_REPORT_BONDS_CANDLE_VOLUME,
    FETCH_REPORT_COUPONS,
    FETCH_REPORT_BOND_AGGREGATED_ANALYSE,
    FETCH_BONDS_WATCH_LIST_TICKERS
} from '../types/bondsTypes'

const initialState = {
    reportData: {},
    watchListTickers: {}
}

export const reportBondsReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_REPORT_BONDS_SUPERTREND:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_BONDS_CANDLE_SEQUENCE:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_BONDS_CANDLE_VOLUME:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_COUPONS:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_BOND_AGGREGATED_ANALYSE:
            return {...state, reportData: {...action.payload}}

        case FETCH_BONDS_WATCH_LIST_TICKERS:
            return {...state, reportData: {...action.payload}}

        default: return state
    }
}