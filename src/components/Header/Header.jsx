import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import s from "./Header.module.css";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";

const Header = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={s.headerWrapper}>
      <div>Auth</div>
      {isLoggedIn && <div>Welcome, {user.name}</div>}
      <Navigation />
    </div>
  );
};
export default Header;
