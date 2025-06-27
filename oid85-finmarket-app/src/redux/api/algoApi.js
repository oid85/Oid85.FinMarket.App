import {CONSTANTS} from "../../constants"

export const getAlgoStrategySignalsFromApi = async () => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/algo/strategy-signals`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

    console.log(response)

    if (response.ok) {
        return await response.json()
    }
}

export const getAlgoBacktestResultsFromApi = async () => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/algo/backtest-results`, {
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
