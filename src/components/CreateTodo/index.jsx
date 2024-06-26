import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "../../context/TodoProvider";

const CreateTodo = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const [inputValue, setInputValue] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodos = [...todos, inputValue];
    setTodos(newTodos);
    setInputValue("");
    localStorage.setItem("todos1", JSON.stringify(newTodos));
  };
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <Link to={`/`}>Back</Link>
      <h1>CreateTodo</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={inputValue}
          type="text"
          placeholder="Create Todo"
        />
      </form>
      {todos?.join(",")}
    </div>
  );
};

export default CreateTodo;
