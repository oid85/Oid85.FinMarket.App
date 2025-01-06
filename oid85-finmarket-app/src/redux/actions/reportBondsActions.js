import {
    SAGA_REPORT_BONDS_SUPERTREND,
    SAGA_REPORT_BONDS_CANDLE_SEQUENCE,
    SAGA_REPORT_BONDS_CANDLE_VOLUME,
    SAGA_REPORT_BONDS_RSI,
    SAGA_REPORT_COUPONS,
    SAGA_REPORT_BOND_ANALYSE,
    SAGA_BONDS_WATCH_LIST_TICKERS,

    FETCH_REPORT_BONDS_SUPERTREND,
    FETCH_REPORT_BONDS_CANDLE_SEQUENCE,
    FETCH_REPORT_BONDS_CANDLE_VOLUME,
    FETCH_REPORT_BONDS_RSI,
    FETCH_REPORT_COUPONS,
    FETCH_REPORT_BOND_ANALYSE,
    FETCH_BONDS_WATCH_LIST_TICKERS
} from '../types/types'

export const sagaBondsWatchListTickers = () => {
    return {
        type: SAGA_BONDS_WATCH_LIST_TICKERS
    }
}

export const fetchBondsWatchListTickers = (tickers) => {
    return {
        type: FETCH_BONDS_WATCH_LIST_TICKERS,
        payload: tickers
    }
}

export const sagaReportBondsSuperTrend = () => {
    return {
        type: SAGA_REPORT_BONDS_SUPERTREND
    }
}

export const fetchReportBondsSuperTrend = (reportData) => {
    return {
        type: FETCH_REPORT_BONDS_SUPERTREND,
        payload: reportData
    }
}

export const sagaReportBondsCandleSequence = () => {
    return {
        type: SAGA_REPORT_BONDS_CANDLE_SEQUENCE
    }
}

export const fetchReportBondsCandleSequence = (reportData) => {
    return {
        type: FETCH_REPORT_BONDS_CANDLE_SEQUENCE,
        payload: reportData
    }
}

export const sagaReportBondsCandleVolume = () => {
    return {
        type: SAGA_REPORT_BONDS_CANDLE_VOLUME
    }
}

export const fetchReportBondsCandleVolume = (reportData) => {
    return {
        type: FETCH_REPORT_BONDS_CANDLE_VOLUME,
        payload: reportData
    }
}

export const sagaReportBondsRsi = () => {
    return {
        type: SAGA_REPORT_BONDS_RSI
    }
}

export const fetchReportBondsRsi = (reportData) => {
    return {
        type: FETCH_REPORT_BONDS_RSI,
        payload: reportData
    }
}

export const sagaReportCoupons = () => {
    return {
        type: SAGA_REPORT_COUPONS
    }
}

export const fetchReportCoupons = (reportData) => {
    return {
        type: FETCH_REPORT_COUPONS,
        payload: reportData
    }
}

export const sagaReportBondAnalyse = () => {
    return {
        type: SAGA_REPORT_BOND_ANALYSE
    }
}

export const fetchReportBondsAnalyse = (reportData) => {
    return {
        type: FETCH_REPORT_BOND_ANALYSE,
        payload: reportData
    }
}
