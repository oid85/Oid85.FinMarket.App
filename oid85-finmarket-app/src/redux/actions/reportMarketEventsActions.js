import {
    SAGA_REPORT_MARKET_EVENT,

    FETCH_REPORT_MARKET_EVENT
} from '../types/reportMarketEventsTypes'

export const sagaReportMarketEvent = () => {
    return {
        type: SAGA_REPORT_MARKET_EVENT
    }
}

export const fetchReportMarketEvent = (reportData) => {
    return {
        type: FETCH_REPORT_MARKET_EVENT,
        payload: reportData
    }
}
