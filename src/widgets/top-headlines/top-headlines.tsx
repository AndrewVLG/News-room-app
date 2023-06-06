import { FunctionComponent, useMemo } from 'react'
import { Stack } from '@mui/material'
import { Article } from '../../shared/api/news-api'
import ArticleCard from '../../entities/article-card/article-card'
import { useAppContext } from '../../shared/api/app-context-api/app-context-api'
import LocalStorageAuth from '../../shared/lib/local-storage-auth/local-storage-auth'
interface Props {
  data: Article[]
}
const fakeFavorites = [
  'https://apnews.com/article/india-passenger-train-derail-deadly-accident-dd0c82012f9e14016b58d09eb3adec2d',
  'https://abcnews.go.com/US/wireStory/7-shot-1-fatally-chicago-gunfire-erupts-amid-99822717',
]
export interface ImportantArticle extends Article {
  isFavorite: boolean
}

const checkImportant = (data: Article[], favorites: string[]) => {
  return data.reduce<ImportantArticle[]>((articles, current) => {
    if (fakeFavorites.includes(current.url)) {
      return [...articles, { ...current, isFavorite: true }]
    } else {
      return [...articles, { ...current, isFavorite: false }]
    }
  }, [])
}
const fakeServer = new LocalStorageAuth()
const addToFavorite = (login: string, fav: { title: string; href: string }) => {
  fakeServer.addFavorite(login, fav)
}
const TopHeadlines: FunctionComponent<Props> = ({ data }) => {
  const { user } = useAppContext()
  const articles = useMemo(
    () => checkImportant(data, user?.favorites as string[]),
    [data],
  )

  return (
    <Stack spacing={2}>
      {articles.map((article: ImportantArticle, id: number) => (
        <ArticleCard article={article} addToFavorite={addToFavorite} key={id} />
      ))}
    </Stack>
  )
}
export default TopHeadlines
