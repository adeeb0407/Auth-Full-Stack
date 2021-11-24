import { combineReducers } from 'redux'
import userReducer from './userReducers'

export const rootReducer = combineReducers({
    userReducer, 
}) // reduers in main index.js is coming form here