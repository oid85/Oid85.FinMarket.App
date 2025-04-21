import {CONSTANTS} from "../../constants"

export const getDiagramDailyClosePricesFromApi = async (startDate, endDate, tickerList) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/indexes/diagram/daily-close-prices`, {
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
