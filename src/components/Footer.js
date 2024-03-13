import React, { Fragment } from "react";
import "../styles/App.css";

// import instagramLogo from "../images/linkLogoImages/instagram-logo.png";
// import twitterLogo from "../images/linkLogoImages/twit.png";

const currentYear = new Date().getFullYear();

const Footer = () => (
  <Fragment>
    <br />
    <h6 className="quicksand-text">
      ©{currentYear.toString()} Roberts Stumpgrinding & Tree Service
      <br />
      Isle of Palms SC, 29451
    </h6>
  </Fragment>
);

export default Footer;
