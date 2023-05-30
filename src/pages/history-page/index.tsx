import { useState, useEffect } from 'react'
import Loader from '../../shared/ui/loader'
import TopHeadlines from '../../widgets/top-headlines'
import { useAppContext } from '../../shared/api/app-context-api/app-context-api'
import ArticlesSkeleton from '../../shared/ui/articles-skeleton'
import s from './config/main.module.css'

const HistoryPage = () => {
  const { history } = useAppContext()
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    new Promise<boolean>((res) => setTimeout(() => res(false), 1000)).then(
      (d) => setLoading(d),
    )
  }, [])
  return (
    <div className={s.main}>
      {isLoading ? <ArticlesSkeleton /> : <TopHeadlines data={history} />}
    </div>
  )
}
export default HistoryPage
