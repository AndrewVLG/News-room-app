import { ChangeEventHandler } from 'react'
import { InputStatus } from '../../../features/registration/model/types'
export interface Input {
  name: string
  alerts?: { message: string; status: InputStatus }[]
  handler: ChangeEventHandler<HTMLInputElement>
}

export interface RegInputs {
  child: Input[]
}
