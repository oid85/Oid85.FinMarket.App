import {call, put, select, takeEvery} from 'redux-saga/effects'
import {hideLoader, showAlert, showLoader} from '../actions/appActions'
import {
    fetchPairArbitrageSpreads,
    fetchPairArbitrageStrategySignals,
    fetchPairArbitrageBacktestResults,
    fetchPairArbitrageBacktestResultById,
    fetchPairArbitrageBacktestResultByTicker,
    fetchPairArbitrageBacktestResultPortfolio
} from '../actions/pairArbitrageActions'
import {
    SAGA_PAIR_ARBITRAGE_DIAGRAM_SPREADS,
    SAGA_PAIR_ARBITRAGE_STRATEGY_SIGNALS,
    SAGA_PAIR_ARBITRAGE_BACKTEST_RESULTS,
    SAGA_PAIR_ARBITRAGE_BACKTEST_RESULT_BY_ID,
    SAGA_PAIR_ARBITRAGE_BACKTEST_RESULT_BY_TICKER,
    SAGA_PAIR_ARBITRAGE_BACKTEST_RESULT_PORTFOLIO
} from '../types/pairArbitrageTypes'
import {
    getPairArbitrageSpreadsFromApi,
    getPairArbitrageStrategySignalsFromApi,
    getPairArbitrageBacktestResultsFromApi,
    getPairArbitrageBacktestResultByIdFromApi,
    getPairArbitrageBacktestResultByTickerFromApi,
    getPairArbitrageBacktestResultPortfolioFromApi
} from "../api/pairArbitrageApi"


// SagaWatcher'ы
export function* eventSagaWatcherPairArbitrage() {
    yield takeEvery(SAGA_PAIR_ARBITRAGE_DIAGRAM_SPREADS, sagaWorkerPairArbitrageSpreads)
    yield takeEvery(SAGA_PAIR_ARBITRAGE_STRATEGY_SIGNALS, sagaWorkerPairArbitrageStrategySignals)
    yield takeEvery(SAGA_PAIR_ARBITRAGE_BACKTEST_RESULTS, sagaWorkerPairArbitrageBacktestResults)
    yield takeEvery(SAGA_PAIR_ARBITRAGE_BACKTEST_RESULT_BY_ID, sagaWorkerPairArbitrageBacktestResultById)
    yield takeEvery(SAGA_PAIR_ARBITRAGE_BACKTEST_RESULT_BY_TICKER, sagaWorkerPairArbitrageBacktestResultByTicker)
    yield takeEvery(SAGA_PAIR_ARBITRAGE_BACKTEST_RESULT_PORTFOLIO, sagaWorkerPairArbitrageBacktestResultPortfolio)
}

const getStartDate = (state) => state.filter.startDate
const getEndDate = (state) => state.filter.endDate
const getBacktestResultId = (state) => state.filter.backtestResultId
const getBacktestResultTicker = (state) => state.filter.backtestResultTicker
const getBacktestResultStrategyName = (state) => state.filter.backtestResultStrategyName

// SagaWorker'ы
function* sagaWorkerPairArbitrageSpreads() {
    try {
        yield put(showLoader())

        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)

        let diagramData = yield call(getPairArbitrageSpreadsFromApi, startDate, endDate)

        yield put(fetchPairArbitrageSpreads(diagramData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerPairArbitrageStrategySignals() {
    try {
        yield put(showLoader())

        let reportData = yield call(getPairArbitrageStrategySignalsFromApi)

        yield put(fetchPairArbitrageStrategySignals(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerPairArbitrageBacktestResults() {
    try {
        yield put(showLoader())

        let backtestResultTicker = yield select(getBacktestResultTicker)
        let backtestResultStrategyName = yield select(getBacktestResultStrategyName)
        let backtestResultData = yield call(getPairArbitrageBacktestResultsFromApi, backtestResultTicker, backtestResultStrategyName)

        yield put(fetchPairArbitrageBacktestResults(backtestResultData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerPairArbitrageBacktestResultById() {
    try {
        yield put(showLoader())

        let backtestResultId = yield select(getBacktestResultId)
        let backtestResultData = yield call(getPairArbitrageBacktestResultByIdFromApi, backtestResultId)

        yield put(fetchPairArbitrageBacktestResultById(backtestResultData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerPairArbitrageBacktestResultByTicker() {
    try {
        yield put(showLoader())

        let backtestResultTicker = yield select(getBacktestResultTicker)
        let backtestResultData = yield call(getPairArbitrageBacktestResultByTickerFromApi, backtestResultTicker)

        yield put(fetchPairArbitrageBacktestResultByTicker(backtestResultData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerPairArbitrageBacktestResultPortfolio() {
    try {
        yield put(showLoader())

        let backtestResultData = yield call(getPairArbitrageBacktestResultPortfolioFromApi)

        yield put(fetchPairArbitrageBacktestResultPortfolio(backtestResultData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}
