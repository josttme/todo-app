import { useContext, useEffect, useRef } from 'react'
import { TodoContext } from '../context/TodoContext'

export default function TodoSearch () {
  const { searchValue, setSearchValue, ctrlKPressed, setCtrlKPressed } = useContext(TodoContext)
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value)
  }
  const inputRef = useRef()

  useEffect(() => {
    if (ctrlKPressed) {
      inputRef.current.focus()
    }
  }, [ctrlKPressed])
  const handleBlur = () => {
    setCtrlKPressed(false)
  }
  return (

    <div className='grid  items-center w-10/12 mr-auto  max-w-lg ml-auto h-12 rounded-3xl  bg-secondary overflow-hidden border-2 border-transparent p-2 focus-within:border-blue-400  focus-within:outline-none focus-within'>
      <div className='relative flex items-center'>
        <span className='absolute left-3'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
            <path d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z' />
          </svg>
        </span>
        <input
          type='text'
          placeholder='Buscar tarea...'
          value={searchValue}
          onChange={onSearchValueChange}
          ref={inputRef}
          onBlur={handleBlur}
          className='block bg-secondary w-full h-7 py-3  pl-12 pr-5 lg:pr-16  placeholder-white/60 focus:outline-none'
        />
        <div className='absolute hidden lg:flex inset-y-0  items-center right-3'>
          <kbd className='inline-flex items-center px-[5px] py-[5px] font-sans  text-sm  text-white opacity-70  border rounded-md'>Ctrl K</kbd>
        </div>
      </div>
    </div>

  )
}
