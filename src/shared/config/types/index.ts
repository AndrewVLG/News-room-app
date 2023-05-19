export interface BaseButton {
  onHandler: () => void
}

export interface CategoryBtn {
  text: string
  href: string
}

export interface Wrapper {
  children: React.ReactNode
}
export interface Modal {
  isOpen: boolean
  onHandler: () => void
  anchor?: HTMLElement
}
