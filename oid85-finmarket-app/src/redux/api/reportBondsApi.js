import {CONSTANTS} from "../../constants"

export const getReportAggregatedAnalyseFromApi = async (startDate, endDate, tickerList) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/bonds/report/aggregated-analyse`, {
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
        `${CONSTANTS.FINMARKET_API}/api/bonds/report/supertrend-analyse`, {
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
        `${CONSTANTS.FINMARKET_API}/api/bonds/report/candle-sequence-analyse`, {
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
        `${CONSTANTS.FINMARKET_API}/api/bonds/report/candle-volume-analyse`, {
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

export const getReportCouponFromApi = async (tickerList) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/bonds/report/coupon-analyse`, {
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

export const getReportSelectionFromApi = async () => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/bonds/report/bond-selection`, {
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

export const getReportMarketEventFromApi = async (tickerList) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/bonds/report/active-market-events-analyse`, {
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
