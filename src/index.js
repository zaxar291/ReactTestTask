import React from 'react'
import ReactDOM from 'react-dom'
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './App/App'
import { RootReducer } from './Redux/Reducers/RootReducer'

const store = createStore(RootReducer, compose(
    applyMiddleware(
        thunk
    )
))


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('page-wrapper')
)
