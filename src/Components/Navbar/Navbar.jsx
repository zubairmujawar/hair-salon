import React from "react";
// import closeBtn from "../../assets/close.png";
// import menuBtn from "../../assets/menu.png";

const Navbar = () => {
  // let navbar = document.getElementsByClassName("navbar")[0]; // Use [0] to access the first element returned by getElementsByClassName
  // let menuDiv = document.getElementById("menu-div"); // Use getElementById, not getElementsById
  // let menuBtnImg = document.getElementsByClassName("menuBtnImg")[0]; // Use [0] to access the first element returned by getElementsByClassName
  
  // navbar.style.left = "-50vw";
  
  // menuDiv.onclick = function () { // Use onclick, not onClick
  //   if (navbar.style.left === "-50vw") {
  //     navbar.style.left = "0";
  //     menuBtnImg.src = closeBtn; // Assuming closeBtn is a variable containing the image source
  //   } else {
  //     navbar.style.left = "-50vw"; // Correct the assignment
  //   }
  // };
  
  return (
    <>
      <nav className="navbar">
        {/* <div className="menu-div">
          <img src={menuBtn} className="menuBtnImg" alt="img" />
        </div> */}
        <h2>Logo</h2>
        <ul>
          <li>
            <a href="#home" className="Home-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="About-link">
              About
            </a>
          </li>
          <li>
            <a href="#sevices" className="Services-link">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="Contact-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
