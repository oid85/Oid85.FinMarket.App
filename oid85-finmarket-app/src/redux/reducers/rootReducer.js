import { combineReducers } from 'redux'
import { appReducer } from './appReducer'
import { reportSharesReducer } from './reportSharesReducer'
import { diagramSharesReducer } from './diagramSharesReducer'
import { reportBondsReducer } from './reportBondsReducer'
import { reportFuturesReducer } from './reportFuturesReducer'
import { reportCurrenciesReducer } from './reportCurrenciesReducer'
import { reportIndexesReducer } from './reportIndexesReducer'
import { filterReducer } from './filterReducer'

export const rootReducer = combineReducers({
    app: appReducer,
	reportShares: reportSharesReducer,
	diagramShares: diagramSharesReducer,
	reportBonds: reportBondsReducer,
	reportFutures: reportFuturesReducer,
	reportCurrencies: reportCurrenciesReducer,
	reportIndexes: reportIndexesReducer,
    filter: filterReducer
})