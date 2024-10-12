import React from 'react';
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { applyMiddleware, configureStore } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { rootReducer } from './redux/reducers/rootReducer'
import { eventSagaWatcher } from './redux/sagas/eventSagas'
import 'bootstrap/dist/css/bootstrap.min.css'

const saga = createSagaMiddleware()

const store = configureStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, saga))
)

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
