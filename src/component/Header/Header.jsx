import React from "react";
import './Header.scss'
import Ex2 from '../Ex2/Ex2'
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
const Header =() => {
    return(
        <>
        <header className="header-bigest">
            <div className="header-big">
                <div className="header-logo">
                    <img src="https://hit-reactjs-2024.vercel.app/assets/logo-B5ukk7LZ.png" alt="" />
                </div>
                <div className="header-item">
                    <a href="">Home</a>
                    <a href="" className="special">Users</a>
                    <a href="">Blogs</a>
                    <a href="">Service</a>
                    <a href="">Contact</a>
                </div>
                
                <label htmlFor="header-mobile-input" className="header-bars"><FaBars /></label>
                <input type="checkbox" name="" className="header-input" id="header-mobile-input" />
                <label htmlFor="header-mobile-input" className="header-overlay"></label>
                <div className="header-nav-mobile">
                 <label htmlFor="header-mobile-input" className="header-close"><FaTimes /></label>   
                 <div className="header-item-mobile">
                    <a href="" >Home</a>
                    <a href="" className="special">Users</a>
                    <a href="">Blogs</a>
                    <a href="">Service</a>
                    <a href="">Contact</a>
                 </div>
                </div>
                <div className="toggle">
                <Ex2/>
                </div>
            </div>

        </header>
        


        </>


    );
};

export default Header;