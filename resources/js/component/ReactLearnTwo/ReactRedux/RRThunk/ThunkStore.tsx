import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import { getStudentApi } from "@/services/api-service";
import thunk from 'redux-thunk';

const ADD_TASK = 'task/add'
const REMOVE_TASK = 'task/delete'
const GET_TASK = 'task/get'
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
        case GET_TASK:
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
export const advanceStore = createStore(
    taskReducer,
    composeWithDevTools(
        applyMiddleware(thunk as any)
    )
)
export const addTask = (data: any) => {
    return { type: ADD_TASK, payload: data }
}
export const removeTask = (data: any) => {
    return { type: REMOVE_TASK, payload: data }
}
export const getStudentList = () => {
    return async (dispatch: any) => {
        try {
            const res = await getStudentApi(1, 10)
            console.log(res);
            dispatch({ type: GET_TASK, payload: res })
        } catch (error) {
            console.log(error);
        }
    }
}
