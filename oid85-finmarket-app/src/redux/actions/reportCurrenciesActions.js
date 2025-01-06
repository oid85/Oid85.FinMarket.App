import {
    SAGA_REPORT_CURRENCIES_SUPERTREND,
    SAGA_REPORT_CURRENCIES_CANDLE_SEQUENCE,
    SAGA_REPORT_CURRENCIES_CANDLE_VOLUME,
    SAGA_REPORT_CURRENCIES_RSI,
    SAGA_REPORT_CURRENCY_ANALYSE,
    SAGA_CURRENCIES_WATCH_LIST_TICKERS,

    FETCH_REPORT_CURRENCIES_SUPERTREND,
    FETCH_REPORT_CURRENCIES_CANDLE_SEQUENCE,
    FETCH_REPORT_CURRENCIES_CANDLE_VOLUME,
    FETCH_REPORT_CURRENCIES_RSI,
    FETCH_REPORT_CURRENCY_ANALYSE,
    FETCH_CURRENCIES_WATCH_LIST_TICKERS
} from '../types/types'

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

export const sagaReportCurrenciesSuperTrend = () => {
    return {
        type: SAGA_REPORT_CURRENCIES_SUPERTREND
    }
}

export const fetchReportCurrenciesSuperTrend = (reportData) => {
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

export const sagaReportCurrenciesCandleVolume = () => {
    return {
        type: SAGA_REPORT_CURRENCIES_CANDLE_VOLUME
    }
}

export const fetchReportCurrenciesCandleVolume = (reportData) => {
    return {
        type: FETCH_REPORT_CURRENCIES_CANDLE_VOLUME,
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

export const sagaReportCurrencyAnalyse = () => {
    return {
        type: SAGA_REPORT_CURRENCY_ANALYSE
    }
}

export const fetchReportCurrenciesAnalyse = (reportData) => {
    return {
        type: FETCH_REPORT_CURRENCY_ANALYSE,
        payload: reportData
    }
}
