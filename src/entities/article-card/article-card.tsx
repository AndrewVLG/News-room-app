import { FunctionComponent } from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from '@mui/material'
import { Article } from '../../shared/api/news-api'
import { useAppContext } from '../../shared/api/app-context-api/app-context-api'
import { Link } from 'react-router-dom'

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
  const { addToHistory } = useAppContext()
  return (
    <Card
      onClick={() =>
        addToHistory({
          author,
          content,
          description,
          publishedAt,
          source,
          title,
          url,
          urlToImage,
        })
      }
      sx={{ maxWidth: 700 }}
    >
      <CardActionArea>
        <CardMedia
          component='img'
          height='400'
          image={urlToImage as string}
          alt='green iguana'
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
      <CardActions>
        <Link to={url}>Читать в источнике</Link>
      </CardActions>
    </Card>
  )
}
export default ArticleCard
