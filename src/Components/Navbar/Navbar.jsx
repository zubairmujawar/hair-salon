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
        <li><a href='#home' className='Home-link'>Home</a></li>
        <li><a href='#about' className='About-link'>About</a></li>
        <li><a href='#sevices' className='Services-link'>Services</a></li>
        <li><a href='#contact' className='Contact-link'>Contact</a></li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar;
