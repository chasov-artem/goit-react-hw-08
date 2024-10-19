import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import s from "./AppBar.module.css";
import Navigation from "../Navigation/Navigation";
const AppBar = () => {
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
export default AppBar;
