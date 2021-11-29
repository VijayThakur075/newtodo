import { Button } from 'react-bootstrap';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { completeTodo, setUpdatingTodoIndex, deleteTodo } from '../actions';
import { useHistory } from 'react-router';

export default function TodoList() {
    const dispatch = useDispatch();
    const history = useHistory();
    const todos = useSelector((state) => state.todos);

    const handleEdit = (todoId) => {
        const todoIndex = todos.records.findIndex((todo) => todo.id === todoId);
        history.push('/todo');
        dispatch(setUpdatingTodoIndex(todoIndex));
    }

    const handleDelete = (todoId) => {
        dispatch(deleteTodo(todoId));
    }

    const handleComplete = (event, todoId) => {
        dispatch(completeTodo({ todoId, completed: event.target.checked }));
    }

    return (
        <div>

            {todos.records.map((todo) => (
                <li key={todo.id}>
                    <span>
                        {todo.title}: {todo.description}
                    </span>
                    <span>
                        <Button varient="danger" onClick={() => handleDelete(todo.id)}>Delete</Button>
                        <Button varient="success" onClick={() => handleEdit(todo.id)}>Edit</Button>
                        <label>
                            complete
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onClick={(event) => handleComplete(event, todo.id)}
                            />
                        </label>
                    </span>
                </li>
            ))}

        </div>
    );
}