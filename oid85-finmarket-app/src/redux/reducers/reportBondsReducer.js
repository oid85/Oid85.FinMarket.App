import {
    FETCH_REPORT_BONDS_SUPERTREND,
    FETCH_REPORT_BONDS_CANDLE_SEQUENCE,
    FETCH_REPORT_BONDS_CANDLE_VOLUME,
    FETCH_REPORT_COUPON,
    FETCH_REPORT_BONDS_AGGREGATED_ANALYSE
} from '../types/reportBondsTypes'

const initialState = {
    reportData: {}
}

export const reportBondsReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_REPORT_BONDS_SUPERTREND:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_BONDS_CANDLE_SEQUENCE:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_BONDS_CANDLE_VOLUME:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_COUPON:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_BONDS_AGGREGATED_ANALYSE:
            return {...state, reportData: {...action.payload}}

        default: return state
    }
}