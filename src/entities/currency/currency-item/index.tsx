import { FunctionComponent } from 'react'

interface Props {
  code: string
  value: number | undefined
  renderSelect: () => JSX.Element
}

const CurrencyItem: FunctionComponent<Props> = ({ value, renderSelect }) => {
  const v = value && value.toFixed(2)
  return (
    <div style={{ marginLeft: 188 }}>
      {renderSelect()}
      <span style={{ color: '#1E90FF' }}>{v}</span>
    </div>
  )
}
export default CurrencyItem
