import { FunctionComponent } from 'react'
import { Typography } from '@mui/material'

interface Props {
  code: string
  value: number | undefined
}

const CurrencyItem: FunctionComponent<Props> = ({ value, code }) => {
  const v = value && value.toFixed(2)
  return (
    <div style={{ marginLeft: 20 }}>
      <Typography sx={{ display: 'inline' }}>{v}</Typography>
      <Typography sx={{ display: 'inline' }}>{code}</Typography>
    </div>
  )
}
export default CurrencyItem
