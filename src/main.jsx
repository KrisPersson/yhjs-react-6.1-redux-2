import React from 'react'
import ReactDOM from 'react-dom/client'
import { legacy_createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'

import { formReducer } from './reducers/formReducers'


const store = legacy_createStore(
  formReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={ store }>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>
)
