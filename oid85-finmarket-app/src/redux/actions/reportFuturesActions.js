import {
    SAGA_REPORT_FUTURES_SUPERTREND,
    SAGA_REPORT_FUTURES_CANDLE_SEQUENCE,
    SAGA_REPORT_FUTURES_CANDLE_VOLUME,
    SAGA_REPORT_FUTURES_RSI,
    SAGA_REPORT_FUTURES_YIELD_LTM,
    SAGA_REPORT_SPREAD,
    SAGA_REPORT_FUTURES_AGGREGATED_ANALYSE,
    SAGA_REPORT_FUTURES_MARKET_EVENT,
	SAGA_REPORT_FUTURES_ATR,
	SAGA_REPORT_FUTURES_DONCHIAN,

    FETCH_REPORT_FUTURES_SUPERTREND,
    FETCH_REPORT_FUTURES_CANDLE_SEQUENCE,
    FETCH_REPORT_FUTURES_CANDLE_VOLUME,
    FETCH_REPORT_FUTURES_RSI,
    FETCH_REPORT_FUTURES_YIELD_LTM,
    FETCH_REPORT_SPREAD,
    FETCH_REPORT_FUTURES_AGGREGATED_ANALYSE,
    FETCH_REPORT_FUTURES_MARKET_EVENT,
	FETCH_REPORT_FUTURES_ATR,
	FETCH_REPORT_FUTURES_DONCHIAN
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

export const sagaReportFuturesSpread = () => {
    return {
        type: SAGA_REPORT_SPREAD
    }
}

export const fetchReportFuturesSpread = (reportData) => {
    return {
        type: FETCH_REPORT_SPREAD,
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

export const sagaReportFuturesMarketEvent = () => {
    return {
        type: SAGA_REPORT_FUTURES_MARKET_EVENT
    }
}

export const fetchReportFuturesMarketEvent = (reportData) => {
    return {
        type: FETCH_REPORT_FUTURES_MARKET_EVENT,
        payload: reportData
    }
}

export const sagaReportFuturesAtr = () => {
    return {
        type: SAGA_REPORT_FUTURES_ATR
    }
}

export const fetchReportFuturesAtr = (reportData) => {
    return {
        type: FETCH_REPORT_FUTURES_ATR,
        payload: reportData
    }
}

export const sagaReportFuturesDonchian = () => {
    return {
        type: SAGA_REPORT_FUTURES_DONCHIAN
    }
}

export const fetchReportFuturesDonchian = (reportData) => {
    return {
        type: FETCH_REPORT_FUTURES_DONCHIAN,
        payload: reportData
    }
}