import {
    FETCH_DIAGRAM_CURRENCIES_DAILY_CLOSE_PRICES
} from '../types/diagramCurrenciesTypes'

const initialState = {
    diagramData: {}
}

export const diagramCurrenciesReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_DIAGRAM_CURRENCIES_DAILY_CLOSE_PRICES:
            return {...state, diagramData: {...action.payload}}

        default: return state
    }
}