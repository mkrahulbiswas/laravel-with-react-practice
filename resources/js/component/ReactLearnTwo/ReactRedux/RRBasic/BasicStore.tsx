import { createStore } from "redux";

const ADD_TASK = 'task/add'
const REMOVE_TASK = 'task/delete'
const initialState = {
    tasks: [],
    isLoading: false
}
const taskReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case REMOVE_TASK:
            const updateTask = state.tasks.filter((val: any, index: any) => {
                return index !== action.payload
            })
            return {
                ...state,
                tasks: updateTask
            }
        default:
            return state;
    }
};
const store = createStore(taskReducer)
console.log(store);

const addTask = (data: any) => {
    return { type: ADD_TASK, payload: data }
}

store.dispatch({ type: ADD_TASK, payload: 'Rahul Biswas' })
console.log('Update state:', store.getState());

store.dispatch(addTask('Arpita Basu'))
console.log('Update state:', store.getState());

store.dispatch({ type: REMOVE_TASK, payload: 1 })
console.log('Delete state:', store.getState());
