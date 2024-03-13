import React, { Fragment } from "react";
import "../styles/App.css";

import tree from "../images/tree.png";

const Header = () => (
  <Fragment>
    <div className="header">
      <img className="headerImageLogo" alt="Tree Logo" src={tree} />
      <h1 className="pacifico-text headerTitleText">
        Roberts Stumpgrinding & Tree Service
      </h1>
    </div>
  </Fragment>
);

export default Header;
