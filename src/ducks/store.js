import reducer from './reducer'
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'

export default (createStore( reducer, undefined, applyMiddleware(
    promiseMiddleware()
) ));