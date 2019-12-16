const setInput=(state='',action)=>{

if(action.type==='CHANGE_TEXT')
{return state=action.value}

return state


}
export default setInput