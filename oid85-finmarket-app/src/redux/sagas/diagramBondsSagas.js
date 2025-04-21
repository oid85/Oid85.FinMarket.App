import {call, put, select, takeEvery} from 'redux-saga/effects'
import {hideLoader, showAlert, showLoader} from '../actions/appActions'
import {
    fetchDiagramBondsDailyClosePrices
} from '../actions/diagramBondsActions'
import {
    SAGA_DIAGRAM_BONDS_DAILY_CLOSE_PRICES
} from '../types/diagramBondsTypes'
import {
    getDiagramDailyClosePricesFromApi
} from "../api/diagramBondsApi"

const getStartDate = (state) => state.filter.startDate
const getEndDate = (state) => state.filter.endDate
const getBondsTickerList = (state) => state.filter.bondsTickerList

// SagaWatcher'ы
export function* eventSagaWatcherDiagramBonds() {
    yield takeEvery(SAGA_DIAGRAM_BONDS_DAILY_CLOSE_PRICES, sagaWorkerDiagramBondsDailyClosePrices)
}

// SagaWorker'ы
function* sagaWorkerDiagramBondsDailyClosePrices() {
    try {
        yield put(showLoader())
        
        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let tickerList = yield select(getBondsTickerList)

        let diagramData = yield call(getDiagramDailyClosePricesFromApi, startDate, endDate, tickerList)
        
        yield put(fetchDiagramBondsDailyClosePrices(diagramData))
        yield put(hideLoader())
    } 
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}
