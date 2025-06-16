import {
    SAGA_STRATEGY_SIGNALS,
    SAGA_BACKTEST_RESULTS,
    SAGA_BACKTEST_RESULT,

    FETCH_STRATEGY_SIGNALS,
    FETCH_BACKTEST_RESULTS,
    FETCH_BACKTEST_RESULT
} from '../types/algoTypes'

export const sagaAlgoStrategySignals = () => {
    return {
        type: SAGA_STRATEGY_SIGNALS
    }
}

export const fetchAlgoStrategySignals = (strategySignals) => {
    return {
        type: FETCH_STRATEGY_SIGNALS,
        payload: strategySignals
    }
}

export const sagaAlgoBacktestResults = () => {
    return {
        type: SAGA_BACKTEST_RESULTS
    }
}

export const fetchAlgoBacktestResults = (backtestResults) => {
    return {
        type: FETCH_BACKTEST_RESULTS,
        payload: backtestResults
    }
}

export const sagaAlgoBacktestResult = () => {
    return {
        type: SAGA_BACKTEST_RESULT
    }
}

export const fetchAlgoBacktestResult = (backtestResult) => {
    return {
        type: FETCH_BACKTEST_RESULT,
        payload: backtestResult
    }
}