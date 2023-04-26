
export default function TodoCounter ({ completedTodos, totalTodos }) {
  return <h2 className='text-center  text-white text-lg pt-10 pb-5'>Has completado <span className='text-[#00de49] text-xl font-bold'>{completedTodos} </span>de <span className='text-tertiary text-xl font-bold'>{totalTodos}</span> TODOs</h2>
}
