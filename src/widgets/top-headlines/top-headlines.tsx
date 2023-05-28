import { FunctionComponent } from 'react'
import { Stack } from '@mui/material'
import { Article, Response } from '../../shared/api/news-api'
import ArticleCard from '../../entities/article-card/article-card'
interface Props {
  data: Article[]
}
const TopHeadlines: FunctionComponent<Props> = ({ data }) => {
  return (
    <Stack spacing={2}>
      {data.map((article: Article, id: number) => (
        <ArticleCard {...article} key={id} />
      ))}
    </Stack>
  )
}
export default TopHeadlines
