import React from 'react'
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../src/reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App'

export const store = createStore(rootReducer, composeWithDevTools());

render(
  <Provider store={ store } >
    <App />
  </Provider>,
  document.getElementById('root')
)