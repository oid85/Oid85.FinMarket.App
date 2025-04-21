import {
    FETCH_DIAGRAM_INDEXES_DAILY_CLOSE_PRICES
} from '../types/diagramIndexesTypes'

const initialState = {
    diagramData: {}
}

export const diagramIndexesReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_DIAGRAM_INDEXES_DAILY_CLOSE_PRICES:
            return {...state, diagramData: {...action.payload}}

        default: return state
    }
}