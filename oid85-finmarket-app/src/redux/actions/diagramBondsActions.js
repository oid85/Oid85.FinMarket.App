import {
    SAGA_DIAGRAM_BONDS_DAILY_CLOSE_PRICES,

    FETCH_DIAGRAM_BONDS_DAILY_CLOSE_PRICES
} from '../types/diagramBondsTypes'

export const sagaDiagramBondsDailyClosePrices = () => {
    return {
        type: SAGA_DIAGRAM_BONDS_DAILY_CLOSE_PRICES
    }
}

export const fetchDiagramBondsDailyClosePrices = (diagramData) => {
    return {
        type: FETCH_DIAGRAM_BONDS_DAILY_CLOSE_PRICES,
        payload: diagramData
    }
}