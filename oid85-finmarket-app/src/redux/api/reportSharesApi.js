﻿import {CONSTANTS} from "../../constants"

export const getReportAggregatedAnalyseFromApi = async (startDate, endDate, tickerList) => {
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
                tickerList: tickerList
            })
        })

    if (response.ok) {
        return await response.json()
    }
}

export const getReportSuperTrendFromApi = async (startDate, endDate, tickerList) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/shares/report/supertrend-analyse`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: startDate,
                to: endDate,
                tickerList: tickerList
            })
        })

    if (response.ok) {
        return await response.json()
    }
}

export const getReportCandleSequenceFromApi = async (startDate, endDate, tickerList) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/shares/report/candle-sequence-analyse`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: startDate,
                to: endDate,
                tickerList: tickerList
            })
        })

    if (response.ok) {
        return await response.json()
    }
}

export const getReportCandleVolumeFromApi = async (startDate, endDate, tickerList) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/shares/report/candle-volume-analyse`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: startDate,
                to: endDate,
                tickerList: tickerList
            })
        })

    if (response.ok) {
        return await response.json()
    }
}

export const getReportRsiFromApi = async (startDate, endDate, tickerList) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/shares/report/rsi-analyse`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: startDate,
                to: endDate,
                tickerList: tickerList
            })
        })

    if (response.ok) {
        return await response.json()
    }
}

export const getReportAtrFromApi = async (startDate, endDate, tickerList) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/shares/report/atr-analyse`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: startDate,
                to: endDate,
                tickerList: tickerList
            })
        })

    if (response.ok) {
        return await response.json()
    }
}

export const getReportDonchianFromApi = async (startDate, endDate, tickerList) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/shares/report/donchian-analyse`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: startDate,
                to: endDate,
                tickerList: tickerList
            })
        })

    if (response.ok) {
        return await response.json()
    }
}

export const getReportHurstFromApi = async (startDate, endDate, tickerList) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/shares/report/hurst-analyse`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: startDate,
                to: endDate,
                tickerList: tickerList
            })
        })

    if (response.ok) {
        return await response.json()
    }
}

export const getReportYieldLtmFromApi = async (startDate, endDate, tickerList) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/shares/report/yield-ltm-analyse`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: startDate,
                to: endDate,
                tickerList: tickerList
            })
        })

    if (response.ok) {
        return await response.json()
    }
}

export const getReportDrawdownFromMaximumFromApi = async (startDate, endDate, tickerList) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/shares/report/drawdown-from-maximum-analyse`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: startDate,
                to: endDate,
                tickerList: tickerList
            })
        })

    if (response.ok) {
        return await response.json()
    }
}

export const getReportDividendFromApi = async (tickerList) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/shares/report/dividend-analyse`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tickerList: tickerList
            })
        })

    if (response.ok) {
        return await response.json()
    }
}

export const getReportMultiplicatorFromApi = async (tickerList) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/shares/report/share-multiplicator-analyse`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tickerList: tickerList
            })
        })

    if (response.ok) {
        return await response.json()
    }
}

export const getReportForecastTargetFromApi = async (tickerList) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/shares/report/forecast-target-analyse`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tickerList: tickerList
            })
        })

    if (response.ok) {
        return await response.json()
    }
}

export const getReportForecastConsensusFromApi = async (tickerList) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/shares/report/forecast-consensus-analyse`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tickerList: tickerList
            })
        })

    if (response.ok) {
        return await response.json()
    }
}

export const getReportMarketEventFromApi = async (tickerList) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/shares/report/active-market-events-analyse`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tickerList: tickerList
            })
        })

    if (response.ok) {
        return await response.json()
    }
}

export const getReportAssetReportEventFromApi = async (tickerList) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/shares/report/asset-report-events`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tickerList: tickerList
            })
        })

    if (response.ok) {
        return await response.json()
    }
}

export const getReportFeerGreedIndexFromApi = async (startDate, endDate) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/shares/report/fear-greed-index`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: startDate,
                to: endDate
            })
        })

    if (response.ok) {
        return await response.json()
    }
}