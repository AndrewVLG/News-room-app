import { FunctionComponent } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import { Article } from '../../shared/api/news-api'

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
  return (
    <Card sx={{ maxWidth: 700 }}>
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
        <Button size='small' color='primary'>
          Узнать больше
        </Button>
      </CardActions>
    </Card>
  )
}
export default ArticleCard
