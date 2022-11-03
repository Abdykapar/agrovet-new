import { useEffect, useState } from 'react'

export const useInput = (initValue = '') => {
  const [value, setValue] = useState(initValue)

  function onChange(e) {
    setValue(e.target.value)
  }

  return {
    value,
    onChange,
  }
}

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}
