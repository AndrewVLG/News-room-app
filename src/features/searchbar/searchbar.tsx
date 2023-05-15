import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/app-redux";
import { useSearchActions } from "./model/searchbar-actions";
import  SearchbarWrapper  from "../../entities/searchbar/searchbar-wrapper";
import SearchButton from "../../entities/searchbar/search-button";
import SearchInput from "../../entities/searchbar/search-input";


const Searchbar: FunctionComponent = () => {
  const { isOpenSearch } = useSelector((state: RootState) => state.searchBar);
  const { setSearch } = useSearchActions();

  return (
      <SearchbarWrapper>
          <SearchButton onHandler={() => setSearch()}/>
          {isOpenSearch && <SearchInput />}
      </SearchbarWrapper>
  )
}
export default Searchbar;