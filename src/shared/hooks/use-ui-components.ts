import { createContext, useContext } from 'react'
import UIComponents from '../ui'

export const UIContext = createContext(UIComponents)
export const useUIComponents = () => {
  return useContext(UIContext)
}
