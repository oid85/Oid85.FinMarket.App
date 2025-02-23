import {call, put, select, takeEvery} from 'redux-saga/effects'
import {hideLoader, showAlert, showLoader} from '../actions/appActions'
import {
    fetchReportSharesAggregatedAnalyse,
    fetchReportSharesSupertrend,
    fetchReportSharesCandleSequence,
    fetchReportSharesCandleVolume,
    fetchReportSharesRsi,
    fetchReportSharesYieldLtm,
    fetchReportSharesDrawdownFromMaximum,
    fetchReportSharesAssetFundamental,
    fetchReportSharesMultiplicator,
    fetchReportSharesDividend,
    fetchReportSharesForecastTarget,
    fetchReportSharesForecastConsensus
} from '../actions/reportSharesActions'
import {
    SAGA_REPORT_SHARES_SUPERTREND,
    SAGA_REPORT_SHARES_CANDLE_SEQUENCE,
    SAGA_REPORT_SHARES_CANDLE_VOLUME,
    SAGA_REPORT_SHARES_RSI,
    SAGA_REPORT_SHARES_YIELD_LTM,
    SAGA_REPORT_SHARES_DRAWDOWN_FROM_MAXIMUM,
    SAGA_REPORT_SHARES_ASSET_FUNDAMENTAL,
    SAGA_REPORT_DIVIDEND,
    SAGA_REPORT_SHARES_AGGREGATED_ANALYSE,
    SAGA_REPORT_SHARES_MULTIPLICATOR,
    SAGA_REPORT_SHARES_FORECAST_TARGET,
    SAGA_REPORT_SHARES_FORECAST_CONSENSUS
} from '../types/reportSharesTypes'
import {
    getReportAggregatedAnalyseFromApi,
    getReportSuperTrendFromApi,
    getReportCandleSequenceFromApi,
    getReportCandleVolumeFromApi,
    getReportRsiFromApi,
    getReportYieldLtmFromApi,
    getReportDrawdownFromMaximumFromApi,
    getReportAssetFundamentalFromApi,
    getReportMultiplicatorFromApi,
    getReportDividendFromApi,
    getReportForecastTargetFromApi,
    getReportForecastConsensusFromApi
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
    yield takeEvery(SAGA_REPORT_SHARES_DRAWDOWN_FROM_MAXIMUM, sagaWorkerReportSharesDrawdownFromMaximum)
    yield takeEvery(SAGA_REPORT_SHARES_ASSET_FUNDAMENTAL, sagaWorkerReportSharesAssetFundamental)
    yield takeEvery(SAGA_REPORT_SHARES_MULTIPLICATOR, sagaWorkerReportSharesMultiplicator)
    yield takeEvery(SAGA_REPORT_DIVIDEND, sagaWorkerReportDividend)
    yield takeEvery(SAGA_REPORT_SHARES_AGGREGATED_ANALYSE, sagaWorkerReportSharesAggregatedAnalyse)
    yield takeEvery(SAGA_REPORT_SHARES_FORECAST_TARGET, sagaWorkerReportSharesForecastTarget)
    yield takeEvery(SAGA_REPORT_SHARES_FORECAST_CONSENSUS, sagaWorkerReportSharesForecastConsensus)
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

function* sagaWorkerReportSharesDrawdownFromMaximum() {
    try {
        yield put(showLoader())

        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let reportData = yield call(getReportDrawdownFromMaximumFromApi, startDate, endDate)

        yield put(fetchReportSharesDrawdownFromMaximum(reportData))
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

function* sagaWorkerReportSharesMultiplicator() {
    try {
        yield put(showLoader())

        let reportData = yield call(getReportMultiplicatorFromApi)

        yield put(fetchReportSharesMultiplicator(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportDividend() {
    try {
        yield put(showLoader())
        
        let reportData = yield call(getReportDividendFromApi)
        
        yield put(fetchReportSharesDividend(reportData))
        yield put(hideLoader())
    }
    
    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportSharesAggregatedAnalyse() {
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

function* sagaWorkerReportSharesForecastTarget() {
    try {
        yield put(showLoader())

        let reportData = yield call(getReportForecastTargetFromApi)

        yield put(fetchReportSharesForecastTarget(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportSharesForecastConsensus() {
    try {
        yield put(showLoader())

        let reportData = yield call(getReportForecastConsensusFromApi)

        yield put(fetchReportSharesForecastConsensus(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}