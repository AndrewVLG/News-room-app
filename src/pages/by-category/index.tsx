import { useParams } from 'react-router'
import TopHeadlines from '../../widgets/top-headlines'
import { useGetNewsByCategoryQuery } from '../../shared/api/news-api'
import Loader from '../../shared/ui/loader'
import { useAppContext } from '../../shared/api/app-context-api/app-context-api'
import s from './config/main.module.css'

const ByCategory = () => {
  const { category } = useParams()
  const { country } = useAppContext()
  const { data, isLoading, isSuccess } = useGetNewsByCategoryQuery({
    country,
    category,
  })
  const articles = isSuccess ? data.articles : []

  return (
    <div className={s.main}>
      {isLoading ? <Loader /> : <TopHeadlines data={articles} />}
    </div>
  )
}
export default ByCategory
