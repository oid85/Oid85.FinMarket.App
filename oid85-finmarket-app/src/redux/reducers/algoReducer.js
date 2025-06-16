import {
    FETCH_STRATEGY_SIGNALS,
    FETCH_BACKTEST_RESULTS,
    FETCH_BACKTEST_RESULT
} from '../types/algoTypes'

const initialState = {
    strategySignals: [],
    backtestResults: [],
    backtestResult: {}
}

export const algoReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_STRATEGY_SIGNALS:
            return {...state, strategySignals: {...action.payload}}

        case FETCH_BACKTEST_RESULTS:
            return {...state, backtestResults: {...action.payload}}

        case FETCH_BACKTEST_RESULT:
            return {...state, backtestResult: {...action.payload}}

        default: return state
    }
}