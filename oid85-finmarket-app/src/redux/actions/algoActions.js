import {
    SAGA_STRATEGY_SIGNALS,
    SAGA_BACKTEST_RESULTS,
    SAGA_BACKTEST_RESULT_BY_ID,
    SAGA_BACKTEST_RESULT_BY_TICKER,

    FETCH_STRATEGY_SIGNALS,
    FETCH_BACKTEST_RESULTS,
    FETCH_BACKTEST_RESULT_BY_ID,
    FETCH_BACKTEST_RESULT_BY_TICKER
} from '../types/algoTypes'

export const sagaAlgoStrategySignals = () => {
    return {
        type: SAGA_STRATEGY_SIGNALS
    }
}

export const fetchAlgoStrategySignals = (reportData) => {
    return {
        type: FETCH_STRATEGY_SIGNALS,
        payload: reportData
    }
}

export const sagaAlgoBacktestResults = () => {
    return {
        type: SAGA_BACKTEST_RESULTS
    }
}

export const fetchAlgoBacktestResults = (reportData) => {
    return {
        type: FETCH_BACKTEST_RESULTS,
        payload: reportData
    }
}

export const sagaAlgoBacktestResultById = () => {
    return {
        type: SAGA_BACKTEST_RESULT_BY_ID
    }
}

export const fetchAlgoBacktestResultById = (backtestResultData) => {
    return {
        type: FETCH_BACKTEST_RESULT_BY_ID,
        payload: backtestResultData
    }
}

export const sagaAlgoBacktestResultByTicker = () => {
    return {
        type: SAGA_BACKTEST_RESULT_BY_TICKER
    }
}

export const fetchAlgoBacktestResultByTicker = (backtestResultData) => {
    return {
        type: FETCH_BACKTEST_RESULT_BY_TICKER,
        payload: backtestResultData
    }
}