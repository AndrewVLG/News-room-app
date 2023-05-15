import { useDispatch } from 'react-redux';
import { searchActions} from './searchbar-slice';
import { bindActionCreators } from 'redux';

export const useSearchActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(searchActions, dispatch)
}