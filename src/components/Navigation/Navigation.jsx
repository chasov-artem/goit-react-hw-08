import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };
  return (
    <div>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={buildLinkClass} to="/contacts">
        Contacts
      </NavLink>
      {!isLoggedIn && (
        <>
          <NavLink className={buildLinkClass} to="/login">
            Login
          </NavLink>
          <NavLink className={buildLinkClass} to="/registration">
            Registration
          </NavLink>
        </>
      )}
      {isLoggedIn && (
        <button
          onClick={() => dispatch(logout())}
          className={s.button}
          type="button"
        >
          Exit
        </button>
      )}
    </div>
  );
};
export default Navigation;
