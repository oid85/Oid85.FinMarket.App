import {call, put, select, takeEvery} from 'redux-saga/effects'
import {hideLoader, showAlert, showLoader} from '../actions/appActions'
import { CONSTANTS } from '../../constants'
import {
    fetchWatchListTickers
} from '../actions/filterActions'
import { 
    SAGA_WATCH_LIST_TICKERS
} from '../types'

// SagaWatcher'ы
export function* eventSagaWatcherFilter() {
    yield takeEvery(SAGA_WATCH_LIST_TICKERS, sagaWorkerWatchListTickers)
}

// SagaWorker'ы
function* sagaWorkerWatchListTickers() {
    try {
        yield put(showLoader())
        
        let data = yield call(getWatchListTickersFromApi)
        
        yield put(fetchWatchListTickers(data))
        yield put(hideLoader())
    } 
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

// Методы
const getWatchListTickersFromApi = async () => {
    const response = await fetch(`${CONSTANTS.FINMARKET_API}/api/fin-instrument/watch-list`)        

    if (response.ok) {
        return await response.json()
    }
}
