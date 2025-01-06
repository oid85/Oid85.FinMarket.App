import {
    SAGA_REPORT_INDEXES_SUPERTREND,
    SAGA_REPORT_INDEXES_CANDLE_SEQUENCE,
    SAGA_REPORT_INDEXES_CANDLE_VOLUME,
    SAGA_REPORT_INDEXES_RSI,
    SAGA_REPORT_INDEX_ANALYSE,
    SAGA_INDEXES_WATCH_LIST_TICKERS,

    FETCH_REPORT_INDEXES_SUPERTREND,
    FETCH_REPORT_INDEXES_CANDLE_SEQUENCE,
    FETCH_REPORT_INDEXES_CANDLE_VOLUME,
    FETCH_REPORT_INDEXES_RSI,
    FETCH_REPORT_INDEX_ANALYSE,
    FETCH_INDEXES_WATCH_LIST_TICKERS
} from '../types/types'

export const sagaIndexesWatchListTickers = () => {
    return {
        type: SAGA_INDEXES_WATCH_LIST_TICKERS
    }
}

export const fetchIndexesWatchListTickers = (tickers) => {
    return {
        type: FETCH_INDEXES_WATCH_LIST_TICKERS,
        payload: tickers
    }
}

export const sagaReportIndexesSuperTrend = () => {
    return {
        type: SAGA_REPORT_INDEXES_SUPERTREND
    }
}

export const fetchReportIndexesSuperTrend = (reportData) => {
    return {
        type: FETCH_REPORT_INDEXES_SUPERTREND,
        payload: reportData
    }
}

export const sagaReportIndexesCandleSequence = () => {
    return {
        type: SAGA_REPORT_INDEXES_CANDLE_SEQUENCE
    }
}

export const fetchReportIndexesCandleSequence = (reportData) => {
    return {
        type: FETCH_REPORT_INDEXES_CANDLE_SEQUENCE,
        payload: reportData
    }
}

export const sagaReportIndexesCandleVolume = () => {
    return {
        type: SAGA_REPORT_INDEXES_CANDLE_VOLUME
    }
}

export const fetchReportIndexesCandleVolume = (reportData) => {
    return {
        type: FETCH_REPORT_INDEXES_CANDLE_VOLUME,
        payload: reportData
    }
}

export const sagaReportIndexesRsi = () => {
    return {
        type: SAGA_REPORT_INDEXES_RSI
    }
}

export const fetchReportIndexesRsi = (reportData) => {
    return {
        type: FETCH_REPORT_INDEXES_RSI,
        payload: reportData
    }
}


export const sagaReportIndexAnalyse = () => {
    return {
        type: SAGA_REPORT_INDEX_ANALYSE
    }
}

export const fetchReportIndexAnalyse = (reportData) => {
    return {
        type: FETCH_REPORT_INDEX_ANALYSE,
        payload: reportData
    }
}
