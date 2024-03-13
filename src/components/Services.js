import React from "react";
import "../styles/App.css";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Services = () => (
  <div className="floating-content">
    <NavBar />
    <Header />
    <div className="services-container">
      <h2 className="section-title">Our Services</h2>
      <p className="service-description">
        At Roberts Stumpgrinding & Tree Service, we offer a wide range of tree
        care services to residents and businesses in the Isle of Palms,
        Sullivan's Island, Mount Pleasant, and Charleston, SC areas. Our team of
        experienced arborists is committed to providing high-quality and
        professional tree services to ensure the health, safety, and beauty of
        your trees and property.
      </p>
      <div className="service">
        <h3 className="service-title">Tree Removal</h3>
        <p className="service-description">
          We specialize in safe and efficient tree removal services. Whether you
          have a dead, diseased, or hazardous tree that needs to be removed, our
          skilled arborists will assess the situation and carefully remove the
          tree without causing damage to your property.
        </p>
      </div>
      <div className="service">
        <h3 className="service-title">Tree Trimming and Pruning</h3>
        <p className="service-description">
          Proper tree trimming and pruning are essential for maintaining the
          health, shape, and appearance of your trees. Our team uses
          industry-leading techniques to trim and prune your trees to promote
          healthy growth, improve aesthetics, and reduce the risk of storm
          damage.
        </p>
      </div>
      <div className="service">
        <h3 className="service-title">Stump Grinding</h3>
        <p className="service-description">
          After a tree is removed, the stump left behind can be unsightly and
          hazardous. We offer professional stump grinding services to safely and
          effectively grind down tree stumps, allowing you to reclaim your
          outdoor space and prevent tripping hazards.
        </p>
      </div>
      <p className="call-to-action">
        Call <span className="ctaNumber">406-210-4033</span> today for a free
        quote or with any questions you may have!
      </p>
    </div>
    <Footer />
  </div>
);

export default Services;
