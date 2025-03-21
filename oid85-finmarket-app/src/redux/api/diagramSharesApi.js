import {CONSTANTS} from "../../constants";

export const getDiagramClosePricesFromApi = async (startDate, endDate) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/shares/diagram/close-prices`, {
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
