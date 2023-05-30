import { Skeleton, Stack } from '@mui/material'

const ArticleSkeleton = () => {
  return (
    <>
      <Skeleton
        sx={{ bgcolor: 'grey.150' }}
        animation='wave'
        variant='rectangular'
        width={700}
        height={400}
      />
      <Skeleton
        sx={{ bgcolor: 'grey.100' }}
        variant='rectangular'
        width={700}
        height={180}
      />
    </>
  )
}
const ArticlesSkeleton = () => {
  return (
    <Stack spacing={1}>
      {Array(2)
        .fill(1)
        .map((_, id) => (
          <ArticleSkeleton key={id} />
        ))}
    </Stack>
  )
}
export default ArticlesSkeleton
