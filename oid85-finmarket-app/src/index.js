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
import { eventSagaWatcherDiagramShares } from "./redux/sagas/diagramSharesSagas"
import 'bootstrap/dist/css/bootstrap.min.css'
import {eventSagaWatcherDiagramBonds} from "./redux/sagas/diagramBondsSagas";
import {eventSagaWatcherDiagramIndexes} from "./redux/sagas/diagramIndexesSagas";
import {eventSagaWatcherDiagramCurrencies} from "./redux/sagas/diagramCurrenciesSagas";
import {eventSagaWatcherDiagramFutures} from "./redux/sagas/diagramFuturesSagas";
import {eventSagaWatcherAlgo} from "./redux/sagas/algoSagas";

const saga = createSagaMiddleware()

const middlewareEnhancer = applyMiddleware(saga, thunk)
const composedEnhancers = compose(middlewareEnhancer)

const store = createStore(rootReducer, undefined, composedEnhancers)

saga.run(eventSagaWatcherReportShares)
saga.run(eventSagaWatcherReportBonds)
saga.run(eventSagaWatcherReportFutures)
saga.run(eventSagaWatcherReportCurrencies)
saga.run(eventSagaWatcherReportIndexes)

saga.run(eventSagaWatcherDiagramShares)
saga.run(eventSagaWatcherDiagramBonds)
saga.run(eventSagaWatcherDiagramFutures)
saga.run(eventSagaWatcherDiagramCurrencies)
saga.run(eventSagaWatcherDiagramIndexes)

saga.run(eventSagaWatcherAlgo)


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
