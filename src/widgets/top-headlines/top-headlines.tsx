import { FunctionComponent } from 'react'
import { Stack } from '@mui/material'
import { Response } from '../../shared/api/news-api'
interface Props {
  data: Response | undefined
}
const TopHeadlines: FunctionComponent<Props> = ({ data }) => {
  const articles = data?.articles
  console.log(articles)
  return (
    <Stack spacing={2}>
      <h3>На первых полосах</h3>
      {articles &&
        articles.map((article: any, id: number) => <h3>{article.title}</h3>)}
    </Stack>
  )
}
export default TopHeadlines
