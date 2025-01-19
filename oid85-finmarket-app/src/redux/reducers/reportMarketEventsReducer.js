import {
    FETCH_REPORT_MARKET_EVENT
} from '../types/reportMarketEventsTypes'

const initialState = {
    reportData: {}
}

export const reportMarketEventsReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_REPORT_MARKET_EVENT:
            return {...state, reportData: {...action.payload}}

        default: return state
    }
}