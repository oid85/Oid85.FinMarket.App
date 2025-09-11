import {
    SAGA_PAIR_ARBITRAGE_DIAGRAM_SPREADS,
    SAGA_PAIR_ARBITRAGE_STRATEGY_SIGNALS,
    SAGA_PAIR_ARBITRAGE_BACKTEST_RESULTS,
    SAGA_PAIR_ARBITRAGE_BACKTEST_RESULT_BY_ID,
    SAGA_PAIR_ARBITRAGE_BACKTEST_RESULT_BY_TICKER,
    SAGA_PAIR_ARBITRAGE_BACKTEST_RESULT_PORTFOLIO,

    FETCH_PAIR_ARBITRAGE_DIAGRAM_SPREADS,
    FETCH_PAIR_ARBITRAGE_STRATEGY_SIGNALS,
    FETCH_PAIR_ARBITRAGE_BACKTEST_RESULTS,
    FETCH_PAIR_ARBITRAGE_BACKTEST_RESULT_BY_ID,
    FETCH_PAIR_ARBITRAGE_BACKTEST_RESULT_BY_TICKER,
    FETCH_PAIR_ARBITRAGE_BACKTEST_RESULT_PORTFOLIO
} from '../types/pairArbitrageTypes'


export const sagaPairArbitrageSpreads = () => {
    return {
        type: SAGA_PAIR_ARBITRAGE_DIAGRAM_SPREADS
    }
}

export const fetchPairArbitrageSpreads = (spreadDiagramData) => {
    return {
        type: FETCH_PAIR_ARBITRAGE_DIAGRAM_SPREADS,
        payload: spreadDiagramData
    }
}

export const sagaPairArbitrageStrategySignals = () => {
    return {
        type: SAGA_PAIR_ARBITRAGE_STRATEGY_SIGNALS
    }
}

export const fetchPairArbitrageStrategySignals = (reportData) => {
    return {
        type: FETCH_PAIR_ARBITRAGE_STRATEGY_SIGNALS,
        payload: reportData
    }
}

export const sagaPairArbitrageBacktestResults = () => {
    return {
        type: SAGA_PAIR_ARBITRAGE_BACKTEST_RESULTS
    }
}

export const fetchPairArbitrageBacktestResults = (reportData) => {
    return {
        type: FETCH_PAIR_ARBITRAGE_BACKTEST_RESULTS,
        payload: reportData
    }
}

export const sagaPairArbitrageBacktestResultById = () => {
    return {
        type: SAGA_PAIR_ARBITRAGE_BACKTEST_RESULT_BY_ID
    }
}

export const fetchPairArbitrageBacktestResultById = (backtestResultData) => {
    return {
        type: FETCH_PAIR_ARBITRAGE_BACKTEST_RESULT_BY_ID,
        payload: backtestResultData
    }
}

export const sagaPairArbitrageBacktestResultByTicker = () => {
    return {
        type: SAGA_PAIR_ARBITRAGE_BACKTEST_RESULT_BY_TICKER
    }
}

export const fetchPairArbitrageBacktestResultByTicker = (backtestResultData) => {
    return {
        type: FETCH_PAIR_ARBITRAGE_BACKTEST_RESULT_BY_TICKER,
        payload: backtestResultData
    }
}

export const sagaPairArbitrageBacktestResultPortfolio = () => {
    return {
        type: SAGA_PAIR_ARBITRAGE_BACKTEST_RESULT_PORTFOLIO
    }
}

export const fetchPairArbitrageBacktestResultPortfolio = (backtestResultData) => {
    return {
        type: FETCH_PAIR_ARBITRAGE_BACKTEST_RESULT_PORTFOLIO,
        payload: backtestResultData
    }
}
