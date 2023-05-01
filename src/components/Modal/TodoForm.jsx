import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function TodoForm ({ submitLabel, label, submitEvent, defaultTodoText }) {
  const navigate = useNavigate()
  const [newTodoValue, setNewTodoValue] = useState(defaultTodoText || '')
  const [textareaError, setTextareaError] = useState(false)
  const [messageError, setMessageError] = useState('')

  const textareaRef = useRef()
  const isDuplicateRef = useRef(false)

  useEffect(() => {
    textareaRef.current.focus()
  }, [])
  const handleChange = (e) => {
    setNewTodoValue(e.target.value)
    textareaRef.current.setCustomValidity('')
    setTextareaError(false)
  }
  const handleCancel = () => {
    navigate('/')
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const newTodoValue = textareaRef.current.value
    const newTodoValueTrimmed = newTodoValue
    /*
      .replace(/^\s+|\s+$/g, '') // Eliminar espacios en blanco al principio y al final
      .replace(/\s{2,}/g, ' ') // Reemplazar más de 2 espacios con solo 1 espacio entre palabras
    const isDuplicate = todos.some(todo => todo.text === newTodoValueTrimmed)

    if (newTodoValueTrimmed === '' || newTodoValueTrimmed.length < 1 || isDuplicate) {
      isDuplicateRef.current = isDuplicate
      handleInvalid()
    } else {
      textareaRef.current.setCustomValidity('')
      */
    console.log(newTodoValueTrimmed)
    submitEvent(newTodoValueTrimmed)
    navigate('/')
    /* } */
  }
  const handleKeyDown = (e) => {
    e.keyCode === 13 && !e.shiftKey && handleSubmit(e)
  }
  const handleInvalid = () => {
    const isDuplicate = isDuplicateRef.current

    const message = errorMessage(isDuplicate)
    setTextareaError(true)
    setMessageError(message)
  }
  const errorMessage = (isDuplicate) => {
    let message
    isDuplicate
      ? message = 'Esta tarea ya existe'
      : message = 'Escribe una tarea'
    return message
  }
  const isTextareaError = `${textareaError && 'focus:border-error border-3 border-error'}`

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-2 bg-secondary p-4 rounded-lg w-11/12 max-w-lg mx-auto '
    >
      <label
        htmlFor='newTodo'
        className='text-2xl font-medium text-white text-center py-2'
      >{label}
      </label>
      <textarea
        className={`border-4  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none rounded-lg  focus:border-blue-400  bg-white/90 ${isTextareaError}`}
        style={{ maxHeight: '200px', minHeight: '100px' }}
        id='newTodo'
        name='todoText'
        value={newTodoValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onInvalid={handleInvalid}
        cols='30'
        rows='10'
        placeholder='Escribe tu tarea aquí...'
        ref={textareaRef}
      />
      <div className='flex justify-between py-1 gap-5'>
        <button
          className='px-6 w-full py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform text-lg bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80'
          onClick={handleCancel} type='button'
        >Cancel
        </button>
        <button
          className='px-6 w-full py-2 font-medium tracking-wide text-lg text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80'
          type='submit'
        >{submitLabel}
        </button>
      </div>
      <div className={`text-red-950 text-center text-xl min-h-[30px] grid place-content-center rounded-lg font-medium ${messageError && 'bg-error'}`}>{messageError}</div>
    </form>
  )
}
