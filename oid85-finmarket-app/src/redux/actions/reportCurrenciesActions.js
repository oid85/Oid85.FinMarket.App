import {
    SAGA_REPORT_CURRENCIES_SUPERTREND,
    SAGA_REPORT_CURRENCIES_CANDLE_SEQUENCE,
    SAGA_REPORT_CURRENCIES_RSI,
    SAGA_REPORT_CURRENCIES_YIELD_LTM,
    SAGA_REPORT_CURRENCY_AGGREGATED_ANALYSE,
    SAGA_CURRENCIES_WATCH_LIST_TICKERS,

    FETCH_REPORT_CURRENCIES_SUPERTREND,
    FETCH_REPORT_CURRENCIES_CANDLE_SEQUENCE,
    FETCH_REPORT_CURRENCIES_RSI,
    FETCH_REPORT_CURRENCIES_YIELD_LTM,
    FETCH_REPORT_CURRENCY_AGGREGATED_ANALYSE,
    FETCH_CURRENCIES_WATCH_LIST_TICKERS
} from '../types/currenciesTypes'

export const sagaCurrenciesWatchListTickers = () => {
    return {
        type: SAGA_CURRENCIES_WATCH_LIST_TICKERS
    }
}

export const fetchCurrenciesWatchListTickers = (tickers) => {
    return {
        type: FETCH_CURRENCIES_WATCH_LIST_TICKERS,
        payload: tickers
    }
}

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

export const sagaReportCurrencyAggregatedAnalyse = () => {
    return {
        type: SAGA_REPORT_CURRENCY_AGGREGATED_ANALYSE
    }
}

export const fetchReportCurrencyAggregatedAnalyse = (reportData) => {
    return {
        type: FETCH_REPORT_CURRENCY_AGGREGATED_ANALYSE,
        payload: reportData
    }
}