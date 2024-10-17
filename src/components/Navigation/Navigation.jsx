import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

const Navigation = () => {
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
        <button className={s.button} type="button">
          Exit
        </button>
      )}
    </div>
  );
};
export default Navigation;
