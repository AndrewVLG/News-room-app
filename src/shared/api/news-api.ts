import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const _BASE_URL = 'https://newsapi.org/v2/'
const _API_KEY = 'd25980c6b9494497a47ba65221d3c747'
const _API_KEY2 = '0ec8e1e62dc84b25afe7587c9b7791d7'
export type Country = 'ru' | 'us' | 'de' | 'fr' | 'ua'

export interface Article {
  author: null | string
  content: null | string
  description: null | string
  publishedAt: null | string
  source: { id: null | string; name: null | string }
  title: null | string
  url: null | string
  urlToImage: null | string
}
export interface Response {
  status: string
  totalResults: number
  articles: Article[]
}
interface QueryParams {
  country?: Country
  category?: string
  searchP?: string
  pageSize?: string
}

export const newsApi = createApi({
  reducerPath: 'news',

  baseQuery: fetchBaseQuery({ baseUrl: _BASE_URL }),

  endpoints: (builder) => ({
    getHeadlines: builder.query<Response, QueryParams>({
      query: ({ country }) => ({
        url: `top-headlines`,
        params: { country, apiKey: _API_KEY2 },
      }),
    }),
    getNewsByCategory: builder.query<Response, QueryParams>({
      query: ({ country, category }) => ({
        url: `top-headlines`,
        params: { country, category, apiKey: _API_KEY2 },
      }),
    }),
    searchNews: builder.query<Response, QueryParams>({
      query: ({ searchP, pageSize }) => ({
        url: `everything`,
        params: { q: searchP, pageSize, apiKey: _API_KEY2 },
      }),
    }),
  }),
})
export const {
  useGetHeadlinesQuery,
  useGetNewsByCategoryQuery,
  useSearchNewsQuery,
} = newsApi
