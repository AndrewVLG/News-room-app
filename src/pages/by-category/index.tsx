import { useParams } from 'react-router'
import { useGetNewsByCategoryQuery } from '../../shared/api/news-api'
import Loader from '../../shared/ui/loader'
import TopHeadlines from '../../widgets/top-headlines'
import s from './config/main.module.css'
import { useAppContext } from '../../shared/api/app-context-api/app-context-api'

const ByCategory = () => {
  const { category } = useParams()
  const { country } = useAppContext()
  const { data, isLoading } = useGetNewsByCategoryQuery({
    country,
    category,
  })
  console.log(data)

  return (
    <div className={s.main}>
      {isLoading ? <Loader /> : <TopHeadlines data={data} />}
    </div>
  )
}
export default ByCategory
