import {call, put, select, takeEvery} from 'redux-saga/effects'
import {hideLoader, showAlert, showLoader} from '../actions/appActions'
import {
    fetchDiagramFuturesDailyClosePrices
} from '../actions/diagramFuturesActions'
import {
    SAGA_DIAGRAM_FUTURES_DAILY_CLOSE_PRICES
} from '../types/diagramFuturesTypes'
import {
    getDiagramDailyClosePricesFromApi
} from "../api/diagramFuturesApi"

const getStartDate = (state) => state.filter.startDate
const getEndDate = (state) => state.filter.endDate
const getFuturesTickerList = (state) => state.filter.futuresTickerList

// SagaWatcher'ы
export function* eventSagaWatcherDiagramFutures() {
    yield takeEvery(SAGA_DIAGRAM_FUTURES_DAILY_CLOSE_PRICES, sagaWorkerDiagramFuturesDailyClosePrices)
}

// SagaWorker'ы
function* sagaWorkerDiagramFuturesDailyClosePrices() {
    try {
        yield put(showLoader())
        
        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let tickerList = yield select(getFuturesTickerList)

        let diagramData = yield call(getDiagramDailyClosePricesFromApi, startDate, endDate, tickerList)
        
        yield put(fetchDiagramFuturesDailyClosePrices(diagramData))
        yield put(hideLoader())
    } 
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}
