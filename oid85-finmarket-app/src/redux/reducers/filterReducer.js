import moment from 'moment'
import { 
    SET_START_DATE, 
    SET_END_DATE,
    SET_TICKER
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
    ticker: ''
}

export const filterReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case SET_START_DATE:
            return {...state, startDate: action.payload.toString()}

        case SET_END_DATE:
            return {...state, endDate: action.payload.toString()}

        case SET_TICKER:
            return {...state, ticker: action.payload.toString()}

        default: return state
    }
}
