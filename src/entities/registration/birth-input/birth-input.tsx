import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { Container } from '@mui/material'

const BirthInput = () => {
  return (
    <div style={{ marginLeft: '16px', marginBottom: '16px' }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker label='Дата рождения' />
        </DemoContainer>
      </LocalizationProvider>{' '}
    </div>
  )
}
export default BirthInput
