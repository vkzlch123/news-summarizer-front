/* @flow */
'use strict'

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { hashHistory } from 'react-router'
import { routerReducer, routerMiddleware } from 'react-router-redux'

import * as reducers from './reducer'

let middleware = [thunkMiddleware]
middleware.push(routerMiddleware(hashHistory))

const hasDevTools = process.env.NODE_ENV !== 'production' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const store = createStore(
    combineReducers({
      ...reducers,
      routing: routerReducer
    }),
    hasDevTools
      ? compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
      )
      : applyMiddleware(...middleware)
)

export default store
