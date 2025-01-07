import {
    SAGA_REPORT_SHARES_SUPERTREND,
    SAGA_REPORT_SHARES_CANDLE_SEQUENCE,
    SAGA_REPORT_SHARES_CANDLE_VOLUME,
    SAGA_REPORT_SHARES_RSI,
    SAGA_REPORT_SHARES_YIELD_LTM,
    SAGA_REPORT_SHARES_ASSET_FUNDAMENTAL,
    SAGA_REPORT_DIVIDENDS,
    SAGA_REPORT_SHARES_AGGREGATED_ANALYSE,

    FETCH_REPORT_SHARES_SUPERTREND,
    FETCH_REPORT_SHARES_CANDLE_SEQUENCE,
    FETCH_REPORT_SHARES_CANDLE_VOLUME,
    FETCH_REPORT_SHARES_RSI,
    FETCH_REPORT_SHARES_YIELD_LTM,
    FETCH_REPORT_SHARES_ASSET_FUNDAMENTAL,
    FETCH_REPORT_DIVIDENDS,
    FETCH_REPORT_SHARES_AGGREGATED_ANALYSE
} from '../types/reportSharesTypes'

export const sagaReportSharesSupertrend = () => {
    return {
        type: SAGA_REPORT_SHARES_SUPERTREND
    }
}

export const fetchReportSharesSupertrend = (reportData) => {
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

export const sagaReportSharesYieldLtm = () => {
    return {
        type: SAGA_REPORT_SHARES_YIELD_LTM
    }
}

export const fetchReportSharesYieldLtm = (reportData) => {
    return {
        type: FETCH_REPORT_SHARES_YIELD_LTM,
        payload: reportData
    }
}

export const sagaReportSharesAssetFundamental = () => {
    return {
        type: SAGA_REPORT_SHARES_ASSET_FUNDAMENTAL
    }
}

export const fetchReportSharesAssetFundamental = (reportData) => {
    return {
        type: FETCH_REPORT_SHARES_ASSET_FUNDAMENTAL,
        payload: reportData
    }
}

export const sagaReportSharesDividends = () => {
    return {
        type: SAGA_REPORT_DIVIDENDS
    }
}

export const fetchReportSharesDividends = (reportData) => {
    return {
        type: FETCH_REPORT_DIVIDENDS,
        payload: reportData
    }
}

export const sagaReportShareAggregatedAnalyse = () => {
    return {
        type: SAGA_REPORT_SHARES_AGGREGATED_ANALYSE
    }
}

export const fetchReportShareAggregatedAnalyse = (reportData) => {
    return {
        type: FETCH_REPORT_SHARES_AGGREGATED_ANALYSE,
        payload: reportData
    }
}