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
} from '../types'

export const sagaBondsWatchListTickers = () => {
    return {
        type: SAGA_FUTURES_WATCH_LIST_TICKERS
    }
}

export const fetchBondsWatchListTickers = (tickers) => {
    return {
        type: FETCH_FUTURES_WATCH_LIST_TICKERS,
        payload: tickers
    }
}

export const sagaReportBondsSuperTrend = () => {
    return {
        type: SAGA_REPORT_FUTURES_SUPERTREND
    }
}

export const fetchReportBondsSuperTrend = (reportData) => {
    return {
        type: FETCH_REPORT_FUTURES_SUPERTREND,
        payload: reportData
    }
}

export const sagaReportBondsCandleSequence = () => {
    return {
        type: SAGA_REPORT_FUTURES_CANDLE_SEQUENCE
    }
}

export const fetchReportBondsCandleSequence = (reportData) => {
    return {
        type: FETCH_REPORT_FUTURES_CANDLE_SEQUENCE,
        payload: reportData
    }
}

export const sagaReportBondsCandleVolume = () => {
    return {
        type: SAGA_REPORT_FUTURES_CANDLE_VOLUME
    }
}

export const fetchReportBondsCandleVolume = (reportData) => {
    return {
        type: FETCH_REPORT_FUTURES_CANDLE_VOLUME,
        payload: reportData
    }
}

export const sagaReportBondsRsi = () => {
    return {
        type: SAGA_REPORT_FUTURES_RSI
    }
}

export const fetchReportBondsRsi = (reportData) => {
    return {
        type: FETCH_REPORT_FUTURES_RSI,
        payload: reportData
    }
}

export const sagaReportDividends = () => {
    return {
        type: SAGA_REPORT_DIVIDENDS
    }
}

export const sagaReportBondAnalyse = () => {
    return {
        type: SAGA_REPORT_FUTURE_ANALYSE
    }
}

export const fetchReportBondsAnalyse = (reportData) => {
    return {
        type: FETCH_REPORT_FUTURE_ANALYSE,
        payload: reportData
    }
}
