import {call, put, select, takeEvery} from 'redux-saga/effects'
import {hideLoader, showAlert, showLoader} from '../actions/appActions'
import {
    fetchReportBondsAggregatedAnalyse,
    fetchReportBondsSupertrend,
    fetchReportBondsCandleSequence,
    fetchReportBondsCandleVolume,
    fetchReportBondsCoupon,
    fetchReportBondsSelection,
    fetchReportBondsMarketEvent,
	fetchReportBondsAtr,
	fetchReportBondsDonchian
} from '../actions/reportBondsActions'
import {
    SAGA_REPORT_BONDS_SUPERTREND,
    SAGA_REPORT_BONDS_CANDLE_SEQUENCE,
    SAGA_REPORT_BONDS_CANDLE_VOLUME,
    SAGA_REPORT_COUPON,
    SAGA_REPORT_BONDS_AGGREGATED_ANALYSE,
    SAGA_REPORT_BONDS_SELECTION,
    SAGA_REPORT_BONDS_MARKET_EVENT,
	SAGA_REPORT_BONDS_ATR,
	SAGA_REPORT_BONDS_DONCHIAN
} from '../types/reportBondsTypes'
import {
    getReportAggregatedAnalyseFromApi,
    getReportSuperTrendFromApi,
    getReportCandleSequenceFromApi,
    getReportCandleVolumeFromApi,
    getReportCouponFromApi,
    getReportSelectionFromApi,
    getReportMarketEventFromApi,
	getReportAtrFromApi,
	getReportDonchianFromApi
} from "../api/reportBondsApi"

const getStartDate = (state) => state.filter.startDate
const getEndDate = (state) => state.filter.endDate
const getBondsTickerList = (state) => state.filter.bondsTickerList

// SagaWatcher'ы
export function* eventSagaWatcherReportBonds() {
    yield takeEvery(SAGA_REPORT_BONDS_SUPERTREND, sagaWorkerReportBondsSuperTrend)
    yield takeEvery(SAGA_REPORT_BONDS_CANDLE_SEQUENCE, sagaWorkerReportBondsCandleSequence)
    yield takeEvery(SAGA_REPORT_BONDS_CANDLE_VOLUME, sagaWorkerReportBondsCandleVolume)
    yield takeEvery(SAGA_REPORT_COUPON, sagaWorkerReportCoupon)
    yield takeEvery(SAGA_REPORT_BONDS_AGGREGATED_ANALYSE, sagaWorkerReportBondsAggregatedAnalyse)
    yield takeEvery(SAGA_REPORT_BONDS_SELECTION, sagaWorkerReportBondsSelection)
    yield takeEvery(SAGA_REPORT_BONDS_MARKET_EVENT, sagaWorkerReportBondsMarketEvent)
	yield takeEvery(SAGA_REPORT_BONDS_ATR, sagaWorkerReportBondsAtr)
	yield takeEvery(SAGA_REPORT_BONDS_DONCHIAN, sagaWorkerReportBondsDonchian)
}

// SagaWorker'ы
function* sagaWorkerReportBondsSuperTrend() {
    try {
        yield put(showLoader())

        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let tickerList = yield select(getBondsTickerList)

        let reportData = yield call(getReportSuperTrendFromApi, startDate, endDate, tickerList)

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
        let tickerList = yield select(getBondsTickerList)

        let reportData = yield call(getReportCandleSequenceFromApi, startDate, endDate, tickerList)

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
        let tickerList = yield select(getBondsTickerList)

        let reportData = yield call(getReportCandleVolumeFromApi, startDate, endDate, tickerList)

        yield put(fetchReportBondsCandleVolume(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportBondsAtr() {
    try {
        yield put(showLoader())

        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let tickerList = yield select(getBondsTickerList)

        let reportData = yield call(getReportAtrFromApi, startDate, endDate, tickerList)

        yield put(fetchReportBondsAtr(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportBondsDonchian() {
    try {
        yield put(showLoader())

        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let tickerList = yield select(getBondsTickerList)

        let reportData = yield call(getReportDonchianFromApi, startDate, endDate, tickerList)

        yield put(fetchReportBondsDonchian(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportCoupon() {
    try {
        yield put(showLoader())

        let tickerList = yield select(getBondsTickerList)

        let reportData = yield call(getReportCouponFromApi, tickerList)

        yield put(fetchReportBondsCoupon(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportBondsAggregatedAnalyse() {
    try {
        yield put(showLoader())

        let startDate = yield select(getStartDate)
        let endDate = yield select(getEndDate)
        let tickerList = yield select(getBondsTickerList)

        let reportData = yield call(getReportAggregatedAnalyseFromApi, startDate, endDate, tickerList)

        yield put(fetchReportBondsAggregatedAnalyse(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportBondsSelection() {
    try {
        yield put(showLoader())

        let reportData = yield call(getReportSelectionFromApi)

        yield put(fetchReportBondsSelection(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}

function* sagaWorkerReportBondsMarketEvent() {
    try {
        yield put(showLoader())

        let tickerList = yield select(getBondsTickerList)

        let reportData = yield call(getReportMarketEventFromApi, tickerList)

        yield put(fetchReportBondsMarketEvent(reportData))
        yield put(hideLoader())
    }

    catch (error) {
        yield put(showAlert('Ошибка при получении данных'))
        yield put(hideLoader())
    }
}
