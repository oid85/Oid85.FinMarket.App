import {
    FETCH_STRATEGY_SIGNALS,
    FETCH_BACKTEST_RESULTS,
    FETCH_BACKTEST_RESULT_BY_ID,
    FETCH_BACKTEST_RESULT_BY_TICKER,
    FETCH_BACKTEST_RESULT_PORTFOLIO,
    FETCH_DIAGRAM_SPREADS
} from '../types/algoTypes'

const initialState = {
    reportData: {},
    backtestResultData: {},
    spreadDiagramData: {}
}

export const algoReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_STRATEGY_SIGNALS:
            return {...state, reportData: {...action.payload}}

        case FETCH_BACKTEST_RESULTS:
            return {...state, reportData: {...action.payload}}

        case FETCH_BACKTEST_RESULT_BY_ID:
            return {...state, backtestResultData: {...action.payload}}

        case FETCH_BACKTEST_RESULT_BY_TICKER:
            return {...state, backtestResultData: {...action.payload}}

        case FETCH_BACKTEST_RESULT_PORTFOLIO:
            return {...state, backtestResultData: {...action.payload}}

        case FETCH_DIAGRAM_SPREADS:
            return {...state, spreadDiagramData: {...action.payload}}

        default: return state
    }
}