import { 
    SET_START_DATE, 
    SET_END_DATE,
    SET_START_DATETIME,
    SET_END_DATETIME,
    SET_TICKER
} from '../types/filterTypes'

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

export const setStartDateTime = (date) => {
    return {
        type: SET_START_DATETIME,
        payload: date
    }
}

export const setEndDateTime = (date) => {
    return {
        type: SET_END_DATETIME,
        payload: date
    }
}

export const setTicker = (ticker) => {
    return {
        type: SET_TICKER,
        payload: ticker
    }
}
