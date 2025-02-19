import React, { useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/frontend_assets/assets'
import { use } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu,setMenu] = useState("home");
  return (
    <div className='navbar'>
        <img src={assets.logo} alt=""  className='logo'/>
        <ul className="navbar-menu">
            <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active":""}>Home</Link>
            <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active":""}>Menu</a>
            <a href='#app-download' onClick={() => setMenu("mobileApps")} className={menu === "mobileApps" ? "active":""}>Mobile Apps</a>
            <a href='#footer' onClick={() => setMenu("contactUs")} className={menu === "contactUs" ? "active":"" }>Contact Us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt="" />
                <div className="dot"></div>

            </div>
            <button>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar