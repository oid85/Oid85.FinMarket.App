import {call, put, select, takeEvery} from 'redux-saga/effects'
import {hideLoader, showAlert, showLoader} from '../actions/appActions'
import {
    fetchAlgoStrategySignals,
    fetchAlgoBacktestResults,
    fetchAlgoBacktestResult
} from '../actions/algoActions'
import {
    SAGA_STRATEGY_SIGNALS,
    SAGA_BACKTEST_RESULTS,
    SAGA_BACKTEST_RESULT
} from '../types/algoTypes'
import {
    getAlgoStrategySignalsFromApi,
    getAlgoBacktestResultsFromApi,
    getAlgoBacktestResultFromApi
} from "../api/algoApi"

const getBacktestResultId = (state) => state.filter.backtestResultId

// SagaWatcher'ы
export function* eventSagaWatcherAlgo() {
    yield takeEvery(SAGA_STRATEGY_SIGNALS, sagaWorkerAlgoStrategySignals)
    yield takeEvery(SAGA_BACKTEST_RESULTS, sagaWorkerAlgoBacktestResults)
    yield takeEvery(SAGA_BACKTEST_RESULT, sagaWorkerAlgoBacktestResult)
}

// SagaWorker'ы
function* sagaWorkerAlgoStrategySignals() {
    try {
        yield put(showLoader())

        let strategySignals = yield call(getAlgoStrategySignalsFromApi)
        
        yield put(fetchAlgoStrategySignals(strategySignals))
        yield put(hideLoader())
    } 
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerAlgoBacktestResults() {
    try {
        yield put(showLoader())

        let backtestResults = yield call(getAlgoBacktestResultsFromApi)

        yield put(fetchAlgoBacktestResults(backtestResults))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerAlgoBacktestResult() {
    try {
        yield put(showLoader())

        let backtestResultId = yield select(getBacktestResultId)

        let backtestResult = yield call(getAlgoBacktestResultFromApi, backtestResultId)

        yield put(fetchAlgoBacktestResult(backtestResult))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}