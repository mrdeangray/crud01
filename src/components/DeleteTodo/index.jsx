import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { TodoContext } from "../../context/TodoProvider";
import { useNavigate } from "react-router-dom";

const DeleteTodo = () => {
  const { todo } = useParams();
  const navigate = useNavigate();
  const { todos, setTodos } = useContext(TodoContext);

  const handleDelete = () => {
    const newTodos = todos.filter((elem) => elem !== todo);
    setTodos(newTodos);

    navigate(`/`);
  };

  return (
    <div>
      <Link to={`/`}>Back</Link>
      <h1>{todo} will be deleted</h1>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteTodo;
