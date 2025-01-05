import {call, put, select, takeEvery} from 'redux-saga/effects'
import {hideLoader, showAlert, showLoader} from '../actions/appActions'
import { CONSTANTS } from '../../constants'
import {
    fetchReportBondsSuperTrend,
    fetchReportBondsCandleSequence,
    fetchReportBondsCandleVolume,
    fetchReportBondsRsi,
    fetchReportBondsAnalyse, 
	fetchBondsWatchListTickers
} from '../actions/reportBondsActions'
import {
    SAGA_BONDS_WATCH_LIST_TICKERS,
    SAGA_REPORT_BONDS_SUPERTREND,
    SAGA_REPORT_BONDS_CANDLE_SEQUENCE,
    SAGA_REPORT_BONDS_CANDLE_VOLUME,
    SAGA_REPORT_BONDS_RSI,
    SAGA_REPORT_BOND_ANALYSE
} from '../types'

// SagaWatcher'ы
export function* eventSagaWatcherReportBonds() {
    yield takeEvery(SAGA_BONDS_WATCH_LIST_TICKERS, sagaWorkerBondsWatchListTickers)
    yield takeEvery(SAGA_REPORT_BONDS_SUPERTREND, sagaWorkerReportBondsSuperTrend)
    yield takeEvery(SAGA_REPORT_BONDS_CANDLE_SEQUENCE, sagaWorkerReportBondsCandleSequence)
    yield takeEvery(SAGA_REPORT_BONDS_CANDLE_VOLUME, sagaWorkerReportBondsCandleVolume)
    yield takeEvery(SAGA_REPORT_BONDS_RSI, sagaWorkerReportBondsRsi)
    yield takeEvery(SAGA_REPORT_BOND_ANALYSE, sagaWorkerReportBondAnalyse)
}

// SagaWorker'ы
function* sagaWorkerBondsWatchListTickers() {
    try {
        yield put(showLoader())

        let watchListTickers = yield call(getBondsWatchListTickersFromApi)

        yield put(fetchBondsWatchListTickers(watchListTickers))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportBondsSuperTrend() {
    try {
        yield put(showLoader())
        
        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let reportData = yield call(getReportBondsSuperTrendFromApi, startDate, endDate)
        
        yield put(fetchReportBondsSuperTrend(reportData))
        yield put(hideLoader())
    } 
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportBondsCandleSequence() {
    try {
        yield put(showLoader())
        
        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let reportData = yield call(getReportBondsCandleSequenceFromApi, startDate, endDate)
        
        yield put(fetchReportBondsCandleSequence(reportData))
        yield put(hideLoader())
    }
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportBondsCandleVolume() {
    try {
        yield put(showLoader())
        
        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let reportData = yield call(getReportBondsCandleVolumeFromApi, startDate, endDate)
        
        yield put(fetchReportBondsCandleVolume(reportData))
        yield put(hideLoader())
    }
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportBondsRsi() {
    try {
        yield put(showLoader())
        
        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let reportData = yield call(getReportRsiFromApi, startDate, endDate)
        
        yield put(fetchReportBondsRsi(reportData))
        yield put(hideLoader())
    }
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportBondAnalyse() {
    try {
        yield put(showLoader())
        
        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let ticker = yield select(getTicker)
        let reportData = yield call(getReportBondAnalyseFromApi, startDate, endDate, ticker)
        
        yield put(fetchReportBondsAnalyse(reportData))
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

const getBondsWatchListTickersFromApi = async () => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/bonds/watch-list-tickers`)

    if (response.ok) {
        return await response.json()
    }
}

const getReportBondsSuperTrendFromApi = async (startDate, endDate) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/bonds/report/analyse-supertrend`, {
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

const getReportBondsCandleSequenceFromApi = async (startDate, endDate) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/bonds/report/analyse-candle-sequence`, {
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

const getReportBondsCandleVolumeFromApi = async (startDate, endDate) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/bonds/report/analyse-candle-volume`, {
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

const getReportRsiFromApi = async (startDate, endDate) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/bonds/report/analyse-rsi`, {
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

const getReportBondAnalyseFromApi = async (startDate, endDate, ticker) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/bonds/report/total-analyse`, {
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
