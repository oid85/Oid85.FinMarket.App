import moment from 'moment'
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
import { CONSTANTS } from '../../constants'

const startDate = moment()
                    .subtract(CONSTANTS.DEFAULT_PERIOD_DAYS_FOR_TABLES, 'days')
                    .format('YYYY-MM-DD')
                    .toString()

const endDate = moment()
                    .format('YYYY-MM-DD')
                    .toString()

const startDateTime = moment()
    .subtract(CONSTANTS.DEFAULT_PERIOD_DAYS_FOR_TABLES, 'hours')
    .format('YYYY-MM-DD HH:mm:ss')
    .toString()

const endDateTime = moment()
    .format('YYYY-MM-DD HH:mm:ss')
    .toString()

const initialState = {
    startDate: startDate,
    endDate: endDate,
    startDateTime: startDateTime,
    endDateTime: endDateTime,
    sharesTickerList: 'shares/watchlist',
    bondsTickerList: 'bonds/watchlist',
    futuresTickerList: 'futures/watchlist',
    currenciesTickerList: 'currencies/watchlist',
    indexesTickerList: 'indexes/watchlist'
}

export const filterReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case SET_START_DATE:
            return {...state, startDate: action.payload.toString()}

        case SET_END_DATE:
            return {...state, endDate: action.payload.toString()}

        case SET_START_DATETIME:
            return {...state, startDateTime: action.payload.toString()}

        case SET_END_DATETIME:
            return {...state, endDateTime: action.payload.toString()}

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

        default: return state
    }
}
