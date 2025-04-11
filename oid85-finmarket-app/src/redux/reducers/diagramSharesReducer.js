import {
    FETCH_DIAGRAM_SHARES_DAILY_CLOSE_PRICES,
    FETCH_DIAGRAM_SHARES_FIVE_MINUTES_CLOSE_PRICES,
    FETCH_DIAGRAM_SHARES_MULTIPLICATORS_MCAP_PE_NETDEBTEBITDA
} from '../types/diagramSharesTypes'

const initialState = {
    diagramData: {}
}

export const diagramSharesReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_DIAGRAM_SHARES_DAILY_CLOSE_PRICES:
            return {...state, diagramData: {...action.payload}}

        case FETCH_DIAGRAM_SHARES_FIVE_MINUTES_CLOSE_PRICES:
            return {...state, diagramData: {...action.payload}}

        case FETCH_DIAGRAM_SHARES_MULTIPLICATORS_MCAP_PE_NETDEBTEBITDA:
            return {...state, diagramData: {...action.payload}}

        default: return state
    }
}