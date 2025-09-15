import {
    FETCH_PAIR_ARBITRAGE_DIAGRAM_SPREADS,
    FETCH_PAIR_ARBITRAGE_STRATEGY_SIGNALS,
    FETCH_PAIR_ARBITRAGE_BACKTEST_RESULTS,
    FETCH_PAIR_ARBITRAGE_BACKTEST_RESULT_BY_ID,
    FETCH_PAIR_ARBITRAGE_BACKTEST_RESULT_BY_TICKER,
    FETCH_PAIR_ARBITRAGE_BACKTEST_RESULT_PORTFOLIO
} from '../types/pairArbitrageTypes'

const initialState = {
    reportData: {},
    backtestResultData: {},
    spreadDiagramData: {}
}

export const pairArbitrageReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_PAIR_ARBITRAGE_DIAGRAM_SPREADS:
            return {...state, spreadDiagramData: {...action.payload}}

        case FETCH_PAIR_ARBITRAGE_STRATEGY_SIGNALS:
            return {...state, reportData: {...action.payload}}

        case FETCH_PAIR_ARBITRAGE_BACKTEST_RESULTS:
            return {...state, reportData: {...action.payload}}

        case FETCH_PAIR_ARBITRAGE_BACKTEST_RESULT_BY_ID:
            return {...state, backtestResultData: {...action.payload}}

        case FETCH_PAIR_ARBITRAGE_BACKTEST_RESULT_BY_TICKER:
            return {...state, backtestResultData: {...action.payload}}

        case FETCH_PAIR_ARBITRAGE_BACKTEST_RESULT_PORTFOLIO:
            return {...state, backtestResultData: {...action.payload}}

        default: return state
    }
}