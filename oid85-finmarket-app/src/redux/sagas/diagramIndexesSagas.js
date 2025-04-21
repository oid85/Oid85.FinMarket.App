import {call, put, select, takeEvery} from 'redux-saga/effects'
import {hideLoader, showAlert, showLoader} from '../actions/appActions'
import {
    fetchDiagramIndexesDailyClosePrices
} from '../actions/diagramIndexesActions'
import {
    SAGA_DIAGRAM_INDEXES_DAILY_CLOSE_PRICES
} from '../types/diagramIndexesTypes'
import {
    getDiagramDailyClosePricesFromApi
} from "../api/diagramIndexesApi"

const getStartDate = (state) => state.filter.startDate
const getEndDate = (state) => state.filter.endDate
const getIndexesTickerList = (state) => state.filter.indexesTickerList

// SagaWatcher'ы
export function* eventSagaWatcherDiagramIndexes() {
    yield takeEvery(SAGA_DIAGRAM_INDEXES_DAILY_CLOSE_PRICES, sagaWorkerDiagramIndexesDailyClosePrices)
}

// SagaWorker'ы
function* sagaWorkerDiagramIndexesDailyClosePrices() {
    try {
        yield put(showLoader())
        
        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let tickerList = yield select(getIndexesTickerList)

        let diagramData = yield call(getDiagramDailyClosePricesFromApi, startDate, endDate, tickerList)
        
        yield put(fetchDiagramIndexesDailyClosePrices(diagramData))
        yield put(hideLoader())
    } 
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}
