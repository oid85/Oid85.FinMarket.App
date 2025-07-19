import {call, put, select, takeEvery} from 'redux-saga/effects'
import {hideLoader, showAlert, showLoader} from '../actions/appActions'
import {
    fetchAlgoStrategySignals,
    fetchAlgoBacktestResults,
    fetchAlgoBacktestResultById,
    fetchAlgoBacktestResultByTicker,
    fetchAlgoBacktestResultPortfolio
} from '../actions/algoActions'
import {
    SAGA_STRATEGY_SIGNALS,
    SAGA_BACKTEST_RESULTS,
    SAGA_BACKTEST_RESULT_BY_ID,
    SAGA_BACKTEST_RESULT_BY_TICKER,
    SAGA_BACKTEST_RESULT_PORTFOLIO
} from '../types/algoTypes'
import {
    getAlgoStrategySignalsFromApi,
    getAlgoBacktestResultsFromApi,
    getAlgoBacktestResultByIdFromApi,
    getAlgoBacktestResultByTickerFromApi,
    getAlgoBacktestResultPortfolioFromApi
} from "../api/algoApi"

// SagaWatcher'ы
export function* eventSagaWatcherAlgo() {
    yield takeEvery(SAGA_STRATEGY_SIGNALS, sagaWorkerAlgoStrategySignals)
    yield takeEvery(SAGA_BACKTEST_RESULTS, sagaWorkerAlgoBacktestResults)
    yield takeEvery(SAGA_BACKTEST_RESULT_BY_ID, sagaWorkerAlgoBacktestResultById)
    yield takeEvery(SAGA_BACKTEST_RESULT_BY_TICKER, sagaWorkerAlgoBacktestResultByTicker)
    yield takeEvery(SAGA_BACKTEST_RESULT_PORTFOLIO, sagaWorkerAlgoBacktestResultPortfolio)
}

const getBacktestResultId = (state) => state.filter.backtestResultId
const getBacktestResultTicker = (state) => state.filter.backtestResultTicker
const getBacktestResultStrategyName = (state) => state.filter.backtestResultStrategyName

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

        let backtestResultTicker = yield select(getBacktestResultTicker)
        let backtestResultStrategyName = yield select(getBacktestResultStrategyName)
        let backtestResultData = yield call(getAlgoBacktestResultsFromApi, backtestResultTicker, backtestResultStrategyName)

        yield put(fetchAlgoBacktestResults(backtestResultData))
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

function* sagaWorkerAlgoBacktestResultByTicker() {
    try {
        yield put(showLoader())

        let backtestResultTicker = yield select(getBacktestResultTicker)
        let backtestResultData = yield call(getAlgoBacktestResultByTickerFromApi, backtestResultTicker)

        yield put(fetchAlgoBacktestResultByTicker(backtestResultData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerAlgoBacktestResultPortfolio() {
    try {
        yield put(showLoader())

        let backtestResultData = yield call(getAlgoBacktestResultPortfolioFromApi)

        yield put(fetchAlgoBacktestResultPortfolio(backtestResultData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}