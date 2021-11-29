import {
    SET_TODO,
    ADD_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
    SET_UPDATING_TODO_INDEX,
} from '../actions';

const initialState = {
    todo: { title: '', description: '' },
    records: [],
    updatingTodoIndex: null,
}

export default function todos(state = initialState, action) {
    switch (action.type) {
        case SET_TODO:
            return {
                ...state,
                todo: action.payload,
            };
        case SET_UPDATING_TODO_INDEX:
            return {
                ...state,
                updatingTodoIndex: action.payload,
                todo: { ...state.records[action.payload] },
            };
        case ADD_TODO:
            return {
                ...state,
                records: [...state.records, action.payload],
                todo: initialState.todo,
            };
        case UPDATE_TODO:
            const records = [...state.records];
            records[state.updatingTodoIndex] = action.payload;
            return {
                ...state,
                records,
                todo: initialState.todo,
                updatingTodoIndex: null,
            };
        case COMPLETE_TODO:
            return {
                ...state,
                records: state.records.map((todo) => {
                    if (todo.id !== action.payload.todoId) return todo;
                    return { ...todo, completed: action.payload.completed };
                })
            };
        case DELETE_TODO:
            return {
                ...state,
                records: state.records.filter((todo) => todo.id !== action.payload),
            };
        default:
            return state;
    }
}