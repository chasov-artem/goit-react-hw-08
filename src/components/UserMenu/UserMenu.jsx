import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className={s.userWrap}>
      <div className={s.welcomeUser}>Welcome, {user.name}</div>
      <button
        onClick={() => dispatch(logout())}
        className={s.button}
        type="button"
      >
        Exit
      </button>
    </div>
  );
};
export default UserMenu;
