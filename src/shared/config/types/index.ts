export interface BaseButton {
  onHandler: () => void
}

export interface CategoryBtn {
  name: string
  href: string
}

export interface Wrapper {
  children: React.ReactNode
}
export interface Sidebar {
  isOpen: boolean
  onHandler: () => void
  anchor?: HTMLElement
}
