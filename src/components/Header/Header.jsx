import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import s from "./Header.module.css";
import { selectUser } from "../../redux/auth/selectors";

const Header = () => {
  const user = useSelector(selectUser);
 
  return (
    <div className={s.headerWrapper}>
      <div>Auth</div>
      <div>Welcome, {user.name}</div>
      <Navigation />
    </div>
  );
};
export default Header;
