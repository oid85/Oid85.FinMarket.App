import { combineReducers } from 'redux'
import { appReducer } from './appReducer'
import { reportReducer } from './reportReducer'
import { filterReducer } from './filterReducer'

export const rootReducer = combineReducers({
    app: appReducer,
    report: reportReducer,
    filter: filterReducer
})