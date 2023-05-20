import { createContext, useContext, PropsWithChildren } from 'react'
import UIComponents from '../ui'

export const UIContext = createContext(UIComponents)
export const useUIComponents = () => {
  return useContext(UIContext)
}
export const UIContextProvider = ({ children }: PropsWithChildren) => {
  return (
    <UIContext.Provider value={UIComponents}>{children}</UIContext.Provider>
  )
}
