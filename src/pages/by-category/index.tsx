import { useParams } from 'react-router'
import TopHeadlines from '../../widgets/top-headlines'
import { useGetNewsByCategoryQuery } from '../../shared/api/news-api'
import { useAppContext } from '../../shared/api/app-context-api/app-context-api'
import useAppOutlet from '../../shared/hooks/use-app-outlet'
import s from './config/main.module.css'

const ByCategory = () => {
  const { category } = useParams()
  const { country } = useAppContext()
  const { data, isLoading, isSuccess } = useGetNewsByCategoryQuery({
    country,
    category,
  })
  const { renderArticlesSkeleton } = useAppOutlet()
  const articles = isSuccess ? data.articles : []

  return (
    <div className={s.main}>
      {isLoading ? renderArticlesSkeleton() : <TopHeadlines data={articles} />}
    </div>
  )
}
export default ByCategory
