import React from 'react';
import ReactDOM from 'react-dom/client'
import {thunk} from 'redux-thunk'
import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from '@redux-devtools/extension'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { rootReducer } from './redux/reducers/rootReducer'
import { eventSagaWatcher } from './redux/sagas/reportSagas'
import 'bootstrap/dist/css/bootstrap.min.css'

const saga = createSagaMiddleware()

const middlewareEnhancer = applyMiddleware(saga, thunk)
const composedEnhancers = compose(middlewareEnhancer)

const store = createStore(rootReducer, undefined, composedEnhancers)

saga.run(eventSagaWatcher)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
