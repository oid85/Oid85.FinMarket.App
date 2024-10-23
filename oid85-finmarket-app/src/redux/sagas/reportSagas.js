import {call, put, select, takeEvery} from 'redux-saga/effects'
import {hideLoader, showAlert, showLoader} from '../actions/appActions'
import { CONSTANTS } from '../../constants'
import {
    fetchReportSuperTrend, 
    fetchReportCandleSequence,
    fetchReportCandleVolume,
    fetchReportRsi,
    fetchReportDividends,
    fetchReportStock
} from '../actions/reportActions'
import {
    SAGA_REPORT_SUPERTREND,
    SAGA_REPORT_CANDLE_SEQUENCE,
    SAGA_REPORT_CANDLE_VOLUME,
    SAGA_REPORT_RSI,
    SAGA_REPORT_DIVIDENDS,
    SAGA_REPORT_STOCK
} from '../types'

// SagaWatcher'ы
export function* eventSagaWatcherReport() {
    yield takeEvery(SAGA_REPORT_SUPERTREND, sagaWorkerReportSuperTrend)
    yield takeEvery(SAGA_REPORT_CANDLE_SEQUENCE, sagaWorkerReportCandleSequence)
    yield takeEvery(SAGA_REPORT_CANDLE_VOLUME, sagaWorkerReportCandleVolume)
    yield takeEvery(SAGA_REPORT_RSI, sagaWorkerReportRsi)
    yield takeEvery(SAGA_REPORT_DIVIDENDS, sagaWorkerReportDividends)
    yield takeEvery(SAGA_REPORT_STOCK, sagaWorkerReportStock)
}

// SagaWorker'ы
function* sagaWorkerReportSuperTrend() {
    try {
        yield put(showLoader())
        
        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let tickerList = yield select(getTickerList)
        let reportData = yield call(getReportSuperTrendFromApi, startDate, endDate, tickerList)
        
        yield put(fetchReportSuperTrend(reportData))
        yield put(hideLoader())
    } 
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportCandleSequence() {
    try {
        yield put(showLoader())
        
        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let tickerList = yield select(getTickerList)
        let reportData = yield call(getReportCandleSequenceFromApi, startDate, endDate, tickerList)
        
        yield put(fetchReportCandleSequence(reportData))        
        yield put(hideLoader())
    }
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportCandleVolume() {
    try {
        yield put(showLoader())
        
        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let tickerList = yield select(getTickerList)
        let reportData = yield call(getReportCandleVolumeFromApi, startDate, endDate, tickerList)
        
        yield put(fetchReportCandleVolume(reportData))        
        yield put(hideLoader())
    }
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportRsi() {
    try {
        yield put(showLoader())
        
        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let tickerList = yield select(getTickerList)
        let reportData = yield call(getReportRsiFromApi, startDate, endDate, tickerList)
        
        yield put(fetchReportRsi(reportData))        
        yield put(hideLoader())
    }
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportDividends() {
    try {
        yield put(showLoader())
        
        let reportData = yield call(getReportDividendsFromApi)
        
        yield put(fetchReportRsi(reportData))        
        yield put(hideLoader())
    }
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportStock() {
    try {
        yield put(showLoader())
        
        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let ticker = yield select(getTicker)
        let reportData = yield call(getReportStockFromApi, startDate, endDate, ticker)
        
        yield put(fetchReportStock(reportData))        
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
export const getTickerList = (state) => state.filter.tickerList
export const getTicker = (state) => state.filter.ticker

const getReportSuperTrendFromApi = async (startDate, endDate, tickerList) => {
    const response = await fetch(`${CONSTANTS.FINMARKET_API}/api/report/analyse-supertrend/stocks`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: startDate, 
            to: endDate, 
            tickerList: tickerList})
    })
    
    if (response.ok) {
        return await response.json()
    }
}

const getReportCandleSequenceFromApi = async (startDate, endDate, tickerList) => {
    const response = await fetch(`${CONSTANTS.FINMARKET_API}/api/report/analyse-candle-sequence/stocks`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: startDate, 
            to: endDate, 
            tickerList: tickerList})
    })
    
    if (response.ok) {
        return await response.json()
    }
}

const getReportCandleVolumeFromApi = async (startDate, endDate, tickerList) => {
    const response = await fetch(`${CONSTANTS.FINMARKET_API}/api/report/analyse-candle-volume/stocks`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: startDate, 
            to: endDate, 
            tickerList: tickerList})
    })
    
    if (response.ok) {
        return await response.json()
    }
}

const getReportRsiFromApi = async (startDate, endDate, tickerList) => {
    const response = await fetch(`${CONSTANTS.FINMARKET_API}/api/report/analyse-rsi/stocks`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: startDate, 
            to: endDate, 
            tickerList: tickerList})
    })
    
    if (response.ok) {
        return await response.json()
    }
}

const getReportDividendsFromApi = async () => {
    const response = await fetch(`${CONSTANTS.FINMARKET_API}/api/report/dividends/stocks`)
    
    if (response.ok) {
        return await response.json()
    }
}

const getReportStockFromApi = async (startDate, endDate, ticker) => {
    const response = await fetch(`${CONSTANTS.FINMARKET_API}/api/report/analyse/stocks`, {
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
