import {
    SAGA_REPORT_SHARES_SUPERTREND,
    SAGA_REPORT_SHARES_CANDLE_SEQUENCE,
    SAGA_REPORT_SHARES_CANDLE_VOLUME,
    SAGA_REPORT_SHARES_RSI,
    SAGA_REPORT_SHARES_YIELD_LTM,
    SAGA_REPORT_SHARES_DRAWDOWN_FROM_MAXIMUM,
    SAGA_REPORT_DIVIDEND,
    SAGA_REPORT_SHARES_AGGREGATED_ANALYSE,
    SAGA_REPORT_SHARES_MULTIPLICATOR,
    SAGA_REPORT_SHARES_FORECAST_TARGET,
    SAGA_REPORT_SHARES_FORECAST_CONSENSUS,
    SAGA_REPORT_SHARES_MARKET_EVENT,
    SAGA_REPORT_SHARES_ASSET_REPORT_EVENT,
    SAGA_REPORT_SHARES_FEER_GREED_INDEX,
	SAGA_REPORT_SHARES_ATR,
    SAGA_REPORT_SHARES_DONCHIAN,
    SAGA_REPORT_SHARES_HURST,

    FETCH_REPORT_SHARES_SUPERTREND,
    FETCH_REPORT_SHARES_CANDLE_SEQUENCE,
    FETCH_REPORT_SHARES_CANDLE_VOLUME,
    FETCH_REPORT_SHARES_RSI,
    FETCH_REPORT_SHARES_YIELD_LTM,
    FETCH_REPORT_SHARES_DRAWDOWN_FROM_MAXIMUM,
    FETCH_REPORT_DIVIDEND,
    FETCH_REPORT_SHARES_AGGREGATED_ANALYSE,
    FETCH_REPORT_SHARES_MULTIPLICATOR,
    FETCH_REPORT_SHARES_FORECAST_TARGET,
    FETCH_REPORT_SHARES_FORECAST_CONSENSUS,
    FETCH_REPORT_SHARES_MARKET_EVENT,
    FETCH_REPORT_SHARES_ASSET_REPORT_EVENT,
    FETCH_REPORT_SHARES_FEER_GREED_INDEX,
	FETCH_REPORT_SHARES_ATR,
    FETCH_REPORT_SHARES_DONCHIAN,
    FETCH_REPORT_SHARES_HURST
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

export const sagaReportSharesDrawdownFromMaximum = () => {
    return {
        type: SAGA_REPORT_SHARES_DRAWDOWN_FROM_MAXIMUM
    }
}

export const fetchReportSharesDrawdownFromMaximum = (reportData) => {
    return {
        type: FETCH_REPORT_SHARES_DRAWDOWN_FROM_MAXIMUM,
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

export const sagaReportSharesMarketEvent = () => {
    return {
        type: SAGA_REPORT_SHARES_MARKET_EVENT
    }
}

export const fetchReportSharesMarketEvent = (reportData) => {
    return {
        type: FETCH_REPORT_SHARES_MARKET_EVENT,
        payload: reportData
    }
}

export const sagaReportSharesAssetReportEvent = () => {
    return {
        type: SAGA_REPORT_SHARES_ASSET_REPORT_EVENT
    }
}

export const fetchReportSharesAssetReportEvent = (reportData) => {
    return {
        type: FETCH_REPORT_SHARES_ASSET_REPORT_EVENT,
        payload: reportData
    }
}

export const sagaReportSharesFeerGreedIndex = () => {
    return {
        type: SAGA_REPORT_SHARES_FEER_GREED_INDEX
    }
}

export const fetchReportSharesFeerGreedIndex = (reportData) => {
    return {
        type: FETCH_REPORT_SHARES_FEER_GREED_INDEX,
        payload: reportData
    }
}

export const sagaReportSharesAtr = () => {
    return {
        type: SAGA_REPORT_SHARES_ATR
    }
}

export const fetchReportSharesAtr = (reportData) => {
    return {
        type: FETCH_REPORT_SHARES_ATR,
        payload: reportData
    }
}

export const sagaReportSharesDonchian = () => {
    return {
        type: SAGA_REPORT_SHARES_DONCHIAN
    }
}

export const fetchReportSharesDonchian = (reportData) => {
    return {
        type: FETCH_REPORT_SHARES_DONCHIAN,
        payload: reportData
    }
}

export const sagaReportSharesHurst = () => {
    return {
        type: SAGA_REPORT_SHARES_HURST
    }
}

export const fetchReportSharesHurst = (reportData) => {
    return {
        type: FETCH_REPORT_SHARES_HURST,
        payload: reportData
    }
}