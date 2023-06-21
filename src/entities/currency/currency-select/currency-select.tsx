import { FunctionComponent } from 'react'
import MUI, { MenuItem, Select } from '@mui/material'

interface Props {
  onChangeBaseCurrency: (value: string) => void
  baseCurrency: string
}
const currency = ['USD', 'BTC', 'BYN', 'GBP', 'JPY']
const CurrencySelect: FunctionComponent<Props> = ({
  baseCurrency,
  onChangeBaseCurrency,
}) => {
  const handleChange = (e: MUI.SelectChangeEvent) => {
    onChangeBaseCurrency(e.target.value)
  }
  return (
    <Select
      IconComponent={() => null}
      disableUnderline
      sx={{ color: '#1E90FF', marginLeft: '188px' }}
      variant='standard'
      value={baseCurrency}
      onChange={handleChange}
    >
      {currency.map((el) => (
        <MenuItem value={el} key={el}>
          {el}
        </MenuItem>
      ))}
    </Select>
  )
}
export default CurrencySelect
