import {
    SAGA_REPORT_INDEXES_SUPERTREND,
    SAGA_REPORT_INDEXES_CANDLE_SEQUENCE,
    SAGA_REPORT_INDEXES_RSI,
    SAGA_REPORT_INDEXES_YIELD_LTM,
    SAGA_REPORT_INDEX_AGGREGATED_ANALYSE,
    SAGA_INDEXES_WATCH_LIST_TICKERS,

    FETCH_REPORT_INDEXES_SUPERTREND,
    FETCH_REPORT_INDEXES_CANDLE_SEQUENCE,
    FETCH_REPORT_INDEXES_RSI,
    FETCH_REPORT_INDEXES_YIELD_LTM,
    FETCH_REPORT_INDEX_AGGREGATED_ANALYSE,
    FETCH_INDEXES_WATCH_LIST_TICKERS
} from '../types/indexesTypes'

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

export const sagaReportIndexesSupertrend = () => {
    return {
        type: SAGA_REPORT_INDEXES_SUPERTREND
    }
}

export const fetchReportIndexesSupertrend = (reportData) => {
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

export const sagaReportIndexesYieldLtm = () => {
    return {
        type: SAGA_REPORT_INDEXES_YIELD_LTM
    }
}

export const fetchReportIndexesYieldLtm = (reportData) => {
    return {
        type: FETCH_REPORT_INDEXES_YIELD_LTM,
        payload: reportData
    }
}

export const sagaReportIndexAggregatedAnalyse = () => {
    return {
        type: SAGA_REPORT_INDEX_AGGREGATED_ANALYSE
    }
}

export const fetchReportIndexAggregatedAnalyse = (reportData) => {
    return {
        type: FETCH_REPORT_INDEX_AGGREGATED_ANALYSE,
        payload: reportData
    }
}