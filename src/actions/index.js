export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SET_TODO = 'SET_TODO';
export const SET_SELECTED_USER_ID = 'SET_SELECTED_USER_ID';
export const SET_UPDATING_TODO_INDEX = 'SET_UPDATING_TODO_INDEX';
export const UPDATE_TODO = 'UPDATE_TODO';


export const addTodo = (payload) => ({ type: ADD_TODO, payload });
export const completeTodo = (payload) => ({ type: COMPLETE_TODO, payload });
export const deleteTodo = (payload) => ({ type: DELETE_TODO, payload });
export const setTodo = (payload) => ({ type: SET_TODO, payload });
export const setSelectedUserId = (payload) => ({ type: SET_SELECTED_USER_ID, payload });
export const setUpdatingTodoIndex = (payload) => ({ type: SET_UPDATING_TODO_INDEX, payload });
export const updateTodo = (payload) => ({ type: UPDATE_TODO, payload });