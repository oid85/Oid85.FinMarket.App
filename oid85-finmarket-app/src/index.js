import React from 'react'
import ReactDOM from 'react-dom/client'
import {thunk} from 'redux-thunk'
import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { rootReducer } from './redux/reducers/rootReducer'
import { eventSagaWatcherReportShares } from './redux/sagas/reportSharesSagas'
import { eventSagaWatcherReportBonds } from './redux/sagas/reportBondsSagas'
import { eventSagaWatcherReportFutures } from './redux/sagas/reportFuturesSagas'
import { eventSagaWatcherReportCurrencies } from './redux/sagas/reportCurrenciesSagas'
import { eventSagaWatcherReportIndexes } from './redux/sagas/reportIndexesSagas'
import 'bootstrap/dist/css/bootstrap.min.css'

const saga = createSagaMiddleware()

const middlewareEnhancer = applyMiddleware(saga, thunk)
const composedEnhancers = compose(middlewareEnhancer)

const store = createStore(rootReducer, undefined, composedEnhancers)

saga.run(eventSagaWatcherReportShares)
saga.run(eventSagaWatcherReportBonds)
saga.run(eventSagaWatcherReportFutures)
saga.run(eventSagaWatcherReportCurrencies)
saga.run(eventSagaWatcherReportIndexes)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
