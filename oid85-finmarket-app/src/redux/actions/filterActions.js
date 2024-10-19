import { 
    SET_START_DATE, 
    SET_END_DATE, 
    SET_TICKER,
    SET_TICKER_LIST, 
    SAGA_WATCH_LIST_TICKERS,   
    FETCH_WATCH_LIST_TICKERS
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

export const setTickerList = (tickerList) => {
    return {
        type: SET_TICKER_LIST,
        payload: tickerList
    }
}

export const sagaWatchListTickers = () => {
    return {
        type: SAGA_WATCH_LIST_TICKERS
    }
}

export const fetchWatchListTickers = (data) => {    
    return {
        type: FETCH_WATCH_LIST_TICKERS,
        payload: data
    }
}
