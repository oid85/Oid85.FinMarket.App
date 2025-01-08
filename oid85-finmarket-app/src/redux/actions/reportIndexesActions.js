import {
    SAGA_REPORT_INDEXES_SUPERTREND,
    SAGA_REPORT_INDEXES_CANDLE_SEQUENCE,
    SAGA_REPORT_INDEXES_RSI,
    SAGA_REPORT_INDEXES_YIELD_LTM,
    SAGA_REPORT_INDEXES_AGGREGATED_ANALYSE,

    FETCH_REPORT_INDEXES_SUPERTREND,
    FETCH_REPORT_INDEXES_CANDLE_SEQUENCE,
    FETCH_REPORT_INDEXES_RSI,
    FETCH_REPORT_INDEXES_YIELD_LTM,
    FETCH_REPORT_INDEXES_AGGREGATED_ANALYSE
} from '../types/reportIndexesTypes'

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

export const sagaReportIndexesAggregatedAnalyse = () => {
    return {
        type: SAGA_REPORT_INDEXES_AGGREGATED_ANALYSE
    }
}

export const fetchReportIndexesAggregatedAnalyse = (reportData) => {
    return {
        type: FETCH_REPORT_INDEXES_AGGREGATED_ANALYSE,
        payload: reportData
    }
}