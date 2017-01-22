import { combineReducers } from 'redux'
import counter from './counter'
import ui from './ui'


// Reducer가 2개 이상일 경우 합쳐주는 함수
export default combineReducers({
    counter,
    ui
})