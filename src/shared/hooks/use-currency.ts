import { useState } from 'react'
import { Currencies, useGetAllCurrenciesQuery } from '../api/currencies-api'
import { CurrencyObj } from '../api/currencies-types'
interface UseCurrency {
  isLoading: boolean
  baseCurrency: string
  currencies: CurrencyObj[]
  setBaseCurrency: (code: string) => void
  addToCurrenciesList: (code: Currencies) => void
}
export const useCurrency = (): UseCurrency => {
  const [baseCurrency, setBaseCurrency] = useState<string>('USD')
  const [currenciesArray, setCurrenciesArray] = useState<Currencies[]>(['RUB'])

  const currencies = currenciesArray.join()

  const { data, isLoading, isSuccess } = useGetAllCurrenciesQuery({
    base_currency: baseCurrency,
    currencies,
  })

  const addToCurrenciesList = (code: Currencies) => {
    const isMatch = currenciesArray.includes(code)

    if (isMatch) {
      return
    }
    const newList = [...currenciesArray, code]
    setCurrenciesArray(newList)
  }
  return {
    isLoading,
    baseCurrency,
    currencies: isSuccess ? data : [],
    setBaseCurrency,
    addToCurrenciesList,
  }
}
