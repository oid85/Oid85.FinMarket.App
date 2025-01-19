import {call, put, takeEvery} from 'redux-saga/effects'
import {hideLoader, showAlert, showLoader} from '../actions/appActions'
import {
    fetchReportMarketEvent
} from '../actions/reportMarketEventsActions'
import {
    SAGA_REPORT_MARKET_EVENT
} from '../types/reportMarketEventsTypes'
import {
    getReportMarketEventFromApi
} from "../api/reportMarketEventsApi";

// SagaWatcher'ы
export function* eventSagaWatcherReportMarketEvents() {
    yield takeEvery(SAGA_REPORT_MARKET_EVENT, sagaWorkerReportMarketEvent)
}

// SagaWorker'ы
function* sagaWorkerReportMarketEvent() {
    try {
        yield put(showLoader())

        let reportData = yield call(getReportMarketEventFromApi)
        
        yield put(fetchReportMarketEvent(reportData))
        yield put(hideLoader())
    } 
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}
