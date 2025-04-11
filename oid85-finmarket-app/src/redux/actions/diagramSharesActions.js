import {
    SAGA_DIAGRAM_SHARES_DAILY_CLOSE_PRICES,
    SAGA_DIAGRAM_SHARES_FIVE_MINUTES_CLOSE_PRICES,
    SAGA_DIAGRAM_SHARES_MULTIPLICATORS_MCAP_PE_NETDEBTEBITDA,

    FETCH_DIAGRAM_SHARES_DAILY_CLOSE_PRICES,
    FETCH_DIAGRAM_SHARES_FIVE_MINUTES_CLOSE_PRICES,
    FETCH_DIAGRAM_SHARES_MULTIPLICATORS_MCAP_PE_NETDEBTEBITDA
} from '../types/diagramSharesTypes'
import {getDiagramMultiplicatorsMcapPeNetDebtEbitdaFromApi} from "../api/diagramSharesApi";

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

export const sagaDiagramSharesMultiplicatorsMcapPeNetDebtEbitda = () => {
    return {
        type: SAGA_DIAGRAM_SHARES_MULTIPLICATORS_MCAP_PE_NETDEBTEBITDA
    }
}

export const fetchDiagramSharesMultiplicatorsMcapPeNetDebtEbitda = (diagramData) => {
    return {
        type: FETCH_DIAGRAM_SHARES_MULTIPLICATORS_MCAP_PE_NETDEBTEBITDA,
        payload: diagramData
    }
}