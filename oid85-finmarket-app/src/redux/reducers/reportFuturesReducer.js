import { 
    FETCH_REPORT_FUTURES_SUPERTREND,
    FETCH_REPORT_FUTURES_CANDLE_SEQUENCE,
    FETCH_REPORT_FUTURES_CANDLE_VOLUME,
    FETCH_REPORT_FUTURES_RSI,
    FETCH_REPORT_FUTURE_ANALYSE
} from '../types'

const initialState = {
    reportData: {},
    watchListTickers: []
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

        case FETCH_REPORT_FUTURE_ANALYSE:
            return {...state, reportData: {...action.payload}}

        default: return state
    }
}