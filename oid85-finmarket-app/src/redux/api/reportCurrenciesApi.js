import {CONSTANTS} from "../../constants";

export const getReportAggregatedAnalyseFromApi = async (startDate, endDate) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/currencies/report/aggregated-analyse`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: startDate,
                to: endDate})
        })

    if (response.ok) {
        return await response.json()
    }
}

export const getReportSuperTrendFromApi = async (startDate, endDate) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/currencies/report/supertrend-analyse`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: startDate,
                to: endDate})
        })

    if (response.ok) {
        return await response.json()
    }
}

export const getReportCandleSequenceFromApi = async (startDate, endDate) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/currencies/report/candle-sequence-analyse`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: startDate,
                to: endDate})
        })

    if (response.ok) {
        return await response.json()
    }
}

export const getReportRsiFromApi = async (startDate, endDate) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/currencies/report/rsi-analyse`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: startDate,
                to: endDate})
        })

    if (response.ok) {
        return await response.json()
    }
}

export const getReportYieldLtmFromApi = async (startDate, endDate) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/currencies/report/yield-ltm-analyse`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: startDate,
                to: endDate})
        })

    if (response.ok) {
        return await response.json()
    }
}