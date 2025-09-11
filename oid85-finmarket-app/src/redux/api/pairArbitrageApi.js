import {CONSTANTS} from "../../constants"


export const getPairArbitrageSpreadsFromApi = async (startDate, endDate) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/pair-arbitrage/spreads`, {
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

export const getPairArbitrageStrategySignalsFromApi = async () => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/pair-arbitrage/strategy-signals`, {
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

export const getPairArbitrageBacktestResultsFromApi = async (ticker, strategyName) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/pair-arbitrage/backtest-results`, {
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

export const getPairArbitrageBacktestResultByIdFromApi = async (backtestResultId) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/pair-arbitrage/backtest-result-by-id`, {
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

export const getPairArbitrageBacktestResultByTickerFromApi = async (backtestResultTicker) => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/pair-arbitrage/backtest-result-by-ticker`, {
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

export const getPairArbitrageBacktestResultPortfolioFromApi = async () => {
    const response = await fetch(
        `${CONSTANTS.FINMARKET_API}/api/pair-arbitrage/backtest-result-portfolio`, {
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
