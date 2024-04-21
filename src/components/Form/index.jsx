import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "../../context/TodoProvider";

const Form = ({ todo }) => {
  const { todos, setTodos } = useContext(TodoContext);
  const [inputValue, setInputValue] = useState(todo);

  const handleSubmit = (event) => {
    event.preventDefault();
    const index = todos.indexOf(todo);
    let newTodos = todos.filter((elem) => elem !== todo);
    newTodos.splice(index, 0, inputValue);

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

export default Form;
