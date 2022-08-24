import "./sidecont.css";
import React, { Component, useState } from 'react';
import Popup from 'reactjs-popup';
import Contact from "../short-images/comment.png";
import Cancel from "../short-images/cancel.png";
import Gps from "../short-images/google-maps.png";
import Mail from "../short-images/mail.png";
import Messenger from "../short-images/messenger.png";
import PhoneCall from "../short-images/phone-call.png";



function SideCont() {
  return (
    <React.Fragment>
      
        <Popup
              trigger={open => (
                <button className="messege-pop"><img src={Contact} alt="" className="messege"/>
                    {open ?  
                    
                    <div className="messege-pop-open">
                      <button className="pop-up-btns"><img src={Gps} alt="" className="messege" /></button>
                      <button className="pop-up-btns"><img src={Mail} alt="" className="messege" /></button>
                      <button className="pop-up-btns"><img src={Messenger} alt="" className="messege" /></button>
                      <button className="pop-up-btns"><img src={PhoneCall} alt="" className="messege" /></button>
                    </div>

                    : ''} 
                </button>

              )}
              closeOnDocumentClick
            >
                
              
            </Popup>      

    </React.Fragment>
  );
}

export default SideCont;