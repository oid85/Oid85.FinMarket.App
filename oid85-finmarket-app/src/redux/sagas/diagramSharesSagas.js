import {call, put, select, takeEvery} from 'redux-saga/effects'
import {hideLoader, showAlert, showLoader} from '../actions/appActions'
import {
    fetchDiagramSharesDailyClosePrices,
    fetchDiagramSharesMultiplicatorsMcapPeNetDebtEbitda
} from '../actions/diagramSharesActions'
import {
    SAGA_DIAGRAM_SHARES_DAILY_CLOSE_PRICES,
    SAGA_DIAGRAM_SHARES_MULTIPLICATORS_MCAP_PE_NETDEBTEBITDA
} from '../types/diagramSharesTypes'
import {
    getDiagramDailyClosePricesFromApi,
    getDiagramFiveMinutesClosePricesFromApi,
    getDiagramMultiplicatorsMcapPeNetDebtEbitdaFromApi
} from "../api/diagramSharesApi"

const getStartDate = (state) => state.filter.startDate
const getEndDate = (state) => state.filter.endDate
const getSharesTickerList = (state) => state.filter.sharesTickerList

// SagaWatcher'ы
export function* eventSagaWatcherDiagramShares() {
    yield takeEvery(SAGA_DIAGRAM_SHARES_DAILY_CLOSE_PRICES, sagaWorkerDiagramSharesDailyClosePrices)
    yield takeEvery(SAGA_DIAGRAM_SHARES_MULTIPLICATORS_MCAP_PE_NETDEBTEBITDA, sagaWorkerDiagramSharesMultiplicatorsMcapPeNetDebtEbitda)
}

// SagaWorker'ы
function* sagaWorkerDiagramSharesDailyClosePrices() {
    try {
        yield put(showLoader())
        
        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let tickerList = yield select(getSharesTickerList)

        let diagramData = yield call(getDiagramDailyClosePricesFromApi, startDate, endDate, tickerList)
        
        yield put(fetchDiagramSharesDailyClosePrices(diagramData))
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

        let tickerList = yield select(getSharesTickerList)

        let diagramData = yield call(getDiagramMultiplicatorsMcapPeNetDebtEbitdaFromApi, tickerList)

        yield put(fetchDiagramSharesMultiplicatorsMcapPeNetDebtEbitda(diagramData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}