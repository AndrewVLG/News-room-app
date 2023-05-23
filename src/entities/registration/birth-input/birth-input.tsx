import { Autocomplete, InputLabel, TextField } from "@mui/material";
import s from "./config/birth-input.module.css";
const days = Array(31)
  .fill(null)
  .map((_, id) => id + 1);
const m = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const year = new Date().getFullYear();
const years = Array(111)
  .fill(null)
  .map((_, id) => Number(year) - id);

const BirthInput = () => {
  return (
    <>
      <InputLabel sx={{ marginLeft: "15px", color: "#1E90FF" }}>
        Дата рождения
      </InputLabel>
      <div className={s.birthInput}>
        <Autocomplete
          value={null}
          id="days"
          options={days}
          sx={{ width: 100 }}
          renderInput={(params) => <TextField {...params} label="День" />}
        />
        <Autocomplete
          value={null}
          id="months"
          options={m}
          sx={{ width: 200 }}
          renderInput={(params) => <TextField {...params} label="Месяц" />}
        />
        <Autocomplete
          value={null}
          id="years"
          options={years}
          sx={{ width: 100 }}
          renderInput={(params) => <TextField {...params} label="Год" />}
        />
      </div>
    </>
  );
};
export default BirthInput;
