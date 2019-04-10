import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
//redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
//redux persist
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import createEncryptor from 'redux-persist-transform-encrypt'
import storage from 'redux-persist/lib/storage'
require('dotenv').config()

const encryptor = createEncryptor({
  secretKey: 'my-super-secret-key',
  onError: function(error) {
    // Handle the error.
    console.log('error error')
  },
})

const persistConfig = {
  key: 'root',
  storage,
  transforms: [encryptor],
}
const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
)
const persistor = persistStore(store)

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </Router>,
  document.getElementById('root')
)
