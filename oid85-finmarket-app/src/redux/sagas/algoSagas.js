import {call, put, select, takeEvery} from 'redux-saga/effects'
import {hideLoader, showAlert, showLoader} from '../actions/appActions'
import {
    fetchAlgoStrategySignals,
    fetchAlgoBacktestResults,
    fetchAlgoBacktestResultById
} from '../actions/algoActions'
import {
    SAGA_STRATEGY_SIGNALS,
    SAGA_BACKTEST_RESULTS,
    SAGA_BACKTEST_RESULT_BY_ID
} from '../types/algoTypes'
import {
    getAlgoStrategySignalsFromApi,
    getAlgoBacktestResultsFromApi,
    getAlgoBacktestResultByIdFromApi
} from "../api/algoApi"

// SagaWatcher'ы
export function* eventSagaWatcherAlgo() {
    yield takeEvery(SAGA_STRATEGY_SIGNALS, sagaWorkerAlgoStrategySignals)
    yield takeEvery(SAGA_BACKTEST_RESULTS, sagaWorkerAlgoBacktestResults)
    yield takeEvery(SAGA_BACKTEST_RESULT_BY_ID, sagaWorkerAlgoBacktestResultById)
}

const getBacktestResultId = (state) => state.filter.backtestResultId

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

function* sagaWorkerAlgoBacktestResultById() {
    try {
        yield put(showLoader())

        let backtestResultId = yield select(getBacktestResultId)
        let backtestResultData = yield call(getAlgoBacktestResultByIdFromApi, backtestResultId)

        yield put(fetchAlgoBacktestResultById(backtestResultData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}