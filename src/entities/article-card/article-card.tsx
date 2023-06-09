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
import { FavoriteArticle } from '../../widgets/top-headlines/top-headlines'
import { getPublishedDate } from '../../shared/util/get-published-date'
import FavoriteButton from './favorite-button'

interface Props {
  article: FavoriteArticle
  addToFavoritesList: () => void
  deleteFromFavorites: () => void
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
  addToFavoritesList,
  deleteFromFavorites,
  isAuth,
}) => {
  const publishedDate = `Дата публикации: ${getPublishedDate(publishedAt)}`
  const actionOnFavList = () => {
    if (!isFav) {
      addToFavoritesList()
    } else {
      deleteFromFavorites()
    }
  }

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
          <FavoriteButton handleClick={actionOnFavList} isFavorite={isFav} />
        )}
      </CardActions>
    </Card>
  )
}
export default ArticleCard
