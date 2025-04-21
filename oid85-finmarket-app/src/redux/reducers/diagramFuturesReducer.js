import {
    FETCH_DIAGRAM_FUTURES_DAILY_CLOSE_PRICES
} from '../types/diagramFuturesTypes'

const initialState = {
    diagramData: {}
}

export const diagramFuturesReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_DIAGRAM_FUTURES_DAILY_CLOSE_PRICES:
            return {...state, diagramData: {...action.payload}}

        default: return state
    }
}