import {
    SAGA_REPORT_FUTURES_SUPERTREND,
    SAGA_REPORT_FUTURES_CANDLE_SEQUENCE,
    SAGA_REPORT_FUTURES_CANDLE_VOLUME,
    SAGA_REPORT_FUTURES_RSI,
    SAGA_REPORT_FUTURES_YIELD_LTM,
    SAGA_REPORT_SPREADS,
    SAGA_REPORT_FUTURES_AGGREGATED_ANALYSE,

    FETCH_REPORT_FUTURES_SUPERTREND,
    FETCH_REPORT_FUTURES_CANDLE_SEQUENCE,
    FETCH_REPORT_FUTURES_CANDLE_VOLUME,
    FETCH_REPORT_FUTURES_RSI,
    FETCH_REPORT_FUTURES_YIELD_LTM,
    FETCH_REPORT_SPREADS,
    FETCH_REPORT_FUTURES_AGGREGATED_ANALYSE
} from '../types/reportFuturesTypes'

export const sagaReportFuturesSupertrend = () => {
    return {
        type: SAGA_REPORT_FUTURES_SUPERTREND
    }
}

export const fetchReportFuturesSupertrend = (reportData) => {
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

export const sagaReportFuturesYieldLtm = () => {
    return {
        type: SAGA_REPORT_FUTURES_YIELD_LTM
    }
}

export const fetchReportFuturesYieldLtm = (reportData) => {
    return {
        type: FETCH_REPORT_FUTURES_YIELD_LTM,
        payload: reportData
    }
}

export const sagaReportFuturesSpreads = () => {
    return {
        type: SAGA_REPORT_SPREADS
    }
}

export const fetchReportFuturesSpreads = (reportData) => {
    return {
        type: FETCH_REPORT_SPREADS,
        payload: reportData
    }
}

export const sagaReportFuturesAggregatedAnalyse = () => {
    return {
        type: SAGA_REPORT_FUTURES_AGGREGATED_ANALYSE
    }
}

export const fetchReportFuturesAggregatedAnalyse = (reportData) => {
    return {
        type: FETCH_REPORT_FUTURES_AGGREGATED_ANALYSE,
        payload: reportData
    }
}