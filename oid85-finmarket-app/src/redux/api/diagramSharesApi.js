import {CONSTANTS} from "../../constants"

export const getDiagramDailyClosePricesFromApi = async (startDate, endDate, tickerList) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/shares/diagram/daily-close-prices`, {
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

export const getDiagramMultiplicatorsMcapPeNetDebtEbitdaFromApi = async (tickerList) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/shares/diagram/multiplicators-mcap-pe-netdebtebitda`, {
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