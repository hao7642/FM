import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import createReducer from './reducer/reducer'
let store = createStore(createReducer,applyMiddleware(thunk))
export default store