import {
    SAGA_REPORT_BONDS_SUPERTREND,
    SAGA_REPORT_BONDS_CANDLE_SEQUENCE,
    SAGA_REPORT_BONDS_CANDLE_VOLUME,
    SAGA_REPORT_COUPONS,
    SAGA_REPORT_BOND_AGGREGATED_ANALYSE,
    SAGA_BONDS_WATCH_LIST_TICKERS,

    FETCH_REPORT_BONDS_SUPERTREND,
    FETCH_REPORT_BONDS_CANDLE_SEQUENCE,
    FETCH_REPORT_BONDS_CANDLE_VOLUME,
    FETCH_REPORT_COUPONS,
    FETCH_REPORT_BOND_AGGREGATED_ANALYSE,
    FETCH_BONDS_WATCH_LIST_TICKERS
} from '../types/bondsTypes'

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

export const sagaReportBondsSupertrend = () => {
    return {
        type: SAGA_REPORT_BONDS_SUPERTREND
    }
}

export const fetchReportBondsSupertrend = (reportData) => {
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

export const sagaReportBondsCoupons = () => {
    return {
        type: SAGA_REPORT_COUPONS
    }
}

export const fetchReportBondsCoupons = (reportData) => {
    return {
        type: FETCH_REPORT_COUPONS,
        payload: reportData
    }
}

export const sagaReportBondAggregatedAnalyse = () => {
    return {
        type: SAGA_REPORT_BOND_AGGREGATED_ANALYSE
    }
}

export const fetchReportBondAggregatedAnalyse = (reportData) => {
    return {
        type: FETCH_REPORT_BOND_AGGREGATED_ANALYSE,
        payload: reportData
    }
}