import { SET_START_DATE, SET_END_DATE, SET_TICKER_LIST } from '../types'

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

export const setTickerList = (tickerList) => {
    return {
        type: SET_TICKER_LIST,
        payload: tickerList
    }
}
