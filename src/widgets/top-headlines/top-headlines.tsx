import { FunctionComponent } from 'react'
import { Stack } from '@mui/material'
import { Article, Response } from '../../shared/api/news-api'
import ArticleCard from '../../entities/article-card/article-card'
interface Props {
  data: Response | undefined
}
const TopHeadlines: FunctionComponent<Props> = ({ data }) => {
  const articles = data?.articles
  return (
    <Stack spacing={2}>
      <h3>На первых полосах</h3>
      {articles &&
        articles.map((article: Article, id: number) => (
          <ArticleCard {...article} key={id} />
        ))}
    </Stack>
  )
}
export default TopHeadlines
