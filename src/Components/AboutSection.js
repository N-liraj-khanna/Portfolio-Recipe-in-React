import React from "react";
import home1 from "../img/home1.png";

// styled
import styled from "styled-components";

import {About, Image, Description, Hide} from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dream</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, sunt
          velit rerum corporis consequatur culpa reprehenderit beatae veritatis
          officia labore quia quae doloremque sit nam omnis odio similique
          ducimus distinctio.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="Home page" />
      </Image>
    </About>
  );
};
export default AboutSection;
