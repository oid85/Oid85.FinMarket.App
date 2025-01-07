import {call, put, select, takeEvery} from 'redux-saga/effects'
import {hideLoader, showAlert, showLoader} from '../actions/appActions'
import {
    fetchReportFutureAggregatedAnalyse,
    fetchReportFuturesSupertrend,
    fetchReportFuturesCandleSequence,
    fetchReportFuturesCandleVolume,
    fetchReportFuturesRsi,
    fetchReportFuturesYieldLtm,
    fetchReportFuturesSpreads,
    fetchFuturesWatchListTickers
} from '../actions/reportFuturesActions'
import {
    SAGA_REPORT_FUTURES_SUPERTREND,
    SAGA_REPORT_FUTURES_CANDLE_SEQUENCE,
    SAGA_REPORT_FUTURES_CANDLE_VOLUME,
    SAGA_REPORT_FUTURES_RSI,
    SAGA_REPORT_FUTURES_YIELD_LTM,
    SAGA_REPORT_SPREADS,
    SAGA_REPORT_FUTURE_AGGREGATED_ANALYSE,
    SAGA_FUTURES_WATCH_LIST_TICKERS
} from '../types/futuresTypes'
import {
    getReportAggregatedAnalyseFromApi,
    getReportSuperTrendFromApi,
    getReportCandleSequenceFromApi,
    getReportCandleVolumeFromApi,
    getReportRsiFromApi,
    getReportYieldLtmFromApi,
    getReportSpreadFromApi,
    getWatchListTickersFromApi
} from "../api/futuresApi";

const getStartDate = (state) => state.filter.startDate
const getEndDate = (state) => state.filter.endDate
const getTicker = (state) => state.filter.ticker

// SagaWatcher'ы
export function* eventSagaWatcherReportFutures() {
    yield takeEvery(SAGA_FUTURES_WATCH_LIST_TICKERS, sagaWorkerFuturesWatchListTickers)
    yield takeEvery(SAGA_REPORT_FUTURES_SUPERTREND, sagaWorkerReportFuturesSuperTrend)
    yield takeEvery(SAGA_REPORT_FUTURES_CANDLE_SEQUENCE, sagaWorkerReportFuturesCandleSequence)
    yield takeEvery(SAGA_REPORT_FUTURES_CANDLE_VOLUME, sagaWorkerReportFuturesCandleVolume)
    yield takeEvery(SAGA_REPORT_FUTURES_RSI, sagaWorkerReportFuturesRsi)
    yield takeEvery(SAGA_REPORT_FUTURES_YIELD_LTM, sagaWorkerReportFuturesYieldLtm)
    yield takeEvery(SAGA_REPORT_SPREADS, sagaWorkerReportSpreads)
    yield takeEvery(SAGA_REPORT_FUTURE_AGGREGATED_ANALYSE, sagaWorkerReportFuturesAggregateAnalyse)
}

// SagaWorker'ы
function* sagaWorkerFuturesWatchListTickers() {
    try {
        yield put(showLoader())

        let watchListTickers = yield call(getWatchListTickersFromApi)

        yield put(fetchFuturesWatchListTickers(watchListTickers))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportFuturesSuperTrend() {
    try {
        yield put(showLoader())

        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let reportData = yield call(getReportSuperTrendFromApi, startDate, endDate)

        yield put(fetchReportFuturesSupertrend(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportFuturesCandleSequence() {
    try {
        yield put(showLoader())

        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let reportData = yield call(getReportCandleSequenceFromApi, startDate, endDate)

        yield put(fetchReportFuturesCandleSequence(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportFuturesCandleVolume() {
    try {
        yield put(showLoader())

        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let reportData = yield call(getReportCandleVolumeFromApi, startDate, endDate)

        yield put(fetchReportFuturesCandleVolume(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportFuturesRsi() {
    try {
        yield put(showLoader())

        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let reportData = yield call(getReportRsiFromApi, startDate, endDate)

        yield put(fetchReportFuturesRsi(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportFuturesYieldLtm() {
    try {
        yield put(showLoader())

        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let reportData = yield call(getReportYieldLtmFromApi, startDate, endDate)

        yield put(fetchReportFuturesYieldLtm(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportSpreads() {
    try {
        yield put(showLoader())

        let reportData = yield call(getReportSpreadFromApi)

        yield put(fetchReportFuturesSpreads(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportFuturesAggregateAnalyse() {
    try {
        yield put(showLoader())

        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let ticker = yield select(getTicker)

        let reportData = yield call(getReportAggregatedAnalyseFromApi, startDate, endDate, ticker)

        yield put(fetchReportFutureAggregatedAnalyse(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}
