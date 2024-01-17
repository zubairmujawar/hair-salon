import React from 'react'
const Navbar = () => {

  // let navbar = document.getElementsByClassName(".navbar")
  // let navmunu = document.getElementsById("menu")
  // let menuBtn = document.getElementsByClassName("menuBtn")

  // const handleMenu = ()=> {
  //   if(navbar.style.right==="-250px"){
  //     navbar.style.right=="0"
  //   }else{
  //     navbar.style.right==="-250px"
  //   }
  // }
  return (
    <>
    <nav className='navbar'>
      <h2>Logo</h2>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
    {/* <div className="menuBtn"> 
      <img src="../../../public/images/banner.jpg" alt="img" id='menu'  />
    </div> */}
    </>
  )
}

export default Navbar
