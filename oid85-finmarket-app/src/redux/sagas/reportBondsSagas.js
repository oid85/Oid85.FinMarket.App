import {call, put, select, takeEvery} from 'redux-saga/effects'
import {hideLoader, showAlert, showLoader} from '../actions/appActions'
import {
    fetchReportBondAggregatedAnalyse,
    fetchReportBondsSupertrend,
    fetchReportBondsCandleSequence,
    fetchReportBondsCandleVolume,
    fetchReportBondsCoupons,
    fetchBondsWatchListTickers
} from '../actions/reportBondsActions'
import {
    SAGA_REPORT_BONDS_SUPERTREND,
    SAGA_REPORT_BONDS_CANDLE_SEQUENCE,
    SAGA_REPORT_BONDS_CANDLE_VOLUME,
    SAGA_REPORT_COUPONS,
    SAGA_REPORT_BOND_AGGREGATED_ANALYSE,
    SAGA_BONDS_WATCH_LIST_TICKERS
} from '../types/bondsTypes'
import {
    getReportAggregatedAnalyseFromApi,
    getReportSuperTrendFromApi,
    getReportCandleSequenceFromApi,
    getReportCandleVolumeFromApi,
    getReportCouponFromApi,
    getWatchListTickersFromApi
} from "../api/bondsApi";

const getStartDate = (state) => state.filter.startDate
const getEndDate = (state) => state.filter.endDate
const getTicker = (state) => state.filter.ticker

// SagaWatcher'ы
export function* eventSagaWatcherReportBonds() {
    yield takeEvery(SAGA_BONDS_WATCH_LIST_TICKERS, sagaWorkerBondsWatchListTickers)
    yield takeEvery(SAGA_REPORT_BONDS_SUPERTREND, sagaWorkerReportBondsSuperTrend)
    yield takeEvery(SAGA_REPORT_BONDS_CANDLE_SEQUENCE, sagaWorkerReportBondsCandleSequence)
    yield takeEvery(SAGA_REPORT_BONDS_CANDLE_VOLUME, sagaWorkerReportBondsCandleVolume)
    yield takeEvery(SAGA_REPORT_COUPONS, sagaWorkerReportCoupons)
    yield takeEvery(SAGA_REPORT_BOND_AGGREGATED_ANALYSE, sagaWorkerReportBondsAggregateAnalyse)
}

// SagaWorker'ы
function* sagaWorkerBondsWatchListTickers() {
    try {
        yield put(showLoader())

        let watchListTickers = yield call(getWatchListTickersFromApi)

        yield put(fetchBondsWatchListTickers(watchListTickers))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportBondsSuperTrend() {
    try {
        yield put(showLoader())

        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let reportData = yield call(getReportSuperTrendFromApi, startDate, endDate)

        yield put(fetchReportBondsSupertrend(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportBondsCandleSequence() {
    try {
        yield put(showLoader())

        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let reportData = yield call(getReportCandleSequenceFromApi, startDate, endDate)

        yield put(fetchReportBondsCandleSequence(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportBondsCandleVolume() {
    try {
        yield put(showLoader())

        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let reportData = yield call(getReportCandleVolumeFromApi, startDate, endDate)

        yield put(fetchReportBondsCandleVolume(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportCoupons() {
    try {
        yield put(showLoader())

        let reportData = yield call(getReportCouponFromApi)

        yield put(fetchReportBondsCoupons(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportBondsAggregateAnalyse() {
    try {
        yield put(showLoader())

        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let ticker = yield select(getTicker)

        let reportData = yield call(getReportAggregatedAnalyseFromApi, startDate, endDate, ticker)

        yield put(fetchReportBondAggregatedAnalyse(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}
