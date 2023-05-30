import { FunctionComponent } from 'react'
import { Stack, Alert } from '@mui/material'
import { RegInput } from '../../../shared/ui/inputs'
import { Input, RegInputs } from '../config/types'

const RegistrationInputs: FunctionComponent<RegInputs> = ({ child }) => {
  return (
    <>
      {child.map((input: Input, id) => {
        return (
          <Stack ml={2} spacing={1} key={id}>
            <RegInput
              variant='outlined'
              color='secondary'
              focused
              sx={{ marginLeft: '1px' }}
              label={input.name}
              onChange={input.handler}
            />
            {input.alerts?.map((alert, id) => {
              return (
                <Alert
                  key={id}
                  sx={{ width: '400px' }}
                  variant='outlined'
                  severity={alert.status}
                >
                  {alert.message}
                </Alert>
              )
            })}
          </Stack>
        )
      })}
    </>
  )
}
export default RegistrationInputs
