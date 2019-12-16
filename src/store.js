import {createStore,combineReducers} from 'redux'
import listTods from './Reducers/listTodoReducers'
import SetInput from './Reducers/setInput'
const store=createStore(combineReducers({
  todos:listTods,
SetInput:SetInput

}))


export default store