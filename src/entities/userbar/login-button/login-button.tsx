import { FunctionComponent, MouseEvent } from "react";
import { AccountCircle } from "@mui/icons-material";
import { useUIComponents } from "../../../shared/hooks/use-ui-components";

interface LoginBtn {
  onHandler: (e: MouseEvent<HTMLElement>) => void;
}
const LoginButton: FunctionComponent<LoginBtn> = ({ onHandler }) => {
  const { BasicButton } = useUIComponents();

  return (
    <BasicButton onClick={onHandler}>
      <AccountCircle fontSize="large" />
    </BasicButton>
  );
};
export default LoginButton;
