import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setTodo, addTodo, updateTodo } from '../actions';
import { Form, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

function TodoForm(props) {
  const history = useHistory();
  const { todo, updatingTodoIndex } = props.todos;
  //const todos= useSelector(state=> state.todos);

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    const updatedTodo = { ...todo, [name]: value };
    props.setTodo(updatedTodo);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!todo.title) return;
    if (!updatingTodoIndex && updatingTodoIndex !== 0) {
      props.addTodo({ ...todo, id: new Date().getTime() });
      const listItem = localStorage.getItem("getItem") || "[]"
      const items = JSON.parse(listItem)

      items.push({
        todo: todo,
        id: new Date().getTime(),
      })

      localStorage.setItem("getItem", JSON.stringify(items))

    } else {
      props.updateTodo({ ...todo });
    }


  }
  const handleClick = () => {
    history.push('/TodoList')
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(props.todo))
  }, [props.todo])

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <div>
          <Form.Label>
            Title:
            <Form.Control name="title" value={todo.title} onChange={handleChangeInput} />
          </Form.Label>
        </div>
        <div>
          <Form.Label>
            Description:
            <Form.Control as="textarea" name="description" value={todo.description} onChange={handleChangeInput} />
          </Form.Label>
        </div>
        <div><br />
          <Button type="submit">{updatingTodoIndex ? 'Update' : 'Submit'}</Button>
          <Button varient="primary" onClick={handleClick} >show todo</ Button>
        </div>
      </Form>
    </div>
  );
}

const mapState = (state) => ({
  todos: state.todos,
});

const mapDispatch = {
  setTodo,
  addTodo,
  updateTodo,
};

export default connect(mapState, mapDispatch)(TodoForm);