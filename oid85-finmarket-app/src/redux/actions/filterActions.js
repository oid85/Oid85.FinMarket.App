import { 
    SET_START_DATE, 
    SET_END_DATE, 
    SET_TICKER
} from '../types'

export const setStartDate = (date) => {
    return {
        type: SET_START_DATE,
        payload: date
    }
}

export const setEndDate = (date) => {
    return {
        type: SET_END_DATE,
        payload: date
    }
}

export const setTicker = (ticker) => {
    return {
        type: SET_TICKER,
        payload: ticker
    }
}
