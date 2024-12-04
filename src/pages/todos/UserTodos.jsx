import React, { useEffect, useState } from 'react'
import { todoServices } from '../../services/TodoServices'
import { useParams } from 'react-router-dom'
import TodoCard from '../../components/cards/todoCard/TodoCard'

function UserTodos() {
  const { id } = useParams()
  const [todos, setTodos] = useState([])
  useEffect(() => {
    todoServices.getUserTodos(id).then((data) => setTodos(data))
  }, [id])
  console.log(todos);

  return (
    <div className='w-[70%] m-auto'>
      {
        todos.map((todo) => <TodoCard key={todo.id} {...todo} />)
      }
    </div>
  )
}

export default UserTodos