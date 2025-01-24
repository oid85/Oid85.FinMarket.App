import {CONSTANTS} from "../../constants";

export const getReportMarketEventFromApi = async () => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/marketevents/report/active-market-events-analyse`, {
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