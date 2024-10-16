import {call, put, select, takeEvery} from 'redux-saga/effects'
import {hideLoader, showAlert, showLoader} from '../actions/appActions'
import { CONSTANTS } from '../../constants'
import {
    fetchGetReportSuperTrend, 
    fetchGetReportCandleSequence
} from '../actions/reportActions'
import { 
    SAGA_REPORT_SUPERTREND,
    SAGA_REPORT_CANDLE_SEQUENCE
} from '../types'

// SagaWatcher'ы
export function* eventSagaWatcher() {
    yield takeEvery(SAGA_REPORT_SUPERTREND, sagaWorkerGetReportSuperTrend)
    yield takeEvery(SAGA_REPORT_CANDLE_SEQUENCE, sagaWorkerGetReportCandleSequence)
}

// Worker'ы
function* sagaWorkerGetReportSuperTrend() {
    try {
        yield put(showLoader())
        
        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let tickerList = yield select(getTickerList)
        let reportData = yield call(getGetReportSuperTrendData, startDate, endDate, tickerList)
        
        yield put(fetchGetReportSuperTrend(reportData))        
        yield put(hideLoader())
    } 
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerGetReportCandleSequence() {
    try {
        yield put(showLoader())
        
        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let tickerList = yield select(getTickerList)
        let reportData = yield call(getGetReportCandleSequenceData, startDate, endDate, tickerList)
        
        yield put(fetchGetReportCandleSequence(reportData))        
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

const getGetReportSuperTrendData = async (startDate, endDate, tickerList) => {
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

const getGetReportCandleSequenceData = async (startDate, endDate, tickerList) => {
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
