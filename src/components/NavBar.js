import React, { Fragment } from "react";
import "../styles/App.css";

import { Link } from "react-router-dom";

const NavBar = () => (
  <Fragment>
    <p>
      <Link to="/">Home</Link>
      {" | "}
      <Link to="/services">Our Services</Link>
      {" | "}
      <Link to="/pastprojects">Past Projects</Link>
    </p>
  </Fragment>
);

export default NavBar;
