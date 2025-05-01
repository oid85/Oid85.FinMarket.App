import {
    SAGA_REPORT_INDEXES_SUPERTREND,
    SAGA_REPORT_INDEXES_CANDLE_SEQUENCE,
    SAGA_REPORT_INDEXES_RSI,
    SAGA_REPORT_INDEXES_YIELD_LTM,
    SAGA_REPORT_INDEXES_DRAWDOWN_FROM_MAXIMUM,
    SAGA_REPORT_INDEXES_AGGREGATED_ANALYSE,
    SAGA_REPORT_INDEXES_MARKET_EVENT,
	SAGA_REPORT_INDEXES_ATR,
	SAGA_REPORT_INDEXES_DONCHIAN,

    FETCH_REPORT_INDEXES_SUPERTREND,
    FETCH_REPORT_INDEXES_CANDLE_SEQUENCE,
    FETCH_REPORT_INDEXES_RSI,
    FETCH_REPORT_INDEXES_YIELD_LTM,
    FETCH_REPORT_INDEXES_DRAWDOWN_FROM_MAXIMUM,
    FETCH_REPORT_INDEXES_AGGREGATED_ANALYSE,
    FETCH_REPORT_INDEXES_MARKET_EVENT,
	FETCH_REPORT_INDEXES_ATR,
	FETCH_REPORT_INDEXES_DONCHIAN
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

export const sagaReportIndexesDrawdownFromMaximum = () => {
    return {
        type: SAGA_REPORT_INDEXES_DRAWDOWN_FROM_MAXIMUM
    }
}

export const fetchReportIndexesDrawdownFromMaximum = (reportData) => {
    return {
        type: FETCH_REPORT_INDEXES_DRAWDOWN_FROM_MAXIMUM,
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

export const sagaReportIndexesMarketEvent = () => {
    return {
        type: SAGA_REPORT_INDEXES_MARKET_EVENT
    }
}

export const fetchReportIndexesMarketEvent = (reportData) => {
    return {
        type: FETCH_REPORT_INDEXES_MARKET_EVENT,
        payload: reportData
    }
}

export const sagaReportIndexesAtr = () => {
    return {
        type: SAGA_REPORT_INDEXES_ATR
    }
}

export const fetchReportIndexesAtr = (reportData) => {
    return {
        type: FETCH_REPORT_INDEXES_ATR,
        payload: reportData
    }
}

export const sagaReportIndexesDonchian = () => {
    return {
        type: SAGA_REPORT_INDEXES_DONCHIAN
    }
}

export const fetchReportIndexesDonchian = (reportData) => {
    return {
        type: FETCH_REPORT_INDEXES_DONCHIAN,
        payload: reportData
    }
}