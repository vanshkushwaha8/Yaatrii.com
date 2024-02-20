import React, { useState } from 'react'
import './navbar.css'
import menubar from '../Assets/menu.png'
import {Link} from 'react-scroll'


const Navbar = () => {
    const [showMenu , setShowMenu]=useState(false);
  return (
    <div>
         <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="Homes" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="description" className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a href="tourpackage" className="nav-link">Tour Package</a>
        </li>
        <li className="nav-item">
          <a href="tourguide" className="nav-link">Tour Guide</a>
        </li>
        <li className="nav-item">
          <a href="loginsignup" className="nav-link">Login & Signup</a>
        </li>
        <li className="nav-item">
          <a href="whishlist" className="nav-link">Wishlist</a>
        </li>
       
      </ul>
      <div className="mobmenuies">
      <img src={menubar} alt="Menu" className='mobMenu'onClick={()=> setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex' : 'none'}}>
                <Link activeClass='active' to='Homes'   spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='description'  spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='tourpackage'   spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>Tour Package</Link>
                <Link activeClass='active' to='tourguide' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>Tour Guide</Link>
                <Link activeClass='active' to='loginsignup' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>Login & Signup</Link>
                <Link activeClass='active' to='whishlist' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>Wishlist</Link>
            </div>
            </div>
    </nav>
      
    </div>
  )
}

export default Navbar
