import { combineReducers } from 'redux'
import taskReducer from './task'


const allReducers = combineReducers({
    taskReducer: taskReducer
})

export default allReducers