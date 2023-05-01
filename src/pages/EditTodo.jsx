import { useLocation, useParams } from 'react-router-dom'
import React from 'react'
import TodoForm from '../components/Modal/TodoForm'
import { useTodos } from '../hooks/useTodos'

export default function EditTodo () {
  const location = useLocation()
  const { id } = useParams()
  const { loading, getTodo, editTodo } = useTodos()
  let todoText
  if (location.state?.todo) {
    todoText = location.state.todo.text
  } else if (loading) {
    return <h1>Cargando</h1>
  } else {
    const { text } = getTodo(id)
    todoText = text
  }
  return (
    <TodoForm
      label='Edita tu TODO'
      submitLabel='Editar'
      defaultTodoText={todoText}
      submitEvent={(newText) => editTodo(id, newText)}
    />
  )
}
