import {call, put, select, takeEvery} from 'redux-saga/effects'
import {hideLoader, showAlert, showLoader} from '../actions/appActions'
import {
    fetchReportFuturesAggregatedAnalyse,
    fetchReportFuturesSupertrend,
    fetchReportFuturesCandleSequence,
    fetchReportFuturesCandleVolume,
    fetchReportFuturesRsi,
    fetchReportFuturesYieldLtm,
    fetchReportFuturesSpread,
    fetchReportFuturesMarketEvent
} from '../actions/reportFuturesActions'
import {
    SAGA_REPORT_FUTURES_SUPERTREND,
    SAGA_REPORT_FUTURES_CANDLE_SEQUENCE,
    SAGA_REPORT_FUTURES_CANDLE_VOLUME,
    SAGA_REPORT_FUTURES_RSI,
    SAGA_REPORT_FUTURES_YIELD_LTM,
    SAGA_REPORT_SPREAD,
    SAGA_REPORT_FUTURES_AGGREGATED_ANALYSE,
    SAGA_REPORT_FUTURES_MARKET_EVENT
} from '../types/reportFuturesTypes'
import {
    getReportAggregatedAnalyseFromApi,
    getReportSuperTrendFromApi,
    getReportCandleSequenceFromApi,
    getReportCandleVolumeFromApi,
    getReportRsiFromApi,
    getReportYieldLtmFromApi,
    getReportSpreadFromApi,
    getReportMarketEventFromApi
} from "../api/reportFuturesApi"

const getStartDate = (state) => state.filter.startDate
const getEndDate = (state) => state.filter.endDate

// SagaWatcher'ы
export function* eventSagaWatcherReportFutures() {
    yield takeEvery(SAGA_REPORT_FUTURES_SUPERTREND, sagaWorkerReportFuturesSuperTrend)
    yield takeEvery(SAGA_REPORT_FUTURES_CANDLE_SEQUENCE, sagaWorkerReportFuturesCandleSequence)
    yield takeEvery(SAGA_REPORT_FUTURES_CANDLE_VOLUME, sagaWorkerReportFuturesCandleVolume)
    yield takeEvery(SAGA_REPORT_FUTURES_RSI, sagaWorkerReportFuturesRsi)
    yield takeEvery(SAGA_REPORT_FUTURES_YIELD_LTM, sagaWorkerReportFuturesYieldLtm)
    yield takeEvery(SAGA_REPORT_SPREAD, sagaWorkerReportSpread)
    yield takeEvery(SAGA_REPORT_FUTURES_AGGREGATED_ANALYSE, sagaWorkerReportFuturesAggregatedAnalyse)
    yield takeEvery(SAGA_REPORT_FUTURES_MARKET_EVENT, sagaWorkerReportFuturesMarketEvent)
}

// SagaWorker'ы
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

function* sagaWorkerReportSpread() {
    try {
        yield put(showLoader())

        let reportData = yield call(getReportSpreadFromApi)

        yield put(fetchReportFuturesSpread(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportFuturesAggregatedAnalyse() {
    try {
        yield put(showLoader())

        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)

        let reportData = yield call(getReportAggregatedAnalyseFromApi, startDate, endDate)

        yield put(fetchReportFuturesAggregatedAnalyse(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportFuturesMarketEvent() {
    try {
        yield put(showLoader())

        let reportData = yield call(getReportMarketEventFromApi)

        yield put(fetchReportFuturesMarketEvent(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}