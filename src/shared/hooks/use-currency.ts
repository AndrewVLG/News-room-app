import { useState } from 'react'
import { useGetAllCurrenciesQuery } from '../api/currencies-api'
interface UseCurrency {
  isLoading: boolean
  currency: string
  value: number | boolean
  setCurrency: (code: string) => void
}
export const useCurrency = (): UseCurrency => {
  const [current, setCurrent] = useState<string>('USD')
  const { data, isLoading, isSuccess } = useGetAllCurrenciesQuery({
    base_currency: current,
  })
  const setCurrency = (code: string) => {
    setCurrent(code)
  }
  return {
    isLoading,
    currency: current,
    value: isSuccess && data.value,
    setCurrency,
  }
}
