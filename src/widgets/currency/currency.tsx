import { LinearProgress } from '@mui/material'
import CurrencyWrapper from '../../entities/currency/currency-wrapper'
import CurrencyItem from '../../entities/currency/currency-item'
import CurrencySelect from '../../entities/currency/currency-select/currency-select'
import { useCurrency } from '../../shared/hooks/use-currency'

const Currency = () => {
  const { currency, value, isLoading, setCurrency } = useCurrency()
  return (
    <CurrencyWrapper>
      {isLoading ? (
        <LinearProgress sx={{ width: '100%' }} />
      ) : (
        <CurrencyItem
          renderSelect={() => (
            <CurrencySelect value={currency} changeHandler={setCurrency} />
          )}
          code={currency}
          value={value as number}
        />
      )}
    </CurrencyWrapper>
  )
}
export default Currency
