import "./contact.css";
import emailjs from "emailjs-com";
import Maps from "../maps/Maps";
//import Footer from "../footer/Footer";
import React from "react";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ohg5q16",
        "template_6esekxe",
        e.target,
        "7IWXok9VQL7lf_Il2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const ShowH3 = (e) => {
    document.getElementById("showH3").style.display = "flex";
  };

  return (
    <React.Fragment>
      
    </React.Fragment>
  );
}
