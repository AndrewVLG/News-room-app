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
