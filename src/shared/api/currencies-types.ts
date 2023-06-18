export interface CurrencyObj {
  code: string
  value: number
}
export interface CurrencyData {
  ADA: CurrencyObj
  AED: CurrencyObj
  AFN: CurrencyObj
  ALL: CurrencyObj
  AMD: CurrencyObj
  ANG: CurrencyObj
  AOA: CurrencyObj
  ARS: CurrencyObj
  AUD: CurrencyObj
  AVAX: CurrencyObj
  AVG: CurrencyObj
  AZN: CurrencyObj
  BAM: CurrencyObj
  BBD: CurrencyObj
  BDT: CurrencyObj
  BGN: CurrencyObj
  BHD: CurrencyObj
  BIF: CurrencyObj
  BMD: CurrencyObj
  BNB: CurrencyObj
  BND: CurrencyObj
  BOB: CurrencyObj
  BRL: CurrencyObj
  BSD: CurrencyObj
  BTC: CurrencyObj
  BTN: CurrencyObj
  BWP: CurrencyObj
  BYN: CurrencyObj
  BYR: CurrencyObj
  BZD: CurrencyObj
  CAD: CurrencyObj
  CDF: CurrencyObj
  CHF: CurrencyObj
  GBP: CurrencyObj
  RUB: CurrencyObj
}
export interface CurrencyResponse {
  data: CurrencyData
}
