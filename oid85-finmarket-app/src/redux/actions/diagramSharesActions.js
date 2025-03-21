import {
    SAGA_DIAGRAM_SHARES_CLOSE_PRICES,

    FETCH_DIAGRAM_SHARES_CLOSE_PRICES
} from '../types/diagramSharesTypes'

export const sagaDiagramSharesClosePrices = () => {
    return {
        type: SAGA_DIAGRAM_SHARES_CLOSE_PRICES
    }
}

export const fetchDiagramSharesClosePrices = (diagramData) => {
    return {
        type: FETCH_DIAGRAM_SHARES_CLOSE_PRICES,
        payload: diagramData
    }
}
