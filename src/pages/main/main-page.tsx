import { useAppContext } from '../../shared/api/app-context-api/app-context-api'
import TopHeadlines from '../../widgets/top-headlines'
import { useGetHeadlinesQuery } from '../../shared/api/news-api'
import useAppOutlet from '../../shared/hooks/use-app-outlet'
import Loader from '../../shared/ui/loader'
import s from './config/main.module.css'

const MainPage = () => {
  const { country } = useAppContext()
  const { data, isLoading, isSuccess } = useGetHeadlinesQuery({ country })
  const { renderArticlesSkeleton } = useAppOutlet()
  const articles = isSuccess ? data.articles : []
  return (
    <div className={s.main}>
      {isLoading ? renderArticlesSkeleton() : <TopHeadlines data={articles} />}
    </div>
  )
}
export default MainPage
