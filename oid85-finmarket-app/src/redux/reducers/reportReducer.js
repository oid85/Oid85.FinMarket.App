import { 
    FETCH_REPORT_SUPERTREND,
    FETCH_REPORT_CANDLE_SEQUENCE,
    FETCH_REPORT_STOCK
} from '../types'

const initialState = {
    reportData: {}
}

export const reportReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case FETCH_REPORT_SUPERTREND:         
            return {...state, reportData: {...action.payload}}
        
        case FETCH_REPORT_CANDLE_SEQUENCE:         
            return {...state, reportData: {...action.payload}}

        case FETCH_REPORT_STOCK:         
            return {...state, reportData: {...action.payload}}

        default: return state
    }
}