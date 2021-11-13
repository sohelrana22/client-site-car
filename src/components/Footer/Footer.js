import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
         <div className="row">
         <div className="detail col-12 col-lg-3 mx-auto">
                
                <h2 className="mx-5">Car House</h2>
                <p className="mx-5">Inaugurated in 1993 “Car House Limited” has been a strong seller of both brand new and reconditioned vehicles. With the grace of Almighty Allah Car House can boast a strong sales and after sales service record in the heart of customers.</p>
            </div>
            <div className="detail col-12 col-lg-3 mx-auto">
                <h3 className="mx-5">Office</h3>
                <p className="mx-5">ITPL Road</p>
                <p className="mx-5">Mirpur, Dhaka</p>
                <p className="mx-5">Mirpur, Dhaka, Bangladesh</p>
                <p  className="email mx-5">sohel252646@gmail.com</p>
                <h4 className="mx-5">01796737590</h4>
            </div>
            <div className="detail col-12 col-lg-3 mx-auto">
                <h3 className="mx-5">Links</h3>
                <ul>
                    <li><Nav.Link as={NavLink} className="text-footer" to="/home">Home</Nav.Link></li>
                    <li><Nav.Link as={NavLink} className="text-footer" to="/caritem">Car-Item</Nav.Link></li>
                    <li><Nav.Link as={NavLink} className="text-footer" to="/myorder">My Order</Nav.Link></li>
                    <li><Nav.Link as={NavLink} className="text-footer" to="/about">About</Nav.Link></li>
                    <li><Nav.Link as={NavLink} className="text-footer" to="/contact">Contact us</Nav.Link></li>
                </ul>

            </div>
         </div>
            <hr />
            <p className="copyright">Copyright @ 2021 - All Rights Reserved</p>
        </div>
    );
};

export default Footer;