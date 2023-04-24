import { useRef, useEffect } from 'react'

export default function TodoTitle () {
  const textRef = useRef()
  useEffect(() => {
    textRef.current.setAttribute(
      'style',
      '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'
    )
  }, [])
  return (
    <h1 ref={textRef} className='text-center text-4xl font-bold bg-gradient-to-r from-tertiary to-[#bb29fa]'>ToDo App</h1>
  )
}
