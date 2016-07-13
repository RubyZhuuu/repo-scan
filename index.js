import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import App from './components/App'
import repoScan from './reducers/index'
import { fetchRepos } from './actions/index'

let store = createStore(
    repoScan,
    applyMiddleware(
        thunkMiddleware
    )
)

store.dispatch(fetchRepos("react"))

render(
    <Provider store = { store }>
        <App />
    </Provider>,
    document.getElementById('root')
)
