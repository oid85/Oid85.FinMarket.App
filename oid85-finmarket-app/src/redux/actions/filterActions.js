import { 
    SET_START_DATE, 
    SET_END_DATE,
    SET_START_DATETIME,
    SET_END_DATETIME,
    SET_SHARES_TICKERLIST
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

export const setTickerList = (sharesTickerList) => {
    return {
        type: SET_SHARES_TICKERLIST,
        payload: sharesTickerList
    }
}