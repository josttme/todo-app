
export default function TodoButtonCreate ({ setOpenModal, openModal }) {
  const handleToggleModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <button
      className='w-14 h-14 fixed lg:absolute hover:bg-blue-700 hover:cursor-pointer border-2 border-[#b131e9]  bg-secondary grid place-content-center bottom-5 right-5 lg:bottom-0 lg:right-0  lg:w-24  rounded-full z-50'
      onClick={() => handleToggleModal('mensaje')}
    >
      <svg
        className=' w-10 h-10'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={2.5}
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M12 6v12m6-6H6'
        />
      </svg>
    </button>
  )
}
