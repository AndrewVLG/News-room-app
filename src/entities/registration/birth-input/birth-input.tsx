import { useState } from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import daysJS, { Dayjs } from 'dayjs'
interface Props {
  handlerInput: () => void
}
const BirthInput = () => {
  const [state, setState] = useState<Dayjs | null>(daysJS('2022-04-17'))
  return (
    <div style={{ marginLeft: '16px', marginBottom: '16px' }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker
            value={state}
            onChange={(value) => setState(value)}
            label='Дата рождения'
          />
        </DemoContainer>
      </LocalizationProvider>{' '}
    </div>
  )
}
export default BirthInput
