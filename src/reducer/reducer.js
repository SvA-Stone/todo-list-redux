

const initialState = {
    title: "Todo List",
    todoList: [
        {
            id: Math.random(),
            task: "Learn JS",
            isDone: true
        },
        {
            id: Math.random(),
            task: "Learn Redux",
            isDone: true
        },
        {
            id: Math.random(),
            task: 'Get Job',
            isDone: true
        },
        {
            id: Math.random(),
            task: "Keep Going",
            isDone: true
        }


]
}

const reducer = (state = initialState, action) => {
  switch (action.type){
      case 'CREATE_NEW_TASK': return  state;
      case 'DELETE_TASK': return state;
      case 'UPDATE_TASK':
          const newTodo = state.todoList.map(el => el.id === action.payload.id ? {...el, task: action.payload.task} : el)
          return {...state, todoList: newTodo};
      default: return state;
  }
};
export default reducer;