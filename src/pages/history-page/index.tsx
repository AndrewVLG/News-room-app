import { useState, useEffect } from 'react'
import Loader from '../../shared/ui/loader'
import TopHeadlines from '../../widgets/top-headlines'
import { useAppContext } from '../../shared/api/app-context-api/app-context-api'
import useAppOutlet from '../../shared/hooks/use-app-outlet'
import s from './config/main.module.css'

const HistoryPage = () => {
  const { history } = useAppContext()
  const [isLoading, setLoading] = useState(true)
  const { renderArticlesSkeleton } = useAppOutlet()
  useEffect(() => {
    new Promise<boolean>((res) => setTimeout(() => res(false), 1000)).then(
      (d) => setLoading(d),
    )
  }, [])
  return (
    <div className={s.main}>
      {isLoading ? renderArticlesSkeleton() : <TopHeadlines data={history} />}
    </div>
  )
}
export default HistoryPage
