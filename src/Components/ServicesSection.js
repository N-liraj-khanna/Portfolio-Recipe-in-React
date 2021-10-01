import React from "react";

// Import icons
import clock from "../img/clock.svg";
import money from "../img/money.svg";
import diaphragm from "../img/diaphragm.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>quality</span> Service.{" "}
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="A CLock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="Money" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="A Diaphragm" />
              <h3>Pro Grade Gear</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="Teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="Services page" />
      </div>
    </div>
  );
};

export default ServicesSection;
