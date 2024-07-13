import React from 'react'
import './Header.css';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { LuPhoneCall } from "react-icons/lu";
//img
import logo from '../img/logo-green-white-2-1.png'

function Header() {
  return (
    <div className='Maindiv'>  

 <div className='navbar1'>

     <div className='icn1'>
     <IoLocationOutline />
     </div>
    <div className='nav1'>
    <a>  Fremont, CA 94538</a>
    </div>
    <div className='nav1'>
    <a>|</a>
    </div>
    <div className='nav1'>
    <a><IoMailOpenOutline  /> info@urpantech.com</a>
    </div>
    <div className='nav2'>
        <a> <FaRegClock className='icn' /> Office Hours: 8:00 AM - 7:45 PM</a>
        </div>
        <div className='nav2-icn'>
        <a><FaFacebookF /></a>
        </div>
        <div className='nav2-icn'>
        <a><FaInstagram /></a>
        </div>
        <div className='nav2-icn'>
        <a><GrLinkedinOption /></a>
        </div>

 </div>

{/* navbar 2 */}
 <div className='header'>
 

    <nav className='nav'>

    <div className='logo-img'>
    <img src={logo}/>
  </div>
    <ul>
        <li className='nav-link'>
            <a  href='#home' className='menu'>HOME</a>
        </li>

        <li className='nav-link'>
            <a  href='#about' className='menu'>ABOUT</a>
        </li>

        <li className='nav-link'>
            <a href='#service' className='menu'>SERVICES</a>
        </li>

        <li className='nav-link'>
            <a href='#career' className='menu'>CAREER</a>
        </li>

        <li className='nav-link'>
            <a href='#contact' className='menu'>CONTACT</a>
        </li>
    </ul>
   
   <div className='callall'>
   <div className='call-icon'>
   <LuPhoneCall />
   </div>



   <div className='call-txt'>
       Call us today ! <br></br> <b> +1 408-744-6750</b>
   </div>
   </div>
     
    </nav>
 </div>
     

    </div> //maindiv
  )
}

export default Header