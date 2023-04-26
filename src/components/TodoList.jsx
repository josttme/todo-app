export default function TodoList ({ children, error, onError, loading, onLoading, searchedTodos, onEmptyTodos, totalTodos, render, onEmptySearchResults }) {
  const renderFunc = children || render
  return (
    <section className='w-11/12 grid items-center text-center p-3 ml-auto min-h-[70px] mr-auto max-w-lg bg-[#011399] rounded-lg gap-4'>
      {error && onError()}
      {loading && onLoading()}
      {(!loading && !totalTodos) && onEmptyTodos()}
      {(!!totalTodos && !searchedTodos.length) &&
      onEmptySearchResults()}
      {searchedTodos.map(renderFunc)}

    </section>
  )
}
