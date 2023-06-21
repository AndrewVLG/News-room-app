import { SyntheticEvent, useState } from 'react'
import { LinearProgress } from '@mui/material'
import CurrenciesWrapper from '../../entities/currency/currencies-wrapper'
import CurrencySelect from '../../entities/currency/currency-select/currency-select'
import CurrencyItem from '../../entities/currency/currency-item'
import AddCurrencyButton from '../../entities/currency/add-currency-button/add-currency-button'
import { useCurrency } from '../../shared/hooks/use-currency'
import CurrenciesMenu from '../../entities/currency/currencies-menu/currencies-menu'
import { Currencies as C } from '../../shared/api/currencies-api'

const Currencies = () => {
  const {
    baseCurrency,
    setBaseCurrency,
    addToCurrenciesList,
    currencies,
    isLoading,
  } = useCurrency()
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const open = Boolean(anchorEl)
  const handleChangeBaseCurrency = (code: string) => {
    setBaseCurrency(code)
  }
  const handleClickAddCurrencyBtn = (e: SyntheticEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget)
  }
  const handleClickCurrenciesMenu = (e: SyntheticEvent<HTMLButtonElement>) => {
    addToCurrenciesList(e.currentTarget.textContent as C)
  }
  const closeMenu = () => {
    setAnchorEl(null)
  }
  return (
    <CurrenciesWrapper>
      <CurrencySelect
        baseCurrency={baseCurrency}
        onChangeBaseCurrency={handleChangeBaseCurrency}
      />
      {isLoading ? (
        <LinearProgress sx={{ width: 600 }} />
      ) : (
        currencies.map((currency, id) => (
          <CurrencyItem key={id} {...currency} />
        ))
      )}
      {currencies.length < 3 && (
        <AddCurrencyButton
          onClick={handleClickAddCurrencyBtn}
          handleUnmount={closeMenu}
        />
      )}
      <CurrenciesMenu
        anchorEl={anchorEl}
        open={open}
        onClose={closeMenu}
        onClick={handleClickCurrenciesMenu}
      />
    </CurrenciesWrapper>
  )
}
export default Currencies
