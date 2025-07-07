import { 
    SET_START_DATE, 
    SET_END_DATE,
    SET_SHARES_TICKERLIST,
    SET_BONDS_TICKERLIST,
    SET_FUTURES_TICKERLIST,
    SET_CURRENCIES_TICKERLIST,
    SET_INDEXES_TICKERLIST,
    SET_BACKTEST_RESULT_ID,
    SET_BACKTEST_RESULT_TICKER
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

export const setBacktestResultId = (backtestResultId) => {
    return {
        type: SET_BACKTEST_RESULT_ID,
        payload: backtestResultId
    }
}

export const setBacktestResultTicker = (backtestResultTicker) => {
    return {
        type: SET_BACKTEST_RESULT_TICKER,
        payload: backtestResultTicker
    }
}