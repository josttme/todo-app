import { useTodos } from '../hooks/useTodos'
import TodoButtonCreate from '@components/TodoButtonCreate'
import TodoCounter from '@components/TodoCounter'
import TodoItem from '@components/TodoItem'
import TodoList from '@components/TodoList'
import TodoSearch from '@components/TodoSearch'
import Modal from '@components/Modal/Modal'
import TodoForm from '@/components/Modal/TodoForm'
import TodoTitle from '../components/TodoTitle'
import TodoHeader from '../components/TodoHeader'
import TodosError from '../components/TodosError'
import TodosLoading from '../components/TodosLoading'
import TodosEmpty from '../components/TodosEmpty'
import { ChangeAlert } from '../components/ChangeAlert/ChangeAlert'
/* const defaultTodos = [
  {
    id: 1,
    text: 'Aprender React',
    completed: true
  },
  {
    id: 2,
    text: 'Aprender Typescript',
    completed: false
  },
  {
    id: 3,
    text: 'Aprender Node',
    completed: false
  },
  {
    id: 4,
    text: 'Aprender Next.js',
    completed: false
  },
  {
    id: 7,
    text: 'Aprender Firebase',
    completed: false
  }
] */

function App () {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal, completedTodos, totalTodos,
    searchValue, setSearchValue, ctrlKPressed, setCtrlKPressed,
    addTodo,
    todos,
    sincronizeTodos
  } = useTodos()

  return (
    <>
      <TodoHeader>
        <div className=' mb-10 w-11/12 max-w-lg h-14  grid place-items-center mx-auto lg:relative'>
          <TodoTitle />
          <TodoButtonCreate
            setOpenModal={setOpenModal}
            openModal={openModal}
          />
        </div>
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          ctrlKPressed={ctrlKPressed}
          setCtrlKPressed={setCtrlKPressed}
          loading={loading}
        />
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
      </TodoHeader>
      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <TodosEmpty />}
        onEmptySearchResults={() =>
          <p>No hay resultados para: "{searchValue}"</p>}
      >
        {todo => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>
      {!!openModal && (
        <Modal setOpenModal={setOpenModal}>
          <TodoForm
            setOpenModal={setOpenModal}
            addTodo={addTodo}
            todos={todos}
          />
        </Modal>
      )}
      <ChangeAlert sincronize={sincronizeTodos} />
    </>
  )
}

export default App
