import React from "react";
import PhotoSlider from "./PhotoSlider";
import NavBar from "./NavBar";
import Header from "./Header";
import Footer from "./Footer";

const Portfolio = () => {
  // Your photoUrls array
  const photoUrls = [
    "https://i.imgur.com/EVCLlhP.jpg",
    "https://i.imgur.com/GJZq9tS.jpg",
    "https://i.imgur.com/vzkbS5q.jpg",
    "https://i.imgur.com/5wxPKgW.jpg",
    "https://i.imgur.com/K3JPPtC.jpg",
    "https://i.imgur.com/rTd0Ajs.jpg",
    "https://i.imgur.com/K8PbvPZ.jpg",
  ];

  return (
    <div className="floating-content">
      <NavBar />
      <Header />
      <br />
      <PhotoSlider photoUrls={photoUrls} />
      <Footer />
    </div>
  );
};

export default Portfolio;
