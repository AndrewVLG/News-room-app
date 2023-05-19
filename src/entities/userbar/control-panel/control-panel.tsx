import { ChangeEvent, FunctionComponent } from "react";
import {
  Alert,
  CircularProgress,
  FormControlLabel,
  Link,
  Stack,
  Switch,
} from "@mui/material";
import ModalButton from "./modal-button";

interface Control {
  isRemember: boolean;
  authComplete: boolean;
  isLoading: boolean;
  error: string | null;
  handleSwitch: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
}
const showAlert = (isAuth: boolean, textError: string | null) => {
  if (Boolean(textError)) {
    return (
      <Alert sx={{ width: "180px" }} severity="error">
        {textError}
      </Alert>
    );
  }
  if (isAuth) {
    return (
      <Alert sx={{ width: "180px" }} severity="success">
        Вход выполнен успешно
      </Alert>
    );
  }
};
const ControlPanel: FunctionComponent<Control> = ({
  authComplete,
  isLoading,
  isRemember,
  error,
  handleClick,
  handleSwitch,
}) => {
  return (
    <Stack
      spacing={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <FormControlLabel
        control={<Switch onChange={handleSwitch} checked={isRemember} />}
        label="Запомнить меня"
      />
      {showAlert(authComplete, error)}
      {isLoading ? (
        <CircularProgress size={25} />
      ) : (
        <ModalButton onHandler={handleClick} text="Вход" />
      )}
      <Link href="#">Регистрация</Link>
    </Stack>
  );
};
export default ControlPanel;
