import {call, put, select, takeEvery} from 'redux-saga/effects'
import {hideLoader, showAlert, showLoader} from '../actions/appActions'
import {
    fetchDiagramCurrenciesDailyClosePrices
} from '../actions/diagramCurrenciesActions'
import {
    SAGA_DIAGRAM_CURRENCIES_DAILY_CLOSE_PRICES
} from '../types/diagramCurrenciesTypes'
import {
    getDiagramDailyClosePricesFromApi
} from "../api/diagramCurrenciesApi"

const getStartDate = (state) => state.filter.startDate
const getEndDate = (state) => state.filter.endDate
const getCurrenciesTickerList = (state) => state.filter.currenciesTickerList

// SagaWatcher'ы
export function* eventSagaWatcherDiagramCurrencies() {
    yield takeEvery(SAGA_DIAGRAM_CURRENCIES_DAILY_CLOSE_PRICES, sagaWorkerDiagramCurrenciesDailyClosePrices)
}

// SagaWorker'ы
function* sagaWorkerDiagramCurrenciesDailyClosePrices() {
    try {
        yield put(showLoader())
        
        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let tickerList = yield select(getCurrenciesTickerList)

        let diagramData = yield call(getDiagramDailyClosePricesFromApi, startDate, endDate, tickerList)
        
        yield put(fetchDiagramCurrenciesDailyClosePrices(diagramData))
        yield put(hideLoader())
    } 
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}
