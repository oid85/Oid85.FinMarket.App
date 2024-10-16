import { 
    SAGA_REPORT_SUPERTREND,
    SAGA_REPORT_CANDLE_SEQUENCE, 
    FETCH_REPORT_SUPERTREND,
    FETCH_REPORT_CANDLE_SEQUENCE 
} from '../types'

export const sagaGetReportSuperTrend = () => {
    return {
        type: SAGA_REPORT_SUPERTREND
    }
}

export const sagaGetReportCandleSequence = () => {
    return {
        type: SAGA_REPORT_CANDLE_SEQUENCE
    }
}

export const fetchGetReportSuperTrend = (reportData) => {    
    return {
        type: FETCH_REPORT_SUPERTREND,
        payload: reportData
    }
}

export const fetchGetReportCandleSequence = (reportData) => {    
    return {
        type: FETCH_REPORT_CANDLE_SEQUENCE,
        payload: reportData
    }
}
