import React from "react";
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <div className="about">
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dream</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, sunt
          velit rerum corporis consequatur culpa reprehenderit beatae veritatis
          officia labore quia quae doloremque sit nam omnis odio similique
          ducimus distinctio.
        </p>
        <button>Contact Us</button>
      </div>
      <div className="image">
        <img src={home1} alt="Home page" />
      </div>
    </div>
  );
};
export default AboutSection;
