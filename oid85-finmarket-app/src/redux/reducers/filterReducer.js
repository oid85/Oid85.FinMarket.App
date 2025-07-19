import moment from 'moment'
import {
    SET_START_DATE,
    SET_END_DATE,
    SET_SHARES_TICKERLIST,
    SET_BONDS_TICKERLIST,
    SET_FUTURES_TICKERLIST,
    SET_CURRENCIES_TICKERLIST,
    SET_INDEXES_TICKERLIST,
    SET_BACKTEST_RESULT_ID,
    SET_BACKTEST_RESULT_TICKER, SET_BACKTEST_RESULT_STRATEGY_NAME
} from '../types/filterTypes'
import { CONSTANTS } from '../../constants'

const startDate = moment()
                    .subtract(CONSTANTS.DEFAULT_PERIOD_DAYS_FOR_TABLES, 'days')
                    .format('YYYY-MM-DD')
                    .toString()

const endDate = moment()
                    .format('YYYY-MM-DD')
                    .toString()

const initialState = {
    startDate: startDate,
    endDate: endDate,
    sharesTickerList: 'shares/watchlist',
    bondsTickerList: 'bonds/watchlist',
    futuresTickerList: 'futures/watchlist',
    currenciesTickerList: 'currencies/watchlist',
    indexesTickerList: 'indexes/watchlist',
    backtestResultId: '',
    backtestResultTicker: 'SBER',
    backtestResultStrategyName: 'SupertrendLong'
}

export const filterReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case SET_START_DATE:
            return {...state, startDate: action.payload.toString()}

        case SET_END_DATE:
            return {...state, endDate: action.payload.toString()}

        case SET_SHARES_TICKERLIST:
            return {...state, sharesTickerList: action.payload.toString()}

        case SET_BONDS_TICKERLIST:
            return {...state, bondsTickerList: action.payload.toString()}

        case SET_FUTURES_TICKERLIST:
            return {...state, futuresTickerList: action.payload.toString()}

        case SET_CURRENCIES_TICKERLIST:
            return {...state, currenciesTickerList: action.payload.toString()}

        case SET_INDEXES_TICKERLIST:
            return {...state, indexesTickerList: action.payload.toString()}

        case SET_BACKTEST_RESULT_ID:
            return {...state, backtestResultId: action.payload.toString()}

        case SET_BACKTEST_RESULT_TICKER:
            return {...state, backtestResultTicker: action.payload.toString()}

        case SET_BACKTEST_RESULT_STRATEGY_NAME:
            return {...state, backtestResultStrategyName: action.payload.toString()}

        default: return state
    }
}
