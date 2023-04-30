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
  const [openModal, setOpenModal] = useState(false)
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
        setOpenModal(false)
      } else if (event.keyCode === 77 && !openModal) { // Tecla "m"
        event.preventDefault()
        setOpenModal(true)
      } else if (event.ctrlKey && event.keyCode === 75) { // Teclas "Ctrl + k"
        event.preventDefault()
        handleCtrlKPress()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [openModal])
  return {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    addTodo,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    todos,
    ctrlKPressed,
    setCtrlKPressed,
    sincronizeTodos
  }
}
export { useTodos }
