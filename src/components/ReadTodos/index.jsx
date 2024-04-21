import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoProvider";
import { Link } from "react-router-dom";
import "./read-todos-styles.css";
import logo from "../../images/logo.svg";

const Todos = () => {
  const { todos, setTodos } = useContext(TodoContext);

  return (
    <div className="todos">
      <img src={logo} className="App-logo" alt="logo" />
      <h1> Todos CRUD-01</h1>

      {todos.map((todo) => {
        return (
          <div>
            {todo}
            <Link to={`/edit/${todo}`}>edit</Link>
            <Link to={`/delete/${todo}`}>delete</Link>
          </div>
        );
      })}
      <Link to={`/create`}>
        <button>Create Todo</button>
      </Link>
    </div>
  );
};

export default Todos;
