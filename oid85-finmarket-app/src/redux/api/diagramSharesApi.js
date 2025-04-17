import {CONSTANTS} from "../../constants"

export const getDiagramDailyClosePricesFromApi = async (startDate, endDate) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/shares/diagram/daily-close-prices`, {
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

export const getDiagramFiveMinutesClosePricesFromApi = async (startDateTime, endDateTime) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/shares/diagram/five-minutes-close-prices`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: startDateTime,
                to: endDateTime})
        })

    if (response.ok) {
        return await response.json()
    }
}

export const getDiagramMultiplicatorsMcapPeNetDebtEbitdaFromApi = async () => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/shares/diagram/multiplicators-mcap-pe-netdebtebitda`, {
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