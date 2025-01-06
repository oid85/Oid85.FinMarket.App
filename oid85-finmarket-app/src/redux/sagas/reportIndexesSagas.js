import {call, put, select, takeEvery} from 'redux-saga/effects'
import {hideLoader, showAlert, showLoader} from '../actions/appActions'
import { CONSTANTS } from '../../constants'
import {
    fetchReportIndexesSuperTrend,
    fetchReportIndexesCandleSequence,
    fetchReportIndexesCandleVolume,
    fetchReportIndexesRsi,
    fetchReportIndexAnalyse,
	fetchIndexesWatchListTickers
} from '../actions/reportIndexesActions'
import {
    SAGA_INDEXES_WATCH_LIST_TICKERS,
    SAGA_REPORT_INDEXES_SUPERTREND,
    SAGA_REPORT_INDEXES_CANDLE_SEQUENCE,
    SAGA_REPORT_INDEXES_CANDLE_VOLUME,
    SAGA_REPORT_INDEXES_RSI,
    SAGA_REPORT_INDEX_ANALYSE
} from '../types/types'

// SagaWatcher'ы
export function* eventSagaWatcherReportIndexes() {
    yield takeEvery(SAGA_INDEXES_WATCH_LIST_TICKERS, sagaWorkerIndexesWatchListTickers)
    yield takeEvery(SAGA_REPORT_INDEXES_SUPERTREND, sagaWorkerReportIndexesSuperTrend)
    yield takeEvery(SAGA_REPORT_INDEXES_CANDLE_SEQUENCE, sagaWorkerReportIndexesCandleSequence)
    yield takeEvery(SAGA_REPORT_INDEXES_CANDLE_VOLUME, sagaWorkerReportIndexesCandleVolume)
    yield takeEvery(SAGA_REPORT_INDEXES_RSI, sagaWorkerReportIndexesRsi)
    yield takeEvery(SAGA_REPORT_INDEX_ANALYSE, sagaWorkerReportIndexAnalyse)
}

// SagaWorker'ы
function* sagaWorkerIndexesWatchListTickers() {
    try {
        yield put(showLoader())

        let watchListTickers = yield call(getIndexesWatchListTickersFromApi)

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
        let reportData = yield call(getReportIndexesSuperTrendFromApi, startDate, endDate)
        
        yield put(fetchReportIndexesSuperTrend(reportData))
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
        let reportData = yield call(getReportIndexesCandleSequenceFromApi, startDate, endDate)
        
        yield put(fetchReportIndexesCandleSequence(reportData))
        yield put(hideLoader())
    }
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportIndexesCandleVolume() {
    try {
        yield put(showLoader())
        
        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let reportData = yield call(getReportIndexesCandleVolumeFromApi, startDate, endDate)
        
        yield put(fetchReportIndexesCandleVolume(reportData))
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

function* sagaWorkerReportIndexAnalyse() {
    try {
        yield put(showLoader())
        
        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let ticker = yield select(getTicker)

        let watchListTickers = yield select(getIndexesWatchListTickers)

        if (ticker === '') {
            ticker = watchListTickers[0]
        }

        let reportData = yield call(getReportIndexAnalyseFromApi, startDate, endDate, ticker)
        
        yield put(fetchReportIndexAnalyse(reportData))
        yield put(hideLoader())
    }
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

// Методы
const getStartDate = (state) => state.filter.startDate
const getEndDate = (state) => state.filter.endDate
const getTicker = (state) => state.filter.ticker
const getIndexesWatchListTickers = (state) => state.reportIndexes.watchListTickers

const getIndexesWatchListTickersFromApi = async () => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/indexes/watch-list-tickers`)

    if (response.ok) {
        return await response.json()
    }
}

const getReportIndexesSuperTrendFromApi = async (startDate, endDate) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/indexes/report/analyse-supertrend`, {
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

const getReportIndexesCandleSequenceFromApi = async (startDate, endDate) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/indexes/report/analyse-candle-sequence`, {
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

const getReportIndexesCandleVolumeFromApi = async (startDate, endDate) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/indexes/report/analyse-candle-volume`, {
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
        `${CONSTANTS.FINMARKET_API}/api/indexes/report/analyse-rsi`, {
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

const getReportIndexAnalyseFromApi = async (startDate, endDate, ticker) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/indexes/report/total-analyse`, {
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
