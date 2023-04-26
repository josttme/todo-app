import { useEffect, useState } from 'react'

export const useLocalStorage = (itemName, initialValue) => {
  const [sincronizedItem, setSincronizedItem] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [item, setItem] = useState(initialValue)

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const localStorageItem = window.localStorage.getItem(itemName)
        let parsedItem
        if (!localStorageItem) {
          window.localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }
        setItem(parsedItem)
        setLoading(false)
        setSincronizedItem(true)
      } catch (error) {
        setError(error)
      }
    }
    fetchItem()
  }, [sincronizedItem]) // Agregamos el arreglo vacío como dependencia

  const saveItem = (newItem) => {
    try {
      const stringifyItem = JSON.stringify(newItem)
      window.localStorage.setItem(itemName, stringifyItem)
      setItem(newItem)
    } catch (error) {
      setError(error)
    }
  }
  const sincronizeItem = () => {
    setLoading(true)
    setSincronizedItem(false)
  }
  return { item, saveItem, loading, error, sincronizeItem }
}
