import React, {useState, createContext} from 'react'


export const TodoContext = createContext(null)
const TodoProvider = ({children}) => {
const [todos, setTodos] = useState(["aaa", "bbb", "ccc"])

  return (
    <TodoContext.Provider value={{todos, setTodos}}>
        {children}
    </TodoContext.Provider>
  
  )
}

export default TodoProvider