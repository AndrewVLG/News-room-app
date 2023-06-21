import { FunctionComponent, MouseEvent, SyntheticEvent } from 'react'
import { Menu, Button, Stack } from '@mui/material'
import { Currencies } from '../../../shared/api/currencies-api'

const currencies: Currencies[] = ['RUB', 'USD', 'BTC', 'BYN', 'JPY']
interface Props {
  anchorEl?: HTMLElement | null
  open: boolean
  onClick: (e: SyntheticEvent<HTMLButtonElement>) => void
  onClose: () => void
}
const CurrenciesMenu: FunctionComponent<Props> = ({
  anchorEl,
  open,
  onClick,
  onClose,
}) => {
  return (
    <Menu onClose={onClose} open={open} anchorEl={anchorEl}>
      <Stack>
        {currencies.map((el, id) => (
          <Button key={id} onClick={onClick}>
            {el}
          </Button>
        ))}
      </Stack>
    </Menu>
  )
}
export default CurrenciesMenu
