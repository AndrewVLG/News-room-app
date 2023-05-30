import { useParams } from 'react-router'
import { useAppContext } from '../../shared/api/app-context-api/app-context-api'
import { useSearchNewsQuery } from '../../shared/api/news-api'
import ArticlesSkeleton from '../../shared/ui/articles-skeleton'
import TopHeadlines from '../../widgets/top-headlines'
import { useDebounce } from '../../shared/hooks/use-debounce'
import s from './config/main.module.css'
type Params = {
  q: string
}
const SearchPage = () => {
  const { country } = useAppContext()
  const { q } = useParams() as Params
  const { value } = useDebounce(q, 700)
  const { data = [], isLoading } = useSearchNewsQuery(
    { country, q: value },
    { skip: !value || value.length < 2 },
  )

  return (
    <div className={s.main}>
      {isLoading ? <ArticlesSkeleton /> : <TopHeadlines data={data} />}
    </div>
  )
}
export default SearchPage
