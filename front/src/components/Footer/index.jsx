import React from 'react'
import "./index.scss"
import ReactRouter, { NavLink } from "react-router-dom"

import { FaRocketchat, FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
// import { FaShoppingCart } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer-parent">
                <div className='footer-top'>
                    <div className='' style={{ display: 'flex', alignItems: 'center', gap: 40, justifyContent: 'space-between' }}>
                        <h3>ToyStore</h3>
                        <ul style={{ display: 'flex', gap: 15 }}>
                            <li>Catalog</li>
                            <li>Delivery</li>
                            <li>About</li>
                            <li>Contacts</li>
                            <li><NavLink>Add Toys</NavLink></li>
                        </ul>

                        <div className="icons" style={{display: 'flex', gap:10}}>
                            <div>
                                <FaTwitter />
                            </div>
                            <div>
                                <FaFacebookF />
                            </div>
                            <div>
                                <FaYoutube />
                            </div>
                            <div>
                                <FaInstagram />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <p>Created with love by <a href="" style={{borderBottom: '1px solid white', color: 'white'}}>Elastic Themes</a></p>
                    <ul>
                        <li>Powered by Webflow</li>
                        <li>Style Guide</li>
                        <li>Licensing</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
