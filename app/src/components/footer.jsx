// Footer.js

import React from 'react';
import '../footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, quos?</p>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact Info</h4>
                    <p>123 Street, City, Country</p>
                    <p>Email: example@example.com</p>
                    <p>Phone: +123-456-7890</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2023 Your E-commerce Site. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
