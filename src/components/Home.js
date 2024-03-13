import React from "react";
import "../styles/App.css";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
// import googleLogo from "../images/g.png";
// import nextDoorLogo from "../images/linkLogoImages/instagram-logo.png";

const Home = () => (
  <div className="floating-content">
    <NavBar />
    <Header />
    <br />
    <br />
    <h3 className="quicksand-text">Licensed and Insured</h3>
    <br />
    <h3 className="quicksand-text">Call today for a free quote!</h3>
    <br />
    <h4 className="quicksand-text">Office: 406-499-2211</h4>
    <h4 className="quicksand-text">Cell: 406-210-4033</h4>
    <br />

    <h3 className="quicksand-text">Read Our Reviews on:</h3>
    <ul>
      <li>
        <a href="https://roberts-stumpgrinding.business.site/">
          <span className="linkText">Google</span>
          {/* <img
            className="linkLogoImage"
            alt="Next Door Logo"
            src={googleLogo}
          /> */}
        </a>
      </li>
      <li>
        <a href="https://nextdoor.com/pages/roberts-stumpgrinding-isle-of-palms-sc/">
          <span className="linkText">NextDoor</span>
          {/* <img
            className="linkLogoImage"
            alt="Next Door Logo"
            src={nextDoorLogo}
          /> */}
        </a>
      </li>
    </ul>
    <br />
    <h4 className="quicksand-text">Owner: Doug & CJ Roberts</h4>
    <h4 className="quicksand-text">cjrdiver@gmail.com</h4>
    <br />
    <Footer />
  </div>
);

export default Home;
