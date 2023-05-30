import { useAppContext } from '../../shared/api/app-context-api/app-context-api'
import { useGetHeadlinesQuery } from '../../shared/api/news-api'
import ArticlesSkeleton from '../../shared/ui/articles-skeleton'
import TopHeadlines from '../../widgets/top-headlines'
import s from './config/main.module.css'

const MainPage = () => {
  const { country } = useAppContext()
  const { data, isLoading } = useGetHeadlinesQuery({ country })
  const articles = data?.articles || []
  return (
    <div className={s.main}>
      {isLoading ? <ArticlesSkeleton /> : <TopHeadlines data={articles} />}
    </div>
  )
}
export default MainPage
