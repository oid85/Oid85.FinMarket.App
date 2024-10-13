import moment from 'moment'
import { SET_START_DATE, SET_END_DATE, SET_TICKER_LIST } from '../types'
import { CONSTANTS } from '../../constants'

const startDate = moment()
                    .subtract(90, 'days')
                    .format('YYYY-MM-DD')
                    .toString()

const endDate = moment()
                    .format('YYYY-MM-DD')
                    .toString()

const initialState = {
    startDate: startDate,
    endDate: endDate,
    tickerList: CONSTANTS.TICKER_LIST_MOEX_INDEX
}

export const filterReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case SET_START_DATE:
            return {...state, startDate: action.payload.toString()}

        case SET_END_DATE:
            return {...state, endDate: action.payload.toString()}
        
        case SET_TICKER_LIST:
            return {...state, tickerList: action.payload.toString()}

        default: return state
    }
}
