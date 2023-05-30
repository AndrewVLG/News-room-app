import { useState, useEffect, ChangeEventHandler } from 'react'
import { useNavigate } from 'react-router'

interface UseDebounce {
  value: string
  handler?: ChangeEventHandler
}

export const useDebounce = (v: string, delay: number): UseDebounce => {
  const [value, setValue] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    let timer: NodeJS.Timeout
    timer = setTimeout(() => setValue(v), delay)

    return () => clearTimeout(timer)
  }, [v])
  return { value }
}
