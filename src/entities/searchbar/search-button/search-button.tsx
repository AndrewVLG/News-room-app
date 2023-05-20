import { FunctionComponent } from "react";
import { Search } from "@mui/icons-material";
import { useUIComponents } from "../../../shared/hooks/use-ui-components";
import { BaseButton } from "../../../shared/config/types";

const SearchButton: FunctionComponent<BaseButton> = ({ onHandler }) => {
  const { BasicButton } = useUIComponents();
  return (
    <BasicButton onClick={onHandler}>
      <Search />
    </BasicButton>
  );
};
export default SearchButton;
