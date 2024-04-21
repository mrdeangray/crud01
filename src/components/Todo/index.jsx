import React from "react";
import { Link } from "react-router-dom";
import "./todo.css"


const Todo = ({ todo }) => {
  return (
    <div className="todo">
      {todo}
      <Link to={`/edit/${todo}`}>edit</Link>
      <Link to={`/delete/${todo}`}>delete</Link>
    </div>
  );
};

export default Todo;
