import { ChangeEventHandler } from "react";
import { Alert, Stack } from "@mui/material";
import { RegInput } from "../../../shared/ui/inputs";

const showAlert = (type: string) => {
  if (type === "password") {
    return (
      <>
        <Alert severity={"warning"} variant="outlined" sx={{ width: "400px" }}>
          Пароль должен быть не менее 5 символов
        </Alert>
        <Alert severity={"warning"} variant="outlined" sx={{ width: "400px" }}>
          Пароль должен содержать цифры и буквы
        </Alert>
      </>
    );
  }

  if (type === "confirm") {
    return (
      <Alert severity={"warning"} variant="outlined" sx={{ width: "400px" }}>
        Пароли должны совпадать
      </Alert>
    );
  }
};

const PasswordInput = ({
  type = "password",
}: {
  handleConfirmInput?: ChangeEventHandler<HTMLInputElement>;
  handlePasswordInput?: ChangeEventHandler<HTMLInputElement>;
  type?: string;
}) => {
  return (
    <Stack m={2} spacing={1}>
      <RegInput
        variant="outlined"
        color="secondary"
        focused
        label={type === "password" ? "Пароль" : "Повторите пароль"}
      />
      {showAlert(type)}
    </Stack>
  );
};
export default PasswordInput;
