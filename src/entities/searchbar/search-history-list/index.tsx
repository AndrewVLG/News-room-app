import { PropsWithChildren } from 'react'
import { Paper, List } from '@mui/material'
const SearchHistoryList = ({ children }: PropsWithChildren) => {
  return (
    <Paper
      sx={{
        position: 'relative',
        top: 90,
        zIndex: 1,
        width: 800,
        left: 350,
      }}
    >
      <List>{children}</List>
    </Paper>
  )
}
export default SearchHistoryList
