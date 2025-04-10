import {call, put, select, takeEvery} from 'redux-saga/effects'
import {hideLoader, showAlert, showLoader} from '../actions/appActions'
import {
    fetchReportIndexesAggregatedAnalyse,
    fetchReportIndexesSupertrend,
    fetchReportIndexesCandleSequence,
    fetchReportIndexesRsi,
    fetchReportIndexesYieldLtm,
    fetchReportIndexesDrawdownFromMaximum,
    fetchReportIndexesMarketEvent
} from '../actions/reportIndexesActions'
import {
    SAGA_REPORT_INDEXES_SUPERTREND,
    SAGA_REPORT_INDEXES_CANDLE_SEQUENCE,
    SAGA_REPORT_INDEXES_RSI,
    SAGA_REPORT_INDEXES_YIELD_LTM,
    SAGA_REPORT_INDEXES_DRAWDOWN_FROM_MAXIMUM,
    SAGA_REPORT_INDEXES_AGGREGATED_ANALYSE,
    SAGA_REPORT_INDEXES_MARKET_EVENT
} from '../types/reportIndexesTypes'
import {
    getReportAggregatedAnalyseFromApi,
    getReportSuperTrendFromApi,
    getReportCandleSequenceFromApi,
    getReportRsiFromApi,
    getReportYieldLtmFromApi,
    getReportDrawdownFromMaximumFromApi,
    getReportMarketEventFromApi
} from "../api/reportIndexesApi";

const getStartDate = (state) => state.filter.startDate
const getEndDate = (state) => state.filter.endDate

// SagaWatcher'ы
export function* eventSagaWatcherReportIndexes() {
    yield takeEvery(SAGA_REPORT_INDEXES_SUPERTREND, sagaWorkerReportIndexesSuperTrend)
    yield takeEvery(SAGA_REPORT_INDEXES_CANDLE_SEQUENCE, sagaWorkerReportIndexesCandleSequence)
    yield takeEvery(SAGA_REPORT_INDEXES_RSI, sagaWorkerReportIndexesRsi)
    yield takeEvery(SAGA_REPORT_INDEXES_YIELD_LTM, sagaWorkerReportIndexesYieldLtm)
    yield takeEvery(SAGA_REPORT_INDEXES_DRAWDOWN_FROM_MAXIMUM, sagaWorkerReportIndexesDrawdownFromMaximum)
    yield takeEvery(SAGA_REPORT_INDEXES_AGGREGATED_ANALYSE, sagaWorkerReportIndexesAggregatedAnalyse)
    yield takeEvery(SAGA_REPORT_INDEXES_MARKET_EVENT, sagaWorkerReportIndexesMarketEvent)
}

// SagaWorker'ы
function* sagaWorkerReportIndexesSuperTrend() {
    try {
        yield put(showLoader())

        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let reportData = yield call(getReportSuperTrendFromApi, startDate, endDate)

        yield put(fetchReportIndexesSupertrend(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportIndexesCandleSequence() {
    try {
        yield put(showLoader())

        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let reportData = yield call(getReportCandleSequenceFromApi, startDate, endDate)

        yield put(fetchReportIndexesCandleSequence(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportIndexesRsi() {
    try {
        yield put(showLoader())

        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let reportData = yield call(getReportRsiFromApi, startDate, endDate)

        yield put(fetchReportIndexesRsi(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportIndexesYieldLtm() {
    try {
        yield put(showLoader())

        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let reportData = yield call(getReportYieldLtmFromApi, startDate, endDate)

        yield put(fetchReportIndexesYieldLtm(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportIndexesDrawdownFromMaximum() {
    try {
        yield put(showLoader())

        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let reportData = yield call(getReportDrawdownFromMaximumFromApi, startDate, endDate)

        yield put(fetchReportIndexesDrawdownFromMaximum(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportIndexesAggregatedAnalyse() {
    try {
        yield put(showLoader())

        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)

        let reportData = yield call(getReportAggregatedAnalyseFromApi, startDate, endDate)

        yield put(fetchReportIndexesAggregatedAnalyse(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportIndexesMarketEvent() {
    try {
        yield put(showLoader())

        let reportData = yield call(getReportMarketEventFromApi)

        yield put(fetchReportIndexesMarketEvent(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}