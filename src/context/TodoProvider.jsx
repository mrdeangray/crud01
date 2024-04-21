import React, { useState, createContext, useEffect } from "react";

export const TodoContext = createContext(null);
const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(window.localStorage.getItem("todos1")) || [];
    setTodos(savedTodos);
  }, []);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
