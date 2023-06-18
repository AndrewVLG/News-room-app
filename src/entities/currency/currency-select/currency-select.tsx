import { FunctionComponent } from 'react'
import MUI, { MenuItem, Select } from '@mui/material'

interface Props {
  changeHandler: (code: string) => void
  value: string
}
const currency = ['USD', 'BTC', 'BYN', 'GBP', 'JPY']
const CurrencySelect: FunctionComponent<Props> = ({ value, changeHandler }) => {
  const handleChange = (e: MUI.SelectChangeEvent) => {
    changeHandler(e.target.value)
  }
  return (
    <Select
      IconComponent={() => null}
      disableUnderline
      sx={{ color: '#FF1E0C' }}
      variant='standard'
      defaultValue='USD'
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
