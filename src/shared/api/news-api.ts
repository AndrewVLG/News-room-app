import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const _BASE_URL = 'https://newsapi.org/v2/'
enum API_KEY {
  KEY1 = '88c777396a0c4c77a9d3bb3c8a4d1ce8',
  KEY2 = 'd25980c6b9494497a47ba65221d3c747',
  KEY3 = '0ec8e1e62dc84b25afe7587c9b7791d7',
}
export type Country = 'ru' | 'us' | 'de' | 'fr' | 'ua'

export interface Article {
  author: null | string
  content: null | string
  description: null | string
  publishedAt: null | string
  source: { id: null | string; name: null | string }
  title: null | string
  url: string
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
  q?: string
  pageSize?: string
}

export const newsApi = createApi({
  reducerPath: 'news',

  baseQuery: fetchBaseQuery({ baseUrl: _BASE_URL }),

  endpoints: (builder) => ({
    getHeadlines: builder.query<Response, QueryParams>({
      query: ({ country }) => ({
        url: `top-headlines`,
        params: { country, apiKey: API_KEY.KEY1 },
      }),
      transformResponse: (response: Response) => {
        return {
          ...response,
          articles: response.articles.filter((article) =>
            Boolean(article.urlToImage),
          ),
        }
      },
    }),
    getNewsByCategory: builder.query<Response, QueryParams>({
      query: ({ country, category }) => ({
        url: `top-headlines`,
        params: { country, category, apiKey: API_KEY.KEY1 },
      }),
    }),
    searchNews: builder.query<Article[], QueryParams>({
      query: ({ q }) => ({
        url: `top-headlines`,
        params: { q, pageSize: 10, apiKey: API_KEY.KEY1 },
      }),
      transformResponse: (response: Response) => {
        return response.articles
      },
    }),
  }),
})
export const {
  useGetHeadlinesQuery,
  useGetNewsByCategoryQuery,
  useSearchNewsQuery,
} = newsApi
