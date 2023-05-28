import CategoryButton from './category-button'
import CategoriesWrapper from './categories-wrapper'
import buttons from './buttons'
const Categories = () => {
  return (
    <CategoriesWrapper>
      {buttons.map((button, id) => (
        <CategoryButton {...button} key={id} />
      ))}
    </CategoriesWrapper>
  )
}
export default Categories
