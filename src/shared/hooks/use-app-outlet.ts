import { useOutletContext } from 'react-router'
interface OutletContext {
  renderArticlesSkeleton: () => JSX.Element
}

const useAppOutlet = () => {
  return useOutletContext<OutletContext>()
}
export default useAppOutlet
