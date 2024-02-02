import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillStopwatchFill } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

// import contactBg from "../../assets/port-gallery-img-2.jpg"
const Footer = () => {
  const twitterUrl = "https://twitter.com";
  const instagramUrl = "https://instagram.com";
  const facebookUrl = "https://facebook.com";
  const whatsAppUrl = "https://whatsapp.com";
  return (
    <div className="footer-div" id="contact">
      <div className="footer-section">
        <div className="footer-left">
          <h5>Contact</h5>
          <div className="phone-div">
            <FaPhone style={{ fontSize: "26px" }} />
            <p>987654321</p>
          </div>
          <div className="phone-div">
            <MdEmail style={{ fontSize: "26px" }} />
            <p>example@gmail.com</p>
          </div>
          <div className="phone-div">
            <FaLocationDot style={{ fontSize: "26px" }} />
            <p>56 Park Avenue, New York, NY 10022</p>
          </div>
          <div className="phone-div">
            <BsFillStopwatchFill style={{ fontSize: "26px" }} />
            <p>9 AM to 10 PM</p>
          </div>
        </div>
        <div className="footer-center">
          <h5>Legal</h5>
          <p>Terms and Conditions</p>
          <p>Pravicy and Policy</p>
        </div>
        <div className="footer-right">
          <div>
            <h5>Follow Us On</h5>
          </div>
          <div>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
              <RiInstagramFill className="icons" style={{ fontSize: "36px" }} />
            </a>
            <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
              <FaSquareXTwitter
                className="icons"
                style={{ fontSize: "36px" }}
              />
            </a>
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare
                className="icons"
                style={{ fontSize: "36px" }}
              />
            </a>
            <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer">
              <IoLogoWhatsapp className="icons" style={{ fontSize: "36px" }} />
            </a>
          </div>
        </div>
      </div>
      <div className="copyRight">
        <p>© 2024 Hair salon, All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
