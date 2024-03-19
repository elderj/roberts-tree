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
        At Roberts Stumpgrinding & Tree Service, we are a family-owned tree
        service company local to the Isle of Palms and Mount Pleasant area. We
        offer a wide range of tree care services, including palm and tree
        trimming, tree takedown, yard cleanout, and stump grinding at great
        prices. We take pride in making your trees and yard look beautiful,
        using an artful approach to trimming Oaks, Palms, or any other types of
        trees.
      </p>
      <div className="service">
        <h3 className="service-title">Tree Removal</h3>
        <p className="service-description">
          Our skilled arborists will assess the situation and carefully remove
          the tree without causing damage to your property. We do not use large
          machinery; instead, we utilize climbers, ensuring a yard-friendly
          approach.
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
          outdoor space and prevent tripping hazards. Our stump grinder is on
          tracks and will fit through a 33-inch gate.
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
