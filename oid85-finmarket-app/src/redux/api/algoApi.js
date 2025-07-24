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

    if (response.ok) {
        return await response.json()
    }
}

export const getAlgoBacktestResultsFromApi = async (ticker, strategyName) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/algo/backtest-results`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ticker: ticker,
                strategyName: strategyName
            })
        })

    if (response.ok) {
        return await response.json()
    }
}

export const getAlgoBacktestResultByIdFromApi = async (backtestResultId) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/algo/backtest-result-by-id`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: backtestResultId
            })
        })

    if (response.ok) {
        return await response.json()
    }
}

export const getAlgoBacktestResultByTickerFromApi = async (backtestResultTicker) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/algo/backtest-result-by-ticker`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ticker: backtestResultTicker
            })
        })

    if (response.ok) {
        return await response.json()
    }
}

export const getAlgoBacktestResultPortfolioFromApi = async () => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/algo/backtest-result-portfolio`, {
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

export const getAlgoSpreadsFromApi = async (startDate, endDate) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/algo/diagram/spreads`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: startDate,
                to: endDate,
                tickerList: ""
            })
        })

    if (response.ok) {
        return await response.json()
    }
}