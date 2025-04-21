import {
    SAGA_DIAGRAM_CURRENCIES_DAILY_CLOSE_PRICES,

    FETCH_DIAGRAM_CURRENCIES_DAILY_CLOSE_PRICES
} from '../types/diagramCurrenciesTypes'

export const sagaDiagramCurrenciesDailyClosePrices = () => {
    return {
        type: SAGA_DIAGRAM_CURRENCIES_DAILY_CLOSE_PRICES
    }
}

export const fetchDiagramCurrenciesDailyClosePrices = (diagramData) => {
    return {
        type: FETCH_DIAGRAM_CURRENCIES_DAILY_CLOSE_PRICES,
        payload: diagramData
    }
}