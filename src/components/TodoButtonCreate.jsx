
export default function TodoButtonCreate ({ onClick }) {
  return (
    <div className='w-14 h-14 fixed bottom-5 group   lg:absolute right-5 lg:bottom-0 lg:right-0 lg:w-24  z-50 '>
      <button
        className='w-14 h-14 rounded-full hover:bg-blue-700 hover:cursor-pointer border-2 border-[#b131e9]  bg-secondary grid place-content-center lg:w-24   rounded-fullftransform focus:outline-none focus:ring focus:ring-[#b131e9]  focus:ring-opacity-80'
        onClick={onClick}
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
      <span
        className="absolute hidden text-ms font-sans  lg:group-hover:grid  -bottom-28 place-content-center -translate-y-full w-36 left-1/2 transform -translate-x-1/2 h-12 bg-blue-600  rounded-lg text-center text-white text-md after:content-[''] after:absolute after:left-1/2 after:bottom-full after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-t-transparent after:border-b-blue-600 "
      >
        Crea un ToDo (m)
      </span>
    </div>
  )
}
