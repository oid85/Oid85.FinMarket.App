import {
    SAGA_REPORT_FUTURES_SUPERTREND,
    SAGA_REPORT_FUTURES_CANDLE_SEQUENCE,
    SAGA_REPORT_FUTURES_CANDLE_VOLUME,
    SAGA_REPORT_FUTURES_RSI,
    SAGA_REPORT_FUTURE_ANALYSE,
    SAGA_FUTURES_WATCH_LIST_TICKERS,

    FETCH_REPORT_FUTURES_SUPERTREND,
    FETCH_REPORT_FUTURES_CANDLE_SEQUENCE,
    FETCH_REPORT_FUTURES_CANDLE_VOLUME,
    FETCH_REPORT_FUTURES_RSI,
    FETCH_REPORT_FUTURE_ANALYSE,
    FETCH_FUTURES_WATCH_LIST_TICKERS
} from '../types/types'

export const sagaFuturesWatchListTickers = () => {
    return {
        type: SAGA_FUTURES_WATCH_LIST_TICKERS
    }
}

export const fetchFuturesWatchListTickers = (tickers) => {
    return {
        type: FETCH_FUTURES_WATCH_LIST_TICKERS,
        payload: tickers
    }
}

export const sagaReportFuturesSuperTrend = () => {
    return {
        type: SAGA_REPORT_FUTURES_SUPERTREND
    }
}

export const fetchReportFuturesSuperTrend = (reportData) => {
    return {
        type: FETCH_REPORT_FUTURES_SUPERTREND,
        payload: reportData
    }
}

export const sagaReportFuturesCandleSequence = () => {
    return {
        type: SAGA_REPORT_FUTURES_CANDLE_SEQUENCE
    }
}

export const fetchReportFuturesCandleSequence = (reportData) => {
    return {
        type: FETCH_REPORT_FUTURES_CANDLE_SEQUENCE,
        payload: reportData
    }
}

export const sagaReportFuturesCandleVolume = () => {
    return {
        type: SAGA_REPORT_FUTURES_CANDLE_VOLUME
    }
}

export const fetchReportFuturesCandleVolume = (reportData) => {
    return {
        type: FETCH_REPORT_FUTURES_CANDLE_VOLUME,
        payload: reportData
    }
}

export const sagaReportFuturesRsi = () => {
    return {
        type: SAGA_REPORT_FUTURES_RSI
    }
}

export const fetchReportFuturesRsi = (reportData) => {
    return {
        type: FETCH_REPORT_FUTURES_RSI,
        payload: reportData
    }
}

export const sagaReportFutureAnalyse = () => {
    return {
        type: SAGA_REPORT_FUTURE_ANALYSE
    }
}

export const fetchReportFutureAnalyse = (reportData) => {
    return {
        type: FETCH_REPORT_FUTURE_ANALYSE,
        payload: reportData
    }
}
