import {
    SAGA_REPORT_SHARES_SUPERTREND,
    SAGA_REPORT_SHARES_CANDLE_SEQUENCE,
    SAGA_REPORT_SHARES_CANDLE_VOLUME,
    SAGA_REPORT_SHARES_RSI,
    SAGA_REPORT_SHARES_YIELD_LTM,
    SAGA_REPORT_SHARES_ASSET_FUNDAMENTAL,
    SAGA_REPORT_DIVIDEND,
    SAGA_REPORT_SHARES_AGGREGATED_ANALYSE,
    SAGA_REPORT_SHARES_MULTIPLICATOR,
    SAGA_REPORT_SHARES_FORECAST_TARGET,
    SAGA_REPORT_SHARES_FORECAST_CONSENSUS,

    FETCH_REPORT_SHARES_SUPERTREND,
    FETCH_REPORT_SHARES_CANDLE_SEQUENCE,
    FETCH_REPORT_SHARES_CANDLE_VOLUME,
    FETCH_REPORT_SHARES_RSI,
    FETCH_REPORT_SHARES_YIELD_LTM,
    FETCH_REPORT_SHARES_ASSET_FUNDAMENTAL,
    FETCH_REPORT_DIVIDEND,
    FETCH_REPORT_SHARES_AGGREGATED_ANALYSE,
    FETCH_REPORT_SHARES_MULTIPLICATOR,
    FETCH_REPORT_SHARES_FORECAST_TARGET,
    FETCH_REPORT_SHARES_FORECAST_CONSENSUS
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

export const sagaReportSharesMultiplicator = () => {
    return {
        type: SAGA_REPORT_SHARES_MULTIPLICATOR
    }
}

export const fetchReportSharesMultiplicator = (reportData) => {
    return {
        type: FETCH_REPORT_SHARES_MULTIPLICATOR,
        payload: reportData
    }
}

export const sagaReportSharesDividend = () => {
    return {
        type: SAGA_REPORT_DIVIDEND
    }
}

export const fetchReportSharesDividend = (reportData) => {
    return {
        type: FETCH_REPORT_DIVIDEND,
        payload: reportData
    }
}

export const sagaReportSharesAggregatedAnalyse = () => {
    return {
        type: SAGA_REPORT_SHARES_AGGREGATED_ANALYSE
    }
}

export const fetchReportSharesAggregatedAnalyse = (reportData) => {
    return {
        type: FETCH_REPORT_SHARES_AGGREGATED_ANALYSE,
        payload: reportData
    }
}

export const sagaReportSharesForecastTarget = () => {
    return {
        type: SAGA_REPORT_SHARES_FORECAST_TARGET
    }
}

export const fetchReportSharesForecastTarget = (reportData) => {
    return {
        type: FETCH_REPORT_SHARES_FORECAST_TARGET,
        payload: reportData
    }
}

export const sagaReportSharesForecastConsensus = () => {
    return {
        type: SAGA_REPORT_SHARES_FORECAST_CONSENSUS
    }
}

export const fetchReportSharesForecastConsensus = (reportData) => {
    return {
        type: FETCH_REPORT_SHARES_FORECAST_CONSENSUS,
        payload: reportData
    }
}