import { useState, useEffect, ChangeEventHandler } from 'react'

interface UseDebounce {
  value: string
  handler?: ChangeEventHandler
}

export const useDebounce = (
  v: string,
  delay: number,
  callback?: (value: string) => void,
): UseDebounce => {
  const [value, setValue] = useState<string>('')

  useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout(() => {
      setValue(v)
      callback && callback(v)
    }, delay)

    return () => clearTimeout(timer)
  }, [v])

  return { value }
}
