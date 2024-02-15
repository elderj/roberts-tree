import React from "react";
import "../styles/App.css";
import "../styles/font.css";

// import { Link } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Home = () => (
  <div className="floating-content">
    <Header />
    <NavBar />
    <h3 className="quicksand-text blurb">
      <br />
      Roberts Tree services etc.
      <br />
      <br />
    </h3>

    <p className="quicksand-text blurb">
      {/* TODO: Figure out what to say here */}
      Servicing Charleston since XXXX
      <br />
      <br />
    </p>
    <br />
    <br />
    <Footer />
    <br />
    <br />
  </div>
);

export default Home;
