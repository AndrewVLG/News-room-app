import { FunctionComponent } from 'react'
import { Typography } from '@mui/material'

interface Props {
  code: string
  value: number | undefined
  renderSelect: () => JSX.Element
}

const CurrencyItem: FunctionComponent<Props> = ({ value, renderSelect }) => {
  const v = value && value.toFixed(2)
  return (
    <div style={{ marginLeft: 188 }}>
      {renderSelect()}
      <Typography sx={{ display: 'inline' }}>{v}</Typography>
    </div>
  )
}
export default CurrencyItem
