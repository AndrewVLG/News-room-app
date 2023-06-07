import { FunctionComponent, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  CardActions,
} from '@mui/material'
import { ImportantArticle } from '../../widgets/top-headlines/top-headlines'
import { getPublishedDate } from '../../shared/util/get-published-date'
import FavoriteButton from './favorite-button'

interface Props {
  article: ImportantArticle
  addToFavorite: () => void
  isAuth: boolean
}
const ArticleCard: FunctionComponent<Props> = ({
  article: {
    description,
    isFavorite: isFav,
    publishedAt,
    title,
    url,
    urlToImage,
  },
  addToFavorite,
  isAuth,
}) => {
  const [isFavorite, setFavorite] = useState<boolean>(false)
  const publishedDate = `Дата публикации: ${getPublishedDate(publishedAt)}`
  const setImportantState = () => {
    setFavorite(true)
    addToFavorite()
  }
  useEffect(() => {
    setFavorite(isFav)
  }, [isFav])
  return (
    <Card sx={{ maxWidth: 700 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='400'
          image={urlToImage as string}
          alt='news-room'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Link to={url}>Читать в источнике</Link>
        <Typography sx={{ color: 'grey' }}>{publishedDate}</Typography>
        {isAuth && (
          <FavoriteButton
            handleClick={setImportantState}
            isFavorite={isFavorite}
          />
        )}
      </CardActions>
    </Card>
  )
}
export default ArticleCard
