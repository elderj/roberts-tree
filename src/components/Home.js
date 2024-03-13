import React from "react";
import "../styles/App.css";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

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
    <br />
    <h4 className="quicksand-text">Owner: Doug & CJ Roberts</h4>
    <h4 className="quicksand-text">cjrdiver@gmail.com</h4>
    <br />
    <Footer />
  </div>
);

export default Home;
