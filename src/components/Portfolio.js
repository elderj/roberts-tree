import React from "react";
import "../styles/App.css";

import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Portfolio = () => (
  <div className="floating-content">
    <NavBar />
    <Header />
    <br />
    <br />
    <h4 className="quicksand-text">Pretty Pictures will go here soon</h4>
    <br />
    <br />
    <br />
    <Footer />
  </div>
);

export default Portfolio;