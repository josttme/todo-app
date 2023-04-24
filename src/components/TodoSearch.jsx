import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

export default function TodoSearch () {
  const { searchValue, setSearchValue } = useContext(TodoContext)
  const onSearchValueChange = (e) => {
    console.log(e.target.value)
    setSearchValue(e.target.value)
  }
  return (
    <div className='flex items-center w-10/12 mr-auto  max-w-lg ml-auto h-12 rounded-3xl  bg-secondary overflow-hidden border-2 border-transparent p-2 focus-within:border-blue-500 focus-within:outline-none focus-within:shadow-outline-blue'>
      <div className='grid place-items-center h-full  w-14'>
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
          <path d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z' />
        </svg>
      </div>

      <input
        className='h-full w-full outline-none  bg-secondary pr-2'
        type='text'
        placeholder='Search...'
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </div>
  )
}
