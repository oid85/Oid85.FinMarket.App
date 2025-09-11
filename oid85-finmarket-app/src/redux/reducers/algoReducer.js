import {
    FETCH_ALGO_STRATEGY_SIGNALS,
    FETCH_ALGO_BACKTEST_RESULTS,
    FETCH_ALGO_BACKTEST_RESULT_BY_ID,
    FETCH_ALGO_BACKTEST_RESULT_BY_TICKER,
    FETCH_ALGO_BACKTEST_RESULT_PORTFOLIO
} from '../types/algoTypes'

const initialState = {
    reportData: {},
    backtestResultData: {}
}

export const algoReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_ALGO_STRATEGY_SIGNALS:
            return {...state, reportData: {...action.payload}}

        case FETCH_ALGO_BACKTEST_RESULTS:
            return {...state, reportData: {...action.payload}}

        case FETCH_ALGO_BACKTEST_RESULT_BY_ID:
            return {...state, backtestResultData: {...action.payload}}

        case FETCH_ALGO_BACKTEST_RESULT_BY_TICKER:
            return {...state, backtestResultData: {...action.payload}}

        case FETCH_ALGO_BACKTEST_RESULT_PORTFOLIO:
            return {...state, backtestResultData: {...action.payload}}

        default: return state
    }
}