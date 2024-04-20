import React, { useContext } from 'react'
import { TodoContext } from '../../context/TodoProvider'

const Todos = () => {

const {todos,setTodos} = useContext(TodoContext)

  return (
    <div>Todos CRUD-01

{
  todos.map((todo)=>{
    return(
      <div>
  {todo}
      </div>
    )
  })}

    </div>
  )
}

export default Todos