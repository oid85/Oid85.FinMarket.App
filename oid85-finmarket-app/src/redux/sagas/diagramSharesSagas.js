import {call, put, select, takeEvery} from 'redux-saga/effects'
import {hideLoader, showAlert, showLoader} from '../actions/appActions'
import {
    fetchDiagramSharesDailyClosePrices,
    fetchDiagramSharesFiveMinutesClosePrices,
    fetchDiagramSharesMultiplicatorsMcapPeNetDebtEbitda
} from '../actions/diagramSharesActions'
import {
    SAGA_DIAGRAM_SHARES_DAILY_CLOSE_PRICES,
    SAGA_DIAGRAM_SHARES_FIVE_MINUTES_CLOSE_PRICES,
    SAGA_DIAGRAM_SHARES_MULTIPLICATORS_MCAP_PE_NETDEBTEBITDA
} from '../types/diagramSharesTypes'
import {
    getDiagramDailyClosePricesFromApi,
    getDiagramFiveMinutesClosePricesFromApi,
    getDiagramMultiplicatorsMcapPeNetDebtEbitdaFromApi
} from "../api/diagramSharesApi"

const getStartDate = (state) => state.filter.startDate
const getEndDate = (state) => state.filter.endDate
const getStartDateTime = (state) => state.filter.startDateTime
const getEndDateTime = (state) => state.filter.endDateTime
const getTickerList = (state) => state.filter.sharesTickerList

// SagaWatcher'ы
export function* eventSagaWatcherDiagramShares() {
    yield takeEvery(SAGA_DIAGRAM_SHARES_DAILY_CLOSE_PRICES, sagaWorkerDiagramSharesDailyClosePrices)
    yield takeEvery(SAGA_DIAGRAM_SHARES_FIVE_MINUTES_CLOSE_PRICES, sagaWorkerDiagramSharesFiveMinutesClosePrices)
    yield takeEvery(SAGA_DIAGRAM_SHARES_MULTIPLICATORS_MCAP_PE_NETDEBTEBITDA, sagaWorkerDiagramSharesMultiplicatorsMcapPeNetDebtEbitda)
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
        let tickerList = yield select(getTickerList)

        let diagramData = yield call(getDiagramFiveMinutesClosePricesFromApi, startDateTime, endDateTime, tickerList)

        yield put(fetchDiagramSharesFiveMinutesClosePrices(diagramData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerDiagramSharesMultiplicatorsMcapPeNetDebtEbitda() {
    try {
        yield put(showLoader())

        let tickerList = yield select(getTickerList)

        let diagramData = yield call(getDiagramMultiplicatorsMcapPeNetDebtEbitdaFromApi, tickerList)

        yield put(fetchDiagramSharesMultiplicatorsMcapPeNetDebtEbitda(diagramData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}