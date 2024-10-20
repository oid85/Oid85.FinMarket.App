import { 
    SAGA_REPORT_SUPERTREND,
    SAGA_REPORT_CANDLE_SEQUENCE, 
    SAGA_REPORT_CANDLE_VOLUME, 
    SAGA_REPORT_STOCK,
    FETCH_REPORT_SUPERTREND,
    FETCH_REPORT_CANDLE_SEQUENCE, 
    FETCH_REPORT_CANDLE_VOLUME, 
    FETCH_REPORT_STOCK
} from '../types'

export const sagaReportSuperTrend = () => {
    return {
        type: SAGA_REPORT_SUPERTREND
    }
}

export const sagaReportCandleSequence = () => {
    return {
        type: SAGA_REPORT_CANDLE_SEQUENCE
    }
}

export const sagaReportCandleVolume = () => {
    return {
        type: SAGA_REPORT_CANDLE_VOLUME
    }
}

export const sagaReportStock = () => {
    return {
        type: SAGA_REPORT_STOCK
    }
}

export const fetchReportSuperTrend = (reportData) => {    
    return {
        type: FETCH_REPORT_SUPERTREND,
        payload: reportData
    }
}

export const fetchReportCandleSequence = (reportData) => {    
    return {
        type: FETCH_REPORT_CANDLE_SEQUENCE,
        payload: reportData
    }
}

export const fetchReportCandleVolume = (reportData) => {    
    return {
        type: FETCH_REPORT_CANDLE_VOLUME,
        payload: reportData
    }
}

export const fetchReportStock = (reportData) => {    
    return {
        type: FETCH_REPORT_STOCK,
        payload: reportData
    }
}
