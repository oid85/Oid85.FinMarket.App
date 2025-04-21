import {
    SAGA_DIAGRAM_INDEXES_DAILY_CLOSE_PRICES,

    FETCH_DIAGRAM_INDEXES_DAILY_CLOSE_PRICES
} from '../types/diagramIndexesTypes'

export const sagaDiagramIndexesDailyClosePrices = () => {
    return {
        type: SAGA_DIAGRAM_INDEXES_DAILY_CLOSE_PRICES
    }
}

export const fetchDiagramIndexesDailyClosePrices = (diagramData) => {
    return {
        type: FETCH_DIAGRAM_INDEXES_DAILY_CLOSE_PRICES,
        payload: diagramData
    }
}