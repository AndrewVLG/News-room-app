import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  CardActions,
} from '@mui/material'
import { Article } from '../../shared/api/news-api'

const getPublishedDate = (publishedAt: string | null) => {
  const separator = (publishedAt && publishedAt.indexOf('T')) || 0
  return publishedAt && publishedAt.slice(0, separator)
}

const ArticleCard: FunctionComponent<Article> = ({
  author,
  content,
  description,
  publishedAt,
  source,
  title,
  url,
  urlToImage,
}) => {
  const publishedDate = `Дата публикации: ${getPublishedDate(publishedAt)}`
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
      </CardActions>
    </Card>
  )
}
export default ArticleCard
