import {
    SAGA_STRATEGY_SIGNALS,
    SAGA_BACKTEST_RESULTS,

    FETCH_STRATEGY_SIGNALS,
    FETCH_BACKTEST_RESULTS
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
