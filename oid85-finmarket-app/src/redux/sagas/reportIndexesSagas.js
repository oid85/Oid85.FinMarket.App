import {call, put, select, takeEvery} from 'redux-saga/effects'
import {hideLoader, showAlert, showLoader} from '../actions/appActions'
import {
    fetchReportIndexAggregatedAnalyse,
    fetchReportIndexesSupertrend,
    fetchReportIndexesCandleSequence,
    fetchReportIndexesRsi,
    fetchReportIndexesYieldLtm,
    fetchIndexesWatchListTickers
} from '../actions/reportIndexesActions'
import {
    SAGA_REPORT_INDEXES_SUPERTREND,
    SAGA_REPORT_INDEXES_CANDLE_SEQUENCE,
    SAGA_REPORT_INDEXES_RSI,
    SAGA_REPORT_INDEXES_YIELD_LTM,
    SAGA_REPORT_INDEX_AGGREGATED_ANALYSE,
    SAGA_INDEXES_WATCH_LIST_TICKERS
} from '../types/indexesTypes'
import {
    getReportAggregatedAnalyseFromApi,
    getReportSuperTrendFromApi,
    getReportCandleSequenceFromApi,
    getReportRsiFromApi,
    getReportYieldLtmFromApi,
    getWatchListTickersFromApi
} from "../api/indexesApi";

const getStartDate = (state) => state.filter.startDate
const getEndDate = (state) => state.filter.endDate
const getTicker = (state) => state.filter.ticker
const getIndexesWatchListTickers = (state) => state.reportIndexes.watchListTickers

// SagaWatcher'ы
export function* eventSagaWatcherReportIndexes() {
    yield takeEvery(SAGA_INDEXES_WATCH_LIST_TICKERS, sagaWorkerIndexesWatchListTickers)
    yield takeEvery(SAGA_REPORT_INDEXES_SUPERTREND, sagaWorkerReportIndexesSuperTrend)
    yield takeEvery(SAGA_REPORT_INDEXES_CANDLE_SEQUENCE, sagaWorkerReportIndexesCandleSequence)
    yield takeEvery(SAGA_REPORT_INDEXES_RSI, sagaWorkerReportIndexesRsi)
    yield takeEvery(SAGA_REPORT_INDEXES_YIELD_LTM, sagaWorkerReportIndexesYieldLtm)
    yield takeEvery(SAGA_REPORT_INDEX_AGGREGATED_ANALYSE, sagaWorkerReportIndexesAggregateAnalyse)
}

// SagaWorker'ы
function* sagaWorkerIndexesWatchListTickers() {
    try {
        yield put(showLoader())

        let watchListTickers = yield call(getWatchListTickersFromApi)

        yield put(fetchIndexesWatchListTickers(watchListTickers))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

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

function* sagaWorkerReportIndexesAggregateAnalyse() {
    try {
        yield put(showLoader())

        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let ticker = yield select(getTicker)
        let watchListTickers = yield select(getIndexesWatchListTickers)

        if (ticker === '') {
            ticker = watchListTickers[0]
        }

        let reportData = yield call(getReportAggregatedAnalyseFromApi, startDate, endDate, ticker)

        yield put(fetchReportIndexAggregatedAnalyse(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}
