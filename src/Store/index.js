import {createStore,applyMiddleware} from 'redux'
import AllReducer from './Reducers'
import Thunk from 'redux-thunk'

export default createStore(AllReducer,applyMiddleware(Thunk))