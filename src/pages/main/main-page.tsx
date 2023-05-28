import { useAppContext } from '../../shared/api/app-context-api/app-context-api'
import { useGetHeadlinesQuery } from '../../shared/api/news-api'
import Loader from '../../shared/ui/loader'
import TopHeadlines from '../../widgets/top-headlines'
import s from './config/main.module.css'

const MainPage = () => {
  const { country } = useAppContext()
  const { data, isLoading } = useGetHeadlinesQuery({ country })

  return (
    <div className={s.main}>
      {isLoading ? <Loader /> : <TopHeadlines data={data} />}
    </div>
  )
}
export default MainPage
