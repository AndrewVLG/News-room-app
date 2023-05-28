import { useAppContext } from '../../shared/api/app-context-api/app-context-api'
import { useGetHeadlinesQuery } from '../../shared/api/news-api'
import Loader from '../../shared/ui/loader'
import TopHeadlines from '../../widgets/top-headlines'
import s from './config/main.module.css'

const MainPage = () => {
  const { country } = useAppContext()
  const { data, isLoading, isSuccess } = useGetHeadlinesQuery({ country })
  const articles = isSuccess ? data.articles : []
  return (
    <div className={s.main}>
      {isLoading ? <Loader /> : <TopHeadlines data={articles} />}
    </div>
  )
}
export default MainPage
