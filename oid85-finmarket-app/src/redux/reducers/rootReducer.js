import { combineReducers } from 'redux'
import { appReducer } from './appReducer'
import { reportSharesReducer } from './reportSharesReducer'
import { filterReducer } from './filterReducer'

export const rootReducer = combineReducers({
    app: appReducer,
    reportShares: reportSharesReducer,
    filter: filterReducer
})