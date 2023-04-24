export default function TodoItem ({ text, completed, onComplete, onDelete }) {
  const isCompletedText = `text-white break-all text-xl text-center  text-white/80 text-center' ${completed && 'line-through decoration-[#b131e9] decoration-4'}`
  const isCompletedChecked = `w-7 h-7  ${completed ? 'stroke-[#00de49] hover:stroke-[#00de49]' : 'stroke-[#05a4ff] hover:stroke-yellow-500'}`
  return (
    <li className='bg-secondary min-h-[50px] py-1  w-full grid grid-cols-item justify-items-center rounded-lg items-center '>
      <span onClick={onComplete} className='cursor-pointer '>
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' className={isCompletedChecked} strokeWidth={1.5}>
          <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
        </svg>
      </span>
      <p className={isCompletedText}>{text}</p>
      <span onClick={onDelete} className='cursor-pointer '>
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} className='stroke-[#05a4ff] w-7 h-7 hover:stroke-red-500'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0' />
        </svg>
      </span>
    </li>
  )
}
