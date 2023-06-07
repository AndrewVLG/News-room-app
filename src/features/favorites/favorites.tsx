import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/app-redux'
import ArticleCard from '../../entities/article-card'
import { useAppContext } from '../../shared/api/app-context-api/app-context-api'
import { useFavoritesAction } from './model/use-favorites-action'

const Favorites = () => {
  const { getUserFavorites } = useFavoritesAction()
  const { user } = useAppContext()
  const favorites = useSelector((state: RootState) => state.favorites)

  useEffect(() => {
    const login = user?.login as string
    getUserFavorites(login)
  }, [user])

  return (
    <>
      {favorites.map((article, id) => (
        <ArticleCard
          article={article}
          isAuth={true}
          addToFavoritesList={() => {
            return
          }}
          deleteFromFavorites={() => {
            return
          }}
          key={id}
        />
      ))}
    </>
  )
}

export default Favorites
