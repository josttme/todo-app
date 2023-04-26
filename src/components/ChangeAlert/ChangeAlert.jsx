import WithStorageListener from './WithStorageListener'

function ChangeAlert ({ show, toggleShow }) {
  if (show) {
    return (
      <div className='fixed inset-0 z-50 grid bg-black/30 place-content-center'>
        <div className='flex  flex-col gap-2 bg-secondary px-2 p-6 lg:p-6 rounded-lg mx-auto w-auto max-w-md'>
          <div className='flex justify-center items-center'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.7} className='w-14 h-14 stroke-yellow-400'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z' />
            </svg>
          </div>
          <p className='text-3xl text-center pb-4 pt-2 font-bold'>
            ¡Actualización de tareas!
            <span className='block text-xl text-center'>
              Por favor, actualice la página.
            </span>
          </p>
          <button
            className='px-6 w-full py-3 font-medium tracking-wide text-lg text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80'
            onClick={toggleShow}
          >Actualizar
          </button>
        </div>
      </div>
    )
  } else {
    return null
  }
}

const ChangeAlertWithStorageListener = WithStorageListener(ChangeAlert)
export { ChangeAlertWithStorageListener }
