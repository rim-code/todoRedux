const listTodo =[
  {"id":0, "text":"item1","undo":"text-normal"},
  {"id":1, "text":"item2","undo":"text-Undo"},
  {"id":2, "text":"item3","undo":"text-normal"},
  {"id":3, "text":"item4","undo":"text-normal"},
  {"id":4, "text":"item5","undo":"text-normal"},

]
const TodosReducers = (state=listTodo,action)=>{

  if(action.type==='ADD_TODO')
{
  return state=[...state,{"id":Math.random, "text":action.text, "undo":action.undo  } ]
}




  return state
}

export default TodosReducers