const ChangeTxtReducers= (state = 'ddd', action) => {

    if (action.type === 'CHANGE_TXT')
{
    return action.value
}

    return state
}
export default ChangeTxtReducers