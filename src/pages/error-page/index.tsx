import Logo from '../../shared/ui/main-logo/main-logo'
import ErrorPageWrapper from './error-page-wrapper'

const ErrorPage = () => {
  return (
    <ErrorPageWrapper>
      <div>
        <Logo variant='secondary' />
      </div>
      <div>
        <h3>Произошла ошибка. Попробуйте обновить страницу позже</h3>
      </div>
    </ErrorPageWrapper>
  )
}
export default ErrorPage
