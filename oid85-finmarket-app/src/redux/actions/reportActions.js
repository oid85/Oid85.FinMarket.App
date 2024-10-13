import { SAGA_REPORT, FETCH_REPORT } from '../types'

export const sagaGetReport = () => {
    return {
        type: SAGA_REPORT
    }
}

export const fetchGetReport = (reportData) => {    
    return {
        type: FETCH_REPORT,
        payload: reportData
    }
}
