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
  const instagramUrl = "https://instagram.com/hairaffairbykafil";
  const facebookUrl = "https://facebook.com";
  const whatsAppUrl = "https://whatsapp.com";
  // <button onclick="callNumber('+1234567890')">Call</button>

  function callNumber(phoneNumber) {
    window.location.href = "tel:" + phoneNumber;
  }
  function openWhatsApp(){
    window.location.href = 'whatsapp://send?phone=+91 8007629995'
  }
  function openFacebook(){
    window.location.href = 'facebook.com/hairaffairbykafil'
  }

  return (
    <div className="footer-div" id="contact">
      <h5 className="footer-h2">Let's meet</h5>
      <div className="footer-section">
        <div className="footer-left">
          <div className="phone-div">
            <a onclick={callNumber("+91 8007629995")}>
              <FaPhone style={{ fontSize: "26px" }} />
              <p>+91 8007629995</p>
            </a>
          </div>
          <div className="phone-div">
            <a href="mailto:hairafair@gmail.com">
              <MdEmail style={{ fontSize: "26px" }} />
              <p>hairafair@gmail.com</p>
            </a>
          </div>
          <div className="phone-div">
            <FaLocationDot style={{ fontSize: "30px" }} />
            <p>
              shop no.22, Ashwani Palace, near petrol pump, Clover Village,
              Wanwadi, Pune, Maharashtra 411040
            </p>
          </div>
          <div className="phone-div">
            <BsFillStopwatchFill style={{ fontSize: "26px" }} />
            <p>9 AM to 10 PM</p>
          </div>
          <div>
            <h5>Follow Us On</h5>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
              <RiInstagramFill className="icons" style={{ fontSize: "36px" }} />
            </a>
            <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
              <FaSquareXTwitter
                className="icons"
                style={{ fontSize: "36px" }}
              />
            </a>
            <a href={facebookUrl} target="_blank" onClick={openFacebook()} rel="noopener noreferrer">
              <FaFacebookSquare
                className="icons"
                style={{ fontSize: "36px" }}
              />
            </a>
            <a href={whatsAppUrl} target="_blank" onClick={openWhatsApp()} rel="noopener noreferrer">
              <IoLogoWhatsapp className="icons" style={{ fontSize: "36px" }} />
            </a>
          </div>
        </div>
        {/* <div className="footer-center">
          <h5>Legal</h5>
          <p>Terms and Conditions</p>
          <p>Pravicy and Policy</p>
        </div> */}
        <div className="footer-right-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1377.0322274466607!2d73.89791148261273!3d18.485617132455157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ebcf31a2d85d%3A0xed1f0a898be9b524!2sHair%20Affair%20By%20Kafil.S!5e0!3m2!1sen!2sin!4v1707494270997!5m2!1sen!2sin"
            width="700"
            height="300"
            allowfullscreen=""
            title="hairAfair"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="copyRight">
        <p>© 2024 Hair salon, All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
