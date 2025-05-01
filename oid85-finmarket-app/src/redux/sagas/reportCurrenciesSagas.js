import {call, put, select, takeEvery} from 'redux-saga/effects'
import {hideLoader, showAlert, showLoader} from '../actions/appActions'
import {
    fetchReportCurrenciesAggregatedAnalyse,
    fetchReportCurrenciesSupertrend,
    fetchReportCurrenciesCandleSequence,
    fetchReportCurrenciesRsi,
    fetchReportCurrenciesYieldLtm,
    fetchReportCurrenciesDrawdownFromMaximum,
    fetchReportCurrenciesMarketEvent,
	fetchReportCurrenciesAtr,
	fetchReportCurrenciesDonchian
} from '../actions/reportCurrenciesActions'
import {
    SAGA_REPORT_CURRENCIES_SUPERTREND,
    SAGA_REPORT_CURRENCIES_CANDLE_SEQUENCE,
    SAGA_REPORT_CURRENCIES_RSI,
    SAGA_REPORT_CURRENCIES_YIELD_LTM,
    SAGA_REPORT_CURRENCIES_DRAWDOWN_FROM_MAXIMUM,
    SAGA_REPORT_CURRENCIES_AGGREGATED_ANALYSE,
    SAGA_REPORT_CURRENCIES_MARKET_EVENT,
	SAGA_REPORT_CURRENCIES_ATR,
	SAGA_REPORT_CURRENCIES_DONCHIAN
} from '../types/reportCurrenciesTypes'
import {
    getReportAggregatedAnalyseFromApi,
    getReportSuperTrendFromApi,
    getReportCandleSequenceFromApi,
    getReportRsiFromApi,
    getReportYieldLtmFromApi,
    getReportDrawdownFromMaximumFromApi,
    getReportMarketEventFromApi,
	getReportAtrFromApi,
	getReportDonchianFromApi
} from "../api/reportCurrenciesApi"

const getStartDate = (state) => state.filter.startDate
const getEndDate = (state) => state.filter.endDate
const getCurrenciesTickerList = (state) => state.filter.currenciesTickerList

// SagaWatcher'ы
export function* eventSagaWatcherReportCurrencies() {
    yield takeEvery(SAGA_REPORT_CURRENCIES_SUPERTREND, sagaWorkerReportCurrenciesSuperTrend)
    yield takeEvery(SAGA_REPORT_CURRENCIES_CANDLE_SEQUENCE, sagaWorkerReportCurrenciesCandleSequence)
    yield takeEvery(SAGA_REPORT_CURRENCIES_RSI, sagaWorkerReportCurrenciesRsi)
    yield takeEvery(SAGA_REPORT_CURRENCIES_YIELD_LTM, sagaWorkerReportCurrenciesYieldLtm)
    yield takeEvery(SAGA_REPORT_CURRENCIES_DRAWDOWN_FROM_MAXIMUM, sagaWorkerReportCurrenciesDrawdownFromMaximum)
    yield takeEvery(SAGA_REPORT_CURRENCIES_AGGREGATED_ANALYSE, sagaWorkerReportCurrenciesAggregatedAnalyse)
    yield takeEvery(SAGA_REPORT_CURRENCIES_MARKET_EVENT, sagaWorkerReportCurrenciesMarketEvent)
	yield takeEvery(SAGA_REPORT_CURRENCIES_ATR, sagaWorkerReportCurrenciesAtr)
	yield takeEvery(SAGA_REPORT_CURRENCIES_DONCHIAN, sagaWorkerReportCurrenciesDonchian)
}

// SagaWorker'ы
function* sagaWorkerReportCurrenciesSuperTrend() {
    try {
        yield put(showLoader())

        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let tickerList = yield select(getCurrenciesTickerList)

        let reportData = yield call(getReportSuperTrendFromApi, startDate, endDate, tickerList)

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
        let tickerList = yield select(getCurrenciesTickerList)

        let reportData = yield call(getReportCandleSequenceFromApi, startDate, endDate, tickerList)

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
        let tickerList = yield select(getCurrenciesTickerList)

        let reportData = yield call(getReportRsiFromApi, startDate, endDate, tickerList)

        yield put(fetchReportCurrenciesRsi(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportCurrenciesAtr() {
    try {
        yield put(showLoader())

        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let tickerList = yield select(getCurrenciesTickerList)

        let reportData = yield call(getReportAtrFromApi, startDate, endDate, tickerList)

        yield put(fetchReportCurrenciesAtr(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportCurrenciesDonchian() {
    try {
        yield put(showLoader())

        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let tickerList = yield select(getCurrenciesTickerList)

        let reportData = yield call(getReportDonchianFromApi, startDate, endDate, tickerList)

        yield put(fetchReportCurrenciesDonchian(reportData))
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
        let tickerList = yield select(getCurrenciesTickerList)

        let reportData = yield call(getReportYieldLtmFromApi, startDate, endDate, tickerList)

        yield put(fetchReportCurrenciesYieldLtm(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportCurrenciesDrawdownFromMaximum() {
    try {
        yield put(showLoader())

        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let tickerList = yield select(getCurrenciesTickerList)

        let reportData = yield call(getReportDrawdownFromMaximumFromApi, startDate, endDate, tickerList)

        yield put(fetchReportCurrenciesDrawdownFromMaximum(reportData))
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
        let tickerList = yield select(getCurrenciesTickerList)

        let reportData = yield call(getReportAggregatedAnalyseFromApi, startDate, endDate, tickerList)

        yield put(fetchReportCurrenciesAggregatedAnalyse(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportCurrenciesMarketEvent() {
    try {
        yield put(showLoader())

        let tickerList = yield select(getCurrenciesTickerList)

        let reportData = yield call(getReportMarketEventFromApi, tickerList)

        yield put(fetchReportCurrenciesMarketEvent(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}