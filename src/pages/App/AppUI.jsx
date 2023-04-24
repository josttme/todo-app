import { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'
import TodoButtonCreate from '@components/TodoButtonCreate'
import TodoCounter from '@components/TodoCounter'
import TodoItem from '@components/TodoItem'
import TodoList from '@components/TodoList'
import TodoSearch from '@components/TodoSearch'
import Modal from '@components/Modal/Modal'
import TodoForm from '@/components/Modal/TodoForm'
import TodoTitle from '../../components/TodoTitle'
export default function AppUI () {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = useContext(TodoContext)
  return (
    <>
      <div className=' mb-10 w-11/12 max-w-lg h-14  grid place-items-center mx-auto lg:relative'>
        <TodoTitle />
        <TodoButtonCreate
          setOpenModal={setOpenModal}
          openModal={openModal}
        />
      </div>
      <TodoSearch />
      <TodoCounter />

      <TodoList>
        {error && <p>Hubo un error</p>}
        {loading && <p>Loading...</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer ToDo</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

    </>
  )
}
