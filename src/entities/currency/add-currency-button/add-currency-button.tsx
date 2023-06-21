import { FunctionComponent, SyntheticEvent, useEffect } from 'react'
import { AddCircle } from '@mui/icons-material'
import { IconButton } from '@mui/material'

interface Props {
  onClick: (e: SyntheticEvent<HTMLButtonElement>) => void
  handleUnmount?: () => void
}
const AddCurrencyButton: FunctionComponent<Props> = ({
  onClick,
  handleUnmount,
}) => {
  useEffect(() => {
    return () => handleUnmount && handleUnmount()
  }, [])
  return (
    <IconButton onClick={onClick} disableRipple sx={{ color: '#1E90FF' }}>
      <AddCircle />
    </IconButton>
  )
}
export default AddCurrencyButton
