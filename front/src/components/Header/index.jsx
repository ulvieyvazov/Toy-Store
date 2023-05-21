import React from 'react'
import "./index.scss"
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-parent'>
                <div className='header-top'>
                    <div className='header-child'>
                        <div className='call' style={{ display: 'flex', alignItems: 'center', gap:18}}>
                            <p>Call Us: +1 213 974-5898</p>
                            <p>Email: toystore@template.com</p>
                        </div>
                        <div className="icons">
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

                <div className='header-bottom'>
                    <div className='' style={{display: 'flex', alignItems: 'center', gap:40}}>
                        <h3>ToyStore</h3>
                        <ul style={{display: 'flex', gap:15}}>
                            <li><NavLink to={"/"}>Home</NavLink></li>
                            <li>Catalog</li>
                            <li>Delivery</li>
                            <li>About</li>
                            <li>Contacts</li>
                            <li><NavLink to={"/add"}>Add Toys</NavLink></li>
                        </ul>
                    </div>
                    <div style={{display: 'flex', gap:10}}>
                        <p>Cart</p>
                        <FaShoppingCart />
                        <div style={{width:20, height:20, borderRadius:'50%', backgroundColor: 'green'}}><p style={{marginLeft: 5, color: 'whitesmoke'}}>0</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header