import { useState, useEffect, ChangeEventHandler } from 'react'

interface UseDebounce {
  value: string
  handler: ChangeEventHandler
}

export const useDebounce = (delay: number): UseDebounce => {
  const [state1, setState1] = useState('')
  const [value, setValue] = useState('')
  const handler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setState1(e.target.value)
  }
  useEffect(() => {
    let timer: NodeJS.Timeout
    if (state1 !== value) {
      timer = setTimeout(() => setValue(state1), delay)
    }
    return () => clearTimeout(timer)
  }, [state1])
  return { value, handler }
}
