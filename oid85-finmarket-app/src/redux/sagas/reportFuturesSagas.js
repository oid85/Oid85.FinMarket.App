import {call, put, select, takeEvery} from 'redux-saga/effects'
import {hideLoader, showAlert, showLoader} from '../actions/appActions'
import { CONSTANTS } from '../../constants'
import {
    fetchReportFuturesSuperTrend,
    fetchReportFuturesCandleSequence,
    fetchReportFuturesCandleVolume,
    fetchReportFuturesRsi,
    fetchReportFutureAnalyse,
    fetchFuturesWatchListTickers
} from '../actions/reportFuturesActions'
import {
    SAGA_FUTURES_WATCH_LIST_TICKERS,
    SAGA_REPORT_FUTURES_SUPERTREND,
    SAGA_REPORT_FUTURES_CANDLE_SEQUENCE,
    SAGA_REPORT_FUTURES_CANDLE_VOLUME,
    SAGA_REPORT_FUTURES_RSI,
    SAGA_REPORT_FUTURE_ANALYSE
} from '../types'

// SagaWatcher'ы
export function* eventSagaWatcherReportFutures() {
    yield takeEvery(SAGA_FUTURES_WATCH_LIST_TICKERS, sagaWorkerFuturesWatchListTickers)
    yield takeEvery(SAGA_REPORT_FUTURES_SUPERTREND, sagaWorkerReportFuturesSuperTrend)
    yield takeEvery(SAGA_REPORT_FUTURES_CANDLE_SEQUENCE, sagaWorkerReportFuturesCandleSequence)
    yield takeEvery(SAGA_REPORT_FUTURES_CANDLE_VOLUME, sagaWorkerReportFuturesCandleVolume)
    yield takeEvery(SAGA_REPORT_FUTURES_RSI, sagaWorkerReportFuturesRsi)
    yield takeEvery(SAGA_REPORT_FUTURE_ANALYSE, sagaWorkerReportFutureAnalyse)
}

// SagaWorker'ы
function* sagaWorkerFuturesWatchListTickers() {
    try {
        yield put(showLoader())

        let watchListTickers = yield call(getFuturesWatchListTickersFromApi)

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
        let reportData = yield call(getReportFuturesSuperTrendFromApi, startDate, endDate)
        
        yield put(fetchReportFuturesSuperTrend(reportData))
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
        let reportData = yield call(getReportFuturesCandleSequenceFromApi, startDate, endDate)
        
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
        let reportData = yield call(getReportFuturesCandleVolumeFromApi, startDate, endDate)
        
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
        let reportData = yield call(getReportFutureRsiFromApi, startDate, endDate)
        
        yield put(fetchReportFuturesRsi(reportData))
        yield put(hideLoader())
    }
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportFutureAnalyse() {
    try {
        yield put(showLoader())
        
        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let ticker = yield select(getTicker)

        let watchListTickers = yield select(getFuturesWatchListTickers)

        if (ticker === '') {
            ticker = watchListTickers[0]
        }

        let reportData = yield call(getReportFutureAnalyseFromApi, startDate, endDate, ticker)
        
        yield put(fetchReportFutureAnalyse(reportData))
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
export const getFuturesWatchListTickers = (state) => state.reportFutures.watchListTickers

const getFuturesWatchListTickersFromApi = async () => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/futures/watch-list-tickers`)

    if (response.ok) {
        return await response.json()
    }
}

const getReportFuturesSuperTrendFromApi = async (startDate, endDate) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/futures/report/analyse-supertrend`, {
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

const getReportFuturesCandleSequenceFromApi = async (startDate, endDate) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/futures/report/analyse-candle-sequence`, {
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

const getReportFuturesCandleVolumeFromApi = async (startDate, endDate) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/futures/report/analyse-candle-volume`, {
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

const getReportFutureRsiFromApi = async (startDate, endDate) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/futures/report/analyse-rsi`, {
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

const getReportFutureAnalyseFromApi = async (startDate, endDate, ticker) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/futures/report/total-analyse`, {
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
