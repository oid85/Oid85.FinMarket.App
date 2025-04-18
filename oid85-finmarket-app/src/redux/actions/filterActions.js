import { 
    SET_START_DATE, 
    SET_END_DATE,
    SET_START_DATETIME,
    SET_END_DATETIME,
    SET_SHARES_TICKERLIST,
    SET_BONDS_TICKERLIST,
    SET_FUTURES_TICKERLIST,
    SET_CURRENCIES_TICKERLIST,
    SET_INDEXES_TICKERLIST
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

export const setSharesTickerList = (sharesTickerList) => {
    return {
        type: SET_SHARES_TICKERLIST,
        payload: sharesTickerList
    }
}

export const setBondsTickerList = (bondsTickerList) => {
    return {
        type: SET_BONDS_TICKERLIST,
        payload: bondsTickerList
    }
}

export const setFuturesTickerList = (futuresTickerList) => {
    return {
        type: SET_FUTURES_TICKERLIST,
        payload: futuresTickerList
    }
}

export const setCurrenciesTickerList = (currenciesTickerList) => {
    return {
        type: SET_CURRENCIES_TICKERLIST,
        payload: currenciesTickerList
    }
}

export const setIndexesTickerList = (indexesTickerList) => {
    return {
        type: SET_INDEXES_TICKERLIST,
        payload: indexesTickerList
    }
}