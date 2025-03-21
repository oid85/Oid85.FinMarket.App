import {call, put, select, takeEvery} from 'redux-saga/effects'
import {hideLoader, showAlert, showLoader} from '../actions/appActions'
import {
    fetchDiagramSharesClosePrices
} from '../actions/diagramSharesActions'
import {
    SAGA_DIAGRAM_SHARES_CLOSE_PRICES
} from '../types/diagramSharesTypes'
import {
    getDiagramClosePricesFromApi
} from "../api/diagramSharesApi";

const getStartDate = (state) => state.filter.startDate
const getEndDate = (state) => state.filter.endDate

// SagaWatcher'ы
export function* eventSagaWatcherDiagramShares() {
    yield takeEvery(SAGA_DIAGRAM_SHARES_CLOSE_PRICES, sagaWorkerDiagramSharesClosePrices)
}

// SagaWorker'ы
function* sagaWorkerDiagramSharesClosePrices() {
    try {
        yield put(showLoader())
        
        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let diagramData = yield call(getDiagramClosePricesFromApi, startDate, endDate)
        
        yield put(fetchDiagramSharesClosePrices(diagramData))
        yield put(hideLoader())
    } 
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}
