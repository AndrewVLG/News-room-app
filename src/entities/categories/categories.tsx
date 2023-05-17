import CategoryButton from './category-button'
import CategoriesWrapper from './categories-wrapper'

const Categories = () => {
  return (
    <CategoriesWrapper>
      <CategoryButton text='Бизнес' href='/business' />
      <CategoryButton text='Спорт' href='/sports' />
      <CategoryButton text='Здоровье' href='/health' />
      <CategoryButton text='Развлечение' href='/entertainment' />
      <CategoryButton text='Наука' href='/science' />
    </CategoriesWrapper>
  )
}
export default Categories
