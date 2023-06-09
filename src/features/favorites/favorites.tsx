import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/app-redux'
import ArticleCard from '../../entities/article-card'
import { useAppContext } from '../../shared/api/app-context-api/app-context-api'
import { useFavoritesAction } from './model/use-favorites-action'

const Favorites = () => {
  const { fetchUserFavorites, deleteFavorite } = useFavoritesAction()
  const { user } = useAppContext()
  const favorites = useSelector((state: RootState) => state.favorites)
  const navigate = useNavigate()
  useEffect(() => {
    if (!user) {
      navigate('/')
    }
    const login = user?.login as string
    fetchUserFavorites(login)
  }, [])
  return (
    <>
      {favorites.map((article, id) => (
        <ArticleCard
          article={article}
          isAuth={true}
          addToFavoritesList={() => {
            return
          }}
          deleteFromFavorites={() =>
            deleteFavorite({ login: user?.login as string, fav: article })
          }
          key={id}
        />
      ))}
    </>
  )
}

export default Favorites
