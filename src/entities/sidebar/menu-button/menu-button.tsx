import { FunctionComponent } from "react";
import { Menu } from "@mui/icons-material";
import { BaseButton } from "../../../shared/config/types";
import { useUIComponents } from "../../../shared/hooks/use-ui-components";

const MenuButton: FunctionComponent<BaseButton> = ({ onHandler }) => {
  const { BasicButton } = useUIComponents();
  return (
    <BasicButton disableRipple onClick={onHandler}>
      <Menu />
    </BasicButton>
  );
};
export default MenuButton;
