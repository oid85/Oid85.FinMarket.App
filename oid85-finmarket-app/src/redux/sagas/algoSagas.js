import {call, put, select, takeEvery} from 'redux-saga/effects'
import {hideLoader, showAlert, showLoader} from '../actions/appActions'
import {
    fetchAlgoStrategySignals,
    fetchAlgoBacktestResults
} from '../actions/algoActions'
import {
    SAGA_STRATEGY_SIGNALS,
    SAGA_BACKTEST_RESULTS
} from '../types/algoTypes'
import {
    getAlgoStrategySignalsFromApi,
    getAlgoBacktestResultsFromApi
} from "../api/algoApi"

// SagaWatcher'ы
export function* eventSagaWatcherAlgo() {
    yield takeEvery(SAGA_STRATEGY_SIGNALS, sagaWorkerAlgoStrategySignals)
    yield takeEvery(SAGA_BACKTEST_RESULTS, sagaWorkerAlgoBacktestResults)
}

// SagaWorker'ы
function* sagaWorkerAlgoStrategySignals() {
    try {
        yield put(showLoader())

        let reportData = yield call(getAlgoStrategySignalsFromApi)

        yield put(fetchAlgoStrategySignals(reportData))
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

        let reportData = yield call(getAlgoBacktestResultsFromApi)

        yield put(fetchAlgoBacktestResults(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}
