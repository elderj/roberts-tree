import React from "react";
import "../styles/App.css";
import "../styles/font.css";

import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Contact = () => (
  <div className="floating-content">
    <Header />
    <NavBar />
    <p className="quicksand-text blurb">
      <h4>Get In Touch!</h4>
      <br />
      <p>Office: 406-499-2211</p>
      <p>Cell: 406-210-4033</p>
      <br />
      <br />
      <h5>ElderDesignConcepts@gmail.com</h5>
      <br />
      Follow me on Instagram{" "}
      <a href="https://www.instagram.com/elderdesignconcepts/">
        @ElderDesignConcepts
      </a>{" "}
      to check out some more designs and interests.
    </p>

    <br />
    <Footer />
  </div>
);

export default Contact;
