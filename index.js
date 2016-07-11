import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import App from './components/App'
import repos from './reducers/repos'
import fetchRepos from './actions/index'

let store = createStore(
    repos,
    applyMiddleware(
        thunkMiddleware
    )
)

store.dispatch(fetchRepos())

render(
    <Provider store = { store }>
        <App />
    </Provider>,
  document.getElementById('root')
)
