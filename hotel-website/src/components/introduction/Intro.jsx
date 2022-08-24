import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./intro.css";
import VillaImage1 from "../img/image1.jpg";
import VillaImage2 from "../img/image2.jpg";
import VillaImage3 from "../img/image3.jpg";

const Intro = () => {
  return (
    <React.Fragment>
      
        <Carousel>

            <div className="carousel-wrap">
              <img src={VillaImage1} alt="" className="carousel-image" />
            </div>

            <div className="carousel-wrap">
              <img src={VillaImage2} alt="" className="carousel-image" />
            </div>

            <div className="carousel-wrap">
              <img src={VillaImage3} alt="" className="carousel-image" />
            </div>

        </Carousel>
         
    </React.Fragment>
  );
};

export default Intro;
