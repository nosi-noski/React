import React from "react";
import { NavLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

export function NavBar() {
  return (
    <>
      <Typography variant="h6">
        {" "}
        <NavLink exact to="/">
          Main page
        </NavLink>
      </Typography>

      <Typography>
        {" "}
        <NavLink to="/news">News</NavLink>{" "}
      </Typography>
      <Typography>
        {" "}
        <NavLink to="/fin">Finance</NavLink>{" "}
      </Typography>
      {/*<Typography> <NavLink to="/edu">Education</NavLink> </Typography>*/}
      {/*<Typography> <NavLink to="/hr">HR</NavLink> </Typography>*/}
    </>
  );
}
