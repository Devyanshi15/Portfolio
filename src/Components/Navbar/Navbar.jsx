import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { assets } from '../../assets/assets'

const Navbar = () => {

  const [menu,setMenu] = useState("home");
  const menuRef=useRef();

  const openMenu = ()=>{
    menuRef.current.style.right="0";
  }

  const closeMenu = ()=>{
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
    <img className='logo' src={assets.dev_logo}></img>
    <img onClick={openMenu} src={menu_open} className='nav-mob-open'></img>
        <ul ref={menuRef} className='nav-menu'>
        <img onClick={closeMenu} className='nav-mob-close' src={menu_close} classname='nav-mob-close'></img>
            <li><AnchorLink  className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offeset={50} href='#about'><p onClick={()=>setMenu("about")}>About me</p></AnchorLink>{menu==="about"?<img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offeset={50} href='#services'><p onClick={()=>setMenu("services")}>Skills</p></AnchorLink>{menu==="services"?<img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offeset={50} href='#work'><p onClick={()=>setMenu("portfolio")}>Portfolio</p></AnchorLink>{menu==="portfolio"?<img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offeset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt=''/>:<></>}</li>
        </ul>
        <div className='nav-connect'><AnchorLink className='anchor-link' offeset={50} href='#contact'>Contact Me</AnchorLink></div>
      
    </div>
  )
}

export default Navbar
