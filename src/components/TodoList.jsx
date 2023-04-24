export default function TodoList ({ children }) {
  return (
    <section className='w-11/12 grid items-center text-center p-3 ml-auto min-h-[70px] mr-auto max-w-lg bg-[#011399] rounded-lg'>
      <ul className='flex flex-col gap-4  rounded-lg'>
        {children}
      </ul>
    </section>
  )
}
