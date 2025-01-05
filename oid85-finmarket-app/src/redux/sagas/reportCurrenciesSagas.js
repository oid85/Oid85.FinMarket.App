import {call, put, select, takeEvery} from 'redux-saga/effects'
import {hideLoader, showAlert, showLoader} from '../actions/appActions'
import { CONSTANTS } from '../../constants'
import {
    fetchReportCurrenciesSuperTrend,
    fetchReportCurrenciesCandleSequence,
    fetchReportCurrenciesCandleVolume,
    fetchReportCurrenciesRsi,
    fetchReportCurrenciesAnalyse, 
	fetchCurrenciesWatchListTickers
} from '../actions/reportCurrenciesActions'
import {
    SAGA_CURRENCIES_WATCH_LIST_TICKERS,
    SAGA_REPORT_CURRENCIES_SUPERTREND,
    SAGA_REPORT_CURRENCIES_CANDLE_SEQUENCE,
    SAGA_REPORT_CURRENCIES_CANDLE_VOLUME,
    SAGA_REPORT_CURRENCIES_RSI,
    SAGA_REPORT_CURRENCY_ANALYSE
} from '../types'

// SagaWatcher'ы
export function* eventSagaWatcherReportCurrencies() {
    yield takeEvery(SAGA_CURRENCIES_WATCH_LIST_TICKERS, sagaWorkerCurrenciesWatchListTickers)
    yield takeEvery(SAGA_REPORT_CURRENCIES_SUPERTREND, sagaWorkerReportCurrenciesSuperTrend)
    yield takeEvery(SAGA_REPORT_CURRENCIES_CANDLE_SEQUENCE, sagaWorkerReportCurrenciesCandleSequence)
    yield takeEvery(SAGA_REPORT_CURRENCIES_CANDLE_VOLUME, sagaWorkerReportCurrenciesCandleVolume)
    yield takeEvery(SAGA_REPORT_CURRENCIES_RSI, sagaWorkerReportCurrenciesRsi)
    yield takeEvery(SAGA_REPORT_CURRENCY_ANALYSE, sagaWorkerReportCurrencyAnalyse)
}

// SagaWorker'ы
function* sagaWorkerCurrenciesWatchListTickers() {
    try {
        yield put(showLoader())

        let watchListTickers = yield call(getCurrenciesWatchListTickersFromApi)

        yield put(fetchCurrenciesWatchListTickers(watchListTickers))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportCurrenciesSuperTrend() {
    try {
        yield put(showLoader())
        
        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let reportData = yield call(getReportCurrenciesSuperTrendFromApi, startDate, endDate)
        
        yield put(fetchReportCurrenciesSuperTrend(reportData))
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
        let reportData = yield call(getReportCurrenciesCandleSequenceFromApi, startDate, endDate)
        
        yield put(fetchReportCurrenciesCandleSequence(reportData))
        yield put(hideLoader())
    }
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportCurrenciesCandleVolume() {
    try {
        yield put(showLoader())
        
        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let reportData = yield call(getReportCurrenciesCandleVolumeFromApi, startDate, endDate)
        
        yield put(fetchReportCurrenciesCandleVolume(reportData))
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
        let reportData = yield call(getReportCurrenciesRsiFromApi, startDate, endDate)
        
        yield put(fetchReportCurrenciesRsi(reportData))
        yield put(hideLoader())
    }
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportCurrencyAnalyse() {
    try {
        yield put(showLoader())
        
        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let ticker = yield select(getTicker)

        let watchListTickers = yield select(getCurrenciesWatchListTickers)

        if (ticker === '') {
            ticker = watchListTickers[0]
        }

        let reportData = yield call(getReportCurrencyAnalyseFromApi, startDate, endDate, ticker)
        
        yield put(fetchReportCurrenciesAnalyse(reportData))
        yield put(hideLoader())
    }
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

// Методы
export const getStartDate = (state) => state.filter.startDate
export const getEndDate = (state) => state.filter.endDate
export const getTicker = (state) => state.filter.ticker
export const getCurrenciesWatchListTickers = (state) => state.reportCurrencies.watchListTickers

const getCurrenciesWatchListTickersFromApi = async () => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/currencies/watch-list-tickers`)

    if (response.ok) {
        return await response.json()
    }
}

const getReportCurrenciesSuperTrendFromApi = async (startDate, endDate) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/currencies/report/analyse-supertrend`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: startDate, 
            to: endDate})
    })
    
    if (response.ok) {
        return await response.json()
    }
}

const getReportCurrenciesCandleSequenceFromApi = async (startDate, endDate) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/currencies/report/analyse-candle-sequence`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: startDate, 
            to: endDate})
    })
    
    if (response.ok) {
        return await response.json()
    }
}

const getReportCurrenciesCandleVolumeFromApi = async (startDate, endDate) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/currencies/report/analyse-candle-volume`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: startDate, 
            to: endDate})
    })
    
    if (response.ok) {
        return await response.json()
    }
}

const getReportCurrenciesRsiFromApi = async (startDate, endDate) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/currencies/report/analyse-rsi`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: startDate, 
            to: endDate})
    })
    
    if (response.ok) {
        return await response.json()
    }
}

const getReportCurrencyAnalyseFromApi = async (startDate, endDate, ticker) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/currencies/report/total-analyse`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: startDate, 
            to: endDate, 
            ticker: ticker})
    })
    
    if (response.ok) {
        return await response.json()
    }
}
