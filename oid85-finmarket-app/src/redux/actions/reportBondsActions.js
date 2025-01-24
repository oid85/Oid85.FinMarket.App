import {
    SAGA_REPORT_BONDS_SUPERTREND,
    SAGA_REPORT_BONDS_CANDLE_SEQUENCE,
    SAGA_REPORT_BONDS_CANDLE_VOLUME,
    SAGA_REPORT_COUPON,
    SAGA_REPORT_BONDS_AGGREGATED_ANALYSE,

    FETCH_REPORT_BONDS_SUPERTREND,
    FETCH_REPORT_BONDS_CANDLE_SEQUENCE,
    FETCH_REPORT_BONDS_CANDLE_VOLUME,
    FETCH_REPORT_COUPON,
    FETCH_REPORT_BONDS_AGGREGATED_ANALYSE
} from '../types/reportBondsTypes'

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

export const sagaReportBondsCoupon = () => {
    return {
        type: SAGA_REPORT_COUPON
    }
}

export const fetchReportBondsCoupon = (reportData) => {
    return {
        type: FETCH_REPORT_COUPON,
        payload: reportData
    }
}

export const sagaReportBondsAggregatedAnalyse = () => {
    return {
        type: SAGA_REPORT_BONDS_AGGREGATED_ANALYSE
    }
}

export const fetchReportBondsAggregatedAnalyse = (reportData) => {
    return {
        type: FETCH_REPORT_BONDS_AGGREGATED_ANALYSE,
        payload: reportData
    }
}