import {
    SAGA_DIAGRAM_FUTURES_DAILY_CLOSE_PRICES,

    FETCH_DIAGRAM_FUTURES_DAILY_CLOSE_PRICES
} from '../types/diagramFuturesTypes'

export const sagaDiagramFuturesDailyClosePrices = () => {
    return {
        type: SAGA_DIAGRAM_FUTURES_DAILY_CLOSE_PRICES
    }
}

export const fetchDiagramFuturesDailyClosePrices = (diagramData) => {
    return {
        type: FETCH_DIAGRAM_FUTURES_DAILY_CLOSE_PRICES,
        payload: diagramData
    }
}