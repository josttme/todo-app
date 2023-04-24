
import AppUI from './AppUI'
import { TodoProvider } from '../../context/TodoContext'
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
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App
