import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoProvider";
import { Link } from "react-router-dom";
import "./read-todos-styles.css";
import logo from "../../images/logo.svg";
import Todo from "../Todo";

const Todos = () => {
  const { todos, setTodos } = useContext(TodoContext);

  return (
    <div className="todos">
      <img src={logo} className="App-logo" alt="logo" />
      <h1> Todos CRUD-01</h1>

      {todos.map((todo) => {
        return <Todo todo={todo} />;
      })}
      <Link to={`/create`}>
        <button>Create Todo</button>
      </Link>
    </div>
  );
};

export default Todos;
