import {combineReducers} from 'redux'

import AuthReducer from './auth-reducer'
import MainReducer from './main-reducer'


export default combineReducers({
    AuthReducer,
    MainReducer
})


