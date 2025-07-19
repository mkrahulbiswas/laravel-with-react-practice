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
export const advanceStore = createStore(taskReducer)
export const addTask = (data: any) => {
    return { type: ADD_TASK, payload: data }
}
export const removeTask = (data: any) => {
    return { type: REMOVE_TASK, payload: data }
}
