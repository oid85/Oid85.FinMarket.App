import {
    SAGA_REPORT_CURRENCIES_SUPERTREND,
    SAGA_REPORT_CURRENCIES_CANDLE_SEQUENCE,
    SAGA_REPORT_CURRENCIES_RSI,
    SAGA_REPORT_CURRENCIES_YIELD_LTM,
    SAGA_REPORT_CURRENCIES_DRAWDOWN_FROM_MAXIMUM,
    SAGA_REPORT_CURRENCIES_AGGREGATED_ANALYSE,
    SAGA_REPORT_CURRENCIES_MARKET_EVENT,
	SAGA_REPORT_CURRENCIES_ATR,
	SAGA_REPORT_CURRENCIES_DONCHIAN,

    FETCH_REPORT_CURRENCIES_SUPERTREND,
    FETCH_REPORT_CURRENCIES_CANDLE_SEQUENCE,
    FETCH_REPORT_CURRENCIES_RSI,
    FETCH_REPORT_CURRENCIES_YIELD_LTM,
    FETCH_REPORT_CURRENCIES_DRAWDOWN_FROM_MAXIMUM,
    FETCH_REPORT_CURRENCIES_AGGREGATED_ANALYSE,
    FETCH_REPORT_CURRENCIES_MARKET_EVENT,
	FETCH_REPORT_CURRENCIES_ATR,
	FETCH_REPORT_CURRENCIES_DONCHIAN
} from '../types/reportCurrenciesTypes'

export const sagaReportCurrenciesSupertrend = () => {
    return {
        type: SAGA_REPORT_CURRENCIES_SUPERTREND
    }
}

export const fetchReportCurrenciesSupertrend = (reportData) => {
    return {
        type: FETCH_REPORT_CURRENCIES_SUPERTREND,
        payload: reportData
    }
}

export const sagaReportCurrenciesCandleSequence = () => {
    return {
        type: SAGA_REPORT_CURRENCIES_CANDLE_SEQUENCE
    }
}

export const fetchReportCurrenciesCandleSequence = (reportData) => {
    return {
        type: FETCH_REPORT_CURRENCIES_CANDLE_SEQUENCE,
        payload: reportData
    }
}

export const sagaReportCurrenciesRsi = () => {
    return {
        type: SAGA_REPORT_CURRENCIES_RSI
    }
}

export const fetchReportCurrenciesRsi = (reportData) => {
    return {
        type: FETCH_REPORT_CURRENCIES_RSI,
        payload: reportData
    }
}

export const sagaReportCurrenciesYieldLtm = () => {
    return {
        type: SAGA_REPORT_CURRENCIES_YIELD_LTM
    }
}

export const fetchReportCurrenciesYieldLtm = (reportData) => {
    return {
        type: FETCH_REPORT_CURRENCIES_YIELD_LTM,
        payload: reportData
    }
}

export const sagaReportCurrenciesDrawdownFromMaximum = () => {
    return {
        type: SAGA_REPORT_CURRENCIES_DRAWDOWN_FROM_MAXIMUM
    }
}

export const fetchReportCurrenciesDrawdownFromMaximum = (reportData) => {
    return {
        type: FETCH_REPORT_CURRENCIES_DRAWDOWN_FROM_MAXIMUM,
        payload: reportData
    }
}

export const sagaReportCurrenciesAggregatedAnalyse = () => {
    return {
        type: SAGA_REPORT_CURRENCIES_AGGREGATED_ANALYSE
    }
}

export const fetchReportCurrenciesAggregatedAnalyse = (reportData) => {
    return {
        type: FETCH_REPORT_CURRENCIES_AGGREGATED_ANALYSE,
        payload: reportData
    }
}

export const sagaReportCurrenciesMarketEvent = () => {
    return {
        type: SAGA_REPORT_CURRENCIES_MARKET_EVENT
    }
}

export const fetchReportCurrenciesMarketEvent = (reportData) => {
    return {
        type: FETCH_REPORT_CURRENCIES_MARKET_EVENT,
        payload: reportData
    }
}

export const sagaReportCurrenciesAtr = () => {
    return {
        type: SAGA_REPORT_CURRENCIES_ATR
    }
}

export const fetchReportCurrenciesAtr = (reportData) => {
    return {
        type: FETCH_REPORT_CURRENCIES_ATR,
        payload: reportData
    }
}

export const sagaReportCurrenciesDonchian = () => {
    return {
        type: SAGA_REPORT_CURRENCIES_DONCHIAN
    }
}

export const fetchReportCurrenciesDonchian = (reportData) => {
    return {
        type: FETCH_REPORT_CURRENCIES_DONCHIAN,
        payload: reportData
    }
}