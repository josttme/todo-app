import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useLocalStorage } from './useLocalStorage'

function useTodos () {
  const {
    item: todos,
    saveItem: saveTodos,
    sincronizeItem: sincronizeTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = useState('')
  const [ctrlKPressed, setCtrlKPressed] = useState(false)
  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length
  let searchedTodos = []
  if (!searchValue.length) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }
  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      id: uuidv4(),
      text,
      completed: false

    })
    saveTodos(newTodos)
  }
  const getTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id
    )
    console.log(id)
    console.log(todos[todoIndex])
    return todos[todoIndex]
  }
  const editTodo = (id, newText) => {
    const todoIndex = todos.findIndex(todo => todo.id === id)
    const newTodos = [...todos]

    console.log(newTodos[todoIndex])
    newTodos[todoIndex].text = newText
    saveTodos(newTodos)
  }
  const completeTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    saveTodos(newTodos)
  }
  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }
  const handleCtrlKPress = () => {
    setCtrlKPressed(true)
  }
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) { // Tecla "Esc"
      } else if (event.keyCode === 77) { // Tecla "m"
        event.preventDefault()
      } else if (event.ctrlKey && event.keyCode === 75) { // Teclas "Ctrl + k"
        event.preventDefault()
        handleCtrlKPress()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])
  return {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    addTodo,
    getTodo,
    deleteTodo,
    editTodo,
    todos,
    ctrlKPressed,
    setCtrlKPressed,
    sincronizeTodos
  }
}
export { useTodos }
