import {CONSTANTS} from "../../constants"

export const getReportAggregatedAnalyseFromApi = async (startDate, endDate, tickerList) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/futures/report/aggregated-analyse`, {
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
        `${CONSTANTS.FINMARKET_API}/api/futures/report/supertrend-analyse`, {
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
        `${CONSTANTS.FINMARKET_API}/api/futures/report/candle-sequence-analyse`, {
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
        `${CONSTANTS.FINMARKET_API}/api/futures/report/candle-volume-analyse`, {
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
        `${CONSTANTS.FINMARKET_API}/api/futures/report/rsi-analyse`, {
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
        `${CONSTANTS.FINMARKET_API}/api/futures/report/yield-ltm-analyse`, {
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

export const getReportSpreadFromApi = async (tickerList) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/futures/report/spread-analyse`, {
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
        `${CONSTANTS.FINMARKET_API}/api/futures/report/active-market-events-analyse`, {
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
