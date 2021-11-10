import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="detail col-3">
                
                <h2>Car House</h2>
                <p>Inaugurated in 1993 “Car House Limited” has been a strong seller of both brand new and reconditioned vehicles. With the grace of Almighty Allah Car House can boast a strong sales and after sales service record in the heart of customers.</p>
            </div>
            <div className="detail col-3">
                <h3>Office</h3>
                <p>ITPL Road</p>
                <p>Mirpur, Dhaka</p>
                <p>Mirpur, Dhaka, Bangladesh</p>
                <p className="email">sohel252646@gmail.com</p>
                <h4>01796737590</h4>
            </div>
            <div className="detail col-3">
                <h3>Links</h3>
                <ul>
                    <li><Nav.Link as={NavLink} className="text-footer" to="/home">Home</Nav.Link></li>
                    <li><Nav.Link as={NavLink} className="text-footer" to="/caritem">Car-Item</Nav.Link></li>
                    <li><Nav.Link as={NavLink} className="text-footer" to="/myorder">My Order</Nav.Link></li>
                    <li><Nav.Link as={NavLink} className="text-footer" to="/about">About</Nav.Link></li>
                    <li><Nav.Link as={NavLink} className="text-footer" to="/contact">Contact us</Nav.Link></li>
                </ul>

            </div>
            <hr />
            <p className="copyright">Copyright @ 2021 - All Rights Reserved</p>
        </div>
    );
};

export default Footer;