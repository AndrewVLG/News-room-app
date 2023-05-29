import { Outlet } from 'react-router'
import Header from '../../widgets/header/header'
import Footer from '../../widgets/footer/footer'
import ArticlesSkeleton from '../../shared/ui/articles-skeleton'
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet
        context={{ renderArticlesSkeleton: () => <ArticlesSkeleton /> }}
      />
      <Footer />
    </>
  )
}
export default Layout
