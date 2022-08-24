import React from "react";
import "./about.css";
import suite1 from "../img/suite1.jpg";
import suite2 from "../img/suite2.jpg";
import suite3 from "../img/suite3.jpg";

function About() {
  
  return (
    
    <React.Fragment>

      <div className="about">
        <div className="text-cont">
          <tr>
            <h2 className="text-h2">Luxury Boutique Hotel in Greece</h2>
            <p className="text">A boutique hotel and SLH member in the most exclusive area of the Athens Riviera, Vouliagmeni, The Margi hotel is a heaven away from home. In an ideal location, it is just a few steps away from the most elegant sandy beaches but just close enough to Athens Historical sites.</p>
            <p className="text">With its superb cuisine and organic food from its farm, friendly and attentive staff as well as exquisite design, this hotel offers a memorable experience for travelers all year round.</p>
            <p className="text">DESIGN</p>
            <p className="text">Over the years, owner Maria Stavridis’ and her son and Architect Yiangos Agiostratitis have created the warm and chic atmosphere of the hotel by combining artwork from all corners of the world with soft traces such as candlelit tables and plush furnishings.</p>
          </tr>
        </div>

        <div className="offer-cont">
          <tr>
            <h2 className="text-offers">VIEW OUR SPECIAL OFFERS</h2>
          </tr>
          <div className="offers-container">

              <div className="panel">
                <div className="panel-cont">
                  <img src={suite1} alt="" className="suite-image" />
                  <h4>EXCLUSIVE DISCOUNT TO SUITE!</h4>
                </div>
              </div>

              <div className="panel">
                <div className="panel-cont">
                  <img src={suite2} alt="" className="suite-image" />
                  <h4>EXCLUSIVE DISCOUNT TO SUITE!</h4>
                </div>
              </div>

              <div className="panel">
                <div className="panel-cont">
                  <img src={suite3} alt="" className="suite-image" />
                  <h4>EXCLUSIVE DISCOUNT TO SUITE!</h4>
                </div>
              </div>
              
          </div>
        </div>
      </div>
    
    </React.Fragment>
  );
}

export default About;