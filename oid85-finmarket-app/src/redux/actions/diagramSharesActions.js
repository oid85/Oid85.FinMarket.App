import {
    SAGA_DIAGRAM_SHARES_DAILY_CLOSE_PRICES,
    SAGA_DIAGRAM_SHARES_FIVE_MINUTES_CLOSE_PRICES,

    FETCH_DIAGRAM_SHARES_DAILY_CLOSE_PRICES,
    FETCH_DIAGRAM_SHARES_FIVE_MINUTES_CLOSE_PRICES
} from '../types/diagramSharesTypes'

export const sagaDiagramSharesDailyClosePrices = () => {
    return {
        type: SAGA_DIAGRAM_SHARES_DAILY_CLOSE_PRICES
    }
}

export const fetchDiagramSharesDailyClosePrices = (diagramData) => {
    return {
        type: FETCH_DIAGRAM_SHARES_DAILY_CLOSE_PRICES,
        payload: diagramData
    }
}

export const sagaDiagramSharesFiveMinutesClosePrices = () => {
    return {
        type: SAGA_DIAGRAM_SHARES_FIVE_MINUTES_CLOSE_PRICES
    }
}

export const fetchDiagramSharesFiveMinutesClosePrices = (diagramData) => {
    return {
        type: FETCH_DIAGRAM_SHARES_FIVE_MINUTES_CLOSE_PRICES,
        payload: diagramData
    }
}