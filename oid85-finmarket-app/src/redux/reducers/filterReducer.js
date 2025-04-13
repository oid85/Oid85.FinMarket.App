import moment from 'moment'
import { 
    SET_START_DATE, 
    SET_END_DATE,
    SET_START_DATETIME,
    SET_END_DATETIME,
    SET_TICKER,
    SET_TICKERLIST
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
    ticker: '',
    tickerList: 'all'
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

        case SET_TICKER:
            return {...state, ticker: action.payload.toString()}

        case SET_TICKERLIST:
            return {...state, ticker: action.payload.toString()}

        default: return state
    }
}
