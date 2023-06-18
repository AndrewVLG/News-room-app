import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { CurrencyData, CurrencyObj, CurrencyResponse } from './currencies-types'

const _API_KEY = 'PETsLKW8evdKo8NLNghkY14C15WbDmRaGbNzfwVe'
const _BASE_URL = 'https://api.currencyapi.com/v3/'
interface Params {
  base_currency: string
  currencies?: string
}
export const currenciesApi = createApi({
  reducerPath: 'currencies',
  baseQuery: fetchBaseQuery({
    baseUrl: _BASE_URL,
    headers: { apikey: _API_KEY },
  }),
  endpoints: (builder) => ({
    getAllCurrencies: builder.query<CurrencyObj, Params>({
      query: ({ base_currency }) => ({
        url: 'latest',
        params: { base_currency, currencies: 'RUB' },
      }),
      transformResponse: (response: CurrencyResponse) => {
        const currenciesData = response.data
        return transformCurrencyData(currenciesData)
      },
    }),
  }),
})
export const { useGetAllCurrenciesQuery } = currenciesApi

function transformCurrencyData(currenciesData: CurrencyData) {
  return currenciesData.RUB
}
