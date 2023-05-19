import { FunctionComponent, SyntheticEvent } from 'react'
import { ButtonBase, styled } from '@mui/material'

const ModalBtn = styled(ButtonBase)({
  height: '40px',
  width: '200px',
  color: 'white',
  backgroundColor: '#1E90FF',
  '&:hover': {
    backgroundColor: '#FF1E0C',
    borderRadius: '2px',
  },
})
interface Btn {
  onHandler: (e: SyntheticEvent<HTMLButtonElement>) => void
  text: string
}
const ModalButton: FunctionComponent<Btn> = ({ onHandler, text }) => {
  return <ModalBtn onClick={onHandler}>{text}</ModalBtn>
}
export default ModalButton
