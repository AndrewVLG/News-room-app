import { FunctionComponent } from "react";
import { IBaseButton } from "../../../shared/config/base-button-type";
import { BasicButton } from "../../../shared/ui/basic-button";
import { Search } from "@mui/icons-material";

const SearchButton:FunctionComponent<IBaseButton> = ({ onHandler }) => {

  return (
    <BasicButton onClick={onHandler}>
      <Search />
    </BasicButton>
  )
}
export default SearchButton;