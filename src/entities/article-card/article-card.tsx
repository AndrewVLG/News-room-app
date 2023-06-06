import { FunctionComponent, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  CardActions,
} from '@mui/material'
import { Star } from '@mui/icons-material'
import { ImportantArticle } from '../../widgets/top-headlines/top-headlines'

const getPublishedDate = (publishedAt: string | null) => {
  const separator = (publishedAt && publishedAt.indexOf('T')) || 0
  return publishedAt && publishedAt.slice(0, separator)
}
interface Props {
  article: ImportantArticle
  addToFavorite: (login: string, fav: { title: string; href: string }) => void
}
const ArticleCard: FunctionComponent<Props> = ({
  article: {
    author,
    content,
    description,
    isFavorite: isFav,
    publishedAt,
    source,
    title,
    url,
    urlToImage,
  },
  addToFavorite,
}) => {
  const [isImportant, setImportant] = useState<boolean>(isFav)
  const publishedDate = `Дата публикации: ${getPublishedDate(publishedAt)}`
  const setImportantState = () => {
    setImportant((prev) => !prev)
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
        {isImportant && (
          <Star
            sx={{ color: 'red' }}
            fontSize='large'
            onClick={setImportantState}
          />
        )}
        <Typography sx={{ color: 'grey' }}>{publishedDate}</Typography>
      </CardActions>
    </Card>
  )
}
export default ArticleCard
