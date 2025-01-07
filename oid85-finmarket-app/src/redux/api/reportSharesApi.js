import {CONSTANTS} from "../../constants";

export const getReportAggregatedAnalyseFromApi = async (startDate, endDate, ticker) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/shares/report/aggregated-analyse`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: startDate,
                to: endDate,
                ticker: ticker})
        })

    if (response.ok) {
        return await response.json()
    }
}

export const getReportSuperTrendFromApi = async (startDate, endDate) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/shares/report/supertrend-analyse`, {
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
        `${CONSTANTS.FINMARKET_API}/api/shares/report/candle-sequence-analyse`, {
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

export const getReportCandleVolumeFromApi = async (startDate, endDate) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/shares/report/candle-volume-analyse`, {
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
        `${CONSTANTS.FINMARKET_API}/api/shares/report/rsi-analyse`, {
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
        `${CONSTANTS.FINMARKET_API}/api/shares/report/yield-ltm-analyse`, {
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

export const getReportDividendFromApi = async () => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/shares/report/dividend-analyse`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

    if (response.ok) {
        return await response.json()
    }
}

export const getReportAssetFundamentalFromApi = async () => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/shares/report/asset-fundamental-analyse`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

    if (response.ok) {
        return await response.json()
    }
}