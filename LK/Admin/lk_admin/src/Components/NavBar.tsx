import React from "react";
import { NavLink } from "react-router-dom";
import { useNavBarStyles } from "../Styles/MicroserviceStyles";

const NavBar = () => {
  const classes = useNavBarStyles();
  return (
    <nav className={classes.root}>
      <div className="nav-wrapper indigo lighten-2 px1">
        <ul className={classes.ul}>
          <li>
            <NavLink to="/msconfigs">
              <div className={classes.label}>MicroService configs</div>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
