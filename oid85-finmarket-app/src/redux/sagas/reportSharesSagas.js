import {call, put, select, takeEvery} from 'redux-saga/effects'
import {hideLoader, showAlert, showLoader} from '../actions/appActions'
import {
    fetchReportSharesSuperTrend,
    fetchReportSharesCandleSequence,
    fetchReportSharesCandleVolume,
    fetchReportSharesRsi,
    fetchReportDividends,
    fetchReportShareAnalyse,
    fetchSharesWatchListTickers
} from '../actions/reportSharesActions'
import {
    SAGA_SHARES_WATCH_LIST_TICKERS,
    SAGA_REPORT_SHARES_SUPERTREND,
    SAGA_REPORT_SHARES_CANDLE_SEQUENCE,
    SAGA_REPORT_SHARES_CANDLE_VOLUME,
    SAGA_REPORT_SHARES_RSI,
    SAGA_REPORT_DIVIDENDS,
    SAGA_REPORT_SHARE_ANALYSE
} from '../types/types'
import {
    getReportDividendsFromApi,
    getReportShareAnalyseFromApi,
    getReportSharesCandleSequenceFromApi,
    getReportSharesCandleVolumeFromApi,
    getReportSharesRsiFromApi,
    getReportSharesSuperTrendFromApi,
    getSharesWatchListTickersFromApi
} from "../api/sharesApi";

const getStartDate = (state) => state.filter.startDate
const getEndDate = (state) => state.filter.endDate
const getTicker = (state) => state.filter.ticker
const getSharesWatchListTickers = (state) => state.reportShares.watchListTickers

// SagaWatcher'ы
export function* eventSagaWatcherReportShares() {
    yield takeEvery(SAGA_SHARES_WATCH_LIST_TICKERS, sagaWorkerSharesWatchListTickers)
    yield takeEvery(SAGA_REPORT_SHARES_SUPERTREND, sagaWorkerReportSharesSuperTrend)
    yield takeEvery(SAGA_REPORT_SHARES_CANDLE_SEQUENCE, sagaWorkerReportSharesCandleSequence)
    yield takeEvery(SAGA_REPORT_SHARES_CANDLE_VOLUME, sagaWorkerReportSharesCandleVolume)
    yield takeEvery(SAGA_REPORT_SHARES_RSI, sagaWorkerReportSharesRsi)
    yield takeEvery(SAGA_REPORT_DIVIDENDS, sagaWorkerReportDividends)
    yield takeEvery(SAGA_REPORT_SHARE_ANALYSE, sagaWorkerReportShareAnalyse)
}

// SagaWorker'ы
function* sagaWorkerSharesWatchListTickers() {
    try {
        yield put(showLoader())

        let watchListTickers = yield call(getSharesWatchListTickersFromApi)

        yield put(fetchSharesWatchListTickers(watchListTickers))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportSharesSuperTrend() {
    try {
        yield put(showLoader())
        
        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let reportData = yield call(getReportSharesSuperTrendFromApi, startDate, endDate)
        
        yield put(fetchReportSharesSuperTrend(reportData))
        yield put(hideLoader())
    } 
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportSharesCandleSequence() {
    try {
        yield put(showLoader())
        
        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let reportData = yield call(getReportSharesCandleSequenceFromApi, startDate, endDate)
        
        yield put(fetchReportSharesCandleSequence(reportData))
        yield put(hideLoader())
    }
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportSharesCandleVolume() {
    try {
        yield put(showLoader())
        
        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let reportData = yield call(getReportSharesCandleVolumeFromApi, startDate, endDate)
        
        yield put(fetchReportSharesCandleVolume(reportData))
        yield put(hideLoader())
    }
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportSharesRsi() {
    try {
        yield put(showLoader())
        
        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let reportData = yield call(getReportSharesRsiFromApi, startDate, endDate)
        
        yield put(fetchReportSharesRsi(reportData))
        yield put(hideLoader())
    }
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportDividends() {
    try {
        yield put(showLoader())
        
        let reportData = yield call(getReportDividendsFromApi)
        
        yield put(fetchReportDividends(reportData))
        yield put(hideLoader())
    }
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportShareAnalyse() {
    try {
        yield put(showLoader())
        
        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let ticker = yield select(getTicker)
        let watchListTickers = yield select(getSharesWatchListTickers)

        if (ticker === '') {
            ticker = watchListTickers[0]
        }

        let reportData = yield call(getReportShareAnalyseFromApi, startDate, endDate, ticker)
        
        yield put(fetchReportShareAnalyse(reportData))
        yield put(hideLoader())
    }
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}
