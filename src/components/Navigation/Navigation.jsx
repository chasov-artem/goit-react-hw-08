import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css"

const Navigation = () => {
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
      <NavLink className={buildLinkClass} to="/login">
        Login
      </NavLink>
      <NavLink className={buildLinkClass} to="/registration">
        Registration
      </NavLink>
    </div>
  );
};
export default Navigation;
