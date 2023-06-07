import { FunctionComponent, useEffect, useMemo } from 'react'
import { Stack } from '@mui/material'
import ArticleCard from '../../entities/article-card/article-card'
import { Article } from '../../shared/api/news-api'
import { useAppContext } from '../../shared/api/app-context-api/app-context-api'
import LocalStorageAuth from '../../shared/lib/local-storage-auth/local-storage-auth'
interface Props {
  data: Article[]
}

export interface ImportantArticle extends Article {
  isFavorite: boolean
}

const checkFavorite = (data: Article[], favorites: string[]) => {
  return data.reduce<ImportantArticle[]>((articles, current) => {
    if (favorites.includes(current.url)) {
      return [...articles, { ...current, isFavorite: true }]
    } else {
      return [...articles, { ...current, isFavorite: false }]
    }
  }, [])
}
const TopHeadlines: FunctionComponent<Props> = ({ data }) => {
  const { user, isAuth } = useAppContext()

  return (
    <Stack spacing={2}>
      {[].map((article: ImportantArticle, id: number) => (
        <ArticleCard
          article={article}
          addToFavorite={() => {
            return
          }}
          isAuth={isAuth}
          key={id}
        />
      ))}
    </Stack>
  )
}
export default TopHeadlines
