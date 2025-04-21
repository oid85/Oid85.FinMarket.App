import {
    FETCH_DIAGRAM_BONDS_DAILY_CLOSE_PRICES
} from '../types/diagramBondsTypes'

const initialState = {
    diagramData: {}
}

export const diagramBondsReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_DIAGRAM_BONDS_DAILY_CLOSE_PRICES:
            return {...state, diagramData: {...action.payload}}

        default: return state
    }
}