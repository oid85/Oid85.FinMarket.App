import {
    FETCH_REPORT_INDEXES_SUPERTREND,
    FETCH_REPORT_INDEXES_CANDLE_SEQUENCE,
    FETCH_REPORT_INDEXES_RSI,
    FETCH_REPORT_INDEXES_YIELD_LTM,
    FETCH_REPORT_INDEXES_DRAWDOWN_FROM_MAXIMUM,
    FETCH_REPORT_INDEXES_AGGREGATED_ANALYSE,
    FETCH_REPORT_INDEXES_MARKET_EVENT,
	FETCH_REPORT_INDEXES_ATR,
	FETCH_REPORT_INDEXES_DONCHIAN
} from '../types/reportIndexesTypes'

const initialState = {
    reportData: {}
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

        case FETCH_REPORT_INDEXES_DRAWDOWN_FROM_MAXIMUM:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_INDEXES_AGGREGATED_ANALYSE:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_INDEXES_MARKET_EVENT:
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_INDEXES_ATR:
            return {...state, reportData: {...action.payload}}
			
        case FETCH_REPORT_INDEXES_DONCHIAN:
            return {...state, reportData: {...action.payload}}			

        default: return state
    }
}