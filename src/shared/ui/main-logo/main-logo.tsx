import s from "./config/logo.module.css";

const Logo = () => {
  return (
    <a href="/">
      <div className={s["logo-module"]}>
        <span>NewsRoom</span>
      </div>
    </a>
  );
};
export default Logo;
