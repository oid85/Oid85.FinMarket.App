import {call, put, select, takeEvery} from 'redux-saga/effects'
import {hideLoader, showAlert, showLoader} from '../actions/appActions'
import {
    fetchReportCurrenciesAggregatedAnalyse,
    fetchReportCurrenciesSupertrend,
    fetchReportCurrenciesCandleSequence,
    fetchReportCurrenciesRsi,
    fetchReportCurrenciesYieldLtm
} from '../actions/reportCurrenciesActions'
import {
    SAGA_REPORT_CURRENCIES_SUPERTREND,
    SAGA_REPORT_CURRENCIES_CANDLE_SEQUENCE,
    SAGA_REPORT_CURRENCIES_RSI,
    SAGA_REPORT_CURRENCIES_YIELD_LTM,
    SAGA_REPORT_CURRENCIES_AGGREGATED_ANALYSE
} from '../types/reportCurrenciesTypes'
import {
    getReportAggregatedAnalyseFromApi,
    getReportSuperTrendFromApi,
    getReportCandleSequenceFromApi,
    getReportRsiFromApi,
    getReportYieldLtmFromApi
} from "../api/reportCurrenciesApi";

const getStartDate = (state) => state.filter.startDate
const getEndDate = (state) => state.filter.endDate

// SagaWatcher'ы
export function* eventSagaWatcherReportCurrencies() {
    yield takeEvery(SAGA_REPORT_CURRENCIES_SUPERTREND, sagaWorkerReportCurrenciesSuperTrend)
    yield takeEvery(SAGA_REPORT_CURRENCIES_CANDLE_SEQUENCE, sagaWorkerReportCurrenciesCandleSequence)
    yield takeEvery(SAGA_REPORT_CURRENCIES_RSI, sagaWorkerReportCurrenciesRsi)
    yield takeEvery(SAGA_REPORT_CURRENCIES_YIELD_LTM, sagaWorkerReportCurrenciesYieldLtm)
    yield takeEvery(SAGA_REPORT_CURRENCIES_AGGREGATED_ANALYSE, sagaWorkerReportCurrenciesAggregatedAnalyse)
}

// SagaWorker'ы
function* sagaWorkerReportCurrenciesSuperTrend() {
    try {
        yield put(showLoader())

        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let reportData = yield call(getReportSuperTrendFromApi, startDate, endDate)

        yield put(fetchReportCurrenciesSupertrend(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportCurrenciesCandleSequence() {
    try {
        yield put(showLoader())

        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let reportData = yield call(getReportCandleSequenceFromApi, startDate, endDate)

        yield put(fetchReportCurrenciesCandleSequence(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportCurrenciesRsi() {
    try {
        yield put(showLoader())

        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let reportData = yield call(getReportRsiFromApi, startDate, endDate)

        yield put(fetchReportCurrenciesRsi(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportCurrenciesYieldLtm() {
    try {
        yield put(showLoader())

        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let reportData = yield call(getReportYieldLtmFromApi, startDate, endDate)

        yield put(fetchReportCurrenciesYieldLtm(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportCurrenciesAggregatedAnalyse() {
    try {
        yield put(showLoader())

        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)

        let reportData = yield call(getReportAggregatedAnalyseFromApi, startDate, endDate)

        yield put(fetchReportCurrenciesAggregatedAnalyse(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}
