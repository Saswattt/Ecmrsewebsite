import React from 'react'
import './Footer.css'
import footer_logo from '../Asserts/logo_big.png'
import instagram_icon from '../Asserts/instagram_icon.png'
import pintester_icon from '../Asserts/pintester_icon.png'
import whatsapp_icon from '../Asserts/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>KumarBajar</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Officies</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
    <div className="footer-icons-container">
        <a href="https://www.instagram.com/saswatlifts?igsh=N2hhanhseGhjZ3l5" target="_blank" rel="noopener noreferrer">
            <img src={instagram_icon} alt="Instagram" />
        </a>
    </div>
    <div className="footer-icons-container">
        <a href="https://pin.it/2GYEkLjhW" target="_blank" rel="noopener noreferrer">
            <img src={pintester_icon} alt="Pinterest" />
        </a>
    </div>
    <div className="footer-icons-container">
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp_icon} alt="WhatsApp" />
        </a>
    </div>
</div>

        <div className="footer-copyright">
            <hr />
            <p>
                © 2024 Kumarbajar. All Rights Reserved | Design by Saswat Kumar Sahoo
            </p>
        </div>
    </div>
  )
}

export default Footer