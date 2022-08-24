import React from "react";
import "./footer.css";
import Logo from "../img/villa.jpg";

function Footer() {
  return (
    <React.Fragment>
      
        <div className="wrap">
          <div className='item-logo'>
            <img src={Logo} alt="" className="img-logo"/>
          </div>
          <div className="wrap-pannel">
            <tr>
              <h4 className="label">CONTACT US</h4>
              <p><b>Tel : </b>+30 210 5454000</p>
              <p><b>Email : </b>support@gmail.com</p>
            </tr>
          </div>
          <div className="wrap-pannel">
            <tr>
              <h4 className="label">RESERVATIONS</h4>
              <p><b>Tel : </b>+30 210 9595000</p>
              <p><b>Email : </b>reservation-support@gmail.com</p>
            </tr>
          </div>
        </div>
       
      
    </React.Fragment>
  );
}

export default Footer;
      