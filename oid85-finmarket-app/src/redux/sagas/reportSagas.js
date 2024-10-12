import {call, put, select, takeEvery} from 'redux-saga/effects'
import {hideLoader, showAlert, showLoader} from '../actions/appActions'
import {fetchGetReport} from '../actions/reportActions'
import { SAGA_REPORT } from '../types'
import { CONSTANTS } from '../../constants'

// SagaWatcher'ы
export function* eventSagaWatcher() {
    yield takeEvery(SAGA_REPORT, sagaWorkerGetReport)
}

// Worker'ы
function* sagaWorkerGetReport() {
    try {
        yield put(showLoader())
        
        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let tickerList = yield select(getTickerList)
        let reportData = yield call(getReportData, startDate, endDate, tickerList)
        
        yield put(fetchGetReport(reportData))        
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

const getReportData = async (startDate, endDate, tickerList) => {
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
