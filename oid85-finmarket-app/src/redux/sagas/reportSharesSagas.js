import {call, put, select, takeEvery} from 'redux-saga/effects'
import {hideLoader, showAlert, showLoader} from '../actions/appActions'
import {
    fetchReportSharesAggregatedAnalyse,
    fetchReportSharesSupertrend,
    fetchReportSharesCandleSequence,
    fetchReportSharesCandleVolume,
    fetchReportSharesRsi,
    fetchReportSharesYieldLtm,
    fetchReportSharesAssetFundamental,
    fetchReportSharesDividends
} from '../actions/reportSharesActions'
import {
    SAGA_REPORT_SHARES_SUPERTREND,
    SAGA_REPORT_SHARES_CANDLE_SEQUENCE,
    SAGA_REPORT_SHARES_CANDLE_VOLUME,
    SAGA_REPORT_SHARES_RSI,
    SAGA_REPORT_SHARES_YIELD_LTM,
    SAGA_REPORT_SHARES_ASSET_FUNDAMENTAL,
    SAGA_REPORT_DIVIDENDS,
    SAGA_REPORT_SHARES_AGGREGATED_ANALYSE
} from '../types/reportSharesTypes'
import {
    getReportAggregatedAnalyseFromApi,
    getReportSuperTrendFromApi,
    getReportCandleSequenceFromApi,
    getReportCandleVolumeFromApi,
    getReportRsiFromApi,
    getReportYieldLtmFromApi,
    getReportAssetFundamentalFromApi,
    getReportDividendFromApi
} from "../api/reportSharesApi";

const getStartDate = (state) => state.filter.startDate
const getEndDate = (state) => state.filter.endDate

// SagaWatcher'ы
export function* eventSagaWatcherReportShares() {
    yield takeEvery(SAGA_REPORT_SHARES_SUPERTREND, sagaWorkerReportSharesSuperTrend)
    yield takeEvery(SAGA_REPORT_SHARES_CANDLE_SEQUENCE, sagaWorkerReportSharesCandleSequence)
    yield takeEvery(SAGA_REPORT_SHARES_CANDLE_VOLUME, sagaWorkerReportSharesCandleVolume)
    yield takeEvery(SAGA_REPORT_SHARES_RSI, sagaWorkerReportSharesRsi)
    yield takeEvery(SAGA_REPORT_SHARES_YIELD_LTM, sagaWorkerReportSharesYieldLtm)
    yield takeEvery(SAGA_REPORT_SHARES_ASSET_FUNDAMENTAL, sagaWorkerReportSharesAssetFundamental)
    yield takeEvery(SAGA_REPORT_DIVIDENDS, sagaWorkerReportDividends)
    yield takeEvery(SAGA_REPORT_SHARES_AGGREGATED_ANALYSE, sagaWorkerReportSharesAggregateAnalyse)
}

// SagaWorker'ы
function* sagaWorkerReportSharesSuperTrend() {
    try {
        yield put(showLoader())
        
        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let reportData = yield call(getReportSuperTrendFromApi, startDate, endDate)
        
        yield put(fetchReportSharesSupertrend(reportData))
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
        let reportData = yield call(getReportCandleSequenceFromApi, startDate, endDate)
        
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
        let reportData = yield call(getReportCandleVolumeFromApi, startDate, endDate)
        
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
        let reportData = yield call(getReportRsiFromApi, startDate, endDate)
        
        yield put(fetchReportSharesRsi(reportData))
        yield put(hideLoader())
    }
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportSharesYieldLtm() {
    try {
        yield put(showLoader())

        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let reportData = yield call(getReportYieldLtmFromApi, startDate, endDate)

        yield put(fetchReportSharesYieldLtm(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportSharesAssetFundamental() {
    try {
        yield put(showLoader())

        let reportData = yield call(getReportAssetFundamentalFromApi)

        yield put(fetchReportSharesAssetFundamental(reportData))
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
        
        let reportData = yield call(getReportDividendFromApi)
        
        yield put(fetchReportSharesDividends(reportData))
        yield put(hideLoader())
    }
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportSharesAggregateAnalyse() {
    try {
        yield put(showLoader())
        
        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)

        let reportData = yield call(getReportAggregatedAnalyseFromApi, startDate, endDate)
        
        yield put(fetchReportSharesAggregatedAnalyse(reportData))
        yield put(hideLoader())
    }
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}
