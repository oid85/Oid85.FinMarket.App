import {
    SAGA_REPORT_SHARES_SUPERTREND,
    SAGA_REPORT_SHARES_CANDLE_SEQUENCE,
    SAGA_REPORT_SHARES_CANDLE_VOLUME,
    SAGA_REPORT_SHARES_RSI,
    SAGA_REPORT_DIVIDENDS,
    SAGA_REPORT_SHARE_ANALYSE,
    SAGA_SHARES_WATCH_LIST_TICKERS,

    FETCH_REPORT_SHARES_SUPERTREND,
    FETCH_REPORT_SHARES_CANDLE_SEQUENCE,
    FETCH_REPORT_SHARES_CANDLE_VOLUME,
    FETCH_REPORT_SHARES_RSI,
    FETCH_REPORT_DIVIDENDS,
    FETCH_REPORT_SHARE_ANALYSE,
    FETCH_SHARES_WATCH_LIST_TICKERS
} from '../types'

export const sagaSharesWatchListTickers = () => {
    return {
        type: SAGA_SHARES_WATCH_LIST_TICKERS
    }
}

export const fetchSharesWatchListTickers = (tickers) => {
    return {
        type: FETCH_SHARES_WATCH_LIST_TICKERS,
        payload: tickers
    }
}

export const sagaReportSharesSuperTrend = () => {
    return {
        type: SAGA_REPORT_SHARES_SUPERTREND
    }
}

export const fetchReportSharesSuperTrend = (reportData) => {
    return {
        type: FETCH_REPORT_SHARES_SUPERTREND,
        payload: reportData
    }
}

export const sagaReportSharesCandleSequence = () => {
    return {
        type: SAGA_REPORT_SHARES_CANDLE_SEQUENCE
    }
}

export const fetchReportSharesCandleSequence = (reportData) => {
    return {
        type: FETCH_REPORT_SHARES_CANDLE_SEQUENCE,
        payload: reportData
    }
}

export const sagaReportSharesCandleVolume = () => {
    return {
        type: SAGA_REPORT_SHARES_CANDLE_VOLUME
    }
}

export const fetchReportSharesCandleVolume = (reportData) => {
    return {
        type: FETCH_REPORT_SHARES_CANDLE_VOLUME,
        payload: reportData
    }
}

export const sagaReportSharesRsi = () => {
    return {
        type: SAGA_REPORT_SHARES_RSI
    }
}

export const fetchReportSharesRsi = (reportData) => {
    return {
        type: FETCH_REPORT_SHARES_RSI,
        payload: reportData
    }
}

export const sagaReportDividends = () => {
    return {
        type: SAGA_REPORT_DIVIDENDS
    }
}

export const fetchReportDividends = (reportData) => {
    return {
        type: FETCH_REPORT_DIVIDENDS,
        payload: reportData
    }
}

export const sagaReportShareAnalyse = () => {
    return {
        type: SAGA_REPORT_SHARE_ANALYSE
    }
}

export const fetchReportShareAnalyse = (reportData) => {
    return {
        type: FETCH_REPORT_SHARE_ANALYSE,
        payload: reportData
    }
}
