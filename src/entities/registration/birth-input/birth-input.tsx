import { FunctionComponent, useState } from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import daysJS, { Dayjs } from 'dayjs'
interface Props {
  handlerDateInput: (value: daysJS.Dayjs | null) => void
}
const BirthInput: FunctionComponent<Props> = ({ handlerDateInput }) => {
  return (
    <div style={{ marginLeft: '16px', marginBottom: '16px' }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker
            value={null}
            onChange={handlerDateInput}
            label='Дата рождения'
          />
        </DemoContainer>
      </LocalizationProvider>{' '}
    </div>
  )
}
export default BirthInput
