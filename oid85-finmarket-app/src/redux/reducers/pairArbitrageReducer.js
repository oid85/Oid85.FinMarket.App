import {
    FETCH_PAIR_ARBITRAGE_DIAGRAM_SPREADS
} from '../types/pairArbitrageTypes'

const initialState = {
    reportData: {},
    backtestResultData: {},
    spreadDiagramData: {}
}

export const pairArbitrageReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_PAIR_ARBITRAGE_DIAGRAM_SPREADS:
            return {...state, spreadDiagramData: {...action.payload}}

        default: return state
    }
}