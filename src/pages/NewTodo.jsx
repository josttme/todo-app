import React from 'react'
import TodoForm from '../components/Modal/TodoForm'
import { useTodos } from '../hooks/useTodos'

export default function NewTodo () {
  const { addTodo } = useTodos()

  return (
    <TodoForm
      label='Escribe tu nuevo TODO'
      submitLabel='Añadir'
      submitEvent={(text) => addTodo(text)}
    />
  )
}
