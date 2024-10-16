import Navigation from "../Navigation/Navigation";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.headerWrapper}>
      <div>Auth</div>
      <div>Welcome, John</div>
      <Navigation />
    </div>
  );
};
export default Header;
