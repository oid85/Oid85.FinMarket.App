import { combineReducers } from 'redux'
import { appReducer } from './appReducer'
import { reportSharesReducer } from './reportSharesReducer'
import { reportBondsReducer } from './reportBondsReducer'
import { reportFuturesReducer } from './reportFuturesReducer'
import { reportCurrenciesReducer } from './reportCurrenciesReducer'
import { reportIndexesReducer } from './reportIndexesReducer'
import { filterReducer } from './filterReducer'
import { diagramSharesReducer } from './diagramSharesReducer'
import { diagramBondsReducer } from "./diagramBondsReducer"
import { diagramFuturesReducer } from "./diagramFuturesReducer"
import { diagramCurrenciesReducer } from "./diagramCurrenciesReducer"
import { diagramIndexesReducer } from "./diagramIndexesReducer"
import { algoReducer } from "./algoReducer";
import {pairArbitrageReducer} from "./pairArbitrageReducer";

export const rootReducer = combineReducers({
    app: appReducer,
	filter: filterReducer,
	diagramShares: diagramSharesReducer,
	diagramBonds: diagramBondsReducer,
	diagramFutures: diagramFuturesReducer,
	diagramCurrencies: diagramCurrenciesReducer,
	diagramIndexes: diagramIndexesReducer,
	reportShares: reportSharesReducer,
	reportBonds: reportBondsReducer,
	reportFutures: reportFuturesReducer,
	reportCurrencies: reportCurrenciesReducer,
	reportIndexes: reportIndexesReducer,
	algo: algoReducer,
	pairArbitrage: pairArbitrageReducer
})