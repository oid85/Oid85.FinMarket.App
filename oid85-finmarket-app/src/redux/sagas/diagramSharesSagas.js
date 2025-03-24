import {call, put, select, takeEvery} from 'redux-saga/effects'
import {hideLoader, showAlert, showLoader} from '../actions/appActions'
import {
    fetchDiagramSharesDailyClosePrices,
    fetchDiagramSharesFiveMinutesClosePrices
} from '../actions/diagramSharesActions'
import {
    SAGA_DIAGRAM_SHARES_DAILY_CLOSE_PRICES,
    SAGA_DIAGRAM_SHARES_FIVE_MINUTES_CLOSE_PRICES
} from '../types/diagramSharesTypes'
import {
    getDiagramDailyClosePricesFromApi,
    getDiagramFiveMinutesClosePricesFromApi
} from "../api/diagramSharesApi";

const getStartDate = (state) => state.filter.startDate
const getEndDate = (state) => state.filter.endDate
const getStartDateTime = (state) => state.filter.startDateTime
const getEndDateTime = (state) => state.filter.endDateTime

// SagaWatcher'ы
export function* eventSagaWatcherDiagramShares() {
    yield takeEvery(SAGA_DIAGRAM_SHARES_DAILY_CLOSE_PRICES, sagaWorkerDiagramSharesDailyClosePrices)
    yield takeEvery(SAGA_DIAGRAM_SHARES_FIVE_MINUTES_CLOSE_PRICES, sagaWorkerDiagramSharesFiveMinutesClosePrices)
}

// SagaWorker'ы
function* sagaWorkerDiagramSharesDailyClosePrices() {
    try {
        yield put(showLoader())
        
        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let diagramData = yield call(getDiagramDailyClosePricesFromApi, startDate, endDate)
        
        yield put(fetchDiagramSharesDailyClosePrices(diagramData))
        yield put(hideLoader())
    } 
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerDiagramSharesFiveMinutesClosePrices() {
    try {
        yield put(showLoader())

        let startDateTime = yield select(getStartDateTime)
        let endDateTime = yield select(getEndDateTime)
        let diagramData = yield call(getDiagramFiveMinutesClosePricesFromApi, startDateTime, endDateTime)

        yield put(fetchDiagramSharesFiveMinutesClosePrices(diagramData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}