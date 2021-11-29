import './App.css';
import Todo from './Todo';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from './Todo/TodoList';
import TodoForm from './Todo/TodoForm';


function App(props) {
  return (
    <Router>
      <Link to="/todo">Todo</Link>
      <div className="App">
        <Route exact path="/todo" component={TodoForm} />
        <Route path="/TodoList" component={TodoList} />
      </div>
    </Router>
  );
}

export default App;