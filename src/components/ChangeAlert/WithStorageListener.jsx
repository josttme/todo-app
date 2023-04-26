import { useState } from 'react'

export default function WithStorageListener (WrappedComponent) {
  return function WrappedComponentWithStorageListener ({ sincronize }) {
    const [storageChange, setStorageChange] = useState(false)
    window.addEventListener('storage', (change) => {
      if (change.key === 'TODOS_V1') {
        console.log('Hubo cambios en la TODOS_V1')
        setStorageChange(true)
      }
    })
    const toggleShow = () => {
      sincronize()
      setStorageChange(false)
    }
    return (
      <WrappedComponent
        show={storageChange}
        toggleShow={toggleShow}
      />
    )
  }
}
