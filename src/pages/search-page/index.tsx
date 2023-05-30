import { useParams } from 'react-router'
import { useAppContext } from '../../shared/api/app-context-api/app-context-api'
import { useSearchNewsQuery } from '../../shared/api/news-api'
import ArticlesSkeleton from '../../shared/ui/articles-skeleton'
import TopHeadlines from '../../widgets/top-headlines'
import s from './config/main.module.css'

const SearchPage = () => {
  const { country } = useAppContext()
  const { q } = useParams()
  const { data, isLoading } = useSearchNewsQuery(
    { country, q },
    { skip: !Boolean(q) },
  )

  return (
    <div className={s.main}>
      {isLoading ? <ArticlesSkeleton /> : <TopHeadlines data={data || []} />}
    </div>
  )
}
export default SearchPage
