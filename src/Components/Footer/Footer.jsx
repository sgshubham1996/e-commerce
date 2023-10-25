import React from 'react'
import './Footer.css'
import footer_logo from "../Images/logo_big.png"
import instagram_icon from '../Images/instagram_icon.png'
import pintester_icon from '../Images/pintester_icon.png'
import whatsapp_icon from '../Images/whatsapp_icon.png'

function Footer() {
  return (
    <div className='footer' >
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOOPER</p>
        </div>
        <ul className='footer-links' >
            <li>Compnay</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pintester_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer