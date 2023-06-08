import Favorites from '../../features/favorites'
import s from './config/favorites.module.css'
const FavoritesPage = () => {
  return (
    <div className={s.favorites}>
      <Favorites />
    </div>
  )
}
export default FavoritesPage
