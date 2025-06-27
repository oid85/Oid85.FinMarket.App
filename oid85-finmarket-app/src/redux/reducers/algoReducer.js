import {
    FETCH_STRATEGY_SIGNALS,
    FETCH_BACKTEST_RESULTS
} from '../types/algoTypes'

const initialState = {
    reportData: {}
}

export const algoReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_STRATEGY_SIGNALS:
            return {...state, reportData: {...action.payload}}

        case FETCH_BACKTEST_RESULTS:
            return {...state, reportData: {...action.payload}}

        default: return state
    }
}